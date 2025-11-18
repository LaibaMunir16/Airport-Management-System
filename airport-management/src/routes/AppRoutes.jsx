import { Routes, Route } from "react-router-dom";
import Splash from "../pages/Splash";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Dashboard from "../pages/Dashboard";
import Users from "../pages/Users";
import Tickets from "../pages/Tickets";
import Bookings from "../pages/Bookings";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Splash />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/users" element={<Users />} />
      <Route path="/tickets" element={<Tickets />} />
      <Route path="/bookings" element={<Bookings />} />
    </Routes>
  );
}
