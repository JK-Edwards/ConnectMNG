import Carousel from "react-bootstrap/Carousel";
import logo from "../../images/logo.png";
import React from "react";

import "./BasicCarousel.css";
import "bootstrap/dist/css/bootstrap.min.css";

export default function BasicCarousel() {
  return (
    <div className={"carouselContainer"}>
      <Carousel data-bs-theme="dark">
        <Carousel.Item interval={2500}>
          <img src={logo} alt={"Connect MNG Logo"}/>
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={2500}>
          <img src={logo} alt={"Connect MNG Logo"}/>
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={2500}>
          <img src={logo} alt={"Connect MNG Logo"}/>
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};