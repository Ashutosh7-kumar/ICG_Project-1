import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import axios from "axios"; // Import Axios for API calls
import "./Login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [activeTab, setActiveTab] = useState("user"); // Default to User Login
  const navigate = useNavigate();

  // Function to handle login
  const handleLogin = async (e) => {
    e.preventDefault();
    setError(""); // Clear previous error messages

    try {
      const response = await axios.post(
        `https://icg-project-1.onrender.com/login/${activeTab}`, // API endpoint (user/admin)
        { email, password }
      );

      // Save login info to localStorage
      localStorage.setItem("isLoggedIn", "true");
      localStorage.setItem("userRole", activeTab);
      localStorage.setItem("userEmail", email);

      // Navigate to respective pages
      navigate(activeTab === "admin" ? "/Admin_Page" : "/Harbor_Details");

      // Reload to apply changes
      setTimeout(() => {
        window.location.reload();
      }, 100);
    } catch (error) {
      setError(
        error.response?.data?.message || "Login failed. Please try again."
      );
    }
  };

  return (
    <div className="login-wrapper">
      <div className="login-container">
        {/* Tab Switcher */}
        <div className="tab-container">
          <button
            className={activeTab === "user" ? "active" : ""}
            onClick={() => setActiveTab("user")}
          >
            User Login
          </button>
          <button
            className={activeTab === "admin" ? "active" : ""}
            onClick={() => setActiveTab("admin")}
          >
            Admin Login
          </button>
        </div>

        {/* Login Form */}
        <h2>{activeTab === "user" ? "User Login" : "Admin Login"}</h2>
        {error && <p className="error-message">{error}</p>}

        <form onSubmit={handleLogin}>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <div className="password-container">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <span
              className="eye-icon"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </span>
          </div>

          <button type="submit">
            {activeTab === "user" ? "Login as User" : "Login as Admin"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
