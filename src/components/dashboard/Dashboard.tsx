import { DashboardActions } from "./DashboardActions";
import { DashboardSessionList } from "./DashboardSessionList";
import { useSelector } from "react-redux";
import { useAppDispatch } from "../../redux/hooks";
import { useEffect } from "react";
import { fetchUser, findUser } from "../../redux/userSlice";
import { auth } from "../../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { CustomLoading } from "../loaders/CustomLoading";

export function Dashboard() {
  const dispatch = useAppDispatch();
  const [user, loading] = useAuthState(auth);
  const email = user?.email as string;
  const userData = useSelector(findUser);

  const sessionList = userData.sessions;

  useEffect(() => {
    if (!loading) {
      dispatch(fetchUser({ email }));
    }
  }, [dispatch, email, loading]);

  if (loading || userData.id === 0) {
    return <CustomLoading />;
  }

  return (
    <>
      <DashboardActions />
      <DashboardSessionList sessionList={sessionList} />
    </>
  );
}
