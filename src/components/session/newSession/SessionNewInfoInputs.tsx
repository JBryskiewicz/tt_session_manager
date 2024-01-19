import { Paper } from "@mui/material";
import { Box } from "@mui/system";
import { TextInputField } from "../../TextInputField";
import { useState } from "react";
import {
  EDIT_STATE_BUTTON_LABELS,
  SESSION_FIELDS_CATEGORIES,
} from "../../../utils/constants";
import { initializeNewSession } from "../../../utils/supportFunctions";
import { useNavigate } from "react-router-dom";
import { SaveButton } from "../../buttons/SaveButton";

export const SessionNewInfoInputs = () => {
  const [titleValue, setTitleValue] = useState<string>("");
  const [descValue, setDescValue] = useState<string>("");
  const { title, desc } = SESSION_FIELDS_CATEGORIES;
  const navigate = useNavigate();

  const { save } = EDIT_STATE_BUTTON_LABELS;

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const newSession = initializeNewSession(titleValue, descValue);
    newSession.then((session) => navigate(`/session-details/${session.id}`));
  };

  return (
    <Box className="session-header">
      <Paper
        elevation={4}
        className="session-description-text"
        sx={{ display: "flex", flexDirection: "column", gap: "1rem" }}
      >
        <Box>
          <SaveButton label={save} />
        </Box>
        <form onSubmit={handleSubmit}>
          <Box sx={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            <TextInputField
              required={true}
              label={title}
              fieldValue={titleValue}
              onChangeFunction={setTitleValue}
            />
            <TextInputField
              required={false}
              label={desc}
              fieldValue={descValue}
              onChangeFunction={setDescValue}
            />
          </Box>
        </form>
      </Paper>
    </Box>
  );
};
