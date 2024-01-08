import { useSelector } from "react-redux";
import { Chip, Stack } from "@mui/material";
import { applyDate } from "../../../utils/supportFunctions";
import Box from "@mui/material/Box";
import { selectOneSession } from "../../../redux/sessionSlice";

export const DetailsHeaderDates = () => {
  const session = useSelector(selectOneSession);
  return (
    <Box className="session-dates">
      <Stack direction="row" spacing={1}>
        <Chip
          className="date-display"
          label={`planned: ${applyDate(session.plannedDate)}`}
        />
        <Chip
          className="date-display"
          label={`created: ${applyDate(session.creationDate)}`}
        />
        {!session.edited ? null : (
          <Chip
            className="date-display"
            label={`last edited: ${applyDate(session.editedDate)}`}
          />
        )}
      </Stack>
    </Box>
  );
};
