import { Button } from "@mui/material";
import { BUTTON_SETTINGS } from "../../sx/buttonsStyle";

type Props = {
  label: string;
};

export const SaveButton = ({ label }: Props) => {
  return (
    <Button variant="contained" sx={BUTTON_SETTINGS} type="submit">
      {label}
    </Button>
  );
};
