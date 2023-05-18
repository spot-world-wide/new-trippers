import React, { useEffect, useState } from "react";
import { menuData } from "../../data";
import Logo from "../../assets/TPR new.png";
import "./navbar.css";
import { Link } from "react-router-dom";

const NavBar = () => {

  // "showNav" and "setShowNav" to update it using the useState hook. The initial value of showNav is false.
  const [showNav, setShowNav] = useState(false);


  // useEffect hook. This effect will be called once after the component is mounted and after each update.
  useEffect(() => {
    const handleScroll = () => {

      // This checks if the user has scrolled more than 150 pixels from the top of the page. If they have, it sets the showNav state to true, otherwise it sets it to false.
      if (window.scrollY > 150) {
        setShowNav(true);
      } else {
        setShowNav(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  // the effect will only run once after the component is mounted.

  return (
    <div className={` ${showNav ? "swipe-nav" : "swipe-nav-hidden"}`}>
      <div className="swipe-nav-logo">
        <img src={Logo} alt="" className="swipe-nav-logo-img" />
      </div>
      {menuData.map((item) => (
        <div key={item.id} className="swipe-nav-menu">
          <Link to={item.path} className="swipe-menu-icon">
            <p>{item.icon}</p>
            <p>{item.name}</p>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default NavBar;
