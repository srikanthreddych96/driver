import React, { createContext, useState, useContext } from 'react';


const UserContext = createContext();


export const UserProvider = ({ children }) => {
  const [users, setUsers] = useState([]);

  const addUser = (user) => {
    setUsers([...users, user]);
  };

  const updateUser = (updatedUser) => {
    setUsers(users.map(user =>
      user.username === updatedUser.username ? updatedUser : user
    ));
  };

  const deleteUser = (username) => {
    setUsers(users.filter(user => user.username !== username));
  };

  return (
    <UserContext.Provider value={{ users, addUser, updateUser, deleteUser }}>
      {children}
    </UserContext.Provider>
  );
};


export const useUserContext = () => useContext(UserContext);









