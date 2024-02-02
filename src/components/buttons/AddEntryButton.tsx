import { Button } from "@mui/material";
import { BUTTON_SETTINGS } from "../../sx/buttonsStyle";
import { Dispatch, SetStateAction } from "react";
import { Box } from "@mui/system";
import { ConfirmPopout } from "./ConfirmPopout";

type Props = {
  label: string;
  popout: boolean;
  setPopout: Dispatch<SetStateAction<boolean>>;
  onClick: () => void;
};

export const AddEntryButton = ({
  label,
  popout,
  setPopout,
  onClick,
}: Props) => {
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
