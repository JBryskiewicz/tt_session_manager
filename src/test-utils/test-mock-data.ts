import { vi } from "vitest";
import { Note, Npc, Session } from "../types/types";

export const MOCK_CATEGORY = "Title";
export const MOCK_STRING = "mock string";

export const MOCK_DATA_COLLECTION: Npc[] | Note[] = [
  {
    id: 0,
    name: "mocked name 0",
    information: "mocked information 0",
  },
  {
    id: 1,
    name: "mocked name 1",
    information: "mocked information 1",
  },
  {
    id: 2,
    name: "mocked name 2",
    information: "mocked information 2",
  },
];

export const MOCK_CREATION_DATE = "2023-12-12";
export const MOCK_PLANNED_DATE = "2024-01-01";
export const MOCK_EDITED_DATE = "2023-12-18";

export const MOCK_SESSION: Session = {
  id: 999,
  name: "test name",
  description: "test desc",
  creationDate: MOCK_CREATION_DATE,
  plannedDate: MOCK_PLANNED_DATE,
  editedDate: null,
  edited: false,
  notes: [{ id: 0, name: "", information: "" }],
  npcs: [{ id: 0, name: "", information: "", avatar: "" }],
};

export const MOCK_SESSION_LIST: Session[] = [MOCK_SESSION];

export const MOCK_FUNCTIONS = {
  buttonFunction: vi.fn(),
  mockOnChange: vi.fn(),
};
