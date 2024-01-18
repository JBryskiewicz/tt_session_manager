import { Box } from "@mui/material";
import { addressLibrary } from "../../utils/addressLibrary";
import {
  ACTION_BUTTON_TEST_ID,
  SESSION_ACTION_CATEGORIES,
} from "../../utils/constants";
import { ActionButton } from "../buttons/ActionButton";

export const DashboardActions = () => {
  const { sessionNew } = addressLibrary;
  const { newSession } = SESSION_ACTION_CATEGORIES;

  return (
    <Box className="actions">
      <ActionButton
        addressPath={sessionNew}
        label={newSession}
        testId={ACTION_BUTTON_TEST_ID}
      />
    </Box>
  );
};
