import React, { useEffect, useState } from "react";
// import style
import styles from "./styles/gallery.module.css";
// import layout
import Layout from "../layout/Layout";
// import components
import Sidebar from "../components/Sidebar";
// import functions
import { getNews } from "../utils/newsData";
import { sortData } from "../utils/function";
import { getPhoto } from "../utils/sliderData";
// import swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

//import photos
import slide1 from "/images/slider1.jpg";
import slide2 from "/images/slider2.jpg";
import slide3 from "/images/slider3.jpg";
import slide4 from "/images/bio.jpg";

function Gallery(props) {
  return (
    <Layout>
      <div className={`${styles.gallery} flex flex-col  lg:flex-row p-2 `}>
        <Sidebar />
        <div
          className={`${styles.slider} w-full basis-3/4 boxStyle2 mb-5 lg:w-1/2 lg:mr-3 lg:mb-0 `}
        >
          <Swiper
            cssMode={true}
            navigation={true}
            pagination={true}
            mousewheel={true}
            keyboard={true}
            modules={[Navigation, Pagination, Mousewheel, Keyboard]}
            className={styles.mySwiper}
          >
            <SwiperSlide  className={`${styles.SwiperItem}`}>
              <img src={slide1} className="rounded" />
            </SwiperSlide>
            <SwiperSlide  className={`${styles.SwiperItem}`}>
              <img src={slide2} className="rounded" />
            </SwiperSlide>
            <SwiperSlide  className={`${styles.SwiperItem}`}>
              <img src={slide3} className="rounded" />
            </SwiperSlide>
            <SwiperSlide  className={`${styles.SwiperItem}`}>
              <img src={slide4} className="rounded" />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </Layout>
  );
}

export default Gallery;
