import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { sortData } from "../../utils/function";
import { getPhoto } from "../../utils/sliderData";
import Layout from "../layout/Layout";
import PhotoItem from "./PhotoItem";
import styles from "./style/photo.module.css";

function Photos(props) {
  const [photo, setPhoto] = useState([]);
  useEffect(() => {
    async function fetchPhotosData() {
      const { response } = await getPhoto();
      const sortResponse = await sortData(response.data.data);
      setPhoto(sortResponse);
    }
    fetchPhotosData();
  }, []);

  const deleteHandler = async (id) => {
    await axios.delete(
      `${import.meta.env.VITE_BASE_URL}slider/delete-image/${id}`
    );

    const newData = photo.filter((item) => item._id !== id);
    setPhoto(newData);
  };
  return (
    <Layout>
      <div className={`${styles.container} boxStyle`}>
        <div className={styles.createBtn}>
          <Link to="/dashboard/photos/add">
            <button className="rounded p-2 mb-3 btn">عکس جدید</button>
          </Link>
        </div>

        {photo.length ? (
          <div>
            {photo.map((item) => (
              <PhotoItem
                key={item._id}
                data={item}
                deleteHandler={deleteHandler}
              />
            ))}
          </div>
        ) : (
          <h3>عکس وجود ندارد.</h3>
        )}
      </div>
    </Layout>
  );
}

export default Photos;
