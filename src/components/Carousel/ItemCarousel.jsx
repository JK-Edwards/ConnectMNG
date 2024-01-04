import Carousel from "react-bootstrap/Carousel";
import React from "react";

import "./ItemCarousel.css";
import "bootstrap/dist/css/bootstrap.min.css";

export default function BasicCarousel({slides, interval}) {
  return (
    <div className={"carouselContainer"}>
      <Carousel data-bs-theme="dark">
        {slides.map((slide) => (
            <Carousel.Item interval={interval}>
              {slide}
            </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
};