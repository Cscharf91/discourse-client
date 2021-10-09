import { Debate, DebateRequest, FormSubmission, Store } from "../types/types";
import axios from "axios";

export interface DebateSlice {
  debates: Debate[];
  debateRequests: DebateRequest[];
  api: {
    getDebates: () => void;
    getRequests: (userId: number) => void;
    addDebate: (values: FormSubmission, userId: number) => Promise<Debate>;
  };
}

const handleAddDebate = async (
  values: FormSubmission,
  userId: number
): Promise<Debate> => {
  const { data } = await axios.post("/debates", {
    ...values,
    days: +values.days,
    creator_id: userId,
  });
  return data;
};

export const debateSlice = (set: any, get: any): DebateSlice => ({
  // State
  debates: [],
  debateRequests: [],

  api: {
    // Data fetching
    getDebates: async () => {
      try {
        const { data } = await axios.get("/debates");
        set((state: Store) => ({
          debateSlice: { ...state.debateSlice, debates: data },
        }));
      } catch (error) {
        console.error("There was an issue getting debates:", error);
      }
    },
    getRequests: async (userId) => {
      try {
        const { data } = await axios.get(`/debates/requests/${userId}`);
        set((state: Store) => ({
          debateSlice: { ...state.debateSlice, debatesRequests: data },
        }));
      } catch (error) {
        console.error("There was an issue getting requests:", error);
      }
    },

    // Data manipulation
    addDebate: async (values: FormSubmission, userId) => {
      const addedDebate = await handleAddDebate(values, userId);
      return addedDebate;
    },
  },
});
