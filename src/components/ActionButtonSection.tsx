import Box from "@mui/material/Box";
import { ActionButton } from "./buttons/ActionButton";
import {
  ACTION_BUTTON_TEST_ID,
  BUTTON_LABELS_LIB,
  SESSION_CATEGORY_LIB,
} from "../utils/constants";
import { DeleteButton } from "./buttons/DeleteButton";
import { useNavigate } from "react-router-dom";
import { handleSessionDelete } from "../utils/supportFunctions/API_requestHandlers";
import { ADDRESS_LIB } from "../utils/addressLibrary";
import { useSelector } from "react-redux";
import { findUser } from "../redux/userSlice";
import { useState } from "react";

const { exit, remove } = BUTTON_LABELS_LIB;
const { details } = SESSION_CATEGORY_LIB;
const { dashboard } = ADDRESS_LIB;

type Props = {
  sessionCategory: string;
  toDelete?: number;
};

export const ActionButtonSection = ({ sessionCategory, toDelete }: Props) => {
  const [popout, setPopout] = useState<boolean>(false);
  const user = useSelector(findUser);
  const navigate = useNavigate();

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
      {sessionCategory === details ? (
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
