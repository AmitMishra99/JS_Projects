import { useEffect, useState } from "react";
import "./style.css";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";

const ImageSlider = () => {
  const [images, setImages] = useState([]);
  const [curSlide, setCurSlide] = useState(0);

  const handleRightClick = () => {
    setCurSlide(curSlide === images.length - 1 ? 0 : curSlide + 1);
  };

  const handleLeftClick = () => {
    setCurSlide(curSlide === 0 ? images.length - 1 : curSlide - 1);
  };

  const api = async () => {
    const res = await fetch("https://picsum.photos/v2/list?page=1&limit=10");
    const data = await res.json();
    console.log(data);
    if (data) {
      setImages(data);
    }
  };

  useEffect(() => {
    api();
  }, []);

  return (
    <div className="container">
      <h1>Image Slider</h1>
      <div className="">
        {images && images.length > 0 ? (
          <div className="img-list">
            <BsArrowRightCircleFill
              className="arrow arrow-left"
              onClick={() => handleRightClick()}
            />

            {images.map((item, idx) => {
              return (
                <div key={idx}>
                  <img
                    className={curSlide === idx ? "img" : "img hide-cur-img"}
                    src={item.download_url}
                    alt=""
                  />
                </div>
              );
            })}
            <BsArrowLeftCircleFill
              className="arrow arrow-right"
              onClick={() => handleLeftClick()}
            />
            {images && images.length > 0 ? (
              <div className="circle-indicators">
                {images.map((_, idx) => (
                  <button
                    key={idx}
                    className={
                      curSlide === idx
                        ? "current-indicator"
                        : " current-indicator inactive"
                    }
                    onClick={() => setCurSlide(idx)}
                  ></button>
                ))}
              </div>
            ) : null}
          </div>
        ) : (
          <div>data not found !!</div>
        )}
      </div>
    </div>
  );
};

export default ImageSlider;
