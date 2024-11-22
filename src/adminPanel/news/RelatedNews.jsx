import React, { useEffect, useState } from "react";
import Layout from "../layout/Layout";
import { Link, useNavigate } from "react-router-dom";
import { sortData } from "../../utils/function";
import { deleteNews, getNews } from "../../utils/newsData";
import NewsPageItem from "./NewsPageItem";
import styles from "./style/newsPage.module.css";
function RelatedNews(props) {
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchData() {
      const { response } = await getNews();
      const sortResponse = sortData(response.data.allNews);
      const result = sortResponse.filter((i) => i.related == true);
      setData(result);
    }
    fetchData();
  }, []);

  const deleteHandler = async (id) => {
    await deleteNews(id);
    const newData = data.filter((item) => item._id !== id);
    setData(newData);
  };

  const updateHandler = async (id) => {
    navigate(`/dashboard/news/update/${id}`);
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
                updateHandler={updateHandler}
              />
            ))}
          </div>
        ) : (
          <h3>اخبار مرتبط وجود ندارد.</h3>
        )}
      </div>
    </Layout>
  );
}

export default RelatedNews;
