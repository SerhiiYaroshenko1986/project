import React, { Component } from "react";

import Carousel, { Dots } from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/lib/style.css";

class MyCarousel extends Component {
  render() {
    return (
      <Carousel slidesPerPage={1} infinite dots>
        <img src="/uploads/slider1.png" />

        <img src="/uploads/slider2.png" />

        <img src="/uploads/slider3.png" />
        <img src="/uploads/slider4.png" />
      </Carousel>
    );
  }
}

export default MyCarousel;
