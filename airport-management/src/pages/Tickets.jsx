import React, { useState } from "react";
import Navbar from "../components/Navbar";
import { useTickets } from "../context/TicketContext";

export default function Tickets() {
  const { tickets, addTicket, deleteTicket, updateTicket } = useTickets();
  const [showForm, setShowForm] = useState(false);
  const [editingTicket, setEditingTicket] = useState(null);

  const [flightNumber, setFlightNumber] = useState("");
  const [destination, setDestination] = useState("");
  const [gate, setGate] = useState("");
  const [departure, setDeparture] = useState("");
  const [arrival, setArrival] = useState("");
  const [status, setStatus] = useState("On Time");

  const [editFlightNumber, setEditFlightNumber] = useState("");
  const [editDestination, setEditDestination] = useState("");
  const [editGate, setEditGate] = useState("");
  const [editDeparture, setEditDeparture] = useState("");
  const [editArrival, setEditArrival] = useState("");
  const [editStatus, setEditStatus] = useState("On Time");

  const handleAddTicket = () => {
    if (flightNumber && destination && gate && departure && arrival) {
      addTicket({
        flightNumber,
        destination,
        gate,
        departure,
        arrival,
        status,
      });
      // Clear form
      setFlightNumber("");
      setDestination("");
      setGate("");
      setDeparture("");
      setArrival("");
      setStatus("On Time");
      setShowForm(false);
    } else {
      alert("Please fill all fields");
    }
  };

  const handleDeleteTicket = (id) => {
    if (window.confirm("Are you sure you want to delete this flight?")) {
      deleteTicket(id);
    }
  };

  const handleEditTicket = (ticket) => {
    setEditingTicket(ticket.id);
    setEditFlightNumber(ticket.flightNumber);
    setEditDestination(ticket.destination);
    setEditGate(ticket.gate);
    setEditDeparture(ticket.departure);
    setEditArrival(ticket.arrival);
    setEditStatus(ticket.status);
  };

  const handleUpdateTicket = () => {
    if (editFlightNumber && editDestination && editGate && editDeparture && editArrival) {
      updateTicket(editingTicket, {
        flightNumber: editFlightNumber,
        destination: editDestination,
        gate: editGate,
        departure: editDeparture,
        arrival: editArrival,
        status: editStatus,
      });
      setEditingTicket(null);
      setEditFlightNumber("");
      setEditDestination("");
      setEditGate("");
      setEditDeparture("");
      setEditArrival("");
      setEditStatus("On Time");
    } else {
      alert("Please fill all fields");
    }
  };

  const handleCancelEdit = () => {
    setEditingTicket(null);
    setEditFlightNumber("");
    setEditDestination("");
    setEditGate("");
    setEditDeparture("");
    setEditArrival("");
    setEditStatus("On Time");
  };

  return (
    <div>
      <Navbar />

      <div className="container mt-5 centered-container">
        <div className="d-flex justify-content-between align-items-center mb-4 w-100">
          <h2 className="fw-bold">Flights</h2>
          <button
            className="btn btn-add"
            onClick={() => setShowForm(!showForm)}
          >
            + Add Flight
          </button>
        </div>

        {showForm && (
          <div className="card p-4 mb-4 w-100 shadow-sm">
            <div className="row g-3">
              {/* Flight input fields */}
              <div className="col-md-6">
                <input
                  type="text"
                  className="form-control form-control-lg"
                  placeholder="Flight Number"
                  value={flightNumber}
                  onChange={(e) => setFlightNumber(e.target.value)}
                />
              </div>
              <div className="col-md-6">
                <input
                  type="text"
                  className="form-control form-control-lg"
                  placeholder="Destination"
                  value={destination}
                  onChange={(e) => setDestination(e.target.value)}
                />
              </div>
              <div className="col-md-4">
                <input
                  type="text"
                  className="form-control form-control-lg"
                  placeholder="Gate Number"
                  value={gate}
                  onChange={(e) => setGate(e.target.value)}
                />
              </div>
              <div className="col-md-4">
                <input
                  type="time"
                  className="form-control form-control-lg"
                  placeholder="Departure Time"
                  value={departure}
                  onChange={(e) => setDeparture(e.target.value)}
                />
              </div>
              <div className="col-md-4">
                <input
                  type="time"
                  className="form-control form-control-lg"
                  placeholder="Arrival Time"
                  value={arrival}
                  onChange={(e) => setArrival(e.target.value)}
                />
              </div>
              <div className="col-md-6">
                <select
                  className="form-select form-select-lg"
                  value={status}
                  onChange={(e) => setStatus(e.target.value)}
                >
                  <option value="On Time">On Time</option>
                  <option value="Delayed">Delayed</option>
                  <option value="Cancelled">Cancelled</option>
                </select>
              </div>
            </div>
            <button
              className="btn btn-primary btn-lg mt-3"
              onClick={handleAddTicket}
            >
              Save Flight
            </button>
          </div>
        )}

        <div className="row w-100">
          {tickets.map((ticket) => (
            <div className="col-md-4 mb-3" key={ticket.id}>
              <div className="card-flight p-3 position-relative h-100">
                {editingTicket === ticket.id ? (
                  // Edit Form
                  <div className="edit-form">
                    <div className="mb-2">
                      <input
                        type="text"
                        className="form-control form-control-sm"
                        placeholder="Flight Number"
                        value={editFlightNumber}
                        onChange={(e) => setEditFlightNumber(e.target.value)}
                      />
                    </div>
                    <div className="mb-2">
                      <input
                        type="text"
                        className="form-control form-control-sm"
                        placeholder="Destination"
                        value={editDestination}
                        onChange={(e) => setEditDestination(e.target.value)}
                      />
                    </div>
                    <div className="mb-2">
                      <input
                        type="text"
                        className="form-control form-control-sm"
                        placeholder="Gate Number"
                        value={editGate}
                        onChange={(e) => setEditGate(e.target.value)}
                      />
                    </div>
                    <div className="mb-2">
                      <input
                        type="time"
                        className="form-control form-control-sm"
                        placeholder="Departure Time"
                        value={editDeparture}
                        onChange={(e) => setEditDeparture(e.target.value)}
                      />
                    </div>
                    <div className="mb-2">
                      <input
                        type="time"
                        className="form-control form-control-sm"
                        placeholder="Arrival Time"
                        value={editArrival}
                        onChange={(e) => setEditArrival(e.target.value)}
                      />
                    </div>
                    <div className="mb-2">
                      <select
                        className="form-select form-select-sm"
                        value={editStatus}
                        onChange={(e) => setEditStatus(e.target.value)}
                      >
                        <option value="On Time">On Time</option>
                        <option value="Delayed">Delayed</option>
                        <option value="Cancelled">Cancelled</option>
                      </select>
                    </div>
                    <div className="btn-group w-100">
                      <button 
                        className="btn btn-success btn-sm" 
                        onClick={handleUpdateTicket}
                      >
                        Save
                      </button>
                      <button 
                        className="btn btn-secondary btn-sm" 
                        onClick={handleCancelEdit}
                      >
                        Cancel
                      </button>
                    </div>
                  </div>
                ) : (
                  // Display Mode
                  <>
                    <h5 className="fw-bold">{ticket.flightNumber}</h5>
                    <p>Destination: {ticket.destination}</p>
                    <p>Gate: {ticket.gate}</p>
                    <p>Departure: {ticket.departure}</p>
                    <p>Arrival: {ticket.arrival}</p>
                    <p>
                      Status:{" "}
                      <span
                        className={`fw-bold ${
                          ticket.status === "Delayed"
                            ? "text-warning"
                            : ticket.status === "Cancelled"
                            ? "text-danger"
                            : "text-success"
                        }`}
                      >
                        {ticket.status}
                      </span>
                    </p>

                    {/* Action Buttons */}
                    <div className="btn-group position-absolute" style={{ top: "10px", right: "10px" }}>
                      <button
                        className="btn btn-primary btn-sm"
                        onClick={() => handleEditTicket(ticket)}
                      >
                        Edit
                      </button>
                      <button
                        className="btn btn-danger btn-sm"
                        onClick={() => handleDeleteTicket(ticket.id)}
                      >
                        Delete
                      </button>
                    </div>
                  </>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}