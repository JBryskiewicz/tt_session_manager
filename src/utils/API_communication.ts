import {Session} from "../types/types";
import axios from "axios";

const SESSIONS_URL = 'http://localhost:8081/api/sessions';

export async function getSessions(): Promise<Session[]> {
    const response = await axios.get<Session[]>(SESSIONS_URL);
    return response.data;
}

export async function getOneSession(id: string | undefined): Promise<Session> {
    const response = await axios.get<Session>(`${SESSIONS_URL}/${id}`);
    return response.data;
}

export async function updateSession(id: number, session: Session) {
    await axios.put<Session>(`${SESSIONS_URL}/${id}`, session );
}