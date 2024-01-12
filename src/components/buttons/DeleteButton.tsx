import { Box, Button } from "@mui/material";

type Props = {
  onClick: () => void;
  label: string;
};

export const DeleteButton = ({ onClick, label }: Props) => {
  return (
    <Box className="dashboard-actions">
      <Button variant="contained" className="actions-button" onClick={onClick}>
        {label}
      </Button>
    </Box>
  );
};
