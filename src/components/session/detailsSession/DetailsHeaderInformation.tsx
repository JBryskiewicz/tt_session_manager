import { Box, Paper, Typography } from "@mui/material";
import { Dispatch, SetStateAction } from "react";
import { checkCategoryToSetEditable } from "../../../utils/supportFunctions";
import { EditStateButton } from "../../buttons/EditStateButton";
import { EDIT_STATE_BUTTON_LABELS } from "../../../utils/constants";

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
  const { edit } = EDIT_STATE_BUTTON_LABELS;

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
        <EditStateButton onClick={handleEditButton} label={edit} />
      </Paper>
    </Box>
  );
};
