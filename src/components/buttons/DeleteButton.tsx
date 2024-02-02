import { Box, Button } from "@mui/material";
import { BUTTON_SETTINGS } from "../../sx/buttonsStyle";
import { ConfirmPopout } from "./ConfirmPopout";
import { Dispatch, SetStateAction } from "react";

type Props = {
  label: string;
  popout: boolean;
  setPopout: Dispatch<SetStateAction<boolean>>;
  onClick: () => void;
};

export const DeleteButton = ({ label, popout, setPopout, onClick }: Props) => {
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
