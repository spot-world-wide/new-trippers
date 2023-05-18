import React from "react";
import "./Stories.css";

function Stories({ category, title, about, img }) {
  return (
    <div className="story__container-align">
      <div className="story__container">
        <div className="story__container-image">
          <img src={img} alt="place" />
        </div>
        <div className="story__container__about">
          <div className="story__container-category">
            <p>{category}</p>
          </div>
          <div className="story__container-content">
            <h4>{title}</h4>
            <p>{about}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Stories;
