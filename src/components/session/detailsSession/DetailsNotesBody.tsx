import { useEffect, useState } from "react";
import { DetailsNotesButtonGroup } from "./DetailsNotesButtonGroup";
import { useSelector } from "react-redux";
import { DetailsNotesShared } from "./DetailsNotesShared";
import { SESSION_TEXT_FIELDS_CATEGORIES_LIB } from "../../../utils/libs/constants";
import { selectOneSession } from "../../../redux/sessionSlice";

export function DetailsNotesBody() {
  const [display, setDisplay] = useState<number>(0);
  const [isNotesEmpty, setIsNotesEmpty] = useState<boolean>(true);
  const [isNpcsEmpty, setIsNpcsEmpty] = useState<boolean>(true);
  const { notes, npcs } = useSelector(selectOneSession);
  const { note, npc } = SESSION_TEXT_FIELDS_CATEGORIES_LIB;

  useEffect(() => {
    setIsNotesEmpty(notes.length === 0);
    setIsNpcsEmpty(npcs.length === 0);
  }, [notes, npcs]);

  return (
    <>
      <DetailsNotesButtonGroup display={display} setDisplay={setDisplay} />
      {display === 1 && !isNotesEmpty ? (
        <DetailsNotesShared dataCollection={notes} category={note} />
      ) : null}
      {display === 2 && !isNpcsEmpty ? (
        <DetailsNotesShared dataCollection={npcs} category={npc} />
      ) : null}
    </>
  );
}
