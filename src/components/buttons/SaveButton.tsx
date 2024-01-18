import { Button } from "@mui/material";
import { BUTTON_COLORS } from "../../sx/buttonsStyle";

type Props = {
  label: string;
};

export const SaveButton = ({ label }: Props) => {
  return (
    <Button variant="contained" sx={BUTTON_COLORS} type="submit">
      {label}
    </Button>
  );
};
