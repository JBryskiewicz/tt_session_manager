import { Box, Button } from "@mui/material";
import { SESSION_FIELDS_CATEGORIES } from "../../utils/constants";
import {
  deleteNote,
  deleteNpc,
  deleteSession,
} from "../../utils/API_communication";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../redux/hooks";
import { fetchSession } from "../../redux/sessionSlice";

type Props = {
  category: string;
  toDelete: number;
  sessionID?: number;
};

export const DeleteButton = ({ category, toDelete, sessionID }: Props) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { session, note } = SESSION_FIELDS_CATEGORIES;

  const handleSessionDelete = async (toDelete: number): Promise<void> => {
    await deleteSession(toDelete);
    navigate("/");
  };

  const handleNoteDelete = async (
    noteID: number,
    sessionID: number,
    category: string
  ): Promise<void> => {
    category === note
      ? await deleteNote(noteID, sessionID)
      : await deleteNpc(noteID, sessionID);

    const id = sessionID.toString();
    dispatch(fetchSession({ id }));
  };

  const buttonHandler =
    category === session
      ? () => handleSessionDelete(toDelete)
      : () => handleNoteDelete(toDelete, sessionID as number, category);

  return (
    <Box className="dashboard-actions">
      <Button
        variant="contained"
        className="actions-button"
        onClick={buttonHandler}
      >
        Delete
      </Button>
    </Box>
  );
};
