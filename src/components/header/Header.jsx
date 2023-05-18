import React, { useState } from "react";
import "./header.css";
import LOGO from "../../assets/TPR.png";
import { CgProfile } from "react-icons/cg";
import { AiFillCaretDown } from "react-icons/ai";
import MainMenu from "./MainMenu";
import Login from "./Login";
import NavBar from "./NavBar";
import CommonArticle from "../article/CommonArticle/CommanArticle";
import Desination from "../article/Destination/Destination";
import Story from "../article/Stories/Story";
import Footer from "../Footer/Footer";
import Sidebar from "../sidebar/Sidebar";
import DrowpUp from "../dropdown/DrowpUp";

const Header = () => {
  // This line declares a state variable called "isCardOpen" and a function called "setIsCardOpen" to update it. The initial value of "isCardOpen" is set to "false" using the "useState" hook.
  const [isCardOpen, setIsCardOpen] = useState(false);

  // This function is called when the "LOGIN/REGISTER" button is clicked. It sets the "isCardOpen" state variable to "true".
  const handleLoginClick = () => {
    setIsCardOpen(true);
  };

  // This function is called when the "Login" component is closed. It sets the "isCardOpen" state variable to "false".
  const handleCardClose = () => {
    setIsCardOpen(false);
  };
  return (
    // flight header
    <>
      <Sidebar />
      <NavBar />

      <header className="header-main">
        <div className="top-header">
          {/* left container */}
          <div className="left-container">
            <div className="logo">
              <img src={LOGO} alt="logo" className="trippers-logo" />
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
          {/*flight  main menu */}
        </div>
        <div className="main-container">
          <div className="main-menu">
            <MainMenu />
          </div>
          {/* This code conditionally renders the "Login" component only if "isCardOpen" is "true". It also passes a "handleCardClose" function to the "Login" component as a prop.

 */}
          {isCardOpen && <Login onClose={handleCardClose} />}
        </div>
      </header>

      {/* article sections */}
      <CommonArticle />
      <Desination />
      <Story />
      {/*footer section  */}
      <Footer />
      <DrowpUp />
    </>
  );
};

export default Header;
