import React, { useState } from "react";
import Logo from "../../../assets/TPR.png";
import { CgProfile } from "react-icons/cg";
import { AiFillCaretDown } from "react-icons/ai";
import HolidaysMenu from "./HolidaysMenu";
import Login from "../../header/Login";
import CommonArticle from "../../article/CommonArticle/CommanArticle";
import Desination from "../../article/Destination/Destination";
import Story from "../../article/Stories/Story";
import NavBar from "../../header/NavBar";
import Footer from "../../Footer/Footer";
import Sidebar from "../../sidebar/Sidebar";
import DrowpUp from "../../dropdown/DrowpUp";

const Holidays = () => {
  const [isCardOpen, setIsCardOpen] = useState(false);

  const handleLoginClick = () => {
    setIsCardOpen(true);
  };

  const handleCardClose = () => {
    setIsCardOpen(false);
  };
  return (
    <>
      <Sidebar />
      <NavBar />
      <div>
        <header className=" holiday-header header-main">
          <div className="top-header">
            {/* left container */}
            <div className="left-container">
              <div className="logo">
                <img src={Logo} alt="logo" className="trippers-logo" />
              </div>
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
          <div className="main-container">
            <div className="main-menu">
              <HolidaysMenu />
            </div>
            {isCardOpen && <Login onClose={handleCardClose} />}
          </div>
        </header>
        <CommonArticle />
        <Desination />
        <Story />
        <Footer />
        <DrowpUp />
      </div>
    </>
  );
};

export default Holidays;
