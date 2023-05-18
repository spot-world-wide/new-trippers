import React from "react";
import "./Bus.css";
import Logo from "../../../assets/TPR.png";
import BusMenuContainer from "./BusMenuContainer";
import { Link } from "react-router-dom";
import Footer from "../../Footer/Footer";
import Sidebar from "../../sidebar/Sidebar";
import DrowpUp from "../../dropdown/DrowpUp";
const Bus = () => {
  return (
    <>
      <Sidebar />
      <header className="main-header">
        <div className="bus-top-header">
          <Link to={"/"} className="logo-container">
            <img src={Logo} alt="logo" className="bus-logo" />
          </Link>
        </div>
        <div className="bottom-menu">
          <nav className="bottom-nav">
            <ul>
              <Link to={"/"}>Flight</Link>
              <Link to={"/cruise"}>Cruise</Link>
              <Link to={"/hotel"}>Hotel</Link>
              <Link to={"/visa"}>Visa</Link>
              <Link to={"/umrah"}>Umrah</Link>
            </ul>
          </nav>
        </div>
      </header>
      <BusMenuContainer />
      <Footer />
      <DrowpUp />
    </>
  );
};

export default Bus;
