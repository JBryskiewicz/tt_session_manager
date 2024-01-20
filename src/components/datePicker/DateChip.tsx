import { Chip } from "@mui/material";
import { Dispatch, SetStateAction } from "react";

type Props = {
  testID: string;
  label: string;
  isButton?: boolean;
  setClicked?: Dispatch<SetStateAction<boolean>>;
};

export const DateChip = ({ testID, label, isButton, setClicked }: Props) => {
  if (!isButton) {
    return (
      <Chip data-testid={testID} label={label} className="date-chip-element" />
    );
  }

  return (
    <Chip
      data-testid={testID}
      label={label}
      onClick={() => setClicked!((prevState) => !prevState)}
      className="date-chip-element"
    />
  );
};
