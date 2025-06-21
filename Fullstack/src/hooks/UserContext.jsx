import { createContext } from "react";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const name = 'Gopi';
  const arr = [1,2,3,4,5];
  const User = {name:'Varshi',age:19,dep:'IT'}
  return (
    <UserContext.Provider value={{name,arr,User}}>
      {children}
    </UserContext.Provider>
  );
};