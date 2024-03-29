import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Manager, Note, Npc } from "../types/types";

export const initialState: Manager = {
  currentDataList: [
    {
      id: 0,
      name: "name",
      information: "info",
    },
  ],
  selected: 0,
};

const managerSlice = createSlice({
  name: "manager",
  initialState,
  reducers: {
    setSelected: (state, action: PayloadAction<number>) => {
      state.selected = action.payload;
    },
    setCurrentDataList: (state, action: PayloadAction<Note[] | Npc[]>) => {
      state.currentDataList = action.payload;
    },
    RESET_STATE: () => {
      return initialState;
    },
  },
});

export default managerSlice.reducer;
export const { setSelected, setCurrentDataList, RESET_STATE } =
  managerSlice.actions;
