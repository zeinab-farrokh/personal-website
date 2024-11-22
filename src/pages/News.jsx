import React, { useEffect, useState } from "react";
// import components
import Sidebar from "../components/Sidebar";
import NewsItem from "../components/NewsItem";
// import layout
import Layout from "../layout/Layout";
// import styles
import styles from "./styles/news.module.css";

function News(props) {
  return (
    <Layout>
      <div className={`${styles.newsContainer} flex flex-col lg:flex-row`}>
        <Sidebar />
        <div className={`${styles.main} flex flex-col basis-3/4  `}>
          <div className={`${styles.newsHeader} mb-2 p-2 boxStyle2`}>
            <h1>آخـــرین اخبـــار</h1>
          </div>

          <div className={`${styles.news} p-3 boxStyle2`}>
            <NewsItem />
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default News;
