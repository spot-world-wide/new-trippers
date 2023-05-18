import React from "react";
import "./cruise.css";
import Logo from "../../../assets/TPR new.png";
import { TbPhoneCall } from "react-icons/tb";
import CruiseMenu from "./CruiseMenu";
import CommonArticle from "../../article/CommonArticle/CommanArticle";
import Desination from "../../article/Destination/Destination";
import Story from "../../article/Stories/Story";
import NavBar from "../../header/NavBar";
import Footer from "../../Footer/Footer";
import { Link } from "react-router-dom";
import Sidebar from "../../sidebar/Sidebar";
import DrowpUp from "../../dropdown/DrowpUp";

const Cruise = () => {
  return (
    <>
      <Sidebar />
      <NavBar />
      <header>
        <div className="cruise-header">
          <Link to={"/"} className="logo-container">
            <img src={Logo} alt="logo" className="cruise-trippers-logo" />
          </Link>
          <div className="call-container">
            <div className="phone">
              <TbPhoneCall />
            </div>
            <a href="tel:8428588555" style={{ color: "white" }}>
              +91 8428588555
            </a>
          </div>
        </div>
      </header>
      <div className="">
        <CruiseMenu />
        <CommonArticle />
        <Desination />
        <Story />
        <Footer />
        <DrowpUp />
      </div>
    </>
  );
};

export default Cruise;
