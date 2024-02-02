import { Paper } from "@mui/material";
import { Box } from "@mui/system";
import { TextInputField } from "../../TextInputField";
import { useEffect, useState } from "react";
import {
  CHAR_LIMIT_LIB,
  BUTTON_LABELS_LIB,
  SESSION_TEXT_FIELDS_CATEGORIES_LIB,
} from "../../../utils/libs/constants";
import { initializeNewSession } from "../../../utils/supportFunctions/API_requestHandlers";
import { useNavigate } from "react-router-dom";
import { SaveButton } from "../../buttons/SaveButton";
import { findUser } from "../../../redux/userSlice";
import { useSelector } from "react-redux";
import { setCharCounter } from "../../../utils/supportFunctions/formHandlers";

const { title, desc } = SESSION_TEXT_FIELDS_CATEGORIES_LIB;
const { save } = BUTTON_LABELS_LIB;

export const SessionNewInfoInputs = () => {
  const [titleValue, setTitleValue] = useState<string>("");
  const [titleChars, setTitleChars] = useState<number>(titleValue.length);
  const [descValue, setDescValue] = useState<string>("");
  const [descChars, setDescChars] = useState<number>(descValue.length);
  const user = useSelector(findUser);
  const navigate = useNavigate();

  const titleLimit = CHAR_LIMIT_LIB[title];
  const descLimit = CHAR_LIMIT_LIB[desc];

  useEffect(() => {
    setCharCounter(titleValue, setTitleValue, setTitleChars, titleLimit);
    setCharCounter(descValue, setDescValue, setDescChars, descLimit);
  }, [titleValue, descValue, titleLimit, descLimit]);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const newSession = initializeNewSession(titleValue, descValue, user);
    newSession.then((session) => navigate(`/session-details/${session.id}`));
  };

  return (
    <Box className="session-header">
      <form onSubmit={handleSubmit}>
        <Paper elevation={4} className="new-session-form">
          <Box>
            <SaveButton label={save} />
          </Box>
          <Box className="text-field-box">
            <TextInputField
              required={true}
              label={title}
              fieldValue={titleValue}
              onChangeFunction={setTitleValue}
              limit={titleLimit}
              chars={titleChars}
            />
            <TextInputField
              required={false}
              label={desc}
              fieldValue={descValue}
              onChangeFunction={setDescValue}
              limit={descLimit}
              chars={descChars}
            />
          </Box>
        </Paper>
      </form>
    </Box>
  );
};
