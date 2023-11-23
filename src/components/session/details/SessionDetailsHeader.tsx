import Container from "@mui/material/Container";
import {SessionDetailsHeaderDates} from "./headerComponents/SessionDetailsHeaderDates";
import {SessionDetailsHeaderTitle} from "./headerComponents/SessionDetailsHeaderTitle";
import {SessionDetailsHeaderDescription} from "./headerComponents/SessionDetailsHeaderDescription";

export function SessionDetailsHeader() {
    return (
        <Container maxWidth="xl">
            <SessionDetailsHeaderDates/>
            <SessionDetailsHeaderTitle/>
            <SessionDetailsHeaderDescription/>
        </Container>
    );
}