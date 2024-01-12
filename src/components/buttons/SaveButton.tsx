import { Button } from "@mui/material";
import { SECONDARY_COLOR } from "../../utils/constants";

export const SaveButton = () => {
  return (
    <Button
      variant="contained"
      sx={{ backgroundColor: SECONDARY_COLOR }}
      className="edit-button"
      type="submit"
    >
      Save
    </Button>
  );
};
