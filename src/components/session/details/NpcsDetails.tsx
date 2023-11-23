import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import {Paper} from "@mui/material";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Box from "@mui/material/Box";
import {useSelector} from "react-redux";
import {RootState} from "../../../redux/store";
import {useEffect, useState} from "react";

export function NpcsDetails() {

    const npcs = useSelector((state: RootState) => state.session.npcs);
    const [npcId, setNpcId] = useState<number>(npcs[0].id);
    const [npc, setNpc] = useState<string>(npcs[0].information);

    useEffect(() => {
        npcs.forEach((npc) => {
            if (npc.id === npcId) {
                setNpc(npc.information);
            }
        })
    }, [npcId]);

    return (
        <Box className="session-body-notes">
            <List className="session-body-notes-list">
                {npcs.map((npc) => (
                    <ListItem key={npc.id} className="notes-list-item" disablePadding>
                        <Paper elevation={4} className={"notes-list-item_wrapper"}>
                            <ListItemButton onClick={() => setNpcId(npc.id)}>
                                <ListItemText primary={npc.name}/>
                            </ListItemButton>
                        </Paper>
                    </ListItem>
                ))}
            </List>
            <Box className="note-box">
                <Paper elevation={4} className="note-box-text">
                    <div>{npc}</div>
                </Paper>
            </Box>
        </Box>
    );
}