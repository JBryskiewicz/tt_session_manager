import { Button } from "@mui/material";
import { BUTTON_COLORS } from "../../sx/buttonsStyle";

type Props = {
  onClick: () => void;
  label: string;
};

export const EditStateButton = ({ label, onClick }: Props) => {
  return (
    <Button
      variant="contained"
      onClick={onClick}
      sx={{ marginRight: "20px", ...BUTTON_COLORS }}
    >
      {label}
    </Button>
  );
};
