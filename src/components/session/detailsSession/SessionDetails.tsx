import { DetailsActions } from "./DetailsActions";
import { DetailsHeader } from "./DetailsHeader";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { DetailsNotesBody } from "./DetailsNotesBody";
import { useDispatch } from "react-redux";
import { RootState } from "../../../redux/store";
import { fetchSession } from "../../../redux/sessionSlice";
import { ThunkDispatch } from "@reduxjs/toolkit";

type RouteParams = {
  id: string;
};

export function SessionDetails() {
  const { id } = useParams<RouteParams>();
  //undefined and any??? Must be better solution
  const dispatch: ThunkDispatch<RootState, undefined, any> = useDispatch();

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
