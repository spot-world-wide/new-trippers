import React from "react";
import "./DestinationLeft.css";
import { useEffect } from "react";
import { useRef } from "react";
import { Link } from "react-router-dom";

function DesinationLeft({ data }) {
  const myRef = useRef(null);
  useEffect(() => {
    myRef.current.scrollTop = 0;
  }, [data]);
  return (
    <div className="desinationleft-alignment">
      <div ref={myRef} className="desinationleft__container">
        {data.map(({ id, category, name, img, route }) => {
          return (
            <div className="desination__container-content" key={id}>
              <div className="desinationleft__container-image__container">
                <img src={img} alt="place" />
              </div>
              <Link to={route}>
                <p>{name}</p>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default DesinationLeft;
