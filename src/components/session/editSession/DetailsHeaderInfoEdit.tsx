import { Paper, TextField } from "@mui/material";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import React, { Dispatch, useState, SetStateAction } from "react";
import {
  checkCategoryToSetEditable,
  checkCategoryToUpdateSession,
} from "../../../utils/supportFunctions";
import { Session } from "../../../types/types";
import { useDispatch } from "react-redux";
import { RootState } from "../../../redux/store";
import { fetchSession } from "../../../redux/sessionSlice";
import { ThunkDispatch } from "@reduxjs/toolkit";
import { useParams } from "react-router-dom";

type Props = {
  category: string;
  data: string;
  session: Session;
  setIsEditable: Dispatch<SetStateAction<boolean[]>>;
};

type RouteParams = {
  id: string;
};

export const DetailsHeaderInfoEdit = ({
  category,
  data,
  session,
  setIsEditable,
}: Props) => {
  const { id } = useParams<RouteParams>();
  const [formValue, setFormValue] = useState<string>(data);
  const dispatch: ThunkDispatch<RootState, undefined, any> = useDispatch();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    await checkCategoryToUpdateSession(category, session, formValue);
    dispatch(fetchSession({ id }));
    checkCategoryToSetEditable(category, setIsEditable, false);
  };

  function handleCancel() {
    checkCategoryToSetEditable(category, setIsEditable, false);
  }

  return (
    <Box className="session-header">
      <Paper elevation={4} className="session-description">
        <Typography>{category}:</Typography>
      </Paper>
      <Paper elevation={4} className="session-description-text">
        <form onSubmit={handleSubmit} className="title-name-form">
          <TextField
            required
            id="outlined-required"
            label="Required"
            value={formValue}
            onChange={(event) => setFormValue(event.target.value)}
          />
          <Box sx={{ display: "flex", columnGap: "8px" }}>
            <Button variant="contained" className="edit-button" type="submit">
              Save
            </Button>
            <Button variant="contained" onClick={handleCancel}>
              Cancel
            </Button>
          </Box>
        </form>
      </Paper>
    </Box>
  );
};
