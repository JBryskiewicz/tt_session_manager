import { configureStore } from "@reduxjs/toolkit";
import sessionReducer from "./sessionSlice";
import userSlice from "./userSlice";
import managerSlice from "./managerSlice";

export const store = configureStore({
  reducer: {
    session: sessionReducer,
    user: userSlice,
    manager: managerSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type Store = typeof store;
