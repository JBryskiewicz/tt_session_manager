import { Box, Button, Paper } from "@mui/material";
import { Dispatch, SetStateAction } from "react";
import { Note, Npc } from "../../../types/types";
import { DeleteButton } from "../../buttons/DeleteButton";
import { useParams } from "react-router-dom";

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

  const handleEditButton = (): void => {
    setIsEditable((prevState) => [true, ...prevState.slice(1)]);
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
          <DeleteButton
            category={category}
            toDelete={data.id}
            sessionID={parseInt(id as string)}
          />
        </div>
      </Paper>
    </Box>
  );
};
