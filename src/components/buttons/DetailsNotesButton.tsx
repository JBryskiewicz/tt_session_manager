import { Button } from "@mui/material";
import { Dispatch, SetStateAction } from "react";
import { BUTTON_SETTINGS } from "../../sx/buttonsStyle";

type Props = {
  label: string;
  changeDisplayTo: number;
  selectedWhen: number;
  display: number;
  setDisplay: Dispatch<SetStateAction<number>>;
};

export const DetailsNotesButton = ({
  label,
  changeDisplayTo,
  selectedWhen,
  display,
  setDisplay,
}: Props) => {
  const disabled = selectedWhen === 0 ? true : false;
  return (
    <Button
      disabled={disabled}
      variant="contained"
      className={`${display === selectedWhen ? "selected" : ""}`}
      sx={{ marginLeft: "20px", ...BUTTON_SETTINGS }}
      onClick={() => setDisplay(changeDisplayTo)}
    >
      {label}
    </Button>
  );
};
