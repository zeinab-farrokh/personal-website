import React, { useEffect, useRef, useState } from "react";
import Layout from "../layout/Layout";
import styles from "./style/createNews.module.css";
import toast, { Toaster } from "react-hot-toast";
import isValidNews from "../utils/news.validation";
import { postNews } from "../../utils/newsData";
function CreateNews(props) {
  const input = useRef();
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [data, setData] = useState({
    image: null,
    title: "",
    text: "",
    related: false,
  });

  useEffect(() => {
    setErrors(isValidNews(data));
  }, [data, touched]);

  const changeCheckbox = () => {
    setData({ ...data, related: !data.related });
  };

  const changeHandler = (e) => {
    let name = e.target.name;
    if (name !== "image") {
      setData({ ...data, [name]: e.target.value });
    } else {
      setData({ ...data, [name]: e.target.files[0] });
    }
  };

  const createHandler = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      for (let i in data) {
        formData.append(i, data[i]);
      }

      if (!Object.keys(errors).length) {
        const { response } = await postNews(formData);

        if (response.status == 200) {
          toast.success("اخبار جدید با موفقیت ایجاد شد", {
            position: "top-right",
          });

          input.current.value = null;
          setData({
            image: null,
            title: "",
            text: "",
            related: false,
          });
          setTouched({
            image: false,
            title: false,
            text: false,
          });
        } else {
          toast.error("مشکلی رخ داده است");
        }
      } else {
        toast.error("مقادیر معتبر وارد کنید");
        setTouched({
          image: true,
          title: true,
          text: true,
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
          onSubmit={createHandler}
          action="/news/post-news"
          method="post"
          encType="multipart/form-data"
          className="border-2 p-2 rounded"
        >
          <div className="flex flex-col    my-2">
            <label>عکس مورد نظر را وارد کنید : </label>
            <input
              type="file"
              name="image"
              ref={input}
              className={
                errors.image && touched.image
                  ? "border-2 border-solid  border-rose-500 rounded p-1 "
                  : "border-2 border-solid rounded p-1 "
              }
              onChange={changeHandler}
            />
            <div className={styles.errorContainer}>
              {errors.image && touched.image && <span>{errors.image}</span>}
            </div>
          </div>

          <div className="flex flex-col my-2">
            <label>عنوان مورد نظر را وارد کنید : </label>
            <textarea
              className={
                errors.title && touched.title
                  ? "border-2 border-solid  border-rose-500 rounded p-1 "
                  : "border-2 border-solid rounded p-1 "
              }
              name="title"
              value={data.title}
              onChange={changeHandler}
            />
            <div className={styles.errorContainer}>
              {errors.title && touched.title && <span>{errors.title}</span>}
            </div>
          </div>

          <div className="flex flex-col my-2">
            <label>متن مورد نظر را وارد کنید : </label>
            <textarea
              className={
                errors.text && touched.text
                  ? "border-2 border-solid  border-rose-500 rounded p-1 "
                  : "border-2 border-solid rounded p-1 "
              }
              name="text"
              value={data.text}
              onChange={changeHandler}
            />
            <div className={styles.errorContainer}>
              {errors.text && touched.text && <span>{errors.text}</span>}
            </div>
          </div>

          <div className="flex  lg:items-center  p-2  my-2">
            <label>اخبار مرتبط</label>
            <input
              className={`${styles.relatedInput} mx-2`}
              type="checkbox"
              name="related"
              value={data.related}
              onChange={changeCheckbox}
              checked={data.related}
            />
          </div>

          <div className="my-2">
            <button type="submit" className="p-2 rounded btn">
              ذخیره
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

export default CreateNews;
