import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";

import "slick-carousel/slick/slick-theme.css";
import ImageCarousel from "../../components/ImageCarousel";

var settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  initialSlide: 0,
  autoplay:true,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true,
        autoplay:true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2,
        autoplay:true
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay:true
      }
    }
  ]
  }


function InfoCarousel() {
  return(
    <div className="container-sm">
    <div className="container-sm">
    <div className="container-sm">
  <Slider {...settings}>
    <div className="container-sm">
      <ImageCarousel/>
    </div>
    <div className="container-sm">
      <ImageCarousel/>
    </div>
    <div className="container-sm">
      <ImageCarousel/>
    </div>
    <div className="container-sm">
      <ImageCarousel/>
    </div>
    <div className="container-sm">
      <ImageCarousel/>
    </div>
    <div className="container-sm">
      <ImageCarousel/>
    </div>
    <div className="container-sm">
      <ImageCarousel/>
    </div>
    <div className="container-sm">
      <ImageCarousel/>
    </div>
    <div className="container-sm">
      <ImageCarousel/>
    </div>
  </Slider>
  </div>
  </div>
  </div>
)}

export default InfoCarousel
