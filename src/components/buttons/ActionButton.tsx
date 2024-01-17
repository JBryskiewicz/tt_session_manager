import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import { Link } from "react-router-dom";

type Props = {
  addressPath: string;
  testId: string;
  label: string;
};

export const ActionButton = ({ addressPath, testId, label }: Props) => {
  return (
    <Box className="dashboard-actions">
      <Link to={addressPath} data-testid={testId}>
        <Button variant="contained" className="actions-button">
          {label}
        </Button>
      </Link>
    </Box>
  );
};
