import React, { createContext, useContext, useReducer } from 'react';

interface State {
    isSidebar : boolean
}

interface Action {
 type : 'TOGGLE_SIDEBAR' | "CLOSE_SIDEBAR", 
}

const initialState: State = {
 isSidebar : false
};

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "TOGGLE_SIDEBAR": 
    return {...state , isSidebar : !state.isSidebar}
    case "CLOSE_SIDEBAR":
        return {...state , isSidebar : false}
    
    default:
      return state;
  }
};

const Context = createContext<{ state: State; dispatch: React.Dispatch<Action>, closeSidebar: () => void, toggleSidebar :()=> void }>({ state: initialState, dispatch: () => {}, closeSidebar : () => {}, toggleSidebar :()=>{} });

export const HeaderContextProvider: React.FC<{children : React.ReactNode}> = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
const toggleSidebar = () => dispatch({type :"TOGGLE_SIDEBAR"})

const closeSidebar = () => dispatch({type :"CLOSE_SIDEBAR"})
  return <Context.Provider value={{ state, dispatch, toggleSidebar, closeSidebar }}>{children}</Context.Provider>;
};

export const useHeaderStore = () => useContext(Context);