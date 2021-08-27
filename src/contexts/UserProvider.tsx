import axios from "axios";
import React, { useEffect, useState,createContext } from "react";
import { ChildrenProps, User } from "../types";

interface UserContextType {
  users: User[];
}

const UserContext = createContext<UserContextType>({ users: []});

export const UserProvider = ({ children }: ChildrenProps) => {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    const getUsers = async () => {
      const { data } = await axios.get("/users");
      setUsers(data);
    };
    getUsers();
  }, []);

  // const initialize = async () => {}

  return (
    <UserContext.Provider
      value={{
        // initialize,
        users,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserContext;