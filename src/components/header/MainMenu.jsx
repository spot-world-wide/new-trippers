import React, { useState, useEffect, useRef } from "react";
import { menuData } from "../../data";
import { BsChevronDown } from "react-icons/bs";
import { CiCirclePlus, CiCircleMinus } from "react-icons/ci";
import { GoAlert } from "react-icons/go";
import { Link } from "react-router-dom";
import { BiSearch } from "react-icons/bi";
import "./header.css";
import Flight from "../../assets/fly.png";
import Form from "../form/Form";
import emailjs from "emailjs-com";

// apc for flight api
import apc from "../apc/apc";
const client = apc("autocomplete", {
  key: "ba3ba12a37",
});

const MainMenu = () => {
  // from data
  const fromAirportInfo = useRef();

  function sentEmail(e) {
    e.preventDefault();

    // const selectedFromAirport = document.getElementById('from-airport').textContent;
    // console.log(selectedFromAirport)

    emailjs
      .sendForm(
        "service_ke0187q",
        "template_xn23b8g",
        e.target,
        "S7pexRti1pFWOemSL"
      )
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.log(err));
  }
  // from destination

  //  searchTerm holds the current value of a search input field, and setSearchTerm is a function used to update it.
  const [searchTerm, setSearchTerm] = useState("");
  //  suggestions holds an array of autocomplete suggestions, and setSuggestions is a function used to update it.
  const [suggestions, setSuggestions] = useState([]);

  // from airport hook

  //  selectedAirport holds the currently selected airport, and setSelectedAirport is a function used to update it.
  const [selectedAirport, setSelectedAirport] = useState(null);
  //  showAirportList is a boolean variable that determines whether the list of airports is shown, and setShowAirportList is a function used to update it.
  const [showAirportList, setShowAirportList] = useState(false);

  // depart date

  const [departDate, setDepartDate] = useState("");

  // return date
  const [returnDate, setReturnDate] = useState("");

  // to airport hook
  const [selectedAirportTo, setSelectedAirportTo] = useState(null);
  const [showAirportListTo, setShowAirportListTo] = useState(false);

  // to destination

  const [searchTermTo, setSearchTermTo] = useState("");
  const [suggestionsTo, setSuggestionsTo] = useState([]);
  const [activeIcon, setActiveIcon] = useState("");

  // This function is called when the user types in the search input field. It updates the searchTerm state variable and uses an API client to fetch autocomplete suggestions. Once the suggestions are fetched, it extracts the necessary data from the response and updates the suggestions state variable with an array of objects containing the airport name, code, and city.
  // from airport handle
  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
    client
      .autocomplete(searchTerm)
      .then((response) => {
        console.log(response);
        const suggestions = response.airports.map((airport) => ({
          name: airport.name,
          code: airport.iata,
          city: airport.city,
        }));
        setSuggestions(suggestions);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // user selected airport

  const handleSelectAirport = (airport) => {
    setSelectedAirport(airport);
    setShowAirportList(false);
  };

  const handleAirportNameClick = () => {
    setSelectedAirport(null);
    setShowAirportList(!showAirportList);
  };

  //To flight input  handle
  const handleInputChangeTo = (e) => {
    setSearchTermTo(e.target.value);
    client
      .autocomplete(searchTermTo)
      .then((response) => {
        const suggestionsTo = response.airports.map((airport) => ({
          name: airport.name,
          code: airport.iata,
          city: airport.city,
        }));
        setSuggestionsTo(suggestionsTo);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // to  destination airport

  const handleSelectAirportTo = (airport) => {
    setSelectedAirportTo(airport);
    setShowAirportListTo(false);
  };
  const handleAirportNameClickTo = () => {
    setSelectedAirportTo(null);
    setShowAirportListTo(!showAirportListTo);
  };

  // booking age section
  // The code declares three separate state variables adults, children, and infants, initialized to 0.
  const [adults, setAdults] = useState(0);
  const [children, setChildren] = useState(0);
  const [infants, setInfants] = useState(0);

  // increment members

  // The function takes a string parameter section, which determines which state variable to update. When called, the function checks the value of section and increments the corresponding state variable using the setX() functions (where X is either Adults, Children, or Infants).

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
  // decrement members

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

  // total members
  const totalTravellers = adults + children + infants;

  // flight class type
  const [classType, setClassType] = useState("");

  function handleClassChange(e) {
    setClassType(e.target.nextSibling.textContent);
  }

  // card for travelers
  const [isCardOpen, setIsCardOpen] = useState(false);

  function handleContainerClick() {
    setIsCardOpen(false);
  }
  // active icon

  function handleClick(icon) {
    setActiveIcon(icon);
  }

  function handleContainerClickOpen() {
    setIsCardOpen(!isCardOpen);
  }

  // user register form

  const [formOpen, setFormOpen] = useState(false);

  const handleFormClose = () => {
    setFormOpen(false);
  };

  // move flight  animation timeout
  const [flightMoved, setFlightMoved] = useState(false);

  const moveFlight = () => {
    setFlightMoved(true);

    setTimeout(() => {
      setFlightMoved(false);
      setFormOpen(true); //after 3 sec form will open
    }, 3000);
  };

  // from to   card  close  anywhere

  const airportRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      console.log("Clicked outside");
      if (airportRef.current && !airportRef.current.contains(event.target)) {
        setShowAirportList(false);
        setShowAirportListTo(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <>
      {/* flight menu  */}
      <div className="flight-menu">
        {menuData.map((item) => (
          <Link to={item.path} className="menu-list ">
            <ul key={item.id} className="menu-li">
              <li
                className={`card ${
                  activeIcon === item.icon ? "active-icon" : ""
                }`}
                onClick={() => handleClick(item.icon)}
              >
                <div className="card-info">
                  <p>{item.icon}</p>
                  <p>{item.name}</p>
                </div>
              </li>
            </ul>
          </Link>
        ))}
      </div>
      {/* flight menu end */}

      {/* flight search */}
      <div className="flight-search">
        <form action="" className="flight-form">
          <div className="flight-heading">
            <p>Book Flight Tickets</p>
          </div>
        </form>
        <hr />

        {/* from */}
        <form className="location" onSubmit={sentEmail}>
          <ul className="location-list" ref={airportRef}>
            <div className="from-to-container">
              <li>
                <div className="from">
                  <div className="from-location">
                    <label htmlFor="from">FROM</label>
                    {selectedAirport ? (
                      <>
                        <select
                          name="from-airport-city"
                          onClick={handleAirportNameClick}
                          style={{ textTransform: "uppercase" }}
                        >
                          <option value={selectedAirport.city}>
                            {selectedAirport.city}
                          </option>
                        </select>
                        <select
                          name="from-airport-name"
                          onClick={handleAirportNameClick}
                          style={{ textTransform: "uppercase" }}
                        >
                          <option value={selectedAirport.name}>
                            {selectedAirport.name} [{selectedAirport.code}]
                          </option>
                        </select>
                      </>
                    ) : (
                      <h4
                        style={{ cursor: "pointer" }}
                        onClick={() => setShowAirportList(!showAirportList)}
                      >
                        {showAirportList
                          ? "search city Name "
                          : "select city name"}
                      </h4>
                    )}

                    {showAirportList && (
                      <div className="airport-names">
                        <div
                          className="search-icon"
                          style={{
                            display: "flex",
                            alignItems: "center",
                            gap: "10px",
                            padding: "0 15px",
                          }}
                        >
                          <BiSearch style={{ fontSize: "1.2rem" }} />
                          <input
                            type="text"
                            value={searchTerm}
                            onChange={handleInputChange}
                            placeholder="search"
                            className="airport-search"
                            autoFocus
                            required
                          />
                        </div>

                        <ul>
                          {suggestions.map((suggestion) => (
                            <li
                              key={suggestion.code}
                              onClick={() => handleSelectAirport(suggestion)}
                            >
                              {suggestion.city} ({suggestion.name})
                              <span className="airport-code">
                                {suggestion.code}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                  <div class="vertical-line"></div>
                </div>
              </li>

              <li>
                {/* to */}
                <div className="from2">
                  <div className="from-location2">
                    <label htmlFor="from">TO</label>
                    {selectedAirportTo ? (
                      <>
                        <select
                          name="to-airport-city"
                          onClick={handleAirportNameClickTo}
                          style={{ textTransform: "uppercase" }}
                        >
                          <option value={selectedAirportTo.city}>
                            {selectedAirportTo.city}
                          </option>
                        </select>
                        <select
                          name="to-airport-name"
                          onClick={handleAirportNameClickTo}
                          style={{ textTransform: "uppercase" }}
                        >
                          <option value={selectedAirportTo.name}>
                            {selectedAirportTo.name} [{selectedAirportTo.code}]
                          </option>
                        </select>
                      </>
                    ) : (
                      <h4
                        onClick={() => setShowAirportListTo(!showAirportListTo)}
                      >
                        {showAirportListTo
                          ? "search city Name "
                          : "select city name"}
                      </h4>
                    )}

                    {showAirportListTo && (
                      <div className="airport-names-to">
                        <div
                          className="search-icon"
                          style={{
                            display: "flex",
                            alignItems: "center",
                            gap: "10px",
                            padding: "0 15px",
                          }}
                        >
                          <BiSearch style={{ fontSize: "1.2rem" }} />
                          <input
                            type="text"
                            value={searchTermTo}
                            onChange={handleInputChangeTo}
                            placeholder="search"
                            className="airport-search"
                            autoFocus
                            required
                          />
                        </div>

                        <ul>
                          {suggestionsTo.map((suggestion) => (
                            <li
                              key={suggestion.code}
                              onClick={() => handleSelectAirportTo(suggestion)}
                            >
                              {suggestion.city} ({suggestion.name})
                              <span className="airport-code">
                                {suggestion.code}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                    {/* <h6>Chennai</h6> */}
                  </div>
                  <div class="vertical-line2"></div>
                </div>
              </li>
            </div>

            {/* calender */}
            {/* 3 */}
            <div className="from2">
              <div className="from-location2">
                <label htmlFor="from">
                  <span>DEPART</span>
                  <BsChevronDown />
                </label>
                <input
                  type="date"
                  value={departDate}
                  onChange={(event) => setDepartDate(event.target.value)}
                  name="depart-date"
                  id="flight-depart-date"
                  required
                />
              </div>
              <div class="vertical-line2"></div>
            </div>

            <li>
              <div className="from2">
                <div className="from-location2">
                  <label htmlFor="from">
                    <span>RETURN</span>

                    <BsChevronDown />
                  </label>
                  <input
                    type="date"
                    value={returnDate}
                    onChange={(event) => setReturnDate(event.target.value)}
                    name="flight-return-date"
                    id="flight-return-date"
                    required
                  />
                </div>

                <div class="vertical-line2"></div>
              </div>
            </li>
            {/* travels qty  */}
            <li>
              <div className="from2">
                <div className="from-location2">
                  <label htmlFor="from">
                    <span
                      onClick={handleContainerClickOpen}
                      style={{
                        cursor: "pointer",
                      }}
                    >
                      TRAVELLERS
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
                    Traveller
                  </h6>
                  <p>{classType}</p>

                  {isCardOpen && (
                    <div className="qty-card">
                      <div className="adults">
                        <div className="qty">
                          <p>adults</p>
                        </div>
                        <p>{adults}</p>

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

                      {/* children */}
                      <div className="adults">
                        <div className="qty">
                          <p>Children</p>
                        </div>
                        <p>{children}</p>

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

                      {/* infants */}
                      <div className="adults">
                        <div className="qty">
                          <p>Infants</p>
                        </div>
                        <p>{infants}</p>

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

                      <div className="class-container">
                        <input
                          type="checkbox"
                          name="cat"
                          id=""
                          onChange={handleClassChange}
                        />
                        <p>Economy</p>
                        <input
                          type="checkbox"
                          name="cat"
                          id=""
                          onChange={handleClassChange}
                        />
                        <p> Premium Economy</p>
                        <input
                          type="checkbox"
                          name="cat"
                          id=""
                          onChange={handleClassChange}
                        />
                        <p>Business </p>
                      </div>
                      <button
                        type="submit"
                        className="qty-apply-btn"
                        onClick={handleContainerClick}
                      >
                        Apply
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </li>
            {/* book flight btn */}
            <li>
              <div className="from2">
                <div className="from-location2">
                  <button type="submit" className="btn" onClick={moveFlight}>
                    Book Flights
                  </button>
                  <div
                    id="flight"
                    className={flightMoved ? "flight moved" : "flight"}
                  >
                    <img src={Flight} alt="flight" />
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </form>
        <hr />
        <form action="" className="form3">
          <div className="right">
            <p className="covid-p">
              <GoAlert /> COVID 19 Updates
            </p>
          </div>
        </form>
      </div>
      {/* flight booking form  */}
      {formOpen && <Form onClose={handleFormClose} />}
    </>
  );
};

export default MainMenu;
