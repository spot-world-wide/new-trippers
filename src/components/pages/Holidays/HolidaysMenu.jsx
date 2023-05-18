import React, { useState } from "react";
import { menuData } from "../../../data";
import { Link } from "react-router-dom";
import "./holidays.css";
import Form from "../../form/Form";
import emailjs from 'emailjs-com'

const HolidaysMenu = () => {

  function sentEmail(e) {
    e.preventDefault();

    // const selectedFromAirport = document.getElementById('from-airport').textContent;
    // console.log(selectedFromAirport)

    emailjs.sendForm(
      'service_v6n5lu6',
      'template_kxwbayc',
      e.target,
      'aIbpPnokcmlftYXtP',
    ).then(res => {
      console.log(res);
    }).catch(err => console.log(err));
  }
  const [holiday, setHoliday] = useState("");

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
      {/* holiday menu  */}
      <div>
        <div className="holiday-menu">
          {menuData.map((item) => (
            <Link to={item.path} className="menu-list ">
              <ul key={item.id} className="menu-li">
                <div className=" card card-info">
                  <p>{item.icon}</p>
                  <p>{item.name}</p>
                </div>
              </ul>
            </Link>
          ))}
        </div>
        <div className="Holiday-search">
          <form action="" className="form">
            <div className="holiday-right">
              <p>Book Domestic and International Holiday Packages</p>
            </div>
          </form>
          {/* location date container */}

          {/* from */}
          <form className="holiday-location" onSubmit={sentEmail}>
            <ul className="location-list hotel-location-list">
              <div className="from-to-container">
                <li>
                  <div className="from">
                    <div className="from-location">
                      <label htmlFor="from">FIND HOLIDAYS BY DESTINATION</label>
                      <input
                        id="holiday-input"
                        type="text"
                        placeholder="Enter Your Destination"
                        name="holidays"
                        style={{
                          fontSize: "1.4rem",
                          fontWeight: "600",
                          color: "white",
                          
                        }}
                        value={holiday}
                        onChange={(event) => setHoliday(event.target.value)}
                        autoFocus
                        required
                      />
                    </div>
                  </div>
                </li>
              </div>

              {/* holiday form */}
              <div className="holiday-from2">
                <form
                  className="holiday-from-location2"
                  onSubmit={sentEmail}
                  id="holiday-form"
                >
                  <label style={{ fontSize: "1.5rem" }} htmlFor="from">
                    Starting on
                    <select
                      style={{ fontSize: "1rem", cursor: "pointer" }}
                      className="holiday-select"
                    >
                      <option value="">Apr 2023</option>
                      <option value="">May 2023</option>
                      <option value="">Jun 2023</option>
                      <option value="">July 2023</option>
                      <option value="">Aug 2023</option>
                      <option value="">Sep 2023</option>
                      <option value="">Oct 2023</option>
                      <option value="">Nov 2023</option>
                      <option value="">Dec 2023</option>
                      <option value="">Jan 2024</option>
                      <option value="">Feb 2024</option>
                      <option value="">March 2024</option>
                    </select>
                  </label>
                </form>
              </div>

              {/* 5 */}
              <li>
                <div className="holiday-from2">
                  <div className="from-location2">
                    <button type="submit" className="btn" onClick={formControl}>
                      Book Packages
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

export default HolidaysMenu;
