import React from "react";
import { ChildrenProps } from "../types/types";
import { DebateProvider } from "./DebateProvider";
import { UserProvider } from "./UserProvider";

const AllProviders = ({ children }: ChildrenProps) => {
  return (
    <UserProvider>
      <DebateProvider>{children}</DebateProvider>
    </UserProvider>
  );
};

export default AllProviders;
