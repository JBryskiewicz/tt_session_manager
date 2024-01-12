import {
  NewNote,
  NewNpc,
  NewSession,
  Note,
  Npc,
  Session,
} from "../types/types";
import { Dispatch, SetStateAction } from "react";
import {
  createNewNote,
  createNewNpc,
  createNewSession,
  getOneSession,
  updateNote,
  updateNpc,
  updateSession,
} from "./API_communication";
import { SESSION_FIELDS_CATEGORIES } from "./constants";

const { title, desc, note, npc } = SESSION_FIELDS_CATEGORIES;

/**
 * This function takes Date data type argument and returns it in form of
 * string formatted to YYYY.mm.dd standard
 */
export function applyDate(date: string | null | undefined): string {
  if (date === null) {
    return "Session is not planned";
  }
  const result = (date as string).substring(0, 10);
  return result;
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

/**
 * Initialize new session object and assign user input, then send
 * to backend to create new entry in database and return as Session with
 * generated id.
 */
export const initializeNewSession = async (
  title: string,
  description: string
): Promise<Session> => {
  const newSession: NewSession = {
    name: title,
    description: description,
    creationDate: new Date().toISOString(),
    plannedDate: null,
    editedDate: null,
    edited: false,
    notes: [],
    npcs: [],
  };

  const returnedSession = await createNewSession(newSession);
  return returnedSession as Session;
};

/**
 *  Creates new note or npcs entry, saves it to database. Then returns
 *  proper object with ID and updates session to include new entry into
 *  it's notes & npcs collection.
 */
export const handleAddNotesButton = async (
  sessionID: number,
  changeTo: number
) => {
  const noteObject: NewNote | NewNpc = {
    name: "New Entry",
    information: "",
  };

  const responseObject: Note | Npc =
    changeTo === 1
      ? ((await createNewNote(noteObject)) as Note)
      : ((await createNewNpc(noteObject)) as Npc);

  const session: Session = await getOneSession(sessionID);

  changeTo === 1
    ? session.notes.push(responseObject)
    : session.npcs.push(responseObject);

  await updateSession(sessionID, session);
};
