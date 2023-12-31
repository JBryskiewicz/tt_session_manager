import { ListItem, ListItemButton, ListItemText, Paper } from "@mui/material";
import { Dispatch, SetStateAction } from "react";
import { ACCENT_COLOR } from "../../../utils/constants";

type Props = {
  id: number;
  dataId: number;
  name: string;
  setDataId: Dispatch<SetStateAction<number>>;
};

export const DetailsNotesListElement = ({
  id,
  dataId,
  name,
  setDataId,
}: Props) => {
  return (
    <ListItem
      key={id}
      className="notes-list-item"
      data-testid="session-notes-list-element"
      disablePadding
    >
      <Paper
        elevation={4}
        className={"notes-list-item_wrapper"}
        sx={id === dataId ? { backgroundColor: `${ACCENT_COLOR}` } : null}
      >
        <ListItemButton onClick={() => setDataId(id)}>
          <ListItemText primary={name} />
        </ListItemButton>
      </Paper>
    </ListItem>
  );
};
