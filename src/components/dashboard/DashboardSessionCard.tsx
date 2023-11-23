import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import {Card, CardActions, Grid} from "@mui/material";
import {Session} from "../../types/types";
import {Link} from "react-router-dom";
import {applyDate} from "../../utils/supportFunctions";

type Props = {
    session: Session;
}

export function DashboardSessionCard({session}: Props) {
    const datePlanned = new Date(session.plannedDate!);

    return (
        <Grid item xs={4}>
            <Card className="session-card">
                <CardContent className="session-card-content">
                    <div>
                        <Typography gutterBottom variant="h5" component="div">
                            {session.name}
                        </Typography>
                        <Typography gutterBottom>
                            planned: {applyDate(datePlanned)}
                        </Typography>
                    </div>
                    <Typography variant="body2" color="text.secondary">
                        {session.description}
                    </Typography>
                </CardContent>
                <CardActions className="session-card-actions">
                    <Link to={`/session-details/${session.id}`}>
                        <Button
                            className="card-action-btn"
                            variant="contained"
                            size="small"
                        >
                            View
                        </Button>
                    </Link>
                </CardActions>
            </Card>
        </Grid>
    );
}

