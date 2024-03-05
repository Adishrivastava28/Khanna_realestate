import React from 'react'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Slider from 'react-slick'
import './carousel.css'
import img1 from './a.png'
import img2 from './b.jpg'
import img3 from './c.png'
import img4 from './d.jpg'
import img5 from './e.png'

function Carousel() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  }
  return (
    <div className="carousel">
      <h2>Carousel Tutorial</h2>
      <Slider {...settings}>
        <div className="box ">
          <img className="" src={img1} alt="Not Found" />
        </div>
        <div className="box">
          <img src={img2} className="rounded-3xl" alt="Not Found" />
        </div>
        <div className="box">
          <img src={img3} alt="Not Found" />
        </div>
        <div className="box">
          <img src={img4} className="rounded-3xl" alt="Not Found" />
        </div>
        <div className="box">
          <img src={img5} className="rounded-3xl" alt="Not Found" />
        </div>
      </Slider>
    </div>
  );
}

export default Carousel
