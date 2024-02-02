import Box from "@mui/material/Box";
import { ActionButton } from "./buttons/ActionButton";
import {
  ACTION_BUTTON_TEST_ID,
  SESSION_ACTION_CATEGORIES,
} from "../utils/constants";
import { DeleteButton } from "./buttons/DeleteButton";
import { useNavigate } from "react-router-dom";
import { handleSessionDelete } from "../utils/supportFunctions/API_requestHandlers";
import { addressLibrary } from "../utils/addressLibrary";
import { useSelector } from "react-redux";
import { findUser } from "../redux/userSlice";
import { useState } from "react";

type Props = {
  sessionCategory: string;
  toDelete?: number;
};

export const ActionButtonSection = ({ sessionCategory, toDelete }: Props) => {
  const [popout, setPopout] = useState<boolean>(false);
  const user = useSelector(findUser);
  const navigate = useNavigate();
  const { exit, remove } = SESSION_ACTION_CATEGORIES;
  const { dashboard } = addressLibrary;

  const handleDeleteButton = async (): Promise<void> => {
    await handleSessionDelete(user.id, toDelete as number);
    navigate(dashboard);
  };

  return (
    <Box className="actions">
      <ActionButton
        addressPath={dashboard}
        label={exit}
        testId={ACTION_BUTTON_TEST_ID}
      />
      {sessionCategory === SESSION_ACTION_CATEGORIES.details ? (
        <DeleteButton
          label={remove}
          popout={popout}
          setPopout={setPopout}
          onClick={handleDeleteButton}
        />
      ) : null}
    </Box>
  );
};
