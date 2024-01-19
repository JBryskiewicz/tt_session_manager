import { Button } from "@mui/material";
import { BUTTON_SETTINGS } from "../../sx/buttonsStyle";

type Props = {
  onClick: () => void;
  label: string;
};

export const AddEntryButton = ({ onClick, label }: Props) => {
  return (
    <Button
      variant="contained"
      onClick={onClick}
      sx={{ ...BUTTON_SETTINGS, minWidth: "120px" }}
    >
      {label}
    </Button>
  );
};
