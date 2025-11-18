import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function Navbar() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary fixed-top">
        <div className="container">
          <Link className="navbar-brand" to="/dashboard">Airport Management</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav me-auto">
              <li className="nav-item"><Link className="nav-link" to="/dashboard">Dashboard</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/users">Users</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/tickets">Flights</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/bookings">Bookings</Link></li>
            </ul>
            {user && (
              <span className="navbar-text text-light">
                {user.name} | <button className="btn btn-light btn-sm ms-2" onClick={handleLogout}>Logout</button>
              </span>
            )}
          </div>
        </div>
      </nav>
      <div className="brandline">
        ✈️ Fly Smart, Fly Safe — Manage Your Airport Efficiently
      </div>
    </>
  );
}
