import { Box, Paper } from "@mui/material";
import { Dispatch, SetStateAction } from "react";
import { DetailsNotesButton } from "./DetailsNotesButton";

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
      <DetailsNotesButton
        label="None"
        changeDisplayTo={0}
        selectedWhen={0}
        display={display}
        setDisplay={setDisplay}
      />
      <DetailsNotesButton
        label="Notes"
        changeDisplayTo={1}
        selectedWhen={1}
        display={display}
        setDisplay={setDisplay}
      />
      <DetailsNotesButton
        label="Npcs"
        changeDisplayTo={2}
        selectedWhen={2}
        display={display}
        setDisplay={setDisplay}
      />
    </Box>
  );
};
