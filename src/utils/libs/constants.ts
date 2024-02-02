export const DRAWER_WIDTH = 200;

export const ACTION_BUTTON_TEST_ID = "action-btn";
export const DATE_TEST_IDS = {
  creationDateID: "creation-date",
  plannedDateID: "planned-date",
  editDateID: "edit-date",
};
export const NOTES_LIST_TEST_ID = "session-notes-list-element";

export const SESSION_TEXT_FIELDS_CATEGORIES_LIB: { [key: string]: string } = {
  title: "title",
  desc: "description",
  note: "note",
  npc: "npc",
  npcName: "npcName",
  session: "session",
};

export const SESSION_CATEGORY_LIB: { [key: string]: string } = {
  newSession: "new",
  editSession: "edit",
  details: "details",
};

export const BUTTON_LABELS_LIB: { [key: string]: string } = {
  // state edit buttons
  save: "save",
  edit: "edit",
  remove: "delete",
  cancel: "cancel",
  addNote: "add notes",
  addNpc: "add npc",

  // view navigation buttons
  view: "view",
  newSession: "new session",
  exit: "exit to dashboard",

  // login & register buttons
  login: "sign in",
  register: "register",
  toRegister: "sign up",
  toLogin: "back to login",
};

export const LOGIN_TEXTFIELD_LABELS_LIB: { [key: string]: string } = {
  email: "email",
  password: "password",
  confirmPass: "confirm password",
};

export const CHAR_LIMIT_LIB: { [key: string]: number } = {
  title: 100,
  description: 500,
  npcName: 50,
  note: 5000,
  npc: 5000,
};

export const ERROR_MESSAGE_LIB: { [key: string]: string } = {
  pageNotFound: "Seems like this page does not exist",
  notImplemented: "Feature not yet implemented",
  sessionNotFound: "Session with this ID not found!",
};

export const ADDRESS_LIB: { [key: string]: string } = {
  login: "/",
  dashboard: "/dashboard",
  sessionDetails: "/session-details/",
  sessionNew: "/new-session",
  account: "/account",
  profile: "/user-profile",
};
