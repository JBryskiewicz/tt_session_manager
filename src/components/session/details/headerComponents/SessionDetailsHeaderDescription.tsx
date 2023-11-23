import {Paper} from "@mui/material";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import {useSelector} from "react-redux";
import {RootState} from "../../../../redux/store";

export function SessionDetailsHeaderDescription() {

    const session = useSelector((state: RootState) => state.session);

    return (
        <Box className="session-header">
            <Paper
                elevation={4}
                className="session-description"
            >
                <Typography>
                    Description:
                </Typography>
            </Paper>
            <Paper
                elevation={4}
                className="session-description-text"
            >
                <Typography>
                    {session.description}
                </Typography>
                <Button
                    variant="contained"
                    className="edit-button"
                >
                    Edit
                </Button>
            </Paper>
        </Box>
    );
}