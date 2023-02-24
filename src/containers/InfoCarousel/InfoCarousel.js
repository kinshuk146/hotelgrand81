import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";

import "slick-carousel/slick/slick-theme.css";
import ImageCarousel from "../../components/ImageCarousel";
import About from '../About/About'

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
    <div style={{backgroundImage:'url(https://img.rawpixel.com/private/static/images/website/2022-05/rm218batch7-katie-14.jpg?w=800&dpr=1&fit=default&crop=default&q=65&vib=3&con=3&usm=15&bg=F4F4F3&ixlib=js-2.2.1&s=138cc0996ce787dd279385b44f4392cd)'}}>
    <About/>
    <div className="info">
    <div className="container-sm">
    <div className="container-sm">
    <div className="container-sm">
  <Slider {...settings}>
    <div className="container-sm">
      <ImageCarousel image="./assets/CarouselHall.jpg" title="Banquet" text="Our five hundred square feet banquet along with our banquet crew is ideal for birthday parties, wedding ceremonies and corporate events."/>
    </div>
    <div className="container-sm">
      <ImageCarousel image="./assets/CarouselRooftop.jpg" title="Rooftop Restaurant" text="Be it a new year party, or a private function our rooftop restaurant overlooking the city provides a just perfect location"/>
    </div>
    <div className="container-sm">
      <ImageCarousel image="./assets/CarouselBar.jpg" title="Bar" text="We exemplify the uncompromising and passionate devotion to superior wines and alcohol. Our cocktail program offers an immersive experience."/>
    </div>
    <div className="container-sm">
      <ImageCarousel image="./assets/CarouselBuffet.jpg" title="Exotic Buffet" text="Our buffet has mouthwatering multicuisine dishes which come at reasonable prices. Come and feast and you will never forget! "/>
    </div>
  </Slider>
  </div>
  </div>
  </div>
  </div>
  </div>
)}

export default InfoCarousel
