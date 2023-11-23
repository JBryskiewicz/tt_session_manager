import {SessionDetailsActions} from "./SessionDetailsActions";
import {SessionDetailsHeader} from "./SessionDetailsHeader";
import {useEffect} from "react";
import {useParams} from "react-router-dom";
import {SessionDetailsBody} from "./SessionDetailsBody";
import {useDispatch} from "react-redux";
import {RootState} from "../../../redux/store";
import {fetchSession} from "../../../redux/sessionSlice";
import {ThunkDispatch} from "@reduxjs/toolkit";

type RouteParams = {
    id: string
}

export function SessionDetails() {
    const { id } = useParams<RouteParams>();
    //undefined and any??? Must be better solution
    const dispatch: ThunkDispatch<RootState, undefined, any> = useDispatch();

    useEffect(() => {
        dispatch(fetchSession({ id }))
    },[dispatch, id]);

    return (
        <>
            <SessionDetailsActions/>
            <SessionDetailsHeader/>
            <SessionDetailsBody/>
        </>
    );
}