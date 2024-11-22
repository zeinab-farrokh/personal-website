import React, { useEffect, useRef, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
// import components
import Layout from "../layout/Layout";
// import styles
import styles from "../slider/style/createPhoto.module.css";
// import functions
import { postVideo } from "../../utils/videoData";
import isValidVideo from "../utils/videos.validation";

function CreateVideo(props) {
  const input = useRef();
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [data, setData] = useState({
    video: "",
    title: "",
  });

  useEffect(() => {
    setErrors(isValidVideo(data));
  }, [data, touched]);

  const changeHandler = (e) => {
    let name = e.target.name;
    if (name !== "video") {
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
      console.log(Object.keys(errors).length);
      if (!Object.keys(errors).length) {
        const { response } = await postVideo(formData);
        if (response.status == 200) {
          toast.success("ویدیو جدید با موفقیت ایجاد شد", {
            position: "top-right",
          });
          input.current.value = null;
          setData({
            video: "",
            title: "",
          });
          setTouched({
            video: false,
            title: false,
          });
        } else {
          toast.error("مشکلی پیش آمده است");
        }
      } else {
        toast.error("مقادیر معتبر وارد کنید");
        setTouched({
          video: true,
          title: true,
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
          action="/slider/post-video"
          method="post"
          encType="multipart/form-data"
          className="border-2 p-2 rounded"
        >
          <div className="flex flex-col   my-2">
            <label>ویدیو مورد نظر را وارد کنید : </label>
            <input
              type="file"
              name="video"
              ref={input}
              className={
                errors.video && touched.video
                  ? "border-2 border-solid  border-rose-500 rounded p-1 "
                  : "border-2 border-solid rounded p-1 "
              }
              onChange={changeHandler}
            />
            <div className={styles.errorContainer}>
              {errors.video && touched.video && (
                <span className="text-rose-500">{errors.video}</span>
              )}
            </div>
          </div>

          <div className="flex flex-col  my-2">
            <label>عنوان ویدیو را وارد کنید : </label>
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
              {errors.title && touched.title && (
                <span className="text-rose-500">{errors.title}</span>
              )}
            </div>
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

export default CreateVideo;
