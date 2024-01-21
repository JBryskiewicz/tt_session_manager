import { SESSION_CATEGORY } from "../../../utils/constants";
import { HeaderDatesSection } from "../../datePicker/HeaderDatesSection";
import { SessionNewInfoInputs } from "./SessionNewInfoInputs";

export const SessionNewHeader = () => {
  const { newSession } = SESSION_CATEGORY;
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
