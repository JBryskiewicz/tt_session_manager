import { Box, Paper } from "@mui/material";
import { Dispatch, SetStateAction } from "react";
import { Note, Npc } from "../../../types/types";
import { DeleteButton } from "../../buttons/DeleteButton";
import { useParams } from "react-router-dom";
import { EditStateButton } from "../../buttons/EditStateButton";
import { EDIT_STATE_BUTTON_LABELS } from "../../../utils/constants";

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
  const { edit } = EDIT_STATE_BUTTON_LABELS;

  const handleEditButton = (): void => {
    setIsEditable((prevState) => [true, ...prevState.slice(1)]);
  };

  return (
    <Box className="note-box">
      <Paper elevation={4} className="note-box-text">
        <div>{data.information}</div>
        <div style={{ marginTop: ".5rem" }}>
          <EditStateButton onClick={handleEditButton} label={edit} />
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
