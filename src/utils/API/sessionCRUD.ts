import axios from "axios";
import { NewSession, Session } from "../../types/types";
import { SESSIONS_URL } from "../libs/url";

/** ----- Functions resposinble for Session CRUD ----- */

export async function createNewSession(
  newSession: NewSession
): Promise<NewSession> {
  const response = await axios.post<NewSession>(SESSIONS_URL, newSession);
  return response.data;
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

export async function deleteSession(
  userID: number,
  sessionID: number
): Promise<void> {
  await axios
    .delete(`${SESSIONS_URL}/${userID}/delete/${sessionID}`)
    .then((response) =>
      console.log(
        `Deleted session with ID: ${sessionID}, response: ${response.status}`
      )
    )
    .catch((error) => console.error(error));
}
