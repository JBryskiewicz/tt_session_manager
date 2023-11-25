import { Session } from "../types/types";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getSortedSessions } from "../utils/API_communication";

export const fetchAllSessions = createAsyncThunk(
  "sessionList/fetchAllSessions",
  async (): Promise<Session[]> => {
    const sessionList = await getSortedSessions();
    console.log(sessionList);
    return sessionList;
  }
);

const initialState: Session[] = [];

export const sessionListSlice = createSlice({
  name: "sessionList",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // @ts-expect-error/state-must-be-declared-but-not-used
    builder.addCase(fetchAllSessions.fulfilled, (state, action) => {
      return action.payload;
    });
  },
});

export default sessionListSlice.reducer;
