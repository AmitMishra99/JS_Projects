import Accordian from "./components/Accordian/Accordian";
import RandomColorGenerator from "./components/Random-Colour-Generator/Index";
import StarRating from "./components/Star-Rating/index";

const App = () => {
  return (
    <>
      {/* ---> 1. Accordian - single and multiple options  */}
      {/* <Accordian /> */}

      {/* 2. Random Color Generator - hex and rgb format */}
      {/* <RandomColorGenerator/> */}

      {/* 3. Star Rating - with options of no of stars */}
      <StarRating noOfStars={10} />
    </>
  );
};

export default App;
