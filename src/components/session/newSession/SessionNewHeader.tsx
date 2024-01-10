import Container from "@mui/material/Container";
import { SESSION_ACTION_CATEGORIES } from "../../../utils/constants";
import { HeaderDatesSection } from "../../HeaderDatesSection";
import { SessionNewInfoInputs } from "./SessionNewInfoInputs";

function SessionNewHeader() {
  return (
    <Container maxWidth="xl">
      <HeaderDatesSection
        sessionCategory={SESSION_ACTION_CATEGORIES.newSession}
      />
      <SessionNewInfoInputs />
    </Container>
  );
}

export default SessionNewHeader;
