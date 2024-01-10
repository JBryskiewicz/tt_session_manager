import { SESSION_ACTION_CATEGORIES } from "../../../utils/constants";
import { HeaderDatesSection } from "../../HeaderDatesSection";

function SessionNewHeader() {
  return (
    <HeaderDatesSection
      sessionCategory={SESSION_ACTION_CATEGORIES.newSession}
    />
  );
}

export default SessionNewHeader;
