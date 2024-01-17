import { useSelector } from "react-redux";
import { Chip, Stack } from "@mui/material";
import { applyDate } from "../utils/supportFunctions";
import Box from "@mui/material/Box";
import { selectOneSession } from "../redux/sessionSlice";
import { DATE_TEST_IDS, SESSION_ACTION_CATEGORIES } from "../utils/constants";

type Props = {
  sessionCategory: string;
  creationDate?: string;
  plannedDate?: string | null;
  editedDate?: string | null;
};

export const HeaderDatesSection = ({
  sessionCategory,
  creationDate,
  plannedDate,
  editedDate,
}: Props) => {
  const session = useSelector(selectOneSession);
  const { creationDateID, plannedDateID, editDateID } = DATE_TEST_IDS;

  const isCategoryNew =
    sessionCategory === SESSION_ACTION_CATEGORIES.newSession;
  const isEdited = !session.edited;

  const plannedDateToApply = isCategoryNew
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
        {isCategoryNew ? null : (
          <Chip
            className="date-display"
            data-testid={creationDateID}
            label={`created: ${applyDate(creationDate)}`}
          />
        )}
        {isEdited || isCategoryNew ? null : (
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
