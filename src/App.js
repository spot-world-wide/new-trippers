import React from "react";
import "./index.css";
import Header from "./components/header/Header";
import { Routes, Route } from "react-router-dom";
import Hotel from "./components/pages/Hotel/Hotel";
import Visa from "./components/pages/Visa/Visa";
import Bus from "./components/pages/Bus/Bus";
import Holidays from "./components/pages/Holidays/Holidays";
import Cruise from "./components/pages/Cruise/Cruise";
import Umrah from "./components/pages/umrah/Umrah";

// touriest pages
import Maldives from "./components/TouristPage/Maldives/Maldives";
import Dubai from "./components/TouristPage/Dubai/Dubai";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Header />} />
      <Route path="hotel" element={<Hotel />} />
      <Route path="visa" element={<Visa />} />
      <Route path="holidays" element={<Holidays />} />
      <Route path="cruise" element={<Cruise />} />
      <Route path="bus" element={<Bus />} />
      <Route path="holidays" element={<Holidays />} />
      <Route path="umrah" element={<Umrah />} />
      <Route path="maldives" element={<Maldives />} />
      <Route path="dubai" element={<Dubai />} />
    </Routes>
  );
};

export default App;
