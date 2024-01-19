import { Button } from "@mui/material";
import { BUTTON_SETTINGS } from "../../sx/buttonsStyle";

type Props = {
  onClick: () => void;
  label: string;
};

export const EditStateButton = ({ label, onClick }: Props) => {
  return (
    <Button variant="contained" onClick={onClick} sx={BUTTON_SETTINGS}>
      {label}
    </Button>
  );
};
