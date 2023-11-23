import {Paper, TextField} from "@mui/material";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import {useSelector} from "react-redux";
import {RootState} from "../../../../redux/store";
import React, {useState} from "react";
import {updateSession} from "../../../../utils/API_communication";

export function SessionDetailsHeaderTitle() {

    const session = useSelector((state: RootState) => state.session);
    const [isEditable, setIsEditable] = useState<boolean>(false);
    const [sessionName, setSessionName] = useState<string>(session.name);

    async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        const updatedSession = {...session};
        updatedSession.name = sessionName;
        await updateSession(session.id, updatedSession);
        setIsEditable(false);
    }

    function handleCancel(){
        setIsEditable(false);
        setSessionName(session.name);
    }

    if (!isEditable) {
        return (
            <Box className="session-header">
                <Paper
                    elevation={4}
                    className="session-title"
                >
                    <Typography variant="h4">
                        Title:
                    </Typography>
                </Paper>
                <Paper
                    elevation={4}
                    className="session-title-name"
                >
                    <Typography variant="h4">
                        {session.name}
                    </Typography>
                    <Button
                        variant="contained"
                        className="edit-button"
                        onClick={() => setIsEditable(true)}
                    >
                        Edit
                    </Button>
                </Paper>
            </Box>
        );
    }

    return (
        <Box className="session-header">
            <Paper
                elevation={4}
                className="session-title"
            >
                <Typography variant="h4">
                    Title:
                </Typography>
            </Paper>
            <Paper
                elevation={4}
                className="session-title-name"
            >
                <form
                    onSubmit={handleSubmit}
                    className="title-name-form"
                >
                    <TextField
                        required
                        id="outlined-required"
                        label="Required"
                        value={sessionName}
                        onChange={(event) => setSessionName(event.target.value)}
                        className="name-input"
                    />
                    <Box sx={{display: 'flex', columnGap: '8px'}}>
                        <Button
                            variant="contained"
                            className="edit-button"
                            type="submit"
                        >
                            Save
                        </Button>
                        <Button
                            variant="contained"
                            className="edit-button"
                            onClick={handleCancel}
                        >
                            Cancel
                        </Button>
                    </Box>
                </form>

            </Paper>
        </Box>
    );
}