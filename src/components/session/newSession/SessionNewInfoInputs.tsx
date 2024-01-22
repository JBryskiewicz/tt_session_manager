import { Paper } from "@mui/material";
import { Box } from "@mui/system";
import { TextInputField } from "../../TextInputField";
import { useEffect, useState } from "react";
import {
  CHAR_INPUT_LIMIT,
  EDIT_STATE_BUTTON_LABELS,
  SESSION_FIELDS_CATEGORIES,
} from "../../../utils/constants";
import { initializeNewSession } from "../../../utils/supportFunctions";
import { useNavigate } from "react-router-dom";
import { SaveButton } from "../../buttons/SaveButton";

export const SessionNewInfoInputs = () => {
  const [titleValue, setTitleValue] = useState<string>("");
  const [titleChars, setTitleChars] = useState<number>(titleValue.length);
  const [descValue, setDescValue] = useState<string>("");
  const [descChars, setDescChars] = useState<number>(descValue.length);
  const { title, desc } = SESSION_FIELDS_CATEGORIES;
  const navigate = useNavigate();

  const { save } = EDIT_STATE_BUTTON_LABELS;

  const titleLimit = CHAR_INPUT_LIMIT["title"];
  const descLimit = CHAR_INPUT_LIMIT["description"];

  useEffect(() => {
    setTitleChars(titleValue.length);
    if (titleValue.length >= titleLimit) {
      setTitleValue(titleValue.substring(0, titleLimit));
    }

    setDescChars(descValue.length);
    if (descValue.length >= descLimit) {
      setDescValue(descValue.substring(0, descLimit));
    }
  }, [titleValue, descValue, titleLimit, descLimit]);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const newSession = initializeNewSession(titleValue, descValue);
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
