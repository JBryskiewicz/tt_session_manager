import Box from "@mui/material/Box";
import { useEffect, useState } from "react";
import { Note, Npc } from "../../../types/types";
import { DetailsNotesSharedInformation } from "./DetailsNotesSharedInformation";
import { DetailsNotesSharedInfoEdit } from "../editSession/DetailsNotesSharedInfoEdit";
import { DetailsNotesList } from "./DetailsNotesList";
import { useSelector } from "react-redux";
import { RootState } from "../../../redux/store";
import { useAppDispatch } from "../../../redux/hooks";
import { setCurrentDataList } from "../../../redux/managerSlice";

type Props = {
  dataCollection: Note[] | Npc[];
  category: string;
};

export const DetailsNotesShared = ({ dataCollection, category }: Props) => {
  const dispatch = useAppDispatch();
  const { selected } = useSelector((state: RootState) => state.manager);
  const [isEditable, setIsEditable] = useState<boolean[]>([false, false]);

  useEffect(() => {
    dispatch(setCurrentDataList(dataCollection));
    console.log(dataCollection);
  }, []);

  if (selected === -1) {
    return null;
  }

  return (
    <Box className="session-body-notes">
      <DetailsNotesList dataCollection={dataCollection} />
      {!isEditable[0] ? (
        <DetailsNotesSharedInformation
          setIsEditable={setIsEditable}
          category={category}
        />
      ) : (
        <DetailsNotesSharedInfoEdit
          setIsEditable={setIsEditable}
          category={category}
        />
      )}
    </Box>
  );
};
