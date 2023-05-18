import React, { useState } from "react";
import "./commonArticle.css";
import { data } from "../../../data";
import {
  IoIosArrowDropleftCircle,
  IoIosArrowDroprightCircle,
} from "react-icons/io";
import "react-multi-carousel/lib/styles.css";

const hotdealsData = data.filter((list) => list.option === "hotdeal");

function CommonArticle() {
  const [datas, setDatas] = useState(hotdealsData);
  const [click, setClick] = useState("hotdeal");
  const [position, setPosition] = useState(0);

  const categories = [
    "hotdeal",
    ...new Set(
      data.map((list) => {
        return list.category;
      })
    ),
  ];

  const filterData = (value) => {
    if (value === "hotdeal") {
      setDatas(data.filter((list) => list.option === value));
    } else {
      setDatas(data.filter((list) => list.category === value));
    }
  };

  const cardStyle = {
    transform: `translateX(${position * 100}%)`,
    transitionDuration: "1.5s",
  };

  const handlePrev = () => {
    if (position <= -(datas.length - 1)) {
      setPosition(0);
    } else {
      setPosition(position - 1);
    }
  };

  const handleNext = () => {
    if (position < 0) {
      setPosition(position + 1);
    }
  };

  return (
    <div className="border">
      <div className="  section__margin">
        <div className="deals__navbar">
          <div>
            <h2 className="deals__navbar-title">
              Exclusive <span className="deals__navbar-span">Deals</span>{" "}
            </h2>
          </div>
          <div className="deals__navbar__container">
            {categories.map((data) => (
              <p
                onClick={() => {
                  filterData(data);
                  setClick(data);
                  setPosition(0);
                }}
                key={data}
                className={
                  data === click ? "deals__navbar__container-active" : ""
                }
              >
                {data}
              </p>
            ))}
          </div>
          <div className="deals__navbar__slider">
            <p>View All Deals</p>
            <IoIosArrowDropleftCircle onClick={handlePrev} fontSize={32} />
            <IoIosArrowDroprightCircle onClick={handleNext} fontSize={32} />
          </div>
        </div>
      </div>
      <div className="deals__margin deals__container__flex">
        {datas.map(({ id, category, img, title, detail }) => {
          return (
            <div className="deals__container" style={cardStyle} key={id}>
              <div className="deals__container-img">
                <img className="deals__image" src={img} alt="img" />
              </div>
              <div className="deals__conatiner__detainscontainer">
                <div className="deals__conatiner_category">
                  <p className="deals__conatiner_category__para">{category}</p>
                </div>
                <div className="detals__container__category-padding">
                  <h3 className="detals__container__category-padding__title">
                    {title}
                  </h3>
                  <p className="deals__conatiner__category__details">
                    {detail}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default CommonArticle;
