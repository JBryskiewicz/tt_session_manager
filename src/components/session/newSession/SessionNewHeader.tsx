import { SESSION_CATEGORY_LIB } from "../../../utils/libs/constants";
import { HeaderDatesSection } from "../../datePicker/HeaderDatesSection";
import { SessionNewInfoInputs } from "./SessionNewInfoInputs";

export const SessionNewHeader = () => {
  const { newSession } = SESSION_CATEGORY_LIB;
  return (
    <>
      <HeaderDatesSection
        category={newSession}
        creationDate={null}
        plannedDate={null}
        editedDate={null}
      />
      <SessionNewInfoInputs />
    </>
  );
};
