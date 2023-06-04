import React, { createContext } from "react";

type Node = {
  children: React.ReactNode;
};

type Tasks = {
  id: string;
  text: string;
};

type Lists = {
    id:string;
    text:string;
    tasks:Tasks[]
}

const initialState: any = [];

export const AppContext = createContext(initialState);

export const AppProvider = ({ children }: Node) => {
  return <AppContext.Provider value={{}}>{children}</AppContext.Provider>;
};
