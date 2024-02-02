import { Dispatch, SetStateAction } from "react";
import { SESSION_TEXT_FIELDS_CATEGORIES_LIB } from "../constants";

const { title, desc, note, npc } = SESSION_TEXT_FIELDS_CATEGORIES_LIB;

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
  if (category === title || category === note || category == npc) {
    setIsEditable((prevState) => [changeStateTo, ...prevState.slice(1)]);
  }
  if (category === desc) {
    setIsEditable((prevState) => [
      prevState[0],
      changeStateTo,
      ...prevState.slice(2),
    ]);
  }
};

/** Set value of a text field in an input form and limit amount of characters
 * user can write withing given limit of characters
 */
export const setCharCounter = (
  value: string,
  setValue: Dispatch<SetStateAction<string>>,
  setChars: Dispatch<SetStateAction<number>>,
  limit: number
): void => {
  if (value.length >= limit) {
    setValue(value.substring(0, limit));
  }
  setChars(value.length);
};
