import { Box, Button, Paper } from "@mui/material";
import { Dispatch, SetStateAction } from "react";

type Props = {
  display: number;
  setDisplay: Dispatch<SetStateAction<number>>;
};

export const DetailsNotesButtonGroup = ({ display, setDisplay }: Props) => {
  return (
    <Box className="session-body-actions">
      <Paper className="actions-label">
        <span>Display:</span>
      </Paper>
      <Button
        disabled
        variant="contained"
        className={`display-btn ${display === 0 ? "selected" : ""}`}
      >
        None
      </Button>
      <Button
        variant="contained"
        className={`display-btn ${display === 1 ? "selected" : ""}`}
        onClick={() => setDisplay(1)}
      >
        Notes
      </Button>
      <Button
        variant="contained"
        className={`display-btn ${display === 2 ? "selected" : ""}`}
        onClick={() => setDisplay(2)}
      >
        NPCs
      </Button>
    </Box>
  );
};
