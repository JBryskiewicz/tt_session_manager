import axios from "axios";
import { NewNote, Note } from "../../types/types";
import { getOneSession, updateSession } from "./sessionCRUD";
import { NOTES_URL } from "../libs/url";

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
