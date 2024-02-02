import { Box } from "@mui/material";
import { ADDRESS_LIB } from "../../utils/addressLibrary";
import {
  ACTION_BUTTON_TEST_ID,
  BUTTON_LABELS_LIB,
} from "../../utils/constants";
import { ActionButton } from "../buttons/ActionButton";

export const DashboardActions = () => {
  const { sessionNew } = ADDRESS_LIB;
  const { newSession } = BUTTON_LABELS_LIB;

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
