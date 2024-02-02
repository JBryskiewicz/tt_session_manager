import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Box, Card, CardActions, Grid } from "@mui/material";
import { Session } from "../../types/types";
import { applyDate } from "../../utils/supportFunctions/dateHandlers";
import { ActionButton } from "../buttons/ActionButton";
import {
  ACTION_BUTTON_TEST_ID,
  BUTTON_LABELS_LIB,
} from "../../utils/constants";
import { ADDRESS_LIB } from "../../utils/addressLibrary";

const { view } = BUTTON_LABELS_LIB;
const { sessionDetails } = ADDRESS_LIB;

type Props = {
  session: Session;
};

export function DashboardSessionCard({ session }: Props) {
  const { id, name, description, plannedDate } = session;

  const addressPath: string = sessionDetails + id;

  return (
    <Grid item>
      <Card className="session-card" data-testid="session-card">
        <CardContent className="session-card-content">
          <Box>
            <Typography gutterBottom variant="h5" component="div">
              {name}
            </Typography>
            <Typography gutterBottom>
              {`planned: ${applyDate(plannedDate)}`}
            </Typography>
          </Box>
          <Typography variant="body2" color="text.secondary">
            {description}
          </Typography>
        </CardContent>
        <CardActions className="session-card-actions">
          <ActionButton
            label={view}
            addressPath={addressPath}
            testId={ACTION_BUTTON_TEST_ID}
          />
        </CardActions>
      </Card>
    </Grid>
  );
}
