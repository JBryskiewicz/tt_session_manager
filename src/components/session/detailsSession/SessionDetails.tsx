import { DetailsHeader } from "./DetailsHeader";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { DetailsNotesBody } from "./DetailsNotesBody";
import { fetchSession } from "../../../redux/sessionSlice";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import { ActionButtonSection } from "../../ActionButtonSection";
import {
  ADDRESS_LIB,
  ERROR_MESSAGE_LIB,
  SESSION_CATEGORY_LIB,
} from "../../../utils/libs/constants";
import { fetchUser, findUser } from "../../../redux/userSlice";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../../firebase";
import { checkUserSessionOwnership } from "../../../utils/supportFunctions/userHandlers";
import { CustomLoading } from "../../loaders/CustomLoading";
import { ErrorPageView } from "../../errorPages/ErrorPageView";

const { sessionNotFound } = ERROR_MESSAGE_LIB;
const { details } = SESSION_CATEGORY_LIB;
const { login } = ADDRESS_LIB;

type RouteParams = {
  id: string;
};

export function SessionDetails() {
  const { id } = useParams<RouteParams>();
  const [user, loading] = useAuthState(auth);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const userData = useAppSelector(findUser);

  const sessionID = parseInt(id as string);
  const email = user?.email as string;

  useEffect(() => {
    dispatch(fetchSession({ id }));
    if (!loading) {
      dispatch(fetchUser({ email }));
    }
    if (userData.email === "") {
      navigate(login);
    }
  }, [dispatch, id, email, loading, userData.email, navigate]);

  if (loading || !userData) {
    return <CustomLoading />;
  }

  if (!checkUserSessionOwnership(userData, sessionID) && userData.id !== 0) {
    return <ErrorPageView errorMsg={sessionNotFound} />;
  }

  return (
    <>
      <ActionButtonSection sessionCategory={details} toDelete={sessionID} />
      <DetailsHeader />
      <DetailsNotesBody />
    </>
  );
}
