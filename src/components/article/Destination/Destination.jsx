import React from "react";
import { desination } from "../../../data";
import { useState } from "react";
import DesinationLeft from "../destinationLeft/DestinationLeft";
import DesinationRight from "../destinationRight/DestinationRight";
import "./Destination.css";

const category = [...new Set(desination.map((data) => data.category))];
const desinationData = desination.filter(
  (data) => data.category === "all destinations"
);

function Desination() {
  const [click, setClick] = useState("all destinations");
  const [data, setData] = useState(desinationData);

  const filterData = (data) => {
    setData(desination.filter((list) => list.category === data));
  };
  const handleClick = (category) => {
    setClick(category);
    filterData(category);
  };

  return (
    <>
      <div className="desination__container-main">
        <div className="desination__container-navbar">
          <div className="desination__container-links">
            <div>
              <h2 className="desination__navbar-title">
                Popular <span>Destinations</span>
              </h2>
            </div>
            {category.map((list) => (
              <p
                onClick={() => handleClick(list)}
                key={list}
                className={list === click ? "desination__navbar-active" : ""}
              >
                {list}
              </p>
            ))}
          </div>
          <div className="desination__navbar-view">
            <p>View All Desinations</p>
          </div>
        </div>
        <div className="desination__content">
          <DesinationLeft data={data} />
          <DesinationRight data={data} />
        </div>
      </div>
    </>
  );
}

export default Desination;
