import Box from "@mui/material/Box";
import { ActionButton } from "./ActionButton";
import { SESSION_ACTION_CATEGORIES } from "../utils/constants";

type Props = {
  sessionCategory: string;
  toDelete?: number;
};

export const ActionButtonSection = ({ sessionCategory, toDelete }: Props) => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <ActionButton
        addressPath="/"
        label="Exit to Dashboard"
        testId="action-btn"
      />
      {sessionCategory === SESSION_ACTION_CATEGORIES.details ? (
        <ActionButton
          addressPath="/"
          label="Delete"
          testId="action-btn"
          toDelete={toDelete}
        />
      ) : null}
    </Box>
  );
};
