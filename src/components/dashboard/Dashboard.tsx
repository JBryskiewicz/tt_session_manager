import { DashboardActions } from "./DashboardActions";
import { DashboardSessionList } from "./DashboardSessionList";
import { useSelector } from "react-redux";
import { useAppDispatch } from "../../redux/hooks";
import { useEffect } from "react";
import { fetchUser, findUser } from "../../redux/userSlice";
import { auth } from "../../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { CustomLoading } from "../loaders/CustomLoading";
import { useNavigate } from "react-router-dom";
import { ADDRESS_LIB } from "../../utils/libs/constants";

const { login } = ADDRESS_LIB;

export function Dashboard() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [user, loading] = useAuthState(auth);
  const email = user?.email as string;
  const userData = useSelector(findUser);

  const sessionList = userData.sessions;

  useEffect(() => {
    if (!loading) {
      dispatch(fetchUser({ email }));
    }
    if (userData.email === "") {
      navigate(login);
    }
  }, [dispatch, email, loading, navigate, userData.email]);

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
