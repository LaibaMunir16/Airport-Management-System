import React, { useState } from "react";
import Navbar from "../components/Navbar";
import { useTickets } from "../context/TicketContext";
import { useUsers } from "../context/UserContext";

export default function Bookings() {
  const { tickets } = useTickets();
  const { users, bookFlight } = useUsers();

  // Track which user is selected for each flight
  const [selectedUsers, setSelectedUsers] = useState({});

  // Handle dropdown selection
  const handleSelectUser = (flightNumber, userIndex) => {
    setSelectedUsers({ ...selectedUsers, [flightNumber]: userIndex });
  };

  // Book the selected user to this flight
  const handleBookUser = (flightNumber) => {
    const userIndex = selectedUsers[flightNumber];
    if (userIndex !== undefined) {
      bookFlight(userIndex, flightNumber);
      // Clear selection after booking
      setSelectedUsers({ ...selectedUsers, [flightNumber]: undefined });
    }
  };

  return (
    <div>
      <Navbar />

      <div className="container mt-5 centered-container">
        <h2 className="fw-bold mb-4">Bookings</h2>

        <div className="row w-100">
          {tickets.map((ticket, idx) => {
            // Users who already booked this flight
            const bookedUsers = users.filter(u =>
              u.bookedFlights?.includes(ticket.flightNumber)
            );

            // Users available for booking
            const availableUsers = users.filter(
              u => !u.bookedFlights?.includes(ticket.flightNumber)
            );

            return (
              <div className="col-md-4" key={idx}>
                <div className="card-flight p-3">
                  <h5 className="fw-bold">{ticket.flightNumber}</h5>
                  <p>Destination: {ticket.destination}</p>

                  <p>
                    Booked By:{" "}
                    {bookedUsers.length
                      ? bookedUsers.map(u => u.name).join(", ")
                      : "No bookings yet"}
                  </p>

                  {/* Dropdown to select a user to book */}
                  <select
                    className="form-select mt-2"
                    value={selectedUsers[ticket.flightNumber] ?? ""}
                    onChange={(e) =>
                      handleSelectUser(ticket.flightNumber, Number(e.target.value))
                    }
                  >
                    <option value="">Select User</option>
                    {availableUsers.map((u, i) => (
                      <option key={i} value={users.indexOf(u)}>
                        {u.name}
                      </option>
                    ))}
                  </select>

                  <button
                    className="btn btn-primary btn-sm mt-2"
                    onClick={() => handleBookUser(ticket.flightNumber)}
                    disabled={selectedUsers[ticket.flightNumber] === undefined}
                  >
                    Book User
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
