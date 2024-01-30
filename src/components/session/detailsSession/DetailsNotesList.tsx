import { List } from "@mui/material";
import { DetailsNotesListElement } from "./DetailsNotesListElement";
import { Note, Npc } from "../../../types/types";

type Props = {
  dataCollection: Note[] | Npc[];
};

export const DetailsNotesList = ({ dataCollection }: Props) => {
  return (
    <List className="session-body-notes-list" sx={{ padding: "0" }}>
      {dataCollection.map((data) => (
        <DetailsNotesListElement key={data.id} id={data.id} name={data.name} />
      ))}
    </List>
  );
};
