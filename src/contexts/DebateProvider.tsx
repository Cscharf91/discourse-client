import axios from "axios";
import React, { useEffect, useState,createContext } from "react";
import { ChildrenProps, Debate } from "../types";

interface DebateContextType {
  debates: Debate[];
  setDebates: React.Dispatch<React.SetStateAction<Debate[]>>;
}

const DebateContext = createContext<DebateContextType>({} as DebateContextType);

export const DebateProvider = ({ children }: ChildrenProps) => {
  const [debates, setDebates] = useState<Debate[]>([]);

  useEffect(() => {
    const getDebates = async () => {
      const { data } = await axios.get("/debates");
      setDebates(data);
    };
    getDebates();
  }, []);


  return (
    <DebateContext.Provider
      value={{
        debates,
        setDebates
      }}
    >
      {children}
    </DebateContext.Provider>
  );
};

export default DebateContext;