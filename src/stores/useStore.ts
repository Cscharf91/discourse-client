import create from "zustand";
import { Store } from "../types/types";
import { debateSlice } from "./debateSlice";

export const useStore = create<Store>((set, get) => ({
  debateSlice: { ...debateSlice(set, get) },
}));
