import Carousel from "react-bootstrap/Carousel";
import logo from "../../images/logo.png";

const temp = {
  "background": "#FFFFFF"
};

const text = {
  "font-family": "Palatino"
};

export default function BasicCarousel() {
  return (
    <div style={temp}>
      <Carousel data-bs-theme="dark">
        <Carousel.Item interval={2500}>
          <img src={logo} alt={"Connect MNG Logo"}/>
          <Carousel.Caption>
            <h3 style={text}>First slide label</h3>
            <p style={text}>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={2500}>
          <img src={logo} alt={"Connect MNG Logo"}/>
          <Carousel.Caption>
            <h3 style={text}>Second slide label</h3>
            <p style={text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={2500}>
          <img src={logo} alt={"Connect MNG Logo"}/>
          <Carousel.Caption>
            <h3 style={text}>Third slide label</h3>
            <p style={text}>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};