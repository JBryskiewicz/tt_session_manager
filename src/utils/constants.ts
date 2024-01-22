export const DRAWER_WIDTH = 200;

export const ACTION_BUTTON_TEST_ID = "action-btn";
export const DATE_TEST_IDS = {
  creationDateID: "creation-date",
  plannedDateID: "planned-date",
  editDateID: "edit-date",
};
export const NOTES_LIST_TEST_ID = "session-notes-list-element";

export const SESSION_FIELDS_CATEGORIES = {
  title: "title",
  desc: "description",
  note: "note",
  npc: "npc",
  session: "session",
};

export const SESSION_ACTION_CATEGORIES = {
  view: "view",
  details: "details",
  newSession: "new session",
  exit: "exit to dashboard",
  remove: "delete",
};

export const SESSION_CATEGORY = {
  newSession: "new",
  editSession: "edit",
};

export const EDIT_STATE_BUTTON_LABELS = {
  save: "save",
  edit: "edit",
  cancel: "cancel",
  addNote: "add notes",
  addNpc: "add npc",
};

export const CHAR_INPUT_LIMIT: { [key: string]: number } = {
  title: 100,
  description: 500,
  note: 5000,
  npc: 5000,
};
