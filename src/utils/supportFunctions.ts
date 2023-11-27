import { Note, Npc, Session } from "../types/types";
import { Dispatch, SetStateAction } from "react";
import { updateNote, updateNpc, updateSession } from "./API_communication";
import { SESSION_FIELDS } from "./constants";

const { title, desc, note, npc } = SESSION_FIELDS;

/**
 * This function takes Date data type argument and returns it in form of
 * string formatted to YYYY.mm.dd standard
 */
export function applyDate(date: Date) {
  if (date === null) {
    return "Session is not planned";
  }
  return `${date.getFullYear()}-${(date.getMonth() + 1)
    .toString()
    .padStart(2, "0")}-${date.getDate().toString().padStart(2, "0")}`;
}

/**
 * Check Category To Set Editable function checks category for
 * shared component in session details, then proceeds to set
 * proper editable state in the DetailsHeader.tsx component.
 */
export const checkCategoryToSetEditable = (
  category: string,
  setIsEditable: Dispatch<SetStateAction<boolean[]>>,
  changeStateTo: boolean
): void => {
  if (category === title || category === note || category == npc) {
    setIsEditable((prevState) => [changeStateTo, ...prevState.slice(1)]);
  }
  if (category === desc) {
    setIsEditable((prevState) => [
      prevState[0],
      changeStateTo,
      ...prevState.slice(2),
    ]);
  }
};

/**
 * Check Category of editable data and overwrite session's matching attribute.
 * Then send update request to API to modify it in database
 */
export const checkCategoryToUpdateSession = async (
  category: string,
  session: Session,
  formValue: string
): Promise<void> => {
  const updatedSession = { ...session };

  category === title
    ? (updatedSession.name = formValue)
    : (updatedSession.description = formValue);
  await updateSession(session.id, updatedSession);
};

/**
 * Check Category of editable data and overwrite either npc's or note's matching
 * attribute. Then send update request to API to modify it in database
 */
export const checkCategoryToUpdateNotes = async (
  category: string,
  notes: Note | Npc,
  infoValue: string,
  nameValue: string
): Promise<void> => {
  const updatedNotes = { ...notes };
  updatedNotes.information = infoValue;
  updatedNotes.name = nameValue;

  category === note
    ? await updateNote(notes.id, updatedNotes)
    : await updateNpc(notes.id, updatedNotes);
};
