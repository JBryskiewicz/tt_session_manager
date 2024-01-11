import { Box, Button, Paper } from "@mui/material";
import { Dispatch, SetStateAction } from "react";
import { Note, Npc } from "../../../types/types";
import { SESSION_FIELDS_CATEGORIES } from "../../../utils/constants";
import { deleteNote, deleteNpc } from "../../../utils/API_communication";

type Props = {
  data: Note | Npc;
  setIsEditable: Dispatch<SetStateAction<boolean[]>>;
  category: string;
};

export const DetailsNotesSharedInformation = ({
  data,
  setIsEditable,
  category,
}: Props) => {
  const { note } = SESSION_FIELDS_CATEGORIES;

  const handleEditButton = (): void => {
    setIsEditable((prevState) => [true, ...prevState.slice(1)]);
  };
  const handleDeleteButton = (category: string, id: number): void => {
    category === note ? deleteNote(id) : deleteNpc(id);
  };

  return (
    <Box className="note-box">
      <Paper elevation={4} className="note-box-text">
        <div>{data.information}</div>
        <div style={{ marginTop: ".5rem" }}>
          <Button
            variant="contained"
            onClick={handleEditButton}
            sx={{ marginRight: "20px" }}
          >
            Edit
          </Button>
          <Button
            variant="contained"
            onClick={() => handleDeleteButton(category, data.id)}
            sx={{ marginRight: "20px" }}
          >
            Delete
          </Button>
        </div>
      </Paper>
    </Box>
  );
};
