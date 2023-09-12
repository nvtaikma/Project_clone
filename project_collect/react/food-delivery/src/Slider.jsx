import React, { useState } from "react";
import './Slider.css'

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    {
      id: 1,
      src: "https://mdbcdn.b-cdn.net/img/Photos/Slides/img%20(121).webp"
    },
    {
      id: 2,
      src: "https://mdbcdn.b-cdn.net/img/Photos/Slides/img%20(88).webp"
    },
    {
      id: 3,
      src: "https://mdbcdn.b-cdn.net/img/Photos/Slides/img%20(31).webp"
    }
  ];

//   const nextSlide = () => {
//     if (currentSlide === slides.length - 1) {
//       setCurrentSlide(0);
//     } else {
//       setCurrentSlide(currentSlide + 1);
//     }
//   };

//   const prevSlide = () => {
//     if (currentSlide === 0) {
//       setCurrentSlide(slides.length - 1);
//     } else {
//       setCurrentSlide(currentSlide - 1);
//     }
//   };

  const handleThumbClick = index => {
    setCurrentSlide(index);
  };

  return (
    <div className="slider">
      <img src={slides[currentSlide].src} alt="Slide" />
      {/* <button onClick={nextSlide}>{">"}</button> */}
      {/* <button onClick={prevSlide}>{"<"}</button> */}
      <div className="thumbs">
        {slides.map((slide, index) => (
          <img
            key={slide.id}
            src={slide.src}
            alt="Thumb"
            onClick={() => handleThumbClick(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Slider;

