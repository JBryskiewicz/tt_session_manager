export const DRAWER_WIDTH = 200;

export const ACTION_BUTTON_TEST_ID = "action-btn";
export const DATE_TEST_IDS = {
  creationDateID: "creation-date",
  plannedDateID: "planned-date",
  editDateID: "edit-date",
};
export const NOTES_LIST_TEST_ID = "session-notes-list-element";

export const SESSION_TEXT_FIELDS_CATEGORIES_LIB = {
  title: "title",
  desc: "description",
  note: "note",
  npc: "npc",
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
  titleLimit: 100,
  descLimit: 500,
  npcNameLimit: 50,
  noteLimit: 5000,
  npcLimit: 5000,
};

export const ERROR_MESSAGE_LIB = {
  pageNotFound: "Seems like this page does not exist",
  notImplemented: "Feature not yet implemented",
  sessionNotFound: "Session with this ID not found!",
};

export const ADDRESS_LIB = {
  login: "/",
  dashboard: "/dashboard",
  sessionDetails: "/session-details/",
  sessionNew: "/new-session",
};
