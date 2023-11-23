import Box from "@mui/material/Box";
import {Link} from "react-router-dom";
import Button from "@mui/material/Button";

export function SessionNewActions() {
    return (
        <Box sx={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
            <Box className="dashboard-actions">
                <Link to="/">
                    <Button
                        variant="contained"
                        className="actions-button"
                    >
                        Exit to dashboard
                    </Button>
                </Link>
            </Box>
        </Box>
    );
}