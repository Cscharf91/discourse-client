import { ReactNode } from "react";
import { DebateSlice } from "../stores/debateSlice";

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

export interface RequestForm {
  challenger_position: string;
  challenger_opening: string;
}

export interface DebateRequest {
  challenger_username: string;
  challenger_id: number;
  debate_id: number;
  receiver_id: number;
  challenger_position: string;
  challenger_opening: string;
}

export interface FormSubmission {
  topic: string;
  creator_position: string;
  creator_opening: string;
  days: string;
  is_political: boolean;
}

export interface Store {
  debateSlice: DebateSlice;
}
