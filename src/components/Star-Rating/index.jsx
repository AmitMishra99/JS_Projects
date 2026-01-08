import React from "react";
import { FaStar } from "react-icons/fa";
import "./style.css";
import { useState } from "react";

const StarRating = ({ noOfStars }) => {
  const [color, setColor] = useState(0);
  const [hover, setHover] = useState(0);

  function handleClick(getCurrentIdx) {
    setColor(getCurrentIdx);
  }
  function onMouseEnter(getCurrentIdx) {
    setHover(getCurrentIdx);
  }
  function onMouseLeave() {
    setHover(color);
  }

  return (
    <div>
      <div className="box">
        {[...Array(noOfStars)].map((_, idx) => {
          idx += 1;
          return (
            <FaStar
              className={idx <= (color || hover) ? "active" : "inactive"}
              key={idx}
              onClick={() => handleClick(idx)}
              size={40}
              onMouseEnter={() => onMouseEnter(idx)}
              onMouseLeave={() => onMouseLeave(idx)}
            ></FaStar>
          );
        })}
      </div>
    </div>
  );
};

export default StarRating;
