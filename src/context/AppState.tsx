import React, { createContext } from "react";

type Node = {
    children: React.ReactNode
}

const initialState:any = [];

export const AppContext = createContext(initialState);

export const AppProvider = ({children}:Node) =>{
    return(
        <AppContext.Provider value={{}}>
            {children}
        </AppContext.Provider>
    )
}
