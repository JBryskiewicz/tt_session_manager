import { Session } from "../types/types";

export const MOCK_CATEGORY = "Title";
export const MOCK_DATA = "mock data";

export const MOCK_SESSION_LIST: Session[] = [
  {
    id: 999,
    name: "test1",
    description: "test1",
    creationDate: new Date(),
    plannedDate: new Date(),
    editedDate: null,
    edited: false,
    notes: [],
    npcs: [],
  },
];
