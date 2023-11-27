import { Box, Button, Paper, TextField } from "@mui/material";
import { ThunkDispatch } from "@reduxjs/toolkit";
import { Dispatch, SetStateAction, useState } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { RootState } from "../../../redux/store";
import {
  checkCategoryToSetEditable,
  checkCategoryToUpdateNotes,
} from "../../../utils/supportFunctions";
import { Note, Npc } from "../../../types/types";
import { fetchSession } from "../../../redux/sessionSlice";

type Props = {
  data: Note | Npc;
  setIsEditable: Dispatch<SetStateAction<boolean[]>>;
  category: string;
};

type RouteParams = {
  id: string;
};

export const DetailsNotesSharedInfoEdit = ({
  data,
  setIsEditable,
  category,
}: Props) => {
  const { id } = useParams<RouteParams>();
  const [formValue, setFormValue] = useState<string>(data.information);
  const dispatch: ThunkDispatch<RootState, undefined, any> = useDispatch();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    await checkCategoryToUpdateNotes(category, data, formValue);
    dispatch(fetchSession({ id }));
    checkCategoryToSetEditable(category, setIsEditable, false);
  };

  return (
    <Box className="note-box">
      <Paper elevation={4} className="note-box-text">
        <form onSubmit={handleSubmit}>
          <TextField
            id="outlined-textarea"
            label="information"
            value={formValue}
            rows={17}
            sx={{ width: "100%" }}
            multiline
            onChange={(event) => setFormValue(event.target.value)}
          />
          <div style={{ display: "flex", gap: ".5rem", marginTop: ".5rem" }}>
            <Button variant="contained" type="submit">
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
          </div>
        </form>
      </Paper>
    </Box>
  );
};
