import { Session } from "../types/types";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getSortedSessions } from "../utils/API_communication";
import { RootState } from "./store";

export const fetchAllSessions = createAsyncThunk(
  "sessionList/fetchAllSessions",
  async (): Promise<Session[]> => {
    const sessionList = await getSortedSessions();
    return sessionList;
  }
);

const initialState: {
  sessions: Session[];
} = {
  sessions: [],
};

export const sessionListSlice = createSlice({
  name: "sessionList",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchAllSessions.fulfilled, (state, action) => {
      state.sessions = action.payload;
    });
  },
});

export const selectSessions = (state: RootState) => state.sessionList.sessions;
export default sessionListSlice.reducer;
