import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

const images = [
    "/carousel/IMG_1857.jpg",
    "/carousel/Image1.jpg",
    "/carousel/Image2.jpg",
    "/carousel/Image3.jpg",
    "/carousel/Image4.jpg",
    "/carousel/Image5.jpg",
    "/carousel/Image6.jpg",
    "/carousel/Image7.jpg",
    "/carousel/Image8.jpg",
    "/carousel/Image9.jpg",
    "/carousel/Image10.jpg",
    "/carousel/Image11.jpg",
    "/carousel/Image12.jpg",
    "/carousel/Image13.jpg",
    "/carousel/Image14.jpg",
    "/carousel/Image15.jpg",
    "/carousel/Image16.jpg",
    "/carousel/Image18.jpg",
    "/carousel/Image19.jpg",
    "/carousel/Image20.jpg",
    "/carousel/1D3FB7D6-9B13-4131-8DE0-150D1532E629.JPG",
    "/carousel/IMG_1849.jpg",
]

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';  


const Carousel = () => {
  return (
    <>
      <Swiper
        cssMode={true}
        navigation={true}
        mousewheel={true}
        loop={true}
        keyboard={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
        className="carousel"
      >
        {images.map(image => <SwiperSlide className="carousel-slide"><img src={image} className="carousel-img"></img></SwiperSlide>)}
      </Swiper>
      </>
  )
}

export default Carousel