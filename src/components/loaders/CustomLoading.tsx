import { CircularProgress } from "@mui/material";
import { Box } from "@mui/system";

export const CustomLoading = () => {
  return (
    <Box className="centered-loading-box">
      <CircularProgress />
    </Box>
  );
};
