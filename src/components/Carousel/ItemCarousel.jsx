import Carousel from "react-bootstrap/Carousel";
import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";

export default function ItemCarousel({slides, interval}) {
  return (
    <div className={"carouselContainer"}>
      <Carousel data-bs-theme="dark">
        {slides.map((slide, index) => (
            <Carousel.Item key={index} interval={interval}>
              {slide}
            </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
};