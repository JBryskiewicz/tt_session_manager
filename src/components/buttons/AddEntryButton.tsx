import { Button } from "@mui/material";
import { BUTTON_SETTINGS } from "../../sx/buttonsStyle";
import { useState } from "react";
import { Box } from "@mui/system";
import { ConfirmPopout } from "./ConfirmPopout";

type Props = {
  onClick: () => void;
  label: string;
};

export const AddEntryButton = ({ onClick, label }: Props) => {
  const [popout, setPopout] = useState<boolean>(false);

  const handleConfrim = () => {
    onClick();
    setPopout(false);
  };

  return (
    <Box sx={{ position: "relative" }}>
      <Button
        variant="contained"
        onClick={() => setPopout(true)}
        sx={{ ...BUTTON_SETTINGS, minWidth: "120px" }}
      >
        {label}
      </Button>
      {popout ? (
        <ConfirmPopout
          notification={"confirm add entry"}
          onClick={handleConfrim}
          setPopout={setPopout}
        />
      ) : null}
    </Box>
  );
};
