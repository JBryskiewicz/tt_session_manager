import Container from "@mui/material/Container";
import { SESSION_ACTION_CATEGORIES } from "../../../utils/constants";
import { HeaderDatesSection } from "../../HeaderDatesSection";
import { SessionNewInfoInputs } from "./SessionNewInfoInputs";

export const SessionNewHeader = () => {
  return (
    <Container maxWidth="xl">
      <HeaderDatesSection
        sessionCategory={SESSION_ACTION_CATEGORIES.newSession}
      />
      <SessionNewInfoInputs />
    </Container>
  );
};
