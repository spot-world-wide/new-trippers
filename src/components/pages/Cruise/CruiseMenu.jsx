import React, { useState, useEffect } from "react";
import { menuData } from "../../../data";
import { Link } from "react-router-dom";
import { FcCalendar } from "react-icons/fc";
import Form from "../../form/Form";
import emailjs from "emailjs-com";

const CruiseMenu = () => {
  function sentEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_v6n5lu6",
        "template_tdlsysq",
        e.target,
        "aIbpPnokcmlftYXtP"
      )
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.log(err));
  }
  // user form
  const [formOpen, setFormOpen] = useState(false);

  const handleFormClose = () => {
    setFormOpen(false);
  };

  const formControl = () => {
    setFormOpen(true);
  };

  return (
    <>
      <div className="cruise-menu-container">
        <div className="cruise-menu">
          {menuData.map((item) => (
            <Link to={item.path} className="menu-list ">
              <ul key={item.id} className="menu-li">
                {/* <li
                  className={`card ${
                    activeIcon === item.icon ? "active-icon" : ""
                  }`}
                  onClick={() => handleClick(item.icon)}
                > */}
                <div className=" card card-info">
                  <p>{item.icon}</p>
                  <p>{item.name}</p>
                </div>
                {/* </li> */}
              </ul>
            </Link>
          ))}
        </div>
        <div className="cruise-search">
          <form action="" className="form">
            <div className="cruise-right">
              <p>Book Domestic and International Cruise</p>
            </div>
          </form>
          {/* location date container */}

          {/*  cruise form */}
          <form className="location" id="cruise-form" onSubmit={sentEmail}>
            <ul className="location-list Cruise-location-list">
              <div className="from-to-container">
                <li>
                  <div className="from">
                    <div className="cruise-location">
                      <label htmlFor="from">Search Destination/River</label>
                      <input
                        style={{ fontSize: "2rem" }}
                        type="text"
                        placeholder="Enter City"
                        id="cruise-input"
                        name="river"
                        required
                      />
                    </div>
                  </div>
                </li>
              </div>

              {/* cruise check in days  */}
              <div className="from2">
                <div className="from-location2">
                  <label htmlFor="from">
                    <FcCalendar />
                    <span>Check In</span>
                  </label>
                  <select name="cruise-months" id="cruise-months">
                    <option value="">Sail Months</option>
                    <option value="">Apr-2023</option>
                    <option value="">May-2023</option>
                    <option value="">June-2023</option>
                    <option value="">July-2023</option>
                    <option value="">August-2023</option>
                    <option value="">Sep-2023</option>
                    <option value="">Oct-2023</option>
                    <option value="">Nov-2023</option>
                    <option value="">Dec-2023</option>
                    <option value="">Jan-2024</option>
                    <option value="">Feb-2024</option>
                    <option value="">Mar-2024</option>
                    <option value="">Apr-2024</option>
                    <option value="">May-2024</option>
                    <option value="">June-2024</option>
                    <option value="">July-2024</option>
                    <option value="">Aug-2024</option>
                    <option value="">Sept-2024</option>
                    <option value="">Oct-2024</option>
                    <option value="">Nov-2024</option>
                  </select>
                </div>
              </div>

              <li>
                <div className="from2">
                  <div className="from-location2">
                    <label htmlFor="from">
                      <FcCalendar />
                      <span>Days</span>
                    </label>
                    <select name="Select nights" id="cruise-night-select">
                      <option value="">Select Nights</option>
                      <option value="">1-3 Nights</option>
                      <option value="">4-6 Nights</option>
                      <option value="">7-9 Nights</option>
                      <option value="">10-13 Nights</option>
                      <option value="">More than 13 Nights</option>
                    </select>
                  </div>
                </div>
              </li>
              {/* select cruise */}
              <li>
                <div className="from2">
                  <div className="from-location2">
                    <label htmlFor="from">
                      <span style={{ backgroundColor: "white" }}>
                        CRUISELINES
                      </span>
                    </label>
                    <select name="cruise-select" id="cruise-select">
                      <option value="">Select Cruise Line</option>
                      <option value="">Cordelia Cruises</option>
                      <option value="">MSC Cruises</option>
                    </select>
                  </div>
                </div>
              </li>
              <li>
                <div className="from2">
                  <div className="from-location2">
                    <button className="btn" type="submit" onClick={formControl}>
                      Book Cruise
                    </button>
                  </div>
                </div>
              </li>
            </ul>
          </form>
        </div>
      </div>
      {/* user booking form  */}
      {formOpen && <Form onClose={handleFormClose} />}
    </>
  );
};

export default CruiseMenu;
