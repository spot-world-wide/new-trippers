import React, { useState } from "react";
import "./sidebar.css";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleSidebarToggle = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className={`sidebar ${isSidebarOpen ? "open" : ""}`}>
      <button className="toggle-button" onClick={handleSidebarToggle}>
        ☰
      </button>
      <ul className="sidebar-items">
        <Link to={"/"} className="sidebar-item">
          Flight
        </Link>
        <Link to={"/hotel"} className="sidebar-item">
          Hotel
        </Link>
        <Link to={"/umrah"} className="sidebar-item">
          Umrah
        </Link>
        <Link to={"/bus"} className="sidebar-item">
          Bus
        </Link>
        <Link to={"/holidays"} className="sidebar-item">
          Holidays
        </Link>

        <Link to={"/visa"} className="sidebar-item">
          Visa
        </Link>
      </ul>
    </div>
  );
};

export default Sidebar;
