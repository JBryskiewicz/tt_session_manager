import { DetailsActions } from "./DetailsActions";
import { DetailsHeader } from "./DetailsHeader";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { DetailsNotesBody } from "./DetailsNotesBody";
import { fetchSession } from "../../../redux/sessionSlice";
import { useAppDispatch } from "../../../redux/hooks";

type RouteParams = {
  id: string;
};

export function SessionDetails() {
  const { id } = useParams<RouteParams>();
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchSession({ id }));
  }, [dispatch, id]);

  return (
    <>
      <DetailsActions />
      <DetailsHeader />
      <DetailsNotesBody />
    </>
  );
}
