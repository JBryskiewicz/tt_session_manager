import { Box, Paper } from "@mui/material";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  checkCategoryToSetEditable,
  checkCategoryToUpdateNotes,
} from "../../../utils/supportFunctions";
import { Note, Npc } from "../../../types/types";
import { fetchSession } from "../../../redux/sessionSlice";
import { useAppDispatch } from "../../../redux/hooks";
import { TextInputField } from "../../TextInputField";
import { EditStateButton } from "../../buttons/EditStateButton";
import {
  CHAR_INPUT_LIMIT,
  EDIT_STATE_BUTTON_LABELS,
} from "../../../utils/constants";
import { SaveButton } from "../../buttons/SaveButton";

type Props = {
  data: Note | Npc;
  setIsEditable: Dispatch<SetStateAction<boolean[]>>;
  category: string;
};

type RouteParams = {
  id: string;
};

export const DetailsNotesSharedInfoEdit = ({
  data,
  setIsEditable,
  category,
}: Props) => {
  const { id } = useParams<RouteParams>();
  const [nameValue, setNameValue] = useState<string>(data.name);
  const [nameChars, setNameChars] = useState<number>(nameValue.length);
  const [infoValue, setInfoValue] = useState<string>(data.information);
  const [infoChars, setInfoChars] = useState<number>(infoValue.length);
  const dispatch = useAppDispatch();
  const { save, cancel } = EDIT_STATE_BUTTON_LABELS;

  const nameLimit = CHAR_INPUT_LIMIT["title"];
  const infoLimit = CHAR_INPUT_LIMIT[category];

  useEffect(() => {
    setNameChars(nameValue.length);
    if (nameValue.length >= nameLimit) {
      setNameValue(nameValue.substring(0, nameLimit));
    }

    setInfoChars(infoValue.length);
    if (infoValue.length >= infoLimit) {
      setInfoValue(infoValue.substring(0, infoLimit));
    }
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
