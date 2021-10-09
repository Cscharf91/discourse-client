import React, { useEffect, createContext, useContext } from "react";
import { useStore } from "../stores/useStore";
import { ChildrenProps } from "../types/types";
import UserContext from "./UserProvider";

const DebateContext = createContext({});

export const DebateProvider = ({ children }: ChildrenProps) => {
  const { user } = useContext(UserContext);
  const debateSlice = useStore((state) => state.debateSlice);
  const { getDebates, getRequests } = debateSlice.api;

  useEffect(() => {
    getDebates();
    user && getRequests(user.id);
  }, [getDebates, getRequests, user]);

  return <DebateContext.Provider value={{}}>{children}</DebateContext.Provider>;
};

export default DebateContext;
