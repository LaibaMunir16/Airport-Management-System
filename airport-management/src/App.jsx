import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Pages
import Splash from "./pages/Splash";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import Users from "./pages/Users";
import Tickets from "./pages/Tickets";
import Bookings from "./pages/Bookings";

// Context Providers
import { AuthProvider } from "./context/AuthContext";
import { UserProvider } from "./context/UserContext";
import { TicketProvider } from "./context/TicketContext";

function App() {
  return (
    <Router>
      <AuthProvider>
        <UserProvider>
          <TicketProvider>
            <Routes>
              <Route path="/" element={<Splash />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/users" element={<Users />} />
              <Route path="/tickets" element={<Tickets />} />
              <Route path="/bookings" element={<Bookings />} />
            </Routes>
          </TicketProvider>
        </UserProvider>
      </AuthProvider>
    </Router>
  );
}

export default App;
