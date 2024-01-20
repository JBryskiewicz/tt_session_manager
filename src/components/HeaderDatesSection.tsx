import { useSelector } from "react-redux";
import { Chip, Grid } from "@mui/material";
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

  return (
    <Box className="date-chip-box">
      <Grid container item direction="row" xs={1} sm={1} md={12} lg={12}>
        <Chip
          data-testid={plannedDateID}
          label={`planned: ${applyDate(plannedDate)}`}
          className="date-chip-element"
        />
        <Chip
          data-testid={creationDateID}
          label={`created: ${applyDate(
            isCreatedNull ? new Date().toISOString() : creationDate
          )}`}
          className="date-chip-element"
        />
        {!isEdited || isCreatedNull ? null : (
          <Chip
            data-testid={editDateID}
            label={`last edited: ${applyDate(editedDate)}`}
            className="date-chip-element"
          />
        )}
      </Grid>
    </Box>
  );
};
