import { ReactNode } from "react";

export interface User {
  id: number;
  username: string;
  email: string;
  profile_pic?: string;
  is_admin?: number;
  is_mod?: number;
  rank?: string;
}

export interface Debate {
  id: number;
  topic: string;
  category: string;
  days: number;
  is_political?: number;
  competitor_id?: number;
  creator_id: number;
  creator_position: string;
  creator_opening: string;
  profile_pic?: string;
  username: string;
  email: string;
  avatar?: string;
}

export interface ChildrenProps {
  children: ReactNode;
}