import { Box, Button, Paper } from "@mui/material";
import { Dispatch, SetStateAction, useState } from "react";
import { useParams } from "react-router-dom";
import {
  checkCategoryToSetEditable,
  checkCategoryToUpdateNotes,
} from "../../../utils/supportFunctions";
import { Note, Npc } from "../../../types/types";
import { fetchSession } from "../../../redux/sessionSlice";
import { useAppDispatch } from "../../../redux/hooks";
import { HeaderInputField } from "./HeaderInputField";

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
  const [nameValue, setNameValue] = useState<string>(data.name);
  const [infoValue, setInfoValue] = useState<string>(data.information);
  const dispatch = useAppDispatch();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    await checkCategoryToUpdateNotes(category, data, infoValue, nameValue);
    dispatch(fetchSession({ id }));
    checkCategoryToSetEditable(category, setIsEditable, false);
  };

  return (
    <Box className="note-box">
      <Paper elevation={4} className="note-box-text">
        <form onSubmit={handleSubmit}>
          <HeaderInputField
            label="name"
            fieldValue={nameValue}
            onChangeFunction={setNameValue}
          />
          <HeaderInputField
            label="inforamtion"
            fieldValue={infoValue}
            onChangeFunction={setInfoValue}
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
