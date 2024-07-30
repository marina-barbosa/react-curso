import { createContext, useReducer } from "react";

export const TitleColorContext = createContext();

export const titleColorReducer = (state, action) => {
  switch (action.type) {
    case "RED":
      return { ...state, color: "tomato" };
    case "GREEN":
      return { ...state, color: "lightgreen" };
    default:
      return state;
  }
}

export const TitleColorContextProvider = ({ children }) => {

  const [state, dispatch] = useReducer(titleColorReducer, { color: "deepskyblue" })

  console.log("Title color context: ", state)

  return <TitleColorContext.Provider value={{ ...state, dispatch }}> {children} </TitleColorContext.Provider>
}