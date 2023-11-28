import { Grid } from "@mui/material";
import { useEffect } from "react";
import { DashboardSessionCard } from "./DashboardSessionCard";
import Container from "@mui/material/Container";
import { useSelector } from "react-redux";
import { fetchAllSessions, selectSessions } from "../../redux/sessionListSlice";
import { useAppDispatch } from "../../redux/hooks";

export function DashboardSessionList() {
  const dispatch = useAppDispatch();
  const sessionList = useSelector(selectSessions);

  useEffect(() => {
    dispatch(fetchAllSessions());
  }, [dispatch]);

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
