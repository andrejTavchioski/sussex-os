import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

const images = [
    "/src/assets/carousel/IMG_1857.jpg",
    "/src/assets/carousel/Image1.jpg",
    "/src/assets/carousel/Image2.jpg",
    "/src/assets/carousel/Image3.jpg",
    "/src/assets/carousel/Image4.jpg",
    "/src/assets/carousel/Image5.jpg",
    "/src/assets/carousel/Image6.jpg",
    "/src/assets/carousel/Image7.jpg",
    "/src/assets/carousel/Image8.jpg",
    "/src/assets/carousel/Image9.jpg",
    "/src/assets/carousel/Image10.jpg",
    "/src/assets/carousel/Image11.jpg",
    "/src/assets/carousel/Image12.jpg",
    "/src/assets/carousel/Image13.jpg",
    "/src/assets/carousel/Image14.jpg",
    "/src/assets/carousel/Image15.jpg",
    "/src/assets/carousel/Image16.jpg",
    "/src/assets/carousel/Image18.jpg",
    "/src/assets/carousel/Image19.jpg",
    "/src/assets/carousel/Image20.jpg",
    "/src/assets/carousel/1D3FB7D6-9B13-4131-8DE0-150D1532E629.JPG",
    "/src/assets/carousel/IMG_1849.jpg",
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