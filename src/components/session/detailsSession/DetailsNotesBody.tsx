import Container from "@mui/material/Container";
import { useState } from "react";
import { DetailsNotesButtonGroup } from "./DetailsNotesButtonGroup";
import { useSelector } from "react-redux";
import { DetailsNotesShared } from "./DetailsNotesShared";
import { SESSION_FIELDS } from "../../../utils/constants";
import { selectOneSession } from "../../../redux/sessionSlice";

export function DetailsNotesBody() {
  const [display, setDisplay] = useState<number>(0);
  const { notes, npcs } = useSelector(selectOneSession);
  const { note, npc } = SESSION_FIELDS;

  return (
    <Container maxWidth="xl" className="session-body">
      <DetailsNotesButtonGroup display={display} setDisplay={setDisplay} />
      {display === 1 ? (
        <DetailsNotesShared dataCollection={notes} category={note} />
      ) : null}
      {display === 2 ? (
        <DetailsNotesShared dataCollection={npcs} category={npc} />
      ) : null}
    </Container>
  );
}
