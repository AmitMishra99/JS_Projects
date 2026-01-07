import React, { useEffect, useState } from "react";
import "./style.css";

const Index = () => {
  const [typeofColor, setTypeofColor] = useState("hex");
  const [color, setColor] = useState("#000000");

  function randomColorUtility(length) {
    return Math.floor(Math.random() * length);
  }

  function handleRandomRGBColor() {
    const r = randomColorUtility(256);
    const g = randomColorUtility(256);
    const b = randomColorUtility(256);
    setColor(`rgb(${r},${g},${b})`);
  }

  function handleRandomHEXColor() {
    const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
    let hexColor = "#";
    for (let i = 0; i < 6; i++) {
      hexColor += hex[randomColorUtility(hex.length)];
    }
    console.log(hexColor);
    setColor(hexColor);
  }

  useEffect(() => {
    if (typeofColor === "rgb") handleRandomRGBColor();
    else handleRandomHEXColor();
  }, [typeofColor]);

  return (
    <div
      style={{
        height: "100vh",
        backgroundColor: color,
      }}
    >
      <div className="buttons">
        <button className="button-rgb"  onClick={() => setTypeofColor("hex")}>Create HEX Colour</button>
        <button className="button-rgb" onClick={() => setTypeofColor("rgb")}>Create RGB Colour</button>
        <button className="button-rgb"
          onClick={
            typeofColor === "rgb"
              ? () => handleRandomRGBColor()
              : () => handleRandomHEXColor()
          }
        >
          Generate Random Colour
        </button>
      </div>
      <div className="display">
        <h1>
          {typeofColor === "rgb" ? "RGB" : "HEX"} : {color}{" "}
        </h1>
      </div>
    </div>
  );
};

export default Index;
