import { Box, Typography } from "@mui/material";

export const NoteNotSelected = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100%",
      }}
    >
      <Typography sx={{ fontSize: "2rem", color: "grey" }}>
        Note or NPC not selected
      </Typography>
    </Box>
  );
};
