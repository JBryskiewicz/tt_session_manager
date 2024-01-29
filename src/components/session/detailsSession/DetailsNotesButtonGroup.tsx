import { Box, Grid, Paper } from "@mui/material";
import { Dispatch, SetStateAction } from "react";
import { DetailsNotesButton } from "../../buttons/DetailsNotesButton";
import { useParams } from "react-router-dom";
import { handleAddNotesButton } from "../../../utils/supportFunctions/API_requestHandlers";
import { useAppDispatch } from "../../../redux/hooks";
import { EDIT_STATE_BUTTON_LABELS } from "../../../utils/constants";
import { fetchSession } from "../../../redux/sessionSlice";
import { AddEntryButton } from "../../buttons/AddEntryButton";

type Props = {
  display: number;
  setDisplay: Dispatch<SetStateAction<number>>;
};

type RouteParams = {
  id: string;
};

const displayTabs = {
  none: { label: "none", tab: 0 },
  notes: { label: "notes", tab: 1 },
  npcs: { label: "npcs", tab: 2 },
};

export const DetailsNotesButtonGroup = ({ display, setDisplay }: Props) => {
  const { id } = useParams<RouteParams>();
  const dispatch = useAppDispatch();

  const { addNote, addNpc } = EDIT_STATE_BUTTON_LABELS;
  const { none, notes, npcs } = displayTabs;

  const handleAddEntry = async (category: string): Promise<void> => {
    const tab = category === notes.label ? notes.tab : npcs.tab;

    await handleAddNotesButton(parseInt(id as string), tab);

    await dispatch(fetchSession({ id }));

    setDisplay(tab);
  };

  return (
    <Grid
      container
      item
      xs={4}
      sm={4}
      md={12}
      lg={12}
      sx={{ display: "flex", justifyContent: "space-between" }}
    >
      <Box className="session-body-actions">
        <Paper className="actions-label">
          <span>Display</span>
        </Paper>
        <DetailsNotesButton
          label={none.label}
          changeDisplayTo={none.tab}
          selectedWhen={none.tab}
          display={display}
          setDisplay={setDisplay}
        />
        <DetailsNotesButton
          label={notes.label}
          changeDisplayTo={notes.tab}
          selectedWhen={notes.tab}
          display={display}
          setDisplay={setDisplay}
        />
        <DetailsNotesButton
          label={npcs.label}
          changeDisplayTo={npcs.tab}
          selectedWhen={npcs.tab}
          display={display}
          setDisplay={setDisplay}
        />
      </Box>
      <Box className="session-body-actions">
        <Paper className="actions-label">
          <span>Create</span>
        </Paper>
        <AddEntryButton
          onClick={() => handleAddEntry(notes.label)}
          label={addNote}
        />
        <AddEntryButton
          onClick={() => handleAddEntry(npcs.label)}
          label={addNpc}
        />
      </Box>
    </Grid>
  );
};
