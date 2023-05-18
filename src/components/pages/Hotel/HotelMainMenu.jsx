import React, { useState } from "react";
import { menuData } from "../../../data";
import { Link } from "react-router-dom";
import { BsChevronDown } from "react-icons/bs";
import { CiCirclePlus, CiCircleMinus } from "react-icons/ci";
import { FcCalendar } from "react-icons/fc";
import "../Hotel/hotelMainMenu.css";
import Form from "../../form/Form";
import emailjs from 'emailjs-com'

const HotelMainMenu = () => {

  function sentEmail(e) {
    e.preventDefault();

    // const selectedFromAirport = document.getElementById('from-airport').textContent;
    // console.log(selectedFromAirport)

    emailjs.sendForm(
      'service_unfn0i7',
      'template_xn0ex9v',
      e.target,
      'bZ-eUNQR-24RVrUub',
    ).then(res => {
      console.log(res);
    }).catch(err => console.log(err));
  }
  // booking age section
  const [adults, setAdults] = useState(0);
  const [children, setChildren] = useState(0);
  const [infants, setInfants] = useState(0);

  // increment
  const handleIncrement = (section) => {
    switch (section) {
      case "adults":
        setAdults(adults + 1);
        break;
      case "children":
        setChildren(children + 1);
        break;
      case "infants":
        setInfants(infants + 1);
        break;
      default:
        break;
    }
  };

  // decrement

  const handleDecrement = (section) => {
    switch (section) {
      case "adults":
        if (adults > 0) setAdults(adults - 1);
        break;
      case "children":
        if (children > 0) setChildren(children - 1);
        break;
      case "infants":
        if (infants > 0) setInfants(infants - 1);
        break;
      default:
        break;
    }
  };

  // total
  const totalTravellers = adults + children;

  const totalRoom = infants;
  // class type
  const [classType, setClassType] = useState("");

  function handleClassChange(e) {
    setClassType(e.target.nextSibling.textContent);
  }

  // card travelers
  const [isCardOpen, setIsCardOpen] = useState(false);

  function handleContainerClick() {
    setIsCardOpen(false);
  }

  function handleContainerClickOpen() {
    setIsCardOpen(!isCardOpen);
  }

  function handleSubmit(event) {
    event.preventDefault();
    // Send the selected fromAirport and toAirport values to the server for processing
  }

  // set hotel name

  const [hotelName, setHotelName] = useState("");

  // user form
  const [formOpen, setFormOpen] = useState(false);

  const handleFormClose = () => {
    setFormOpen(false);
  };

  const formControl = () => {
    setFormOpen(true);
  };

  // active icon
  const [activeIcon, setActiveIcon] = useState("");

  function handleClick(icon) {
    setActiveIcon(icon);
  }

  // depart date

  const [departDate, setDepartDate] = useState("");

  console.log(departDate);

  // return date
  const [returnDate, setReturnDate] = useState("");

  return (
    <div className="hotel-header">
      {/* hotel menu */}
      <div className="hotel-menu">
        {menuData.map((item) => (
          <Link to={item.path} className="card-info">
            <ul key={item.id} className="menu-list">
              <li
                className={`card ${activeIcon === item.icon ? "active-icon" : ""
                  }`}
                onClick={() => handleClick(item.icon)}
              >
                <p>{item.icon}</p>
                <p>{item.name}</p>
              </li>
            </ul>
          </Link>
        ))}
      </div>
      {/* hotel menu end */}
      <div className="Hotel-search">
        <form action="" className="form">
          <div className="hotel-right">
            <p style={{ fontSize: "1.3rem" }}>
              Book Domestic and International Hotels
            </p>
          </div>
        </form>
        <hr />

        {/* hotel-from */}
        <form className="location" onSubmit={sentEmail} id="hotel-form">
          <ul className="location-list hotel-location-list">
            <div className="from-to-container">
              <li>
                <div className="from">
                  <div className="from-location">
                    <label
                      htmlFor="from"
                      style={{ textTransform: "upperCase" }}
                    >
                      Enter Your Destination
                    </label>
                    {/* hotel input */}
                    <input
                      type="text"
                      id="hotel"
                      name="hotel"
                      value={hotelName}
                      onChange={(event) => setHotelName(event.target.value)}
                      autoFocus
                      required
                    />
                  </div>

                  {/* icons */}

                  <div class="vertical-line"></div>
                </div>
              </li>
            </div>

            {/* calender */}
            {/* 3 */}
            <div className="from2">
              <div className="from-location2">
                <label htmlFor="from">
                  <FcCalendar />
                  <span>DEPART</span>
                  <BsChevronDown />
                </label>
                <input
                  type="date"
                  value={departDate}
                  onChange={(event) => setDepartDate(event.target.value)}
                  name="hotel-depart-date"
                  id="hotel-depart-date"
                  required
                />
              </div>
              <div class="vertical-line2"></div>
            </div>

            <li>
              <div className="from2">
                <div className="from-location2">
                  <label htmlFor="from">
                    <FcCalendar />
                    <span>RETURN</span>

                    <BsChevronDown />
                  </label>
                  <input
                    type="date"
                    value={returnDate}
                    onChange={(event) => setReturnDate(event.target.value)}
                    name="hotel-return-date"
                    id="hotel-return-date"
                    required
                  />
                </div>

                <div class="vertical-line2"></div>
              </div>
            </li>

            {/* travels qty  */}
            {/* <li>
              <div className="from2">
                <div className="from-location2">
                  <label htmlFor="from">
                    <span
                      onClick={handleContainerClickOpen}
                      style={{ cursor: "pointer" }}
                    >
                      Room & Guest
                    </span>
                  </label>
                  <h6
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: "5px",
                    }}
                  >
                    <span style={{ fontSize: "20px" }}>{totalTravellers}</span>
                    Guest
                    <span style={{ fontSize: "20px" }}>{infants}</span>
                    Rooms
                  </h6>
                  <p>{classType}</p>

                  {isCardOpen && (
                    <div className="hotel-qty-card">
                      <div className="adults">
                        <div className="qty">
                          <div>adults</div>
                          <div>
                            <p>{adults}</p>
                          </div>
                        </div>
                        <div className="qty-btn">
                          <button
                            type="button"
                            onClick={() => handleIncrement("adults")}
                          >
                            <CiCirclePlus
                              style={{ fontSize: "20px", cursor: "pointer" }}
                            />
                          </button>
                          <button
                            type="button"
                            onClick={() => handleDecrement("adults")}
                          >
                            <CiCircleMinus
                              style={{ fontSize: "20px", cursor: "pointer" }}
                            />
                          </button>
                        </div>
                      </div>
                      <hr />


                      <div className="adults">
                        <div className="qty">
                          <p>Children</p>
                          <p>{children}</p>
                        </div>
                        <div className="qty-btn">
                          <button
                            type="button"
                            onClick={() => handleIncrement("children")}
                          >
                            <CiCirclePlus
                              style={{ fontSize: "20px", cursor: "pointer" }}
                            />
                          </button>
                          <button
                            type="button"
                            onClick={() => handleDecrement("children")}
                          >
                            <CiCircleMinus
                              style={{ fontSize: "20px", cursor: "pointer" }}
                            />
                          </button>
                        </div>
                      </div>
                      <hr />


                      <div className="adults">
                        <div className="qty">
                          <p>Rooms</p>
                          <p>{infants}</p>
                        </div>
                        <div className="qty-btn">
                          <button
                            type="button"
                            onClick={() => handleIncrement("infants")}
                          >
                            <CiCirclePlus
                              style={{ fontSize: "20px", cursor: "pointer" }}
                            />
                          </button>
                          <button
                            type="button"
                            onClick={() => handleDecrement("infants")}
                          >
                            <CiCircleMinus
                              style={{ fontSize: "20px", cursor: "pointer" }}
                            />
                          </button>
                        </div>
                      </div>
                      <hr />

                      <button
                        type="button"
                        className="qty-apply-btn"
                        onClick={handleContainerClick}
                      >
                        Apply
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </li> */}
            {/* 5 */}
            <li>
              <div className="from2">
                <div className="from-location2">
                  <button className="btn" type="submit" onClick={formControl}>
                    Book Hotels
                  </button>
                </div>
              </div>
            </li>
            {/* 6 */}
          </ul>
        </form>
      </div>
      {/* user booking form  */}
      {formOpen && <Form onClose={handleFormClose} />}
    </div>
  );
};

export default HotelMainMenu;
