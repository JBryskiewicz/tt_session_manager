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
      spacing={4}
      rowSpacing={4}
      xs={12}
      sm={12}
      md={12}
      lg={12}
      justifyContent="center"
    >
      {sessionList.map((session) => (
        <DashboardSessionCard key={session.id} session={session} />
      ))}
    </Grid>
  );
}
