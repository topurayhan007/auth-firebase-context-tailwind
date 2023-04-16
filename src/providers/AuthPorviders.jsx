import React, { createContext } from "react";

const AuthContext = createContext(null);

const AuthPorviders = ({ children }) => {
  const user = { displayName: "Sagor Nodi" };

  return <AuthContext.Provider value={user}>{children}</AuthContext.Provider>;
};

export default AuthPorviders;
