import React from "react";
import "./DestinationRight.css";

function DesinationRight({ data }) {
  const randomIndex1 = data[0];
  const randomIndex2 = data[1];
  const randomIndex3 = data[2];
  const randomIndex4 = data[3];

  return (
    <div>
      <div className="desinationright___content-main">
        <div className="desinationright__parent__container">
          <div className="desinationright__image__container">
            <img src={randomIndex1.option} alt={randomIndex1.name} />
          </div>
          <div className="desinationright__container__name">
            <h2>{randomIndex1.name}</h2>
          </div>
        </div>
        <div className="desinationright__parent__container">
          <div className="desinationright__image__container">
            <img src={randomIndex2.option} alt={randomIndex2.name} />
          </div>
          <div className="desinationright__container__name">
            <h2>{randomIndex2.name}</h2>
          </div>
        </div>
        <div className="desinationright__parent__container">
          <div className="desinationright__image__container">
            <img src={randomIndex3.option} alt={randomIndex3.name} />
          </div>
          <div className="desinationright__container__name">
            <h2>{randomIndex3.name}</h2>
          </div>
        </div>
        <div className="desinationright__parent__container">
          <div className="desinationright__image__container">
            <img src={randomIndex4.option} alt={randomIndex4.name} />
          </div>
          <div className="desinationright__container__name">
            <h2>{randomIndex4.name}</h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DesinationRight;
