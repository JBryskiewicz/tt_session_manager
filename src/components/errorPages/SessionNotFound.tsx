import { Typography } from "@mui/material";
import { Box } from "@mui/system";

export const SessionNotFound = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "calc(100vh - 200px)",
      }}
    >
      <Typography variant="h2">Session with this ID not found!</Typography>
    </Box>
  );
};
