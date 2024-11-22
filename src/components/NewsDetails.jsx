import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
// import layout
import Layout from "../layout/Layout";
// import functions
import { getNews, getNewsById, getNewsBySlug } from "../utils/newsData";
import Sidebar from "./Sidebar";
// import style
import styles from "./styles/newsDetails.module.css";

function NewsDetails(props) {
  const [data, setData] = useState({});
  const { slug } = useParams();

  useEffect(() => {
    async function fetchData() {
      const { response } = await getNews();
      const result = response.data.allNews.find((item)=>item.slug == slug)
      setData(result)
    }
    fetchData();
  }, [slug]);

console.log(data);
  return (
    <Layout>
      <div className={`${styles.container} flex flex-col lg:flex-row`}>
        <Sidebar />

        <div
          className={`${styles.detailsContainer} flex  flex-col basis-3/4 boxStyle2 w-full `}
        >
          <div className={`${styles.imgContainer} `}>
            <img src={`${import.meta.env.VITE_BASE_URL}${data.image}`} />
          </div>

          <div className={styles.textContainer}>
            <h2 className="my-5">{data.title}</h2>
            <p>{data.text}</p>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default NewsDetails;
