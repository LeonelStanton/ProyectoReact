import img5 from "../../assets/slider1.webp"
import img6 from "../../assets/slider2.webp"
import img7 from "../../assets/slider3.webp"
import { Link } from "react-router-dom"
import React from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';


import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';




import {Autoplay, Pagination} from 'swiper/modules';

export default function Slider() {
  return (
    <>
    <div  className="block mt-[86px]">
      <Swiper 
      slidesPerView={1}
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        loop={true}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide> <Link to="/category/Hombre"> <img src={img5} alt="" className="cursor-pointer" /> </Link> </SwiperSlide>
        <SwiperSlide> <Link to="/category/Mujer"><img src={img6} alt="" className="cursor-pointer"/></Link> </SwiperSlide>
        <SwiperSlide><Link to="/category/Mujer"><img src={img7} alt="" className="cursor-pointer" /></Link> </SwiperSlide>
      </Swiper>

      </div>
    </>
  );
}