import { HeaderDatesSection } from "../../HeaderDatesSection";
import { SessionNewInfoInputs } from "./SessionNewInfoInputs";

export const SessionNewHeader = () => {
  return (
    <>
      <HeaderDatesSection
        creationDate={null}
        plannedDate={null}
        editedDate={null}
      />
      <SessionNewInfoInputs />
    </>
  );
};
