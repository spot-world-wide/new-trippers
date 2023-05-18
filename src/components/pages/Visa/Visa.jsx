import React from "react";
import "./visa.css";
import Logo from "../../../assets/TPR.png";
import VisaMenuContainer from "./VisaMenuContainer";
import { Link } from "react-router-dom";
import NavBar from "../../header/NavBar";
import Sidebar from "../../sidebar/Sidebar";
import DrowpUp from "../../dropdown/DrowpUp";
const Visa = () => {
  return (
    <>
      <Sidebar />
      <NavBar />
      <div className="header">
        <header>
          <div className="small-nav">
            <p>Happy Customers</p>
          </div>
          <div className="main-nav">
            <nav className="visa-bottom-nav">
              <ul>
                <img src={Logo} alt="" className="visa-trippers-logo" />

                <Link to={"/"}>Flight</Link>
                <Link to={"/cruise"} className="hide-on-mobile">
                  Cruise
                </Link>
                <Link to={"/hotel"}>Hotel</Link>
                <Link to={"/bus"}>Bus</Link>
                <Link to={"/umrah"} className="hide-on-mobile">
                  Umrah
                </Link>
              </ul>
            </nav>
          </div>
        </header>
        <VisaMenuContainer />
        <DrowpUp />
      </div>
    </>
  );
};

export default Visa;
