import { Grid } from "@mui/material";
import { useEffect } from "react";
import { DashboardSessionCard } from "./DashboardSessionCard";
import Container from "@mui/material/Container";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { ThunkDispatch } from "@reduxjs/toolkit";
import { fetchAllSessions } from "../../redux/sessionListSlice";

export function DashboardSessionList() {
  const dispatch: ThunkDispatch<RootState, undefined, any> = useDispatch();
  const sessionList = useSelector((state: RootState) => state.sessionList);

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
