import { Grid } from "@mui/material";
import { DashboardSessionCard } from "./DashboardSessionCard";
import { Session } from "../../types/types";

type Props = {
  sessionList: Session[];
};

export function DashboardSessionList({ sessionList }: Props) {
  return (
    <Grid
      container
      item
      spacing={6}
      rowSpacing={4}
      xs={4}
      sm={4}
      md={8}
      lg={12}
    >
      {sessionList.map((session) => (
        <DashboardSessionCard key={session.id} session={session} />
      ))}
    </Grid>
  );
}
