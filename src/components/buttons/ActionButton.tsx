import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import { BUTTON_SETTINGS } from "../../sx/buttonsStyle";

type Props = {
  addressPath: string;
  testId: string;
  label: string;
};

export const ActionButton = ({ addressPath, testId, label }: Props) => {
  return (
    <Link to={addressPath} data-testid={testId}>
      <Button variant="contained" sx={BUTTON_SETTINGS}>
        {label}
      </Button>
    </Link>
  );
};
