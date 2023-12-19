import { DashboardActions } from "./DashboardActions";
import { DashboardSessionList } from "./DashboardSessionList";
import { useSelector } from "react-redux";
import { fetchAllSessions, selectSessions } from "../../redux/sessionListSlice";
import { useAppDispatch } from "../../redux/hooks";
import { useEffect } from "react";

export function Dashboard() {
  const dispatch = useAppDispatch();
  const sessionList = useSelector(selectSessions);

  useEffect(() => {
    dispatch(fetchAllSessions());
  }, [dispatch]);

  return (
    <>
      <DashboardActions />
      <DashboardSessionList sessionList={sessionList} />
    </>
  );
}
