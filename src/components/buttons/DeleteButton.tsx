import { Box, Button } from "@mui/material";
import { BUTTON_SETTINGS } from "../../sx/buttonsStyle";
import { useState } from "react";
import { ConfirmPopout } from "./ConfirmPopout";

type Props = {
  onClick: () => void;
  label: string;
};

export const DeleteButton = ({ onClick, label }: Props) => {
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
        sx={BUTTON_SETTINGS}
      >
        {label}
      </Button>
      {popout ? (
        <ConfirmPopout
          notification={"confirm delete"}
          onClick={handleConfrim}
          setPopout={setPopout}
        />
      ) : null}
    </Box>
  );
};
