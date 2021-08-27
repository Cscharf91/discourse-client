import axios from "axios";
import React, { useEffect, useState,createContext, useContext } from "react";
import { ChildrenProps, Debate, User } from "../types";
import UserContext from "./UserProvider";

interface DebateContextType {
  debates: Debate[];
}

const DebateContext = createContext<DebateContextType>({ debates: [] });

export const DebateProvider = ({ children }: ChildrenProps) => {
  const [debates, setDebates] = useState<Debate[]>([]);
  const { users } = useContext(UserContext);

  useEffect(() => {
    const getDebates = async () => {
      const { data } = await axios.get("/debates");
      console.log("debates:", data);
      const debatesWithUsers: Debate[] = data.map((debate: Debate) => ({
        ...debate,
        creator: users.find(user => user.id === debate.creatorId)
      }))
      console.log("debates processed:", debatesWithUsers);
      setDebates(debatesWithUsers);
    };
    getDebates();
  }, [users]);


  return (
    <DebateContext.Provider
      value={{
        debates,
      }}
    >
      {children}
    </DebateContext.Provider>
  );
};

export default DebateContext;