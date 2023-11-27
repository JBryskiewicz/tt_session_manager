import { Box, Button, Paper } from "@mui/material";
import { Dispatch, SetStateAction } from "react";

type Props = {
  note: string;
  setIsEditable: Dispatch<SetStateAction<boolean[]>>;
};

export const DetailsNotesSharedInformation = ({
  note,
  setIsEditable,
}: Props) => {
  const handleButton = () => {
    setIsEditable((prevState) => [true, ...prevState.slice(1)]);
  };

  return (
    <Box className="note-box">
      <Paper elevation={4} className="note-box-text">
        <div>{note}</div>
        <div style={{ marginTop: ".5rem" }}>
          <Button variant="contained" onClick={handleButton}>
            Edit
          </Button>
        </div>
      </Paper>
    </Box>
  );
};
