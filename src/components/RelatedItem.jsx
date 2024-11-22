import React from "react";
// import styles
import styles from "./styles/relatedItem.module.css";
// import react-router-dom
import { Link } from "react-router-dom";
//import images of news
import news1 from "/images/news-pic.jpg";

function RelatedItem() {
  return (
    <div className={`${styles.related} p-2 boxStyle2`}>
      <div className={`${styles.relatedBox} flex`}>
        <div className={styles.imageRelatedBox}>
          <img src={news1} alt="related-news-image" className="rounded" />
        </div>
        <div className={`${styles.relatedBoxText} pr-2`}>
          <h4>
            <Link to="">
              {" "}
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ
            </Link>
          </h4>
        </div>
      </div>
    </div>
  );
}

export default RelatedItem;
