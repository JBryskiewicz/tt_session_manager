import {
  NewNote,
  NewNpc,
  NewSession,
  Note,
  Npc,
  Session,
} from "../types/types";
import axios from "axios";

const SESSIONS_URL = "http://localhost:8081/api/sessions";
const NOTES_URL = "http://localhost:8081/api/notes";
const NPCS_URL = "http://localhost:8081/api/npcs";

/** ----- Functions resposinble for Session CRUD ----- */

export async function createNewSession(
  newSession: NewSession
): Promise<NewSession> {
  const response = await axios.post<NewSession>(SESSIONS_URL, newSession);
  return response.data;
}

export async function getSessions(): Promise<Session[]> {
  const response = await axios.get<Session[]>(SESSIONS_URL);
  return response.data;
}

export async function getSortedSessions(): Promise<Session[]> {
  const response = await axios.get<Session[]>(SESSIONS_URL);
  const sortedSessions = response.data.sort(
    (a, b) =>
      new Date(b.creationDate).getTime() - new Date(a.creationDate).getTime()
  );
  return sortedSessions;
}

export async function getOneSession(id: number): Promise<Session> {
  const response = await axios.get<Session>(`${SESSIONS_URL}/${id}`);
  return response.data;
}

export async function updateSession(
  id: number,
  session: Session
): Promise<void> {
  await axios.put<Session>(`${SESSIONS_URL}/${id}`, session);
}

export async function deleteSession(id: number): Promise<void> {
  await axios
    .delete(`${SESSIONS_URL}/${id}`)
    .then((response) =>
      console.log(
        `Deleted session with ID: ${id}, response: ${response.status}`
      )
    )
    .catch((error) => console.error(error));
}

/** ----- Functions resposinble for Notes CRUD ----- */

export async function createNewNote(newNote: NewNote): Promise<NewNote> {
  const response = await axios.post<NewNote>(NOTES_URL, newNote);
  return response.data;
}

export async function updateNote(id: number, note: Note): Promise<void> {
  await axios.put<Note>(`${NOTES_URL}/${id}`, note);
}

export async function deleteNote(id: number, sessionID: number): Promise<void> {
  const session = await getOneSession(sessionID);

  const newNoteList = session.notes.filter((note) => note.id !== id);
  const modifiedSession = session;
  modifiedSession.notes = newNoteList;

  await updateSession(sessionID, modifiedSession);

  await axios
    .delete(`${NOTES_URL}/${id}`)
    .then((response) =>
      console.log(`Deleted note with ID: ${id}, response: ${response.status}`)
    )
    .catch((error) => console.error(error));
}

/** ----- Functions resposinble for NPCs CRUD ----- */

export async function createNewNpc(newNpc: NewNpc): Promise<NewNpc> {
  const response = await axios.post<NewNpc>(NPCS_URL, newNpc);
  return response.data;
}

export async function updateNpc(id: number, npc: Npc): Promise<void> {
  await axios.put<Npc>(`${NPCS_URL}/${id}`, npc);
}

export async function deleteNpc(id: number, sessionID: number): Promise<void> {
  const session = await getOneSession(sessionID);

  const newNpcList = session.npcs.filter((npc) => npc.id !== id);
  const modifiedSession = session;
  modifiedSession.npcs = newNpcList;

  await updateSession(sessionID, modifiedSession);

  await axios
    .delete(`${NPCS_URL}/${id}`)
    .then((response) =>
      console.log(`Deleted NPC with ID: ${id}, response: ${response.status}`)
    )
    .catch((error) => console.error(error));
}
