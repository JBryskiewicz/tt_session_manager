import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import {Link} from "react-router-dom";

export const DashboardActions = () => {
    return (
        <Box className="dashboard-actions">
            <Link to="/new-session">
                <Button
                    variant="contained"
                    className="actions-button"
                >
                    New Session
                </Button>
            </Link>
        </Box>
    );
};