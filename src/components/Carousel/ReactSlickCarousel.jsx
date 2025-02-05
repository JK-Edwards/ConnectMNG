import React from "react";
import Slider from "react-slick";

import './ReactSlickCarousel.css'

export default function SimpleSlider({slides}) {
  var settings = {
    dots: false,
    infinite: true,
    speed: 750,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3000,
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
}