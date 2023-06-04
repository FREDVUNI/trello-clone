import React, { createContext } from "react";

type Node = {
  children: React.ReactNode;
};

type Task = {
  id: string;
  text: string;
};

type List = {
    id:string;
    text:string;
    tasks:Task[]
}

const initialState: any = [];

export const AppContext = createContext(initialState);

export const AppProvider = ({ children }: Node) => {
  return <AppContext.Provider value={{}}>{children}</AppContext.Provider>;
};
