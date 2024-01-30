import { Box, Paper } from "@mui/material";
import { Dispatch, SetStateAction } from "react";
import { DeleteButton } from "../../buttons/DeleteButton";
import { useParams } from "react-router-dom";
import { EditStateButton } from "../../buttons/EditStateButton";
import {
  EDIT_STATE_BUTTON_LABELS,
  SESSION_ACTION_CATEGORIES,
} from "../../../utils/constants";
import { fetchSession } from "../../../redux/sessionSlice";
import { useAppDispatch } from "../../../redux/hooks";
import { handleNoteDelete } from "../../../utils/supportFunctions/API_requestHandlers";
import { useSelector } from "react-redux";
import { RootState } from "../../../redux/store";

const { edit } = EDIT_STATE_BUTTON_LABELS;
const { remove } = SESSION_ACTION_CATEGORIES;

type Props = {
  setIsEditable: Dispatch<SetStateAction<boolean[]>>;
  category: string;
};

type RouteParams = {
  id: string;
};

export const DetailsNotesSharedInformation = ({
  setIsEditable,
  category,
}: Props) => {
  const { id } = useParams<RouteParams>();
  const dispatch = useAppDispatch();
  const { selected, currentDataList } = useSelector(
    (state: RootState) => state.manager
  );

  const handleEditButton = (): void => {
    setIsEditable((prevState) => [true, ...prevState.slice(1)]);
  };

  const sessionID = parseInt(id as string);

  const handleDeleteButton = async (): Promise<void> => {
    await handleNoteDelete(selected, sessionID, category);
    dispatch(fetchSession({ id }));
  };

  const information =
    currentDataList.find((info) => info.id === selected)?.information ?? "";

  return (
    <Paper elevation={4} className="note-box">
      <Box className="note-box-btn-box">
        <EditStateButton onClick={handleEditButton} label={edit} />
        <DeleteButton onClick={handleDeleteButton} label={remove} />
      </Box>
      <Box className="note-box-text">{information}</Box>
    </Paper>
  );
};
