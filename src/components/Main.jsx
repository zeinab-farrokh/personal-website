import React, { useEffect, useState } from "react";
//import functions
import { sortData } from "../utils/function";
import { getNews } from "../utils/newsData";
// import styles
import styles from "./styles/main.module.css";
// import image for bio
import bio from "/images/bio.jpg";
// import react-router-dom
import { Link } from "react-router-dom";
// import components
import Slider from "./Slider";
import NewsItem from "./NewsItem";

function Main(props) {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const { response } = await getNews();
      const sortResponse = await sortData(response.data.allNews);
      const result = sortResponse.filter((i) => i.related == false);
      setData(result);
    }
    fetchData();
  }, []);

  return (
    <div className={styles.container}>
      <div className={`flex flex-col lg:flex-row`}>
        <div
          className={`${styles.biography} flex flex-col justify-center basis-1/4 order-last lg:order-first p-2`}
        >
          <img src={bio} alt="portraite" />
          <div className={`p-2 text-justify`}>
            <h3 className="my-2 text-center">زندگی نامه</h3>
            <p>
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
              استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در
              ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز
              و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد کتابهای
              زیادی در شصت و سه درصد گذشته حال و آینده شناخت فراوان جامعه و
              متخصصان را می طلبد.
            </p>
          </div>
        </div>
        <div className={`${styles.main} flex flex-col basis-3/4  `}>
          <div className={`${styles.newsHeader} mb-2 p-2`}>
            <h1>اخرین اخبار</h1>
          </div>

          <div className={`${styles.news} boxStyle2 `}>
            <NewsItem />

            <Link to="/news" className="flex justify-center items-center">
              <p className={styles.seeMore}>ادامه اخبار...</p>
            </Link>
          </div>
        </div>
      </div>

      <Slider />
    </div>
  );
}

export default Main;
