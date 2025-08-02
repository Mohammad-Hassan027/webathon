import { createContext, useState } from "react";

export const MyContext = createContext(null);

export const MyContextProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  
  return (
    <MyContext.Provider value={{ isLoading, setIsLoading }}>
      {children}
    </MyContext.Provider>
  );
};

export default MyContext;
