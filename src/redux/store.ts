import { configureStore } from "@reduxjs/toolkit";
import sessionReducer from "./sessionSlice";
import userReducer from "./userSlice";
import managerReducer from "./managerSlice";

export const store = configureStore({
  reducer: {
    session: sessionReducer,
    user: userReducer,
    manager: managerReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type Store = typeof store;
