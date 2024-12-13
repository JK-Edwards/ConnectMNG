import React from "react";
import Slider from "react-slick";
import './ReactSlickCarousel.css'

interface SimpleSliderProps {
  slides: React.ReactNode[];
}

const SimpleSlider: React.FC<SimpleSliderProps> = ({ slides }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 750,
    slidesToShow: 3,
    slidesToScroll: 1,
  };
  
  return (
    <Slider {...settings}>
      {slides.map((slide, index) => (
        <div key={index}>
          {slide}
        </div>
      ))}
    </Slider>
  );
};

export default SimpleSlider;
