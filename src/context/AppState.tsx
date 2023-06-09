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
  deleteCard(id: string): List[];
  createCard(id: string, text: string): any;
  createTask(id: string, text: string): any;
  // deleteTask(id: string): Task[];
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
    const card_list = lists.map((list) => {
      if (list.id === id) {
        const newCard = {
          id: Math.random().toString(),
          text: text,
        };

        return {
          ...list,
          tasks: [...list.tasks, newCard],
        };
      }
      return list;
    });
    setLists(card_list);
  };

  const createTask = (text: string) => {
    const task_list = lists.map((list) => {
      if (list.tasks) {
        const newTask = {
          id: "c" + Math.random().toString(),
          text: text,
        };

        return {
          ...list,
          tasks: [...list.tasks, newTask],
        };
      }
      return list;
    });
    setLists(task_list);
  };

  const deleteTask = (id: string) => {
    // const task = lists.filter((list) => list.id !== id);
    // const stored = localStorage.getItem("list");
    // if(stored){
    //   let data = JSON.parse(stored);
    // }
    // console.log(task);
    // return setLists()
  };
  
  const deleteCard = (id: string) => {
    const cardList = lists.filter((list) => list.id !== id);
    setLists(cardList);
    return cardList;
  };

  return (
    <AppContext.Provider value={{ lists, getTaskById, deleteCard, createCard, createTask }}>
      {children}
    </AppContext.Provider>
  );
};

// const createCard = (id: string, text: string) => {
//   const newList = lists.map((list) => {
//     if (list.id === id) {
//       const newCard = {
//         id: "c" + Math.random().toString().substr(2, 4),
//         text: text,
//       };
//       return {
//         ...list,
//         tasks: [...list.tasks, newCard],
//       };
//     }
//     return list;
//   });

//   setLists(newList);
// };

// // Example usage:
// // createCard("0", "New Card");

// const updateCard = (listId: string, cardId: string, newText: string) => {
//   const updatedLists = lists.map((list) => {
//     if (list.id === listId) {
//       const updatedTasks = list.tasks.map((task) => {
//         if (task.id === cardId) {
//           return {
//             ...task,
//             text: newText,
//           };
//         }
//         return task;
//       });
//       return {
//         ...list,
//         tasks: updatedTasks,
//       };
//     }
//     return list;
//   });

//   setLists(updatedLists);
// };

// // Example usage:
// // updateCard("0", "c01", "Updated Text");
