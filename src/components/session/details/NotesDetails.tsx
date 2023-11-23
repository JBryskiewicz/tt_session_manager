import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import {Paper} from "@mui/material";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Box from "@mui/material/Box";
import {useSelector} from "react-redux";
import {RootState} from "../../../redux/store";
import {useEffect, useState} from "react";

export function NotesDetails() {

    const notes = useSelector((state: RootState) => state.session.notes);
    const [noteId, setNoteId] = useState<number>(notes[0].id);
    const [note, setNote] = useState<string>(notes[0].note);

    useEffect(() => {
        notes.forEach((note) => {
            if (note.id === noteId) {
                setNote(note.note);
            }
        })
    }, [noteId]);

    return (
        <Box className="session-body-notes">
            <List className="session-body-notes-list">
                {notes.map((note) => (
                    <ListItem key={note.id} className="notes-list-item" disablePadding>
                        <Paper elevation={4} className={"notes-list-item_wrapper"}>
                            <ListItemButton onClick={() => setNoteId(note.id)}>
                                <ListItemText primary={note.title}/>
                            </ListItemButton>
                        </Paper>
                    </ListItem>
                ))}
            </List>
            <Box className="note-box">
                <Paper elevation={4} className="note-box-text">
                    <div>{ note }</div>
                </Paper>
            </Box>
        </Box>
    );
}
