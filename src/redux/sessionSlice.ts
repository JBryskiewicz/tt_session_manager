import { Session } from "../types/types";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getOneSession } from "../utils/API_communication";

type FetchSessionPayload = {
  id: string | undefined;
};

export const fetchSession = createAsyncThunk(
  "session/fetchSession",
  async ({ id }: FetchSessionPayload): Promise<Session> => {
    const session = await getOneSession(id);
    return session;
  }
);

const initialState: Session = {
  id: 0,
  name: "",
  description: "",
  creationDate: new Date(),
  plannedDate: null,
  editedDate: null,
  edited: false,
  notes: [{ id: 0, title: "", note: "" }],
  npcs: [{ id: 0, name: "", information: "", avatar: "" }],
};

export const sessionSlice = createSlice({
  name: "session",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // @ts-expect-error/state-must-be-declared-but-not-used
    builder.addCase(fetchSession.fulfilled, (state, action) => {
      return action.payload;
    });
  },
});

export default sessionSlice.reducer;
