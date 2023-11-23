import {Grid} from "@mui/material";
import {useEffect, useState} from "react";
import {Session} from "../../types/types";
import {sortAndSetSessions} from "../../utils/supportFunctions";
import {DashboardSessionCard} from "./DashboardSessionCard";
import Container from "@mui/material/Container";

export function DashboardSessionList() {
    const [sessions, setSessions] = useState<Session[]>([]);

    useEffect(() => {
        sortAndSetSessions(setSessions);
    }, []);

    return (
        <Container maxWidth="xl">
            <Grid container spacing={4} rowSpacing={4}>
                {sessions.map((session) => (
                    <DashboardSessionCard key={session.id} session={session}/>
                ))}
            </Grid>
        </Container>
    );
}

