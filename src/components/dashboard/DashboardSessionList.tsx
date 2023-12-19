import { Grid } from "@mui/material";
import { DashboardSessionCard } from "./DashboardSessionCard";
import Container from "@mui/material/Container";
import { Session } from "../../types/types";

type Props = {
  sessionList: Session[];
};

export function DashboardSessionList({ sessionList }: Props) {
  return (
    <Container maxWidth="xl">
      <Grid container spacing={4} rowSpacing={4}>
        {sessionList.map((session) => (
          <DashboardSessionCard key={session.id} session={session} />
        ))}
      </Grid>
    </Container>
  );
}
