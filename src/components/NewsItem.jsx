import React from "react";
// import styles
import styles from "./styles/newsItem.module.css";
// import react-router-dom
import { Link } from "react-router-dom";
//import images of news
import news1 from "/images/news-pic.jpg";
import news2 from "/images/news-pic2.jpg";
import news3 from "/images/news-pic3.jpg";
function NewsItem({ data }) {
  return (
    <div className={`${styles.container} flex flex-col`}>
      <div
        className={`${styles.newsBox} flex  w-full border-2 border-solid rounded p-1 lg:p-2`}
      >
        <div className={styles.imageNewsBox}>
          <Link to="">
            <img src={news1} alt="news pic" className="rounded" />
            <div className={styles.layer}></div>
          </Link>
        </div>
        <div className={`${styles.newsBoxText} px-2`}>
          <h2 className={`mb-2 text-justify`}>
            <Link to="">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ
            </Link>
          </h2>
          <p className="hidden sm:block">
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
            استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در
            ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد
            نیاز[...]
          </p>
        </div>
      </div>

      <div
        className={`${styles.newsBox} flex  w-full border-2 border-solid rounded p-1 lg:p-2`}
      >
        <div className={styles.imageNewsBox}>
          <Link to="">
            <img src={news2} alt="news pic" className="rounded" />
            <div className={styles.layer}></div>
          </Link>
        </div>
        <div className={`${styles.newsBoxText} px-2`}>
          <h2 className={`mb-2 text-justify`}>
            <Link to="">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ
            </Link>
          </h2>
          <p className="hidden sm:block">
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
            استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در
            ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد
            نیاز[...]
          </p>
        </div>
      </div>

      <div
        className={`${styles.newsBox} flex  w-full border-2 border-solid rounded p-1 lg:p-2`}
      >
        <div className={styles.imageNewsBox}>
          <Link to="">
            <img src={news3} alt="news pic" className="rounded" />
            <div className={styles.layer}></div>
          </Link>
        </div>
        <div className={`${styles.newsBoxText} px-2`}>
          <h2 className={`mb-2 text-justify`}>
            <Link to="">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ
            </Link>
          </h2>
          <p className="hidden sm:block">
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
            استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در
            ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد
            نیاز[...]
          </p>
        </div>
      </div>
    </div>
  );
}

export default NewsItem;
