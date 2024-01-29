import { Typography } from "@mui/material";
import { Box } from "@mui/system";

export const PageNotFound = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "calc(100vh - 200px)",
      }}
    >
      <Typography variant="h2" sx={{ textAlign: "center" }}>
        Seems like this page does not exist
      </Typography>
    </Box>
  );
};
