import React, { useEffect, useState } from "react";
// import styles
import styles from "./styles/slider.module.css";
// import swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

//import photos
import slide1 from "/images/slider1.jpg";
import slide2 from "/images/slider2.jpg";
import slide3 from "/images/slider3.jpg";
import slide4 from "/images/bio.jpg";

function Slider(props) {
  return (
    <div className={`${styles.container}`}>
      <h1 className="text-center my-5">گالری تصاویر</h1>
      <Swiper
        breakpoints={{
          300: {
            with: 400,
            slidesPerView: 1,
          },
          600: {
            width: 600,
            slidesPerView: 2,
          },
          950: {
            width: 950,
            slidesPerView: 3,
          },
        }}
        navigation={true}
        slidesPerView={4}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination, Navigation]}
        className={`${styles.mySwiper} boxStyle2 p-1 pb-5`}
      >
        <SwiperSlide className={`${styles.SwiperItem}`}>
          <img src={slide1} className="rounded" />
        </SwiperSlide>
        <SwiperSlide className={`${styles.SwiperItem}`}>
          <img src={slide2} className="rounded" />
        </SwiperSlide>
        <SwiperSlide className={`${styles.SwiperItem}`}>
          <img src={slide3} className="rounded" />
        </SwiperSlide>
        <SwiperSlide className={`${styles.SwiperItem}`}>
          <img src={slide4} className="rounded" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default Slider;
