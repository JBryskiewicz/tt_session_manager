import { Session } from "../types/types";
import axios from "axios";

const SESSIONS_URL = "http://localhost:8081/api/sessions";

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

export async function getOneSession(id: string | undefined): Promise<Session> {
  const response = await axios.get<Session>(`${SESSIONS_URL}/${id}`);
  return response.data;
}

export async function updateSession(id: number, session: Session) {
  await axios.put<Session>(`${SESSIONS_URL}/${id}`, session);
}
