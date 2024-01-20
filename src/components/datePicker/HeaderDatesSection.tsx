import { useSelector } from "react-redux";
import { Grid } from "@mui/material";
import { applyDate } from "../../utils/supportFunctions";
import Box from "@mui/material/Box";
import { selectOneSession } from "../../redux/sessionSlice";
import { DATE_TEST_IDS } from "../../utils/constants";
import { useState } from "react";
import { DateChip } from "./DateChip";
import { CustomDatePicker } from "./CustomDatePicker";

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
  const [clicked, setClicked] = useState<boolean>(false);
  const [newPlannedDate, setNewPlannedDate] = useState<string>(
    new Date().toISOString()
  );
  const session = useSelector(selectOneSession);
  const { creationDateID, plannedDateID, editDateID } = DATE_TEST_IDS;

  const isCreatedNull = creationDate === null;
  const isEdited = session.edited;

  return (
    <Box className="date-chip-box">
      <Grid container item direction="row" xs={1} sm={1} md={12} lg={12}>
        <DateChip
          testID={plannedDateID}
          label={`planned: ${applyDate(plannedDate)}`}
          isButton={true}
          setClicked={setClicked}
        />
        {clicked ? <CustomDatePicker setNewDate={setNewPlannedDate} /> : null}
        <DateChip
          testID={creationDateID}
          label={`created: ${applyDate(
            isCreatedNull ? new Date().toISOString() : creationDate
          )}`}
        />
        {!isEdited || isCreatedNull ? null : (
          <DateChip
            testID={editDateID}
            label={`last edited: ${applyDate(editedDate)}`}
          />
        )}
      </Grid>
    </Box>
  );
};
