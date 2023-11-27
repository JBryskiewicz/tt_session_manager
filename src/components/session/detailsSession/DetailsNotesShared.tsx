import List from "@mui/material/List";
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
  const [dataId, setDataId] = useState<number>(dataCollection[0].id);
  const [data, setData] = useState<Note | Npc>(dataCollection[0]);
  const [note, setNote] = useState<string>(dataCollection[0].information);

  useEffect(() => {
    dataCollection.forEach((data) => {
      if (data.id === dataId) {
        setNote(data.information);
        setData(data);
      }
    });
  }, [dataId, dataCollection]);

  return (
    <Box className="session-body-notes">
      <List className="session-body-notes-list">
        {dataCollection.map((data) => (
          <DetailsNotesList
            id={data.id}
            dataId={dataId}
            name={data.name}
            setDataId={setDataId}
          />
        ))}
      </List>
      {!isEditable[0] ? (
        <DetailsNotesSharedInformation
          note={note}
          setIsEditable={setIsEditable}
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
