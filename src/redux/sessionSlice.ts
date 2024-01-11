import { Session } from "../types/types";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getOneSession } from "../utils/API_communication";
import { RootState } from "./store";

type FetchSessionPayload = {
  id: string | undefined;
};

export const fetchSession = createAsyncThunk(
  "session/fetchSession",
  async ({ id }: FetchSessionPayload): Promise<Session> => {
    const session = await getOneSession(parseInt(id as string));
    return session;
  }
);

const initialState: { session: Session } = {
  session: {
    id: 0,
    name: "",
    description: "",
    creationDate: new Date().toISOString(),
    plannedDate: null,
    editedDate: null,
    edited: false,
    notes: [{ id: 0, name: "", information: "" }],
    npcs: [{ id: 0, name: "", information: "", avatar: "" }],
  },
};

export const sessionSlice = createSlice({
  name: "session",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchSession.fulfilled, (state, action) => {
      state.session = action.payload;
    });
  },
});

export const selectOneSession = (state: RootState) => state.session.session;
export default sessionSlice.reducer;
