import React from 'react'
import "./Banner.css"
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Autoplay } from "swiper";

function Banner() {
  return (
    <div className='container banner'>
         <Swiper
           spaceBetween={30}
           centeredSlides={true}
           autoplay={{
             delay: 2500,
             disableOnInteraction: false,
           }}

         loop={true}
          navigation={true}
           modules={[Navigation, Autoplay]} 
           className="mySwiper">
                <SwiperSlide><img src="https://static.uzum.uz/hello_promo_uzum.jpg?now=1679380902505" alt="" /></SwiperSlide>
                <SwiperSlide><img src="https://images.uzum.uz/cfublbng49devoa9a0fg/main_page_banner.jpg" alt="" /></SwiperSlide>
                <SwiperSlide><img src="https://images.uzum.uz/cg7c81vhj8j9g699paq0/main_page_banner.jpg" alt="" /></SwiperSlide>
                <SwiperSlide><img src="https://images.uzum.uz/cg091pnhj8j9g698srag/main_page_banner.jpg" alt="" /></SwiperSlide>
      </Swiper>
    </div>
  )
}

export default Banner