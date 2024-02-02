import { configureStore } from "@reduxjs/toolkit";
import { Manager } from "../types/types";
import managerSlice from "../redux/managerSlice";

export function setupTestStore(initialState: Partial<Manager>) {
  return configureStore({
    reducer: { manager: managerSlice },
    preloadedState: { manager: { ...initialState } as Manager },
  });
}
