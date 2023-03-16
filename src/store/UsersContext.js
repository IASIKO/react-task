import { createContext, useContext, useState } from "react";

export const UsersContext = createContext();

export const useUsersContext = () => useContext(UsersContext);

const UsersProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  

  return (
    <UsersContext.Provider value={{ isLoading, setIsLoading, error, setError }}>
      {children}
    </UsersContext.Provider>
  );
};

export default UsersProvider;
