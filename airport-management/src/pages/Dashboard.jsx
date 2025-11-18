import React from "react";
import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom";

export default function Dashboard() {
  const navigate = useNavigate();

  return (
    <div>
      <Navbar />

      <div className="container mt-5 centered-container text-center">
        <h1 className="mb-4 fw-bold">Welcome to Airport Management System</h1>
        <p className="lead mb-5">✈️ Fly Smart, Fly Safe — Your Airport at Your Fingertips</p>

        <div className="row justify-content-center g-4">
          {/* Users Card */}
          <div className="col-md-3">
            <div className="card p-4" onClick={() => navigate("/users")}>
              <div className="card-body">
                <h5 className="card-title">Users</h5>
                <p className="card-text">Add, edit, view, or delete users.</p>
              </div>
            </div>
          </div>

          {/* Flights Card */}
          <div className="col-md-3">
            <div className="card p-4" onClick={() => navigate("/tickets")}>
              <div className="card-body">
                <h5 className="card-title">Flights</h5>
                <p className="card-text">Manage flights and ticket bookings.</p>
              </div>
            </div>
          </div>

          {/* Bookings Card */}
          <div className="col-md-3">
            <div className="card p-4" onClick={() => navigate("/bookings")}>
              <div className="card-body">
                <h5 className="card-title">Bookings</h5>
                <p className="card-text">View which users booked which flights.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
