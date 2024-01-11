import { Box, Paper } from "@mui/material";
import { Dispatch, SetStateAction } from "react";
import { Note, Npc } from "../../../types/types";
import { DeleteButton } from "../../buttons/DeleteButton";
import { useParams } from "react-router-dom";
import { EditButton } from "../../buttons/EditButton";

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
          <EditButton onClick={handleEditButton} />
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
