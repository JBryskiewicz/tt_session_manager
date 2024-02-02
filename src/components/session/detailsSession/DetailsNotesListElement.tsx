import { ListItem, ListItemButton, ListItemText, Paper } from "@mui/material";
import { NOTES_LIST_TEST_ID } from "../../../utils/libs/constants";
import { ACCENT_COLOR } from "../../../sx/colors";
import { setSelected } from "../../../redux/managerSlice";
import { useAppDispatch } from "../../../redux/hooks";
import { useSelector } from "react-redux";
import { RootState } from "../../../redux/store";

type Props = {
  id: number;
  name: string;
};

export const DetailsNotesListElement = ({ id, name }: Props) => {
  const { selected } = useSelector((state: RootState) => state.manager);
  const dispatch = useAppDispatch();

  return (
    <ListItem
      key={id}
      className="notes-list-item"
      data-testid={NOTES_LIST_TEST_ID}
      disablePadding
    >
      <Paper
        elevation={4}
        className={"notes-list-item_wrapper"}
        sx={id === selected ? { backgroundColor: `${ACCENT_COLOR}` } : null}
      >
        <ListItemButton onClick={() => dispatch(setSelected(id))}>
          <ListItemText primary={name} />
        </ListItemButton>
      </Paper>
    </ListItem>
  );
};
