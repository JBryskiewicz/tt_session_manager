import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import { Link, useNavigate } from "react-router-dom";
import { deleteSession } from "../utils/API_communication";

type Props = {
  addressPath?: string;
  testId: string;
  label: string;
  toDelete?: number;
};

export const ActionButton = ({
  addressPath,
  testId,
  label,
  toDelete,
}: Props) => {
  const navigate = useNavigate();

  const handleDelete = async (toDelete: number) => {
    await deleteSession(toDelete);
    navigate("/");
  };

  const onClick =
    label === "Delete" ? () => handleDelete(toDelete as number) : () => null;

  return (
    <Box className="dashboard-actions">
      <Link to={addressPath as string} data-testid={testId}>
        <Button
          variant="contained"
          className="actions-button"
          onClick={onClick}
        >
          {label}
        </Button>
      </Link>
    </Box>
  );
};
