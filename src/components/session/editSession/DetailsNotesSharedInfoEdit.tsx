import { Box, Paper } from "@mui/material";
import { Dispatch, SetStateAction, useState } from "react";
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
import { EDIT_STATE_BUTTON_LABELS } from "../../../utils/constants";
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
  const [infoValue, setInfoValue] = useState<string>(data.information);
  const dispatch = useAppDispatch();
  const { save, cancel } = EDIT_STATE_BUTTON_LABELS;

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
    <Box className="note-box">
      <Paper elevation={4} className="note-box-text">
        <form onSubmit={handleSubmit}>
          <Box sx={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            <Box sx={{ display: "flex", columnGap: "1rem" }}>
              <SaveButton label={save} />
              <EditStateButton onClick={handleCancelButton} label={cancel} />
            </Box>
            <TextInputField
              required={true}
              label="name"
              fieldValue={nameValue}
              onChangeFunction={setNameValue}
            />
            <TextInputField
              required={false}
              label="information"
              fieldValue={infoValue}
              onChangeFunction={setInfoValue}
              textarea={true}
            />
          </Box>
        </form>
      </Paper>
    </Box>
  );
};
