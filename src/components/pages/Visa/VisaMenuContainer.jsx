import React, { useState } from "react";
import "./visa.css";
import { visaCountries } from "../../../data";
import { BsArrowRight } from "react-icons/bs";
import VisaArtical from "./VisaArtical";
import Form from "../../form/Form";
import emailjs from "emailjs-com";

const VisaMenuContainer = () => {
  function sentEmail(e) {
    e.preventDefault();
    setFormOpen(true);



    emailjs
      .sendForm(
        "service_unfn0i7",
        "template_w2grzmk",
        e.target,
        "bZ-eUNQR-24RVrUub"
      )
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.log(err));
  }

  // selectedCountry and setSelectedCountry are used to store and update the selected country value from the search input.
  const [selectedCountry, setSelectedCountry] = useState("");
  // filteredCountries and setFilteredCountries are used to store and update the filtered list of countries based on the search input
  const [filteredCountries, setFilteredCountries] = useState([]);

  // showVisaList and setShowVisaList are used to toggle the visibility of the list of countries.
  const [showVisaList, setShowVisaList] = useState(false);

  const handleCountrySelect = (country) => {
    setSelectedCountry(country);
    setShowVisaList(false);
  };

  const handleInputChange = (e) => {
    // The function first extracts the current value of the input field and assigns it to a constant called inputValue.
    const inputValue = e.target.value;
    setSelectedCountry(inputValue);
    // setFilteredCountries() function to set the state variable filteredCountries to a filtered array of visaCountries. The visaCountries array contains the list of all countries that the user can search for.
    setFilteredCountries(
      visaCountries.filter((country) =>
        country.toLowerCase().includes(inputValue.toLowerCase())
      )
    );
  };

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
      <div className="visa-container">
        <div className="visa-search">
          <div className="visa-p">
            <h1>We Make Visas Easy For You</h1>
          </div>
          {/* visa form  */}
          <form className="visa-input" onSubmit={sentEmail} id="visa-form">
            <input
              type="text"
              placeholder="Search For a Country "
              name="place"
              value={selectedCountry}
              onChange={handleInputChange}
              onClick={() => setShowVisaList(true)}
              autoFocus
              required
            />
            <button Click={formControl} className="visa-btn" type="submit">
              <BsArrowRight />
            </button>
          </form>
          {/* visa list container */}
          {showVisaList && (
            <div className="visa-list-container">
              {filteredCountries.length > 0
                ? filteredCountries.map((country) => (
                    <li
                      key={country}
                      onClick={() => handleCountrySelect(country)}
                    >
                      {country}
                    </li>
                  ))
                : visaCountries.map((country) => (
                    <li
                      key={country}
                      onClick={() => handleCountrySelect(country)}
                    >
                      {country}
                    </li>
                  ))}
            </div>
          )}
        </div>
        {/* user booking form  */}
        {formOpen && <Form onClose={handleFormClose} />}
      </div>
      <div className="visa-article-container">
        <VisaArtical />
      </div>
    </>
  );
};

export default VisaMenuContainer;
