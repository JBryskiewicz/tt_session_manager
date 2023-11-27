import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import { Paper } from "@mui/material";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Box from "@mui/material/Box";
import { useEffect, useState } from "react";
import { Note, Npc } from "../../../types/types";
import { DetailsNotesSharedInformation } from "./DetailsNotesSharedInformation";
import { DetailsNotesSharedInfoEdit } from "../editSession/DetailsNotesSharedInfoEdit";

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
          <ListItem key={data.id} className="notes-list-item" disablePadding>
            <Paper elevation={4} className={"notes-list-item_wrapper"}>
              <ListItemButton onClick={() => setDataId(data.id)}>
                <ListItemText primary={data.name} />
              </ListItemButton>
            </Paper>
          </ListItem>
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
