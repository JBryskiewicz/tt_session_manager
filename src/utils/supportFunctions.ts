import {Session} from "../types/types";
import {Dispatch, SetStateAction} from "react";
import {getSessions} from "./API_communication";

export function sortAndSetSessions(setSessions: Dispatch<SetStateAction<Session[]>>) {
    getSessions().then(data => {
        const sortedSessions = data.sort((a, b) =>
            new Date(b.creationDate).getTime() - new Date(a.creationDate).getTime()
        );
        setSessions(sortedSessions);
    });
}

export function applyDate(date: Date) {
    if (date === null) {
        return 'Session is not planned'
    }
    return `${date.getFullYear()}-${(date.getMonth() + 1)
        .toString()
        .padStart(2, '0')}-${date.getDate().toString().padStart(2, '0')}`;
}