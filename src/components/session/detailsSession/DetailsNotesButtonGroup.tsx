import { Box, Grid, Paper } from "@mui/material";
import { Dispatch, SetStateAction, useState } from "react";
import { DetailsNotesButton } from "../../buttons/DetailsNotesButton";
import { useParams } from "react-router-dom";
import { handleAddNotesButton } from "../../../utils/supportFunctions/API_requestHandlers";
import { useAppDispatch } from "../../../redux/hooks";
import { BUTTON_LABELS_LIB } from "../../../utils/libs/constants";
import { fetchSession } from "../../../redux/sessionSlice";
import { AddEntryButton } from "../../buttons/AddEntryButton";
import { setSelected } from "../../../redux/managerSlice";

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
  const [popout, setPopout] = useState<boolean>(false);
  const { id } = useParams<RouteParams>();
  const dispatch = useAppDispatch();

  const { addNote, addNpc } = BUTTON_LABELS_LIB;
  const { none, notes, npcs } = displayTabs;

  const handleAddEntry = async (category: string): Promise<void> => {
    const tab = category === notes.label ? notes.tab : npcs.tab;

    const response = await handleAddNotesButton(parseInt(id as string), tab);

    await dispatch(fetchSession({ id }));
    setDisplay(tab);
    setTimeout(() => {
      dispatch(setSelected(response.id));
    }, 10);
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
          label={addNote}
          popout={popout}
          setPopout={setPopout}
          onClick={() => handleAddEntry(notes.label)}
        />
        <AddEntryButton
          label={addNpc}
          popout={popout}
          setPopout={setPopout}
          onClick={() => handleAddEntry(npcs.label)}
        />
      </Box>
    </Grid>
  );
};
