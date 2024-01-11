import { Box, Paper, Typography } from "@mui/material";
import { Dispatch, SetStateAction } from "react";
import { checkCategoryToSetEditable } from "../../../utils/supportFunctions";
import { EditButton } from "../../buttons/EditButton";

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
  const handleEditButton = (): void => {
    checkCategoryToSetEditable(category, setIsEditable, true);
  };

  return (
    <Box className="session-header">
      <Paper elevation={4} className="session-description">
        <Typography>{category}:</Typography>
      </Paper>
      <Paper elevation={4} className="session-description-text">
        <Typography>{data}</Typography>
        <EditButton onClick={handleEditButton} />
      </Paper>
    </Box>
  );
};
