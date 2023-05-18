import React, { useState } from "react";
import LOGO from "../../../assets/TPR.png";
import { CgProfile } from "react-icons/cg";
import { AiFillCaretDown } from "react-icons/ai";
import HotelMainMenu from "./HotelMainMenu";
import Login from "../../header/Login";
import CommonArticle from "../../article/CommonArticle/CommanArticle";
import Desination from "../../article/Destination/Destination";
import Story from "../../article/Stories/Story";
import NavBar from "../../header/NavBar";
import Footer from "../../Footer/Footer";
import { Link } from "react-router-dom";
import Sidebar from "../../sidebar/Sidebar";
import DrowpUp from "../../dropdown/DrowpUp";

const Hotel = () => {
  const [isCardOpen, setIsCardOpen] = useState(false);

  const handleLoginClick = () => {
    setIsCardOpen(true);
  };

  const handleCardClose = () => {
    setIsCardOpen(false);
  };
  return (
    <div>
      <Sidebar />
      <NavBar />
      <header className=" hotel-header header-main">
        <div className="top-header">
          {/* left container */}
          <div className="left-container">
            <Link to={"/"} className="logo">
              <img src={LOGO} alt="logo" className="trippers-logo" />
            </Link>
          </div>
          {/* right-container */}
          <div className="right-container">
            <ul className="ul-list">
              <li>
                <button className="login-btn" onClick={handleLoginClick}>
                  <CgProfile />
                  LOGIN/REGISTER <AiFillCaretDown />
                </button>
              </li>
            </ul>
          </div>
          {/* main menu */}
        </div>
        <div className="hotel-main-container">
          <div className="main-menu">
            <HotelMainMenu />
            <CommonArticle />
            <Desination />
            <Story />
            <Footer />
            <DrowpUp />
          </div>
          {isCardOpen && <Login onClose={handleCardClose} />}
        </div>
      </header>
    </div>
  );
};

export default Hotel;
