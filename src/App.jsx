// import Accordian from "./components/Accordian/Accordian";
// import RandomColorGenerator from "./components/Random-Colour-Generator/Index";
// import StarRating from "./components/Star-Rating/index";
// import ThemeMode from "./components/ThemeMode/Index";
// import QRCodeGenerator from "./components/QRCode/QRCode";
// import LoadMoreData from "./components/Load-More-Data/Inde"
// import GithubProfileFinder from "./components/gihub-profile-finder/index";
// import SearchAutoComplete from "./components/search-auto-complete/index";
import ImageSlider from "./components/Image-Slider/index";

const App = () => {
  return (
    <>
      {/* ---> 1. Accordian - single and multiple options  */}
      {/* <Accordian /> */}

      {/* 2. Random Color Generator - hex and rgb format */}
      {/* <RandomColorGenerator/> */}

      {/* 3. Star Rating - with options of no of stars */}
      {/* <StarRating noOfStars={10} /> */}

      {/* 4. Different Themes Mode  - Dark and Night*/}
      {/* <ThemeMode/> */}

      {/* 5. QR Code Generator : using react-qr-code library */}
      {/* <QRCodeGenerator/> */}

      {/* 6. Load More Data : using API skip and limit params */}
      {/* <LoadMoreData/> */}

      {/* 7. Github Profile Finder : by using api.github fetching the users  */}
      {/* <GithubProfileFinder/> */}

      {/* 8. Auto Complete Input Box - giving pre suggestions  */}
      {/* <SearchAutoComplete /> */}

      {/* 9. Image Slider : multiple images changing to new image */}
      <ImageSlider/>
    </>
  );
};

export default App;
