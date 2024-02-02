import { Paper } from "@mui/material";
import Box from "@mui/material/Box";
import React, { Dispatch, useState, SetStateAction, useEffect } from "react";
import { checkCategoryToUpdateSession } from "../../../utils/supportFunctions/API_requestHandlers";
import { Session } from "../../../types/types";
import { fetchSession } from "../../../redux/sessionSlice";
import { useParams } from "react-router-dom";
import { useAppDispatch } from "../../../redux/hooks";
import { TextInputField } from "../../TextInputField";
import { EditStateButton } from "../../buttons/EditStateButton";
import { CHAR_LIMIT_LIB, BUTTON_LABELS_LIB } from "../../../utils/constants";
import { SaveButton } from "../../buttons/SaveButton";
import {
  checkCategoryToSetEditable,
  setCharCounter,
} from "../../../utils/supportFunctions/formHandlers";

type Props = {
  category: string;
  data: string;
  session: Session;
  setIsEditable: Dispatch<SetStateAction<boolean[]>>;
  isRequired: boolean;
};

type RouteParams = {
  id: string;
};

export const DetailsHeaderInfoEdit = ({
  category,
  data,
  session,
  setIsEditable,
  isRequired,
}: Props) => {
  const { id } = useParams<RouteParams>();
  const [formValue, setFormValue] = useState<string>(data);
  const [chars, setChars] = useState<number>(formValue.length);
  const dispatch = useAppDispatch();
  const { save, cancel } = BUTTON_LABELS_LIB;

  const limit = CHAR_LIMIT_LIB[category];

  useEffect(() => {
    setCharCounter(formValue, setFormValue, setChars, limit);
  }, [formValue, limit]);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    await checkCategoryToUpdateSession(category, session, formValue);
    dispatch(fetchSession({ id }));
    checkCategoryToSetEditable(category, setIsEditable, false);
  };

  const handleCancelButton = () => {
    checkCategoryToSetEditable(category, setIsEditable, false);
  };

  return (
    <Box className="session-header">
      <Paper elevation={4} className="header-information">
        <form onSubmit={handleSubmit} style={{ width: "100%" }}>
          <Box className="header-information-form">
            <TextInputField
              required={isRequired}
              label={category}
              fieldValue={formValue}
              onChangeFunction={setFormValue}
              limit={limit}
              chars={chars}
            />
            <Box className="header-information-form-btn-box">
              <SaveButton label={save} />
              <EditStateButton onClick={handleCancelButton} label={cancel} />
            </Box>
          </Box>
        </form>
      </Paper>
    </Box>
  );
};
