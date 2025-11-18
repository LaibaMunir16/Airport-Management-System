import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Splash() {
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => navigate("/login"), 2000);
  }, []);

  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-primary text-white">
      <h1>✈️ Airport Management System</h1>
    </div>
  );
}
