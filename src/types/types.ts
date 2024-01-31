export type NewNote = {
  name: string;
  information: string;
};

export interface Note extends NewNote {
  id: number;
}

export type NewNpc = {
  name: string;
  information: string;
  avatar?: string;
};

export interface Npc extends NewNpc {
  id: number;
}

export type NewSession = {
  name: string;
  description: string;
  creationDate: string;
  plannedDate: string | null;
  editedDate: string | null;
  edited: boolean;
  notes: Note[];
  npcs: Npc[];
};

export interface Session extends NewSession {
  id: number;
}

export type Role = {
  id: number;
  name: string;
};

export type NewUser = {
  email: string;
  sessions: Session[];
};

export interface User extends NewUser {
  id: number;
  roles: Role[];
}

export type Manager = {
  currentDataList: Note[] | Npc[];
  selected: number;
};
