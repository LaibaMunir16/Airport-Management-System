import { createContext, useContext, useState } from "react";
import { v4 as uuidv4 } from "uuid";

const TicketContext = createContext();

export const TicketProvider = ({ children }) => {
  const [tickets, setTickets] = useState(JSON.parse(localStorage.getItem("tickets")) || []);

  const addTicket = (ticket) => {
    const newTicket = { id: uuidv4(), bookedBy: [], ...ticket };
    const updated = [...tickets, newTicket];
    setTickets(updated);
    localStorage.setItem("tickets", JSON.stringify(updated));
  };

  const updateTicket = (id, updatedTicket) => {
    const updated = tickets.map(t => t.id === id ? { ...t, ...updatedTicket } : t);
    setTickets(updated);
    localStorage.setItem("tickets", JSON.stringify(updated));
  };

  const deleteTicket = (id) => {
    const updated = tickets.filter(t => t.id !== id);
    setTickets(updated);
    localStorage.setItem("tickets", JSON.stringify(updated));
  };

  const bookTicket = (ticketId, userId) => {
    const updated = tickets.map(t =>
      t.id === ticketId ? { ...t, bookedBy: [...t.bookedBy, userId] } : t
    );
    setTickets(updated);
    localStorage.setItem("tickets", JSON.stringify(updated));
  };

  return (
    <TicketContext.Provider value={{ tickets, addTicket, updateTicket, deleteTicket, bookTicket }}>
      {children}
    </TicketContext.Provider>
  );
};

export const useTickets = () => useContext(TicketContext);
