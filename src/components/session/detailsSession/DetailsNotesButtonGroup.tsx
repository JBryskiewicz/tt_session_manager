import { Box, Button, Paper } from "@mui/material";
import { Dispatch, SetStateAction } from "react";
import { DetailsNotesButton } from "./DetailsNotesButton";
import { useParams } from "react-router-dom";
import { handleAddNotesButton } from "../../../utils/supportFunctions";
import { useAppDispatch } from "../../../redux/hooks";

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
  const { none, notes, npcs } = displayTabs;
  const { id } = useParams<RouteParams>();
  const dispatch = useAppDispatch();

  return (
    <Box sx={{ display: "flex", justifyContent: "space-between" }}>
      <Box className="session-body-actions">
        <Paper className="actions-label">
          <span>Display:</span>
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
      <Box sx={{ marginTop: "20px" }}>
        <Button
          variant="contained"
          className="display-btn"
          sx={{ marginLeft: "20px" }}
          onClick={() =>
            handleAddNotesButton(id, notes.tab, setDisplay, dispatch)
          }
        >
          Add {notes.label}
        </Button>
        <Button
          variant="contained"
          className="display-btn"
          sx={{ marginLeft: "20px" }}
          onClick={() =>
            handleAddNotesButton(id, npcs.tab, setDisplay, dispatch)
          }
        >
          Add {npcs.label}
        </Button>
      </Box>
    </Box>
  );
};
