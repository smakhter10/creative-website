import React from "react";
import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";

const Slider = () => {
  return (
    <Carousel >
      <Carousel.Item>
        <img className="d-block w-100" src="./pictures/review1.JPG" alt="First photo" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src="./pictures/review2.jpg" alt="First photo" />
      </Carousel.Item>
    </Carousel>
  );
};

export default Slider;
