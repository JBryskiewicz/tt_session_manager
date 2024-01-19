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
      <Paper
        elevation={4}
        className="session-description-text"
        sx={{ alignItems: "center" }}
      >
        <Box>
          <Typography
            sx={{
              fontSize: ".875rem",
              textTransform: "capitalize",
              color: "rgba(0, 0, 0, .7)",
            }}
          >
            {category}:
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
