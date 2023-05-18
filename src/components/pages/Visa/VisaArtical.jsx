import React from "react";
import VisaData from "./VisaData";

const VisaArtical = () => {
  return (
    <div>
      <div className="visa-article">
        <div className="visa-title">
          <h2
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              textAlign: "center",
              fontSize: "20px",
              color: " #000",
              fontWeight: "600",  
            }}
          >
            Popular Destinations
          </h2>
        </div>
        <div className="visa-destination">
          {VisaData.map((data) => (
            <div className="package-main">
              <div className="packages-details">
                <div className="location-details">
                  <h4>{data.city}</h4>
                  <p style={{ color: "#9b9b9b" }}>{data.continent}</p>
                </div>
                <h2 style={{ color: `${data.color}` }}>{data.price}</h2>
              </div>
              <div
                className="color-line"
                style={{ border: `2px solid ${data.color} ` }}
              ></div>
            </div>
          ))}
        </div>
      </div>
      {/* <div className="visa-footer">
        <footer>
          <h1
            style={{
              display: "flex",
              textAlign: "center",
              justifyContent: "center",
              color:'white',
              
            }}
          >
            Visit us
          </h1>
          <div className=" visa-address">
            <h3>Coimbatore</h3>
            <p>
              2nd Floor, Sapthagiri Plaza, No:9, Nanjundapuram Rd,
              Ramanathapuram, Tamil Nadu 641045
            </p>
          </div>
        </footer>
      </div> */}
    </div>
  );
};

export default VisaArtical;
