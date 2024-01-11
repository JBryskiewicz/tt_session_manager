import { Paper } from "@mui/material";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import React, { Dispatch, useState, SetStateAction } from "react";
import {
  checkCategoryToSetEditable,
  checkCategoryToUpdateSession,
} from "../../../utils/supportFunctions";
import { Session } from "../../../types/types";
import { fetchSession } from "../../../redux/sessionSlice";
import { useParams } from "react-router-dom";
import { useAppDispatch } from "../../../redux/hooks";
import { TextInputField } from "../../TextInputField";

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
  const dispatch = useAppDispatch();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    await checkCategoryToUpdateSession(category, session, formValue);
    dispatch(fetchSession({ id }));
    checkCategoryToSetEditable(category, setIsEditable, false);
  };

  return (
    <Box className="session-header">
      <Paper elevation={4} className="session-description">
        <Typography>{category}:</Typography>
      </Paper>
      <Paper elevation={4} className="session-description-text">
        <form onSubmit={handleSubmit} className="title-name-form">
          <TextInputField
            required={isRequired}
            label={category}
            fieldValue={formValue}
            onChangeFunction={setFormValue}
          />
          <Box sx={{ display: "flex", columnGap: "8px" }}>
            <Button variant="contained" className="edit-button" type="submit">
              Save
            </Button>
            <Button
              variant="contained"
              onClick={() =>
                checkCategoryToSetEditable(category, setIsEditable, false)
              }
            >
              Cancel
            </Button>
          </Box>
        </form>
      </Paper>
    </Box>
  );
};
