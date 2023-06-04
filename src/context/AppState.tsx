import React, { createContext } from "react";

type Node = {
  children: React.ReactNode;
};

type Task = {
  id: string;
  text: string;
};

type List = {
  id: string;
  text: string;
  tasks: Task[];
};

export type AppState = {
  lists: List[];
};

type contextProps = {
  lists: List[];
  getTaskById(id: string): Task[];
};

const initialState: AppState = {
  lists: [
    {
      id: "0",
      text: "To do",
      tasks: [{ id: "c01", text: "Generate app scaffold" }],
    },
    {
      id: "1",
      text: "In Progress",
      tasks: [{ id: "c02", text: "Learn TypeScript" }],
    },
    {
      id: "2",
      text: "Done",
      tasks: [{ id: "c03", text: "Begin to use static typing" }],
    },
  ],
};

export const AppContext = createContext<contextProps>({} as contextProps);

export const AppProvider = ({ children }: Node) => {
  const { lists } = initialState;
  const getTaskById = (id:string) =>{
    return lists.find((list) => list.id === id) ?.tasks || []
  }
  return (
    <AppContext.Provider value={{ lists,getTaskById }}>{children}</AppContext.Provider>
  );
};
