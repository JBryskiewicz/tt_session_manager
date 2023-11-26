import { Session } from "../types/types";
import { Dispatch, SetStateAction } from "react";
import { updateSession } from "./API_communication";
import { SESSION_FIELDS } from "./constants";

const { title } = SESSION_FIELDS;

/**
 * This function takes Date data type argument and returns it in form of
 * string formatted to YYYY.mm.dd standard
 */
export function applyDate(date: Date) {
  if (date === null) {
    return "Session is not planned";
  }
  return `${date.getFullYear()}-${(date.getMonth() + 1)
    .toString()
    .padStart(2, "0")}-${date.getDate().toString().padStart(2, "0")}`;
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
  category === title
    ? setIsEditable((prevState) => [changeStateTo, ...prevState.slice(1)])
    : setIsEditable((prevState) => [
        prevState[0],
        changeStateTo,
        ...prevState.slice(2),
      ]);
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
