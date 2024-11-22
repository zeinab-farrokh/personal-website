import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
//import axios
import axios from "axios";
// import functions
import { sortData } from "../../utils/function";
import { getVideo } from "../../utils/videoData";
// import components
import Layout from "../layout/Layout";
import VideoItem from "./VideoItem";
// import styles
import styles from "../slider/style/photo.module.css";

function Videos(props) {
  const [video, setVideo] = useState([]);
  useEffect(() => {
    async function fetchVideosData() {
      const { response } = await getVideo();
      const sortResponse = await sortData(response.data.data);
      setVideo(sortResponse);
    }
    fetchVideosData();
  }, []);

  const deleteHandler = async (id) => {
    await axios.delete(
      `${import.meta.env.VITE_BASE_URL}video/delete-video/${id}`
    );

    const newData = video.filter((item) => item._id !== id);
    setVideo(newData);
  };
  return (
    <Layout>
      <div className={`${styles.container} boxStyle`}>
        <div className={styles.createBtn}>
          <Link to="/dashboard/videos/add">
            <button className="rounded p-2 mb-3 btn">ویدئو جدید</button>
          </Link>
        </div>

        {video.length ? (
          <div>
            {video.map((item) => (
              <VideoItem
                key={item._id}
                data={item}
                deleteHandler={deleteHandler}
              />
            ))}
          </div>
        ) : (
          <h3>ویدیو وجود ندارد.</h3>
        )}
      </div>
    </Layout>
  );
}

export default Videos;
