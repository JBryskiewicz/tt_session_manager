import { Box, Paper } from "@mui/material";
import { Dispatch, SetStateAction } from "react";
import { Note, Npc } from "../../../types/types";
import { DeleteButton } from "../../buttons/DeleteButton";
import { useParams } from "react-router-dom";
import { EditStateButton } from "../../buttons/EditStateButton";
import {
  EDIT_STATE_BUTTON_LABELS,
  SESSION_ACTION_CATEGORIES,
} from "../../../utils/constants";
import { fetchSession } from "../../../redux/sessionSlice";
import { useAppDispatch } from "../../../redux/hooks";
import { handleNoteDelete } from "../../../utils/supportFunctions";

type Props = {
  data: Note | Npc;
  setIsEditable: Dispatch<SetStateAction<boolean[]>>;
  category: string;
};

type RouteParams = {
  id: string;
};

export const DetailsNotesSharedInformation = ({
  data,
  setIsEditable,
  category,
}: Props) => {
  const { id } = useParams<RouteParams>();
  const dispatch = useAppDispatch();
  const { edit } = EDIT_STATE_BUTTON_LABELS;
  const { remove } = SESSION_ACTION_CATEGORIES;

  const handleEditButton = (): void => {
    setIsEditable((prevState) => [true, ...prevState.slice(1)]);
  };

  const noteID = data.id;
  const sessionID = parseInt(id as string);

  const handleDeleteButton = async (): Promise<void> => {
    await handleNoteDelete(noteID, sessionID, category);
    dispatch(fetchSession({ id }));
  };

  return (
    <Box className="note-box">
      <Paper elevation={4} className="note-box-text">
        <div>{data.information}</div>
        <div style={{ marginTop: ".5rem" }}>
          <EditStateButton onClick={handleEditButton} label={edit} />
          <DeleteButton onClick={handleDeleteButton} label={remove} />
        </div>
      </Paper>
    </Box>
  );
};
