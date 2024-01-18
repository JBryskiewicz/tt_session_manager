import Box from "@mui/material/Box";
import { useEffect, useState } from "react";
import { Note, Npc } from "../../../types/types";
import { DetailsNotesSharedInformation } from "./DetailsNotesSharedInformation";
import { DetailsNotesSharedInfoEdit } from "../editSession/DetailsNotesSharedInfoEdit";
import { DetailsNotesList } from "./DetailsNotesList";

type Props = {
  dataCollection: Note[] | Npc[];
  category: string;
};

export const DetailsNotesShared = ({ dataCollection, category }: Props) => {
  const [isEditable, setIsEditable] = useState<boolean[]>([false, false]);
  const [dataId, setDataId] = useState<number>(
    dataCollection.length ? dataCollection[0].id : -1
  );
  const [data, setData] = useState<Note | Npc>(dataCollection[0]);

  useEffect(() => {
    dataCollection.forEach((data) => {
      if (data.id === dataId) {
        setData(data);
      }
    });
  }, [dataId, dataCollection]);

  if (dataId === -1) {
    return null;
  }

  return (
    <Box className="session-body-notes">
      <DetailsNotesList
        dataId={dataId}
        dataCollection={dataCollection}
        setDataId={setDataId}
      />
      {!isEditable[0] ? (
        <DetailsNotesSharedInformation
          data={data}
          setIsEditable={setIsEditable}
          category={category}
        />
      ) : (
        <DetailsNotesSharedInfoEdit
          data={data}
          setIsEditable={setIsEditable}
          category={category}
        />
      )}
    </Box>
  );
};
