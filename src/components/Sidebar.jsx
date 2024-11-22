import React, { useEffect, useState } from "react";
//import styles
import styles from "./styles/sidebar.module.css";
// import components
import RelatedItem from "./RelatedItem";
import VideoItem from "./VideoItem";
function Sidebar(props) {
  return (
    <div
      className={`${styles.sidebar} flex flex-col justify-center basis-1/3 order-last rounded lg:order-first `}
    >
      <div className={`${styles.relatedHeader} mb-2 p-2 boxStyle2`}>
        <h1>اخبــــــار مرتــــبط</h1>
      </div>

      <RelatedItem />

      <div className={`${styles.relatedHeader} mt-2 p-2 boxStyle2`}>
        <h1>گـــزارشـــــات</h1>
      </div>

      <VideoItem />
    </div>
  );
}

export default Sidebar;
