import { Button, Paper, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { BUTTON_SETTINGS } from "../../sx/buttonsStyle";
import { Dispatch, SetStateAction } from "react";

type Props = {
  notification: string;
  onClick: () => void;
  setPopout: Dispatch<SetStateAction<boolean>>;
};

export const ConfirmPopout = ({ notification, onClick, setPopout }: Props) => {
  return (
    <Paper
      className="confirm-action-box"
      sx={{ backgroundColor: "rgba(220, 220, 220)" }}
    >
      <Typography>{notification}</Typography>
      <Box className="confirm-action-box-buttons">
        <Button variant="contained" onClick={onClick} sx={BUTTON_SETTINGS}>
          confirm
        </Button>
        <Button
          variant="contained"
          onClick={() => setPopout(false)}
          sx={BUTTON_SETTINGS}
        >
          cancel
        </Button>
      </Box>
    </Paper>
  );
};
