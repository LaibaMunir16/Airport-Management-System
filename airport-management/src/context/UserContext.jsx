import React, { createContext, useContext, useState, useEffect } from "react";

const UserContext = createContext();
export const useUsers = () => useContext(UserContext);

export const UserProvider = ({ children }) => {
  const [users, setUsers] = useState(() => {
    const storedUsers = JSON.parse(localStorage.getItem("users")) || [];
    // Ensure bookedFlights array exists for all users
    return storedUsers.map(u => ({ ...u, bookedFlights: u.bookedFlights || [] }));
  });

  useEffect(() => {
    localStorage.setItem("users", JSON.stringify(users));
  }, [users]);

  const addUser = (user) => {
    setUsers([...users, { ...user, bookedFlights: [] }]);
  };

  const editUser = (index, updatedUser) => {
    const newUsers = [...users];
    newUsers[index] = { ...updatedUser, bookedFlights: newUsers[index].bookedFlights || [] };
    setUsers(newUsers);
  };

  const deleteUser = (index) => {
    const newUsers = [...users];
    newUsers.splice(index, 1);
    setUsers(newUsers);
  };

  // Correctly book flight for a user
  const bookFlight = (userIndex, flightNumber) => {
    const newUsers = [...users];
    if (!newUsers[userIndex].bookedFlights) newUsers[userIndex].bookedFlights = [];
    // Prevent duplicates
    if (!newUsers[userIndex].bookedFlights.includes(flightNumber)) {
      newUsers[userIndex].bookedFlights = [...newUsers[userIndex].bookedFlights, flightNumber];
      setUsers(newUsers);
    }
  };

  return (
    <UserContext.Provider value={{ users, addUser, editUser, deleteUser, bookFlight }}>
      {children}
    </UserContext.Provider>
  );
};
