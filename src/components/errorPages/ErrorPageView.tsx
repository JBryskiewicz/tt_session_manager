import { Typography } from "@mui/material";
import { Box } from "@mui/system";

type Props = {
  errorMsg: string;
};

export const ErrorPageView = ({ errorMsg }: Props) => {
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
        {errorMsg}
      </Typography>
    </Box>
  );
};
