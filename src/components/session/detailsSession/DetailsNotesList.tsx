import { List } from "@mui/material";
import { Dispatch, SetStateAction } from "react";
import { DetailsNotesListElement } from "./DetailsNotesListElement";
import { Note, Npc } from "../../../types/types";

type Props = {
  dataId: number;
  dataCollection: Note[] | Npc[];
  setDataId: Dispatch<SetStateAction<number>>;
};

export const DetailsNotesList = ({
  dataId,
  dataCollection,
  setDataId,
}: Props) => {
  return (
    <List className="session-body-notes-list">
      {dataCollection.map((data) => (
        <DetailsNotesListElement
          key={data.id}
          id={data.id}
          dataId={dataId}
          name={data.name}
          setDataId={setDataId}
        />
      ))}
    </List>
  );
};
