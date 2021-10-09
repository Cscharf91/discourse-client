import { message } from "antd";
import axios from "axios";
import React, { useEffect, useState, createContext } from "react";
import { useHistory } from "react-router-dom";
import { ChildrenProps, User } from "../types/types";

interface UserContextType {
  users: User[];
  handleSignUpSubmit: (args: RegisterArgs) => Promise<void>;
  handleLoginSubmit: (args: LoginArgs) => Promise<void>;
  handleLogOut: () => void;
  loginError: string | null;
  loading: boolean;
  user?: User | null;
  token?: string;
}

interface LoginArgs {
  password: string;
  username: string;
}

interface RegisterArgs extends LoginArgs {
  email: string;
}

const UserContext = createContext<UserContextType>({} as UserContextType);

export const UserProvider = ({ children }: ChildrenProps) => {
  const [users, setUsers] = useState<User[]>([]);
  const [user, setUser] = useState<User | null>(null);
  const [token, setToken] = useState<string>("");
  const [loginError, setLoginError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const history = useHistory();

  useEffect(() => {
    const getUsers = async () => {
      const { data } = await axios.get("/users");
      setUsers(data);
    };

    const checkForLogin = () => {
      const currentUser = localStorage.getItem("user");
      const currentToken = localStorage.getItem("token");
      if (currentUser) setUser(JSON.parse(currentUser));
      if (currentToken) setToken(currentToken);
    };

    checkForLogin();
    getUsers();
  }, []);

  const handleSignUpSubmit = async (values: RegisterArgs) => {
    try {
      setLoading(true);
      const { data } = await axios.post("/users/register", values);
      const { user: currentUser, token: currentToken } = data;
      if (currentUser && currentToken) {
        setUser(currentUser);
        setToken(currentToken);
        localStorage.clear();
        localStorage.setItem("user", JSON.stringify(currentUser));
        localStorage.setItem("token", currentToken);
        history.push("/debates");
        setLoading(false);
      }
    } catch (err) {
      console.log(err);
      setLoading(false);
    }
  };

  const handleLoginSubmit = async (login: LoginArgs) => {
    try {
      setLoading(true);
      const { data } = await axios.post("/users/login", login);
      const { user: currentUser, token: currentToken } = data;
      setUser(currentUser);
      setToken(currentToken);
      localStorage.setItem("user", JSON.stringify(currentUser));
      localStorage.setItem("token", currentToken);
      setLoading(false);
      history.push("/debates");
      setLoginError(null);
    } catch (err) {
      console.log("err:", err);
      setLoginError("The login info provided is incorrect. Please try again.");
      setLoading(false);
    }
  };

  const handleLogOut = () => {
    setUser(null);
    setToken("");
    localStorage.clear();
    message.success({
      content: "You have logged out",
      style: {
        marginTop: "10vh",
      },
    });
  };

  return (
    <UserContext.Provider
      value={{
        users,
        handleLoginSubmit,
        handleSignUpSubmit,
        handleLogOut,
        loading,
        loginError,
        user,
        token,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserContext;
