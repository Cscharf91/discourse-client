import { ReactNode } from "react";

export interface User {
  id: number;
  username: string;
  email: string;
  profilePic?: string;
}

export interface Debate {
  id: number;
  topic: string;
  creator?: User;
  creatorId: number;
  creatorPosition: string;
  creatorStance: string;
}

export interface ChildrenProps {
  children: ReactNode;
}