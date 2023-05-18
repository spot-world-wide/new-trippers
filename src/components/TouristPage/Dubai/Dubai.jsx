import React from "react";
import { DubaiPackages } from "../../../data";
import { Link } from "react-router-dom";

const Dubai = () => {
  return (
    <>
      {DubaiPackages.map((packages) => {
        return (
          <div className="package-container">
            <header className="maldives-header">
              <div className="Maldives-menu-container">
                <Link to={"/"} style={{ color: "white" }}>
                  Home
                </Link>
              </div>
            </header>
            {/* maldives tour package container */}
            <div className="maldives-package-container">
              <div className="package-details-container">
                <h1 style={{ color: "#3EA99F" }}>{packages.title}</h1>
                {packages.description}
              </div>
              <div className="package-images">
                <img src={packages.img} alt="" className="package-img" />
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default Dubai;
