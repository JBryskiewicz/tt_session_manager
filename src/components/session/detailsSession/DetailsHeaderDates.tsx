import { useSelector } from "react-redux";
import { Chip, Stack } from "@mui/material";
import { applyDate } from "../../../utils/supportFunctions";
import Box from "@mui/material/Box";
import { selectOneSession } from "../../../redux/sessionSlice";

type Props = {
  creationDate: string;
  plannedDate: string | null;
  editedDate: string | null;
};

export const DetailsHeaderDates = ({
  creationDate,
  plannedDate,
  editedDate,
}: Props) => {
  const session = useSelector(selectOneSession);
  return (
    <Box className="session-dates">
      <Stack direction="row" spacing={1}>
        <Chip
          className="date-display"
          label={`planned: ${applyDate(plannedDate)}`}
        />
        <Chip
          className="date-display"
          label={`created: ${applyDate(creationDate)}`}
        />
        {!session.edited ? null : (
          <Chip
            className="date-display"
            label={`last edited: ${applyDate(editedDate)}`}
          />
        )}
      </Stack>
    </Box>
  );
};
