import axios from "axios";
import React, { useEffect, useState,createContext } from "react";
import { ChildrenProps, Debate } from "../types";

interface DebateContextType {
  debates: Debate[];
}

const DebateContext = createContext<DebateContextType>({ debates: [] });

export const DebateProvider = ({ children }: ChildrenProps) => {
  const [debates, setDebates] = useState<Debate[]>([]);

  useEffect(() => {
    const getDebates = async () => {
      const { data } = await axios.get("/debates");
      console.log("data:", data);
      setDebates(data);
    };
    getDebates();
  }, []);


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