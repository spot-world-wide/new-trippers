import React, { useRef, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import UMRAH from "../../../assets/umrah.png";
import "./umrah.css";
import { BiBus, BiSearch } from "react-icons/bi";

import { RiHotelBedFill } from "react-icons/ri";
import { FaShieldAlt } from "react-icons/fa";
import maqam from "../../../assets/maqam.png";
import maqam2 from "../../../assets/nusuk .png";
import { BsChevronDown } from "react-icons/bs";
import { FcCalendar } from "react-icons/fc";
import { CiCirclePlus, CiCircleMinus } from "react-icons/ci";
import apc from "../../apc/apc";
import Desination from "../../article/Destination/Destination";
import CommonArticle from "../../article/CommonArticle/CommanArticle";
import Story from "../../article/Stories/Story";
import Form from "../../form/Form";
import NavBar from "../../header/NavBar";
import Footer from "../../Footer/Footer";
import emailjs from "emailjs-com";
import Sidebar from "../../sidebar/Sidebar";
import DrowpUp from "../../dropdown/DrowpUp";

// apc for flight api
const client = apc("autocomplete", {
  key: "ba3ba12a37",
});

const Umrah = () => {
  function sentEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_fra7o2t",
        "template_r6xsij3",
        e.target,
        "nl1nLv6edpGfiDMyl"
      )
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.log(err));
  }
  // from destination
  const [searchTerm, setSearchTerm] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  const [selectedAirport, setSelectedAirport] = useState(null);
  const [showAirportList, setShowAirportList] = useState(false);

  // to airport hook
  const [selectedAirportTo, setSelectedAirportTo] = useState(null);
  const [showAirportListTo, setShowAirportListTo] = useState(false);

  // to destination

  const [searchTermTo, setSearchTermTo] = useState("");
  const [suggestionsTo, setSuggestionsTo] = useState([]);

  // umrah card
  const [showUmrahCard, setShowUmrahCard] = useState(false);

  // start from
  const [startFrom, setStartFrom] = useState("Makkah");

  // depart date

  const [departDate, setDepartDate] = useState("");

  // return date
  const [returnDate, setReturnDate] = useState("");

  function handleLocationOptionClick(location) {
    setStartFrom(location);
    setShowUmrahCard(false); // hide the umrah card
  }

  function handleStartFromClick() {
    setShowUmrahCard(true); // show the umrah card again
  }
  // from handle
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

  const handleSelectAirport = (airport) => {
    setSelectedAirport(airport);
    setShowAirportList(false);
  };

  const handleAirportNameClick = () => {
    setSelectedAirport(null);
    setShowAirportList(true);
  };

  //To  handle
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
  const handleSelectAirportTo = (airport) => {
    setSelectedAirportTo(airport);
    setShowAirportListTo(false);
  };
  const handleAirportNameClickTo = () => {
    setSelectedAirportTo(null);
    setShowAirportListTo(true);
  };

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
  const totalTravellers = adults + children + infants;

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

  // user form
  const [formOpen, setFormOpen] = useState(false);

  const handleFormClose = () => {
    setFormOpen(false);
  };

  const formControl = () => {
    setFormOpen(true);
  };

  // from to   card  close  anywhere

  const airportRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
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
    // nav bar
    <>
      <Sidebar />
      <NavBar />
      <header className="header-umrah">
        <div className="top-header">
          {/* left container */}
          <div className="left-container">
            <Link to={"/"} className="logo">
              <img src={UMRAH} alt="logo" className="umrah-logo" />
            </Link>
          </div>
          {/* right-container */}
          <div className="right-container">
            <ul className="umrah-ul-list">
              <li>
                <Link to={"/"} type="button">
                  HOME
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </header>

      {/* main menu */}
      <div className="umrah-booking">
        <div className="umrah-menu">
          <div className="umrah-left">
            <p>GET UMRAH VISA ONLINE</p>
            <div className="btn-container">
              <button className="umrah-btn">
                <FaShieldAlt />
                Umrah + e-Visa
              </button>

              <Link to={"/hotel"}>
                <RiHotelBedFill />
                Hotels
              </Link>
              <Link to={"/bus"}>
                <BiBus />
                Transport
              </Link>
            </div>
          </div>
          <div className="umrah-right">
            <p style={{ fontSize: "20px", color: "grey" }}>
              Certified Member of
            </p>
            <div className="umrah-icon">
              <a href="">
                <img src={maqam} alt="" style={{ width: "120px" }} />
              </a>
              <a href="">
                <img src={maqam2} alt="" style={{ width: "120px" }} />
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* location */}
      {/* from */}
      <form onSubmit={sentEmail}>
        <div ref={airportRef} className="umrah-location">
          <ul className="umrah-location-list">
            <li>
              {/* from  airport details umrah */}
              <div className="umrah-from">
                <div className="from-location">
                  <label htmlFor="from">FROM</label>
                  {selectedAirport ? (
                    <>
                      <select
                        name="umrah-from-airport-city"
                        onClick={handleAirportNameClick}
                        style={{ textTransform: "uppercase" }}
                      >
                        <option value={selectedAirport.city}>
                          {selectedAirport.city}
                        </option>
                      </select>
                      <select
                        name="umrah-from-airport-name"
                        onClick={handleAirportNameClick}
                      >
                        <option>
                          {selectedAirport.name} [{selectedAirport.code}]
                        </option>
                      </select>
                    </>
                  ) : (
                    <h4 onClick={() => setShowAirportList(!showAirportList)}>
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
            {/* to airport details umrah */}
            <li>
              <div className="umrah-from2">
                <div className="from-location2">
                  <label htmlFor="from">TO</label>
                  {selectedAirportTo ? (
                    <>
                      <select
                        name="umrah-to-airport-city"
                        onClick={handleAirportNameClickTo}
                        style={{ textTransform: "uppercase" }}
                      >
                        <option value={selectedAirportTo.city}>
                          {selectedAirportTo.city}
                        </option>
                      </select>
                      <select
                        name="umrah-to-airport-city"
                        onClick={handleAirportNameClickTo}
                      >
                        <option>
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
                          value={searchTermTo}
                          onChange={handleInputChangeTo}
                          placeholder="search"
                          className="airport-search"
                          autoFocus
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
                </div>

                <div class="vertical-line2"></div>
              </div>
            </li>
            {/* calender */}

            <li>
              <div className="from2">
                <div className="from-location2">
                  <label htmlFor="from">
                    <FcCalendar />
                    <span>DEPART</span>
                    <BsChevronDown />
                  </label>
                  {/* depart */}
                  <input
                    type="date"
                    value={departDate}
                    onChange={(event) => setDepartDate(event.target.value)}
                    name="umrah-depart"
                    id="flight-depart-date"
                    required
                  />
                </div>
                <div class="vertical-line2"></div>
              </div>
            </li>

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
                    name="umrah-return"
                    id="flight-return-date"
                    required
                  />
                </div>
              </div>
            </li>
          </ul>
        </div>

        {/* no of rooms */}
        <div className="umrah-room">
          <ul className="umrah-room-list">
            <li>
              <div className="umrah-from">
                <div className="from-location">
                  <label htmlFor="from" style={{ color: "grey" }}>
                    START FROM
                  </label>
                  <h6
                    onClick={handleStartFromClick}
                    style={{ cursor: "pointer" }}
                  >
                    {startFrom}
                  </h6>
                </div>

                <div class="vertical-line"></div>
              </div>
              {showUmrahCard && (
                <div className="umrah-card">
                  <div className="card-header"></div>
                  <div className="card-body">
                    <ul>
                      <li>
                        <p onClick={() => handleLocationOptionClick("Makkah")}>
                          Makkah
                        </p>
                      </li>
                      <li>
                        <p onClick={() => handleLocationOptionClick("Madinah")}>
                          Madinah
                        </p>
                      </li>
                    </ul>
                  </div>
                </div>
              )}
            </li>
            {/* form 2 */}
            <li>
              <div className="from2">
                <div className="from-location2">
                  <label htmlFor="from" style={{ color: "grey" }}>
                    Number Of Nights
                  </label>
                </div>

                <div class="vertical-line2"></div>
              </div>

              <div className="umrah-nights">
                <select name="" id="">
                  <option value="">1 Nights in Makkah</option>
                  <option value="">2 Nights in Makkah</option>
                  <option value="">3 Nights in Makkah</option>
                  <option value="">4 Nights in Makkah</option>
                  <option value="">5 Nights in Makkah</option>
                </select>
              </div>
            </li>
            {/* form 3 */}

            <li>
              <div className="from2">
                <div className="from-location2">
                  <label htmlFor="from">
                    <span
                      onClick={handleContainerClickOpen}
                      style={{ cursor: "pointer" }}
                    >
                      Guest
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
                  </h6>
                  <p>{classType}</p>

                  {isCardOpen && (
                    <div className="umrah-qty-card">
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

                      {/* children */}
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

                      <button
                        type="button"
                        className="umrah-qty-apply-btn"
                        onClick={handleContainerClick}
                      >
                        Apply
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </li>
          </ul>
        </div>
        {/* button */}
        <button type="submit" className="package-btn" onClick={formControl}>
          Book Package
        </button>
      </form>
      {/* button */}

      {/* package card */}
      <CommonArticle />
      <Desination />
      <Story />
      <Footer />
      <DrowpUp />
      {/* user booking form  */}
      {formOpen && <Form onClose={handleFormClose} />}
    </>
  );
};

export default Umrah;
