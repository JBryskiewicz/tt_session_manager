import {
  NewNote,
  NewNpc,
  NewSession,
  Note,
  Npc,
  Session,
  User,
} from "../types/types";
import { Dispatch, SetStateAction } from "react";
import {
  createNewNote,
  createNewNpc,
  createNewSession,
  deleteNote,
  deleteNpc,
  deleteSession,
  getOneSession,
  updateNote,
  updateNpc,
  updateSession,
  updateUser,
} from "./API_communication";
import { SESSION_FIELDS_CATEGORIES } from "./constants";

const { title, desc, note, npc } = SESSION_FIELDS_CATEGORIES;

/**
 * Takes string argument from Data to ISO string and returns it
 * formatted to YYYY-mm-dd standard
 */
export function applyDate(date: string | null): string {
  if (date === null) {
    return "Session is not planned";
  }
  const result = date.substring(0, 10);
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
  description: string,
  user: User
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
  const updatedUser: User = { ...user };

  const returnedSession: Session = (await createNewSession(
    newSession
  )) as Session;
  updatedUser.sessions = [...updatedUser.sessions, returnedSession];
  await updateUser(user.id, updatedUser);

  return returnedSession;
};

/**
 *  Creates new note or npcs entry, saves it to database. Returned DB object
 *  is added to proper collection and session itself is updated.
 */
export const handleAddNotesButton = async (
  sessionID: number,
  changeTo: number
): Promise<void> => {
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

/** Send request to API to delete existing session with it's children */
export const handleSessionDelete = async (
  userID: number,
  toDelete: number
): Promise<void> => {
  await deleteSession(userID, toDelete);
};

/** Check if function operates on note or npc,
 * then send request to API to delete from session and DB by ID
 */
export const handleNoteDelete = async (
  noteID: number,
  sessionID: number,
  category: string
): Promise<void> => {
  category === note
    ? await deleteNote(noteID, sessionID)
    : await deleteNpc(noteID, sessionID);
};

/** Set value of a text field in an input form and limit amount of characters
 * user can write withing given limit of characters
 */
export const setCharCounter = (
  value: string,
  setValue: Dispatch<SetStateAction<string>>,
  setChars: Dispatch<SetStateAction<number>>,
  limit: number
): void => {
  if (value.length >= limit) {
    setValue(value.substring(0, limit));
  }
  setChars(value.length);
};

/** Check if user's session list contains session with ID user is attempting
 *  to access and return boolean value accordingly
 */
export const checkUserSessionOwnership = (user: User, id: number): boolean => {
  const result = user.sessions.find((session) => session.id === id);
  if (result !== undefined) {
    return true;
  }
  return false;
};
