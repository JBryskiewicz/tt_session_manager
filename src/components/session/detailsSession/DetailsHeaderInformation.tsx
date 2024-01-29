import { Box, Paper, Typography } from "@mui/material";
import { Dispatch, SetStateAction } from "react";
import { checkCategoryToSetEditable } from "../../../utils/supportFunctions/formHandlers";
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
      <Paper elevation={4} className="header-information">
        <Box>
          <Typography className="header-information-label">
            {category}
          </Typography>
          <Typography>{data}</Typography>
        </Box>
        <Box sx={{ marginLeft: "1rem" }}>
          <EditStateButton onClick={handleEditButton} label={edit} />
        </Box>
      </Paper>
    </Box>
  );
};
