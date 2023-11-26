import Container from "@mui/material/Container";
import { useState } from "react";
import { DetailsNotesButtonGroup } from "./DetailsNotesButtonGroup";
import { useSelector } from "react-redux";
import { RootState } from "../../../redux/store";
import { DetailsNotesShared } from "./DetailsNotesShared";

export function DetailsNotesBody() {
  const [display, setDisplay] = useState<number>(0);
  const { notes, npcs } = useSelector((state: RootState) => state.session);

  return (
    <Container maxWidth="xl" className="session-body">
      <DetailsNotesButtonGroup display={display} setDisplay={setDisplay} />
      {display === 1 ? <DetailsNotesShared dataCollection={notes} /> : null}
      {display === 2 ? <DetailsNotesShared dataCollection={npcs} /> : null}
    </Container>
  );
}
