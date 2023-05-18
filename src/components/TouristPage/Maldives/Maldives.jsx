import React from "react";
import "./maldives.css";
import { Link } from "react-router-dom";
import { MaldivesPackages, PopularMaldives } from "../../../data";

const Maldives = () => {
  return (
    <>
      {MaldivesPackages.map((packages) => {
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
            {PopularMaldives.map((popular) => {
              return (
                <div className="popular-container">
                  <h1>Popular Places</h1>
                  <div className="popular-img-container">
                    <div className="popular-img">
                      <img src={packages.img} alt="" className="popular-img" />
                      <h2>{popular.title}</h2>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        );
      })}
    </>
  );
};

export default Maldives;
