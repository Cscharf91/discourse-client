import axios from "axios";
import React, { useEffect, useState,createContext } from "react";

interface UserProviderProps {
  children: React.ReactNode;
}

interface User {
  id: number;
  username: string;
}

interface UserContextType {
  users: User[];
}

const UserContext = createContext<UserContextType>({ users: []});

export const UserProvider = ({ children }: UserProviderProps) => {
  const [users, setUsers] = useState([]);

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

// import React, { createContext, useReducer } from "react";

// type AppState = typeof initialState;
// type Action =
//   | { type: "SET_INPUT_VALUE"; payload: number }
//   | { type: "SET_INPUT_VALUE_TO_100" };

// interface InputProviderProps {
//   children: React.ReactNode;
// }

// const initialState = {
//   inputValue: 0,
// };

// const reducer = (state: AppState, action: Action) => {
//   switch (action.type) {
//     case "SET_INPUT_VALUE":
//       return {
//         ...state,
//         inputValue: action.payload,
//       };
//     case "SET_INPUT_VALUE_TO_100":
//       return {
//         ...state,
//         inputValue: 100,
//       };
//     default:
//       return state;
//   }
// };

// const InputValueContext = createContext<{
//   state: AppState;
//   dispatch: React.Dispatch<Action>;
// }>({ state: initialState, dispatch: () => {} });

// function InputValueProvider({ children }: InputProviderProps) {
//   const [state, dispatch] = useReducer(reducer, initialState);

//   return (
//     <InputValueContext.Provider value={{ state, dispatch }}>
//       {children}
//     </InputValueContext.Provider>
//   );
// }

// export { InputValueContext, InputValueProvider };