import { Button } from "@mui/material";
import { Box } from "@mui/system";

import { Link } from "react-router-dom";
import { BUTTON_SETTINGS } from "../../sx/buttonsStyle";

type Props = {
  submitButton: string;
  redirectButton: string;
  address: string;
};

export const LoginButtons = ({
  submitButton,
  redirectButton,
  address,
}: Props) => {
  return (
    <Box sx={{ display: "flex", justifyContent: "space-between" }}>
      <Button variant="contained" type="submit" sx={BUTTON_SETTINGS}>
        {submitButton}
      </Button>
      <Link to={`/${address}`}>
        <Button variant="contained" sx={BUTTON_SETTINGS}>
          {redirectButton}
        </Button>
      </Link>
    </Box>
  );
};
