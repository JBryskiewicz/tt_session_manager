import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import {Paper} from "@mui/material";
import {useState} from "react";
import {NotesDetails} from "./NotesDetails";
import {NpcsDetails} from "./NpcsDetails";

export function SessionDetailsBody() {

    const [display, setDisplay] = useState<number>(0)

    return (
        <Container maxWidth="xl" className="session-body">
            <Box className="session-body-actions">
                <Paper className="actions-label">
                    <span>Display:</span>
                </Paper>
                <Button
                    disabled
                    variant="contained"
                    className={`display-btn ${display === 0 ? 'selected' : ''}`}
                >
                    None
                </Button>
                <Button
                    variant="contained"
                    className={`display-btn ${display === 1 ? 'selected' : ''}`}
                    onClick={() => setDisplay(1)}
                >
                    Notes
                </Button>
                <Button
                    variant="contained"
                    className={`display-btn ${display === 2 ? 'selected' : ''}`}
                    onClick={() => setDisplay(2)}
                >
                    NPCs
                </Button>
            </Box>
            {display === 1 ? <NotesDetails/> : null}
            {display === 2 ? <NpcsDetails/> : null}
        </Container>
    );
}