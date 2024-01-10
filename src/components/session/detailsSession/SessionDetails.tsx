import { DetailsHeader } from "./DetailsHeader";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { DetailsNotesBody } from "./DetailsNotesBody";
import { fetchSession } from "../../../redux/sessionSlice";
import { useAppDispatch } from "../../../redux/hooks";
import { ActionButtonSection } from "../../ActionButtonSection";
import { SESSION_ACTION_CATEGORIES } from "../../../utils/constants";

type RouteParams = {
  id: string;
};

export function SessionDetails() {
  const { id } = useParams<RouteParams>();
  const dispatch = useAppDispatch();
  const details = SESSION_ACTION_CATEGORIES.details;
  const toDelete = parseInt(id as string);

  useEffect(() => {
    dispatch(fetchSession({ id }));
  }, [dispatch, id]);

  return (
    <>
      <ActionButtonSection sessionCategory={details} toDelete={toDelete} />
      <DetailsHeader />
      <DetailsNotesBody />
    </>
  );
}
