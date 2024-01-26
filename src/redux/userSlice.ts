import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { User } from "../types/types";
import { findUserByEmail } from "../utils/API_communication";
import { RootState } from "./store";

type FetchUserPayload = {
  email: string;
};

export const fetchUser = createAsyncThunk(
  "user/fetchUser",
  async ({ email }: FetchUserPayload): Promise<User> => {
    const user: User = await findUserByEmail(email);
    return user;
  }
);

const initialState: { user: User } = {
  user: {
    id: 0,
    email: "",
    roles: [],
    sessions: [],
  },
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchUser.fulfilled, (state, action) => {
      state.user = action.payload;
    });
  },
});

export const findUser = (state: RootState) => state.user.user;
export default userSlice.reducer;
