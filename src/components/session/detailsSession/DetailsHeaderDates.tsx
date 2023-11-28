import { useSelector } from "react-redux";
import { Chip, Stack } from "@mui/material";
import { applyDate } from "../../../utils/supportFunctions";
import Box from "@mui/material/Box";
import { selectOneSession } from "../../../redux/sessionSlice";

export function DetailsHeaderDates() {
  const session = useSelector(selectOneSession);

  const datePlanned = new Date(session.plannedDate!);
  const dateCreated = new Date(session.creationDate!);
  const dateEdited = new Date(session.editedDate!);

  return (
    <Box className="session-dates">
      <Stack direction="row" spacing={1}>
        <Chip
          className="date-display"
          label={`planned: ${applyDate(datePlanned)}`}
        />
        <Chip
          className="date-display"
          label={`created: ${applyDate(dateCreated)}`}
        />
        {!session.edited ? null : (
          <Chip
            className="date-display"
            label={`last edited: ${applyDate(dateEdited)}`}
          />
        )}
      </Stack>
    </Box>
  );
}