import { User } from "../../types/types";

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
