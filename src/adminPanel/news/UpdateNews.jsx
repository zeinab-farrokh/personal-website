import React, { useEffect, useRef, useState } from "react";
// import functions
import { useNavigate, useParams } from "react-router";
import { getNewsById } from "../../utils/newsData";
import validUpdate from "../utils/update.validation";
import toast, { Toaster } from "react-hot-toast";
// import components
import Layout from "../layout/Layout";
// import style
import styles from "./style/updateNews.module.css";
// import axios
import axios from "axios";

function UpdateNews(props) {
  const input = useRef();
  const [image, setImage] = useState({
    name: null,
    size: null,
  });
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [data, setData] = useState([]);
  const params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const id = params.id;
    async function getData() {
      const { response } = await getNewsById(id);
      setData(response.data.news);
    }
    getData();
  }, []);

  useEffect(() => {
    setErrors(validUpdate(image));
  }, [data, touched]);

  const changeHandler = (e) => {
    let name = e.target.name;
    if (name !== "image") {
      setData({ ...data, [name]: e.target.value });
    } else {
      setData({ ...data, [name]: e.target.files[0] });
      setImage({
        name: URL.createObjectURL(e.target.files[0]),
        size: e.target.files[0].size,
      });
      data.image = image.name;
    }
  };

  const updateHandler = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      for (let i in data) {
        formData.append(i, data[i]);
      }

      if (!Object.keys(errors).length) {
        const response = await axios.patch(
          `${import.meta.env.VITE_BASE_URL}news/update-news/${data._id}`,
          formData
        );
        console.log(response);
        if (response.status == 200) {
          toast.success("اخبار با موفقیت ویرایش شد", {
            position: "top-right",
          });
          if (data.related == true) {
            navigate("/dashboard/related-news");
          } else {
            navigate("/dashboard/news");
          }
        } else {
          toast.error("مشکلی رخ داده است");
        }
      } else {
        toast.error("مقادیر معتبر وارد کنید");
        setTouched({
          image: true,
        });
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Layout>
      <div className={`${styles.container} flex flex-col boxStyle`}>
        <form
          onSubmit={updateHandler}
          action="/news/update-news"
          method="post"
          encType="multipart/form-data"
        >
          <div className="flex flex-col  border-2 p-2 rounded my-2">
            <label>عکس مورد نظر را وارد کنید : </label>
            <input
              type="file"
              name="image"
              onChange={changeHandler}
              ref={input}
              className={
                errors.image && touched.image
                  ? "border-2 border-solid  border-rose-500 rounded p-1 "
                  : "border-2 border-solid rounded p-1 "
              }
            />

            <img
              src={
                image.name
                  ? image.name
                  : `${import.meta.env.VITE_BASE_URL}${data.image}`
              }
              className={styles.updateImg}
            />
            <div className={styles.errorContainer}>
              {errors.image && touched.image && (
                <span className="text-rose-500">{errors.image}</span>
              )}
            </div>
            {/* <div className={styles.errorContainer}>
              {image.size > 150000 ? (
                <span className="text-rose-500">
                  حداکثر سایز قابل قبول 150 kb می باسد
                </span>
              ) : (
                ""
              )}
            </div> */}
          </div>

          <div className="flex flex-col border-2 p-2 rounded my-2">
            <label>عنوان مورد نظر را وارد کنید : </label>
            <textarea
              className={"border-2 border-solid rounded p-1 "}
              name="title"
              value={data.title}
              onChange={changeHandler}
            />
          </div>

          <div className="flex flex-col border-2 p-2 rounded my-2">
            <label>متن مورد نظر را وارد کنید : </label>
            <textarea
              className="border-2 border-solid rounded p-1 "
              name="text"
              value={data.text}
              onChange={changeHandler}
            />
          </div>
          <div className="my-2">
            <button type="submit" className="p-2 rounded btn">
              ویرایش
            </button>
          </div>
          <Toaster
            position="top-right
          "
            reverseOrder={false}
          />
        </form>
      </div>
    </Layout>
  );
}

export default UpdateNews;
