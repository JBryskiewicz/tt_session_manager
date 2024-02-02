import { describe, expect, it } from "vitest";
import { setupTestStore } from "../../test-utils/redux-test-utils";
import { RESET_STATE, setCurrentDataList, setSelected } from "../managerSlice";
import { MOCK_DATA_COLLECTION } from "../../test-utils/test-mock-data";

describe("Testing redux reducers", () => {
  it("sets selected id", () => {
    const store = setupTestStore({ selected: 0 });
    store.dispatch(setSelected(5));
    expect(store.getState().manager.selected).toEqual(5);
  });

  it("sets current data collection & expect certain length", () => {
    const store = setupTestStore({ currentDataList: [] });
    store.dispatch(setCurrentDataList(MOCK_DATA_COLLECTION));

    expect(store.getState().manager.currentDataList.length).toEqual(3);
  });

  it("sets current data collection & expect correct object", () => {
    const store = setupTestStore({ currentDataList: [] });
    store.dispatch(setCurrentDataList(MOCK_DATA_COLLECTION));

    expect(store.getState().manager.currentDataList[0].id).toEqual(0);
  });

  it("sets state to initial state", () => {
    const store = setupTestStore({ currentDataList: [], selected: 5 });
    store.dispatch(RESET_STATE());

    expect(store.getState().manager.currentDataList.length).toEqual(1);
    expect(store.getState().manager.currentDataList[0].id).toEqual(0);
    expect(store.getState().manager.selected).toEqual(0);
  });
});
