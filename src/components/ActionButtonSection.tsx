import Box from "@mui/material/Box";
import { ActionButton } from "./buttons/ActionButton";
import {
  SESSION_ACTION_CATEGORIES,
  SESSION_FIELDS_CATEGORIES,
} from "../utils/constants";
import { DeleteButton } from "./buttons/DeleteButton";

type Props = {
  sessionCategory: string;
  toDelete: number;
};

const buttonSectionStyles = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
};

export const ActionButtonSection = ({ sessionCategory, toDelete }: Props) => {
  const { session } = SESSION_FIELDS_CATEGORIES;
  return (
    <Box sx={buttonSectionStyles}>
      <ActionButton
        addressPath="/"
        label="Exit to Dashboard"
        testId="action-btn"
      />
      {sessionCategory === SESSION_ACTION_CATEGORIES.details ? (
        <DeleteButton category={session} toDelete={toDelete} />
      ) : null}
    </Box>
  );
};
