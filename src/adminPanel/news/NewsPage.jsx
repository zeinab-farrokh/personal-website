import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { sortData } from "../../utils/function";
import { deleteNews, getNews } from "../../utils/newsData";
import Layout from "../layout/Layout";
import styles from "./style/newsPage.module.css";
import NewsPageItem from "./NewsPageItem";

function NewsPage(props) {
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

  const deleteHandler = async (id) => {
    await deleteNews(id);
    const newData = data.filter((item) => item._id !== id);
    setData(newData);
  };

  return (
    <Layout>
      <div className="boxStyle">
        <div className={styles.createBtn}>
          <Link to="/dashboard/news/create">
            <button className="rounded p-2 mb-3 btn">ایجاد اخبار جدید</button>
          </Link>
        </div>
        {data.length ? (
          <div className={styles.newsContainer}>
            {data.map((item) => (
              <NewsPageItem
                key={item._id}
                data={item}
                deleteHandler={deleteHandler}
              />
            ))}
          </div>
        ) : (
          <h3>اخبار وجود ندارد.</h3>
        )}
      </div>
    </Layout>
  );
}

export default NewsPage;
