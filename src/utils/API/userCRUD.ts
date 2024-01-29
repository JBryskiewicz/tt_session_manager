import { NewUser, User } from "../../types/types";
import axios from "axios";

const USER_URL = "http://localhost:8081/api/users";

/** ----- Functions resposinble for creating & finding users ----- */

export async function createUser(user: NewUser): Promise<void> {
  await axios.post<NewUser>(USER_URL, user);
}

export async function findUserByEmail(email: string): Promise<User> {
  const response = await axios.get<User>(`${USER_URL}/${email}`);
  const userData = response.data;
  const sortedSessions = userData.sessions.sort(
    (a, b) =>
      new Date(b.creationDate).getTime() - new Date(a.creationDate).getTime()
  );
  userData.sessions = sortedSessions;
  return userData;
}

export async function updateUser(id: number, user: User): Promise<void> {
  await axios.put<User>(`${USER_URL}/${id}`, user);
}
