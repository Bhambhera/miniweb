import React from "react";
import { useState } from "react";
import './Slider.css';

const slideStyles = {
  width: "100%",
  height: "50%",
  backgroundSize: "cover",
  backgroundPosition: "center", 
};

const Slider = ({ slides }) => { 
  const [currentIndex, setCurrentIndex] = useState(0);
  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };
  const goToNext = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };
  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };
  const slideStylesWidthBackground = {
    ...slideStyles,
    backgroundImage: `url(${slides[currentIndex].url})`,
  };

  return (
    <div className='slider-styles'>
      <div>
        <div className='left-arrow' onClick={goToPrevious}>
          ❰
        </div>
        <div className='right-arrow' onClick={goToNext} >
          ❱
        </div>
      </div>
      <div style={slideStylesWidthBackground}>
      </div>
      
    
       
      
      <div className='dots-container-styles'>
        {slides.map((value, slideIndex) => (
          <div
            className='dot-style'
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
          >
            ●
          </div>
        ))}
      </div>
    </div>
  );
};

export default Slider;