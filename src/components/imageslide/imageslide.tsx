import { useState, useEffect } from "react";
import { images } from "./images";
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import "./ImageSlide.scss";

const ImageSlide = () => {
  const [currentIdx, setCurrentIdx] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(interval); // 클리어 필요
  }, [currentIdx]);
  const preSlide = () => {
    setCurrentIdx((preIdx) => (preIdx - 1 + images.length) % images.length);
  };
  const nextSlide = () => {
    setCurrentIdx((preIdx) => (preIdx + 1) % images.length);
  };
  return (
    <div className="banner_wrap">
      <div className="slide_banner">
        {images.map((image, index) => (
          <img
            key={index}
            className={`banner_image ${index === currentIdx && "active"}`}
            src={image.img}
            // src={slideImages[currentIdx].img}
            alt={`slide ${index}`}
          />
        ))}
        <div onClick={preSlide}>
          <FaArrowLeft className="pre_arrow" />
        </div>
        <div onClick={preSlide}>
          <FaArrowRight className="next_arrow" />
        </div>
      </div>
    </div>
  );
};

export default ImageSlide;
