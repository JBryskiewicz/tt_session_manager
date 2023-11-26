import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import { Paper } from "@mui/material";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Box from "@mui/material/Box";
import { useEffect, useState } from "react";
import { Note, Npc } from "../../../types/types";

type Props = {
  dataCollection: Note[] | Npc[];
};

export const DetailsNotesShared = ({ dataCollection }: Props) => {
  const [dataId, setDataId] = useState<number>(dataCollection[0].id);
  const [note, setNote] = useState<string>(dataCollection[0].information);

  useEffect(() => {
    dataCollection.forEach((data) => {
      if (data.id === dataId) {
        setNote(data.information);
      }
    });
  }, [dataId]);

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
      <Box className="note-box">
        <Paper elevation={4} className="note-box-text">
          <div>{note}</div>
        </Paper>
      </Box>
    </Box>
  );
};
