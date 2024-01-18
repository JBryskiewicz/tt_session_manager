import { useSelector } from "react-redux";
import { Chip, Stack } from "@mui/material";
import { applyDate } from "../utils/supportFunctions";
import Box from "@mui/material/Box";
import { selectOneSession } from "../redux/sessionSlice";
import { DATE_TEST_IDS } from "../utils/constants";

type Props = {
  creationDate: string | null;
  plannedDate: string | null;
  editedDate: string | null;
};

export const HeaderDatesSection = ({
  creationDate,
  plannedDate,
  editedDate,
}: Props) => {
  const session = useSelector(selectOneSession);
  const { creationDateID, plannedDateID, editDateID } = DATE_TEST_IDS;

  const isCreatedNull = creationDate === null;
  const isEdited = session.edited;

  const plannedDateToApply = isCreatedNull
    ? new Date().toISOString()
    : plannedDate;

  return (
    <Box className="session-dates">
      <Stack direction="row" spacing={1}>
        <Chip
          className="date-display"
          data-testid={plannedDateID}
          label={`planned: ${applyDate(plannedDateToApply)}`}
        />
        {isCreatedNull ? null : (
          <Chip
            className="date-display"
            data-testid={creationDateID}
            label={`created: ${applyDate(creationDate)}`}
          />
        )}
        {!isEdited || isCreatedNull ? null : (
          <Chip
            className="date-display"
            data-testid={editDateID}
            label={`last edited: ${applyDate(editedDate)}`}
          />
        )}
      </Stack>
    </Box>
  );
};
