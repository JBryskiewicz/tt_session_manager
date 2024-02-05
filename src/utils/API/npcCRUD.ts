import axios from "axios";
import { NewNpc, Npc } from "../../types/types";
import { getOneSession, updateSession } from "./sessionCRUD";

const NPCS_URL = "https://dms-demo-api.onrender.com/api/npcs";

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
