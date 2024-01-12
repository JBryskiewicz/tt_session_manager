import { Button } from "@mui/material";
import { SECONDARY_COLOR } from "../../utils/constants";

type Props = {
  label: string;
};

export const SaveButton = ({ label }: Props) => {
  return (
    <Button
      variant="contained"
      sx={{ backgroundColor: SECONDARY_COLOR }}
      className="edit-button"
      type="submit"
    >
      {label}
    </Button>
  );
};
