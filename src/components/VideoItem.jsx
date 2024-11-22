import React from 'react';
import styles from "./styles/videoItem.module.css"
//import videos
import cover from "/images/cover.mp4"
function VideoItem() {
    return (
        <div className={`${styles.container} boxStyle2`}>
          <video controls className="mb-2">
          <source src={cover} type="video/mp4" />
        </video>
        <h3>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ</h3>
          </div>
    );
}

export default VideoItem;