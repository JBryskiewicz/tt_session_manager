import { Box, Paper } from "@mui/material";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { checkCategoryToUpdateNotes } from "../../../utils/supportFunctions/API_requestHandlers";
import { Note, Npc } from "../../../types/types";
import { fetchSession } from "../../../redux/sessionSlice";
import { useAppDispatch } from "../../../redux/hooks";
import { TextInputField } from "../../TextInputField";
import { EditStateButton } from "../../buttons/EditStateButton";
import { CHAR_LIMIT_LIB, BUTTON_LABELS_LIB } from "../../../utils/constants";
import { SaveButton } from "../../buttons/SaveButton";
import {
  checkCategoryToSetEditable,
  setCharCounter,
} from "../../../utils/supportFunctions/formHandlers";
import { useSelector } from "react-redux";
import { RootState } from "../../../redux/store";

const { save, cancel } = BUTTON_LABELS_LIB;

type Props = {
  setIsEditable: Dispatch<SetStateAction<boolean[]>>;
  category: string;
};

type RouteParams = {
  id: string;
};

export const DetailsNotesSharedInfoEdit = ({
  setIsEditable,
  category,
}: Props) => {
  const { id } = useParams<RouteParams>();
  const dispatch = useAppDispatch();
  const { selected, currentDataList } = useSelector(
    (state: RootState) => state.manager
  );
  const data: Note | Npc = currentDataList.find(
    (data) => data.id === selected
  ) as Note | Npc;

  const [nameValue, setNameValue] = useState<string>(data.name);
  const [nameChars, setNameChars] = useState<number>(nameValue.length);
  const [infoValue, setInfoValue] = useState<string>(data.information);
  const [infoChars, setInfoChars] = useState<number>(infoValue.length);

  const nameLimit = CHAR_LIMIT_LIB["npcName"];
  const infoLimit = CHAR_LIMIT_LIB[category];

  useEffect(() => {
    setCharCounter(nameValue, setNameValue, setNameChars, nameLimit);
    setCharCounter(infoValue, setInfoValue, setInfoChars, infoLimit);
  }, [nameValue, infoValue, nameLimit, infoLimit]);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    await checkCategoryToUpdateNotes(category, data, infoValue, nameValue);
    dispatch(fetchSession({ id }));
    checkCategoryToSetEditable(category, setIsEditable, false);
  };

  const handleCancelButton = () => {
    checkCategoryToSetEditable(category, setIsEditable, false);
  };

  return (
    <Paper elevation={4} className="note-box">
      <form onSubmit={handleSubmit}>
        <Box sx={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
          <Box className="note-box-btn-box">
            <SaveButton label={save} />
            <EditStateButton onClick={handleCancelButton} label={cancel} />
          </Box>
          <TextInputField
            required={true}
            label="name"
            fieldValue={nameValue}
            onChangeFunction={setNameValue}
            limit={nameLimit}
            chars={nameChars}
          />
          <TextInputField
            required={false}
            label="information"
            fieldValue={infoValue}
            onChangeFunction={setInfoValue}
            textarea={true}
            limit={infoLimit}
            chars={infoChars}
          />
        </Box>
      </form>
    </Paper>
  );
};
