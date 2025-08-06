import Carousel from "react-bootstrap/Carousel";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { CULTURAL_COMPASS_PROGRAM_DESC, RESUME_BOOST_PROGRAM_DESC } from "../../constants";

// Define props type
interface ItemCarouselProps {
  slides: React.ReactNode[]; 
  interval?: number;        
}

const ItemCarousel: React.FC<ItemCarouselProps> = ({ slides, interval }) => {
  return (
    <div className="carouselContainer">
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

export default ItemCarousel;
