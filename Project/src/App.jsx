import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Slict from "./components/Slic";
import Logo from "./components/logo";
import EditTable from "./components/EditTable";
import ResultTable from "./components/ResultTable";
import ContactPage from "./components/ContactPage";
import Login from "./components/Login";
import Footer from "./components/Footer";
import ProtectedRoute from "./components/ProtectedRoute";
// import Achievements from "./components/Achievement";
import Details from "./components/Details";
import VisionMission from "./components/AboutUs";

function App() {
  return (
    <Router>
      <div>
        <Logo />
        <Navbar />
        <Routes>
  <Route path="/" element={<><Slict /></>} />
  <Route path="/contact-us" element={<ContactPage />} />
  <Route path="/login" element={<Login />} />
  {/* <Route path="/achievements" element={<Achievements />} /> */}
  <Route path="/details" element={<Details />} />
  <Route path="/vision-mission" element={<VisionMission />} />

  {/* Protect Admin Page - Only Admins */}
  <Route element={<ProtectedRoute requiredRole="admin" />}>
    <Route path="/Admin_Page" element={<EditTable />} />
  </Route>

  {/* Protect Harbor Details - Allow Users and Admins */}
  <Route element={<ProtectedRoute requiredRole="user" />}>
    <Route path="/Harbor_Details" element={<ResultTable />} />
  </Route>
</Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
