import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(localStorage.getItem("isLoggedIn") === "true");
  const [activeTab, setActiveTab] = useState(""); // Track the active section
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    setActiveTab(location.pathname); // Set active tab based on the current route
  }, [location.pathname]);

  const userName = isLoggedIn ? localStorage.getItem("userName") : "";
  const userEmail = isLoggedIn ? localStorage.getItem("userEmail") : "";
  const userImage = isLoggedIn ? localStorage.getItem("userImage") : "";

  const sections = [
    { path: "/", label: "Home" },
    { path: "/about-us", label: "About Us", dropdown: true },
    { path: "/Harbor_Details", label: "Harbor_Details" },
    { path: "/contact-us", label: "Contact Us" },
  ];

  const handleNavClick = (path) => {
    setIsOpen(false); // Close mobile menu
    navigate(path); // Navigate to the selected page
  };

  const handleAuth = (path) => {
    if (isLoggedIn && path === "/") {
      localStorage.removeItem("isLoggedIn");
      localStorage.removeItem("userName");
      localStorage.removeItem("userEmail");
      localStorage.removeItem("userImage");
      setIsLoggedIn(false);
    }
    setIsOpen(false);
    navigate(path);
  };

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <div className="menu-icon" onClick={() => setIsOpen(!isOpen)}>☰</div>

          {/* ✅ Desktop Navigation Links */}
          <ul className={`nav-links ${isOpen ? "open" : ""}`}>
            {sections.map(({ path, label, dropdown }) => (
              <li key={path} className={activeTab === path ? "active" : ""}>
                {dropdown ? (
                  <div 
                    className="dropdown" 
                    onClick={() => setIsDropdownOpen(!isDropdownOpen)} 
                    onMouseEnter={() => setIsDropdownOpen(true)} 
                    onMouseLeave={() => setIsDropdownOpen(false)}
                  >
                    {label}
                    {isDropdownOpen && (
                      <ul className="dropdown-menu">
                        <li onClick={() => handleNavClick("/achievements")}>Achievements</li>
                        <li onClick={() => handleNavClick("/details")}>Details</li>
                        <li onClick={() => handleNavClick("/vision-mission")}>Vision & Mission</li>
                      </ul>
                    )}
                  </div>
                ) : (
                  <a onClick={() => handleNavClick(path)}>{label}</a>
                )}
              </li>
            ))}
          </ul>

          {/* ✅ Desktop Login, Signup & Switch Buttons */}
          <div className="desktop-auth-buttons">
            {isLoggedIn ? (
              <button className="auth-btn logout-btn" onClick={() => handleAuth("/")}>
                Logout
              </button>
            ) : (
              <button className="auth-btn login-btn" onClick={() => navigate("/login")}>
                Login
              </button>
            )}
          </div>
        </div>
      </nav>

      {/* ✅ Mobile Sidebar Menu */}
      <div className={`mobile-menu ${isOpen ? "show" : ""}`}>
        <div className="mobile-menu-content">
          <button className="close-menu" onClick={() => setIsOpen(false)}>X</button>

          <ul className="mobile-nav-links">
            {sections.map(({ path, label, dropdown }) => (
              <li key={path} className={activeTab === path ? "active" : ""}>
                {dropdown ? (
                  <div 
                    className="dropdown" 
                    onClick={() => setIsDropdownOpen(!isDropdownOpen)} 
                    onMouseEnter={() => setIsDropdownOpen(true)} 
                    onMouseLeave={() => setIsDropdownOpen(false)}
                  >
                    {label}
                    {isDropdownOpen && (
                      <ul className="dropdown-menu">
                        <li onClick={() => handleNavClick("/achievements")}>Achievements</li>
                        <li onClick={() => handleNavClick("/details")}>Details</li>
                        <li onClick={() => handleNavClick("/vision-mission")}>Vision & Mission</li>
                      </ul>
                    )}
                  </div>
                ) : (
                  <a onClick={() => handleNavClick(path)}>{label}</a>
                )}
              </li>
            ))}
          </ul>

          {/* ✅ Mobile User Info Section */}
          <div className="mobile-user-section">
            {isLoggedIn && (
              <>
                <img src={userImage} alt="User" className="user-image" />
                <div className="user-info">
                  <span className="user-name">{userName}</span>
                  <span className="user-email">{userEmail}</span>
                </div>
              </>
            )}
            <div className="mobile-nav-buttons">
              <button className="logout-btn" onClick={() => handleAuth(isLoggedIn ? "/" : "/login")}>
                {isLoggedIn ? "Log Out" : "Login"}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* ✅ Overlay Effect when Menu is Open */}
      {isOpen && <div className="overlay" onClick={() => setIsOpen(false)}></div>}
    </>
  );
};

export default Navbar;
