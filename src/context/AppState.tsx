import React, { createContext, useState, useEffect } from "react";

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
  // createCard(id:string,text:string) : List
};

const initialState: AppState | React.ElementType = {
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
  const [lists, setLists] = useState<List[]>([]);

  useEffect(() => {
    const stored = localStorage.getItem("list");

    if (stored) {
      let data = JSON.parse(stored);
      setLists(data.lists);
    } else {
      setLists(initialState.lists);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("list", JSON.stringify(initialState));
  }, [lists]);

  const getTaskById = (id: string) => {
    return lists.find((list) => list.id === id)?.tasks || [];
  };

  const createCard = (id: string, text: string) => {
    // const new_card = lists.shift();
  };

  const createTask = (id: string, text: string) => {
    // const new_task = lists.push();
  };

  return (
    <AppContext.Provider value={{ lists, getTaskById }}>
      {children}
    </AppContext.Provider>
  );
};
