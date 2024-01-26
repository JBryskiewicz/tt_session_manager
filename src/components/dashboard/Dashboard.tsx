import { DashboardActions } from "./DashboardActions";
import { DashboardSessionList } from "./DashboardSessionList";
import { useSelector } from "react-redux";
import { useAppDispatch } from "../../redux/hooks";
import { useEffect } from "react";
import { fetchUser, findUser } from "../../redux/userSlice";
import { auth } from "../../firebase";
import { useAuthState } from "react-firebase-hooks/auth";

export function Dashboard() {
  const dispatch = useAppDispatch();
  const [user] = useAuthState(auth);
  const email = user?.email as string;
  const userData = useSelector(findUser);

  const sessionList = userData.sessions;

  useEffect(() => {
    dispatch(fetchUser({ email }));
  }, [dispatch, email]);

  return (
    <>
      <DashboardActions />
      <DashboardSessionList sessionList={sessionList} />
    </>
  );
}
