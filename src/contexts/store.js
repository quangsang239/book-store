import React from "react";

export const Store = React.createContext();

export const ContextProvider = ({ children }) => {
  return <Store.Provider>{children}</Store.Provider>;
};
