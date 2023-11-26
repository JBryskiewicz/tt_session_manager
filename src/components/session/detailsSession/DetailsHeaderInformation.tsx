import { Box, Button, Paper, Typography } from "@mui/material";
import { Dispatch, SetStateAction } from "react";
import { checkCategoryToSetEditable } from "../../../utils/supportFunctions";

type Props = {
  category: string;
  data: string;
  setIsEditable: Dispatch<SetStateAction<boolean[]>>;
};

export const DetailsHeaderInformation = ({
  category,
  data,
  setIsEditable,
}: Props) => {
  const handleButton = () => {
    checkCategoryToSetEditable(category, setIsEditable, true);
  };

  return (
    <Box className="session-header">
      <Paper elevation={4} className="session-description">
        <Typography>{category}:</Typography>
      </Paper>
      <Paper elevation={4} className="session-description-text">
        <Typography>{data}</Typography>
        <Button variant="contained" onClick={handleButton}>
          Edit
        </Button>
      </Paper>
    </Box>
  );
};
