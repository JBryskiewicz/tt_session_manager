import { Box, Paper } from "@mui/material";
import { Dispatch, SetStateAction, useState } from "react";
import { DeleteButton } from "../../buttons/DeleteButton";
import { useParams } from "react-router-dom";
import { EditStateButton } from "../../buttons/EditStateButton";
import { BUTTON_LABELS_LIB } from "../../../utils/constants";
import { fetchSession } from "../../../redux/sessionSlice";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import { handleNoteDelete } from "../../../utils/supportFunctions/API_requestHandlers";
import { RootState } from "../../../redux/store";
import { setSelected } from "../../../redux/managerSlice";

const { edit, remove } = BUTTON_LABELS_LIB;

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
  const [popout, setPopout] = useState<boolean>(false);
  const { id } = useParams<RouteParams>();
  const dispatch = useAppDispatch();
  const { selected, currentDataList } = useAppSelector(
    (state: RootState) => state.manager
  );

  const handleEditButton = (): void => {
    setIsEditable((prevState) => [true, ...prevState.slice(1)]);
  };

  const sessionID = parseInt(id as string);
  const handleDeleteButton = async (): Promise<void> => {
    await handleNoteDelete(selected, sessionID, category);
    dispatch(fetchSession({ id }));
    dispatch(setSelected(currentDataList[0].id));
  };

  const information =
    currentDataList.find((info) => info.id === selected)?.information ?? "";

  return (
    <Paper elevation={4} className="note-box">
      <Box className="note-box-btn-box">
        <EditStateButton onClick={handleEditButton} label={edit} />
        <DeleteButton
          onClick={handleDeleteButton}
          label={remove}
          popout={popout}
          setPopout={setPopout}
        />
      </Box>
      <Box className="note-box-text">{information}</Box>
    </Paper>
  );
};
