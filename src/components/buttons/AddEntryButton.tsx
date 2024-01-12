import { Button } from "@mui/material";
import { SECONDARY_COLOR } from "../../utils/constants";

type Props = {
  onClick: () => void;
  label: string;
};

export const AddEntryButton = ({ onClick, label }: Props) => {
  return (
    <Button
      variant="contained"
      onClick={onClick}
      sx={{ marginRight: "20px", backgroundColor: SECONDARY_COLOR }}
    >
      {label}
    </Button>
  );
};
