export interface User {
  id: number;
  username: string;
}

export interface Debate {
  id: number;
  creator: User;
  competitor: null | User;
  topic: string;
  creatorPosition: string;
  creatorStance: string;
}
