import Box from "@mui/material/Box";
import { ActionButton } from "../../ActionButton";

export const DetailsActions = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <ActionButton
        addressPath="/"
        label="Exit to Dashboard"
        testId="action-btn"
      />
      <ActionButton addressPath="/delete" label="Delete" testId="action-btn" />
    </Box>
  );
};
