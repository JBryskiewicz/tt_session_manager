import Box from "@mui/material/Box";
import { ActionButton } from "./buttons/ActionButton";
import {
  ACTION_BUTTON_TEST_ID,
  SESSION_ACTION_CATEGORIES,
} from "../utils/constants";
import { DeleteButton } from "./buttons/DeleteButton";
import { useNavigate } from "react-router-dom";
import { handleSessionDelete } from "../utils/supportFunctions";

type Props = {
  sessionCategory: string;
  toDelete?: number;
};

const buttonSectionStyles = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
};

const ADDRESS_PATH = "/";

export const ActionButtonSection = ({ sessionCategory, toDelete }: Props) => {
  const navigate = useNavigate();
  const { exit, remove } = SESSION_ACTION_CATEGORIES;

  const handleDeleteButton = async (): Promise<void> => {
    await handleSessionDelete(toDelete as number);
    navigate(ADDRESS_PATH);
  };

  return (
    <Box sx={buttonSectionStyles}>
      <ActionButton
        addressPath={ADDRESS_PATH}
        label={exit}
        testId={ACTION_BUTTON_TEST_ID}
      />
      {sessionCategory === SESSION_ACTION_CATEGORIES.details ? (
        <DeleteButton onClick={handleDeleteButton} label={remove} />
      ) : null}
    </Box>
  );
};
