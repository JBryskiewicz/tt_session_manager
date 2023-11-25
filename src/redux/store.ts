import { configureStore } from "@reduxjs/toolkit";
import sessionReducer from "./sessionSlice";
import sessionListReducer from "./sessionListSlice";

export const store = configureStore({
  reducer: {
    session: sessionReducer,
    sessionList: sessionListReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type Store = typeof store;
