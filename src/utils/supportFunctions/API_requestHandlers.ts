import {
  NewNote,
  NewNpc,
  NewSession,
  Note,
  Npc,
  Session,
  User,
} from "../../types/types";
import { updateUser } from "../API/userCRUD";
import { createNewNote, deleteNote, updateNote } from "../API/noteCRUD";
import { createNewNpc, deleteNpc, updateNpc } from "../API/npcCRUD";
import {
  createNewSession,
  deleteSession,
  getOneSession,
  updateSession,
} from "../API/sessionCRUD";
import { SESSION_FIELDS_CATEGORIES } from "../constants";

const { title, note } = SESSION_FIELDS_CATEGORIES;

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
): Promise<Note | Npc> => {
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

  return responseObject;
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
