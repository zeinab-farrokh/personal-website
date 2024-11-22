import React, { useEffect, useRef, useState } from "react";
import { postPhoto } from "../../utils/sliderData";
import Layout from "../layout/Layout";
import styles from "./style/createPhoto.module.css";
import toast, { Toaster } from "react-hot-toast";
import isValidPhoto from "../utils/photos.validation";
function CreatePhoto(props) {
  const input = useRef();
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [data, setData] = useState({
    image: "",
    title: "",
  });

  useEffect(() => {
    setErrors(isValidPhoto(data));
  }, [data, touched]);

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
        // const response = await axios.post(
        //   `http://localhost:3000/slider/post-image`,
        //   formData,
        //   {
        //     headers: {
        //       "Content-Type": "multipart/form-data",
        //     },
        //   }
        // );
        const { response } = await postPhoto(formData);
        console.log(response);
        if (response.status == 200) {
          toast.success("عکس جدید با موفقیت ایجاد شد", {
            position: "top-right",
          });
          input.current.value = null;
          setData({
            image: "",
            title: "",
          });
          setTouched({
            image: false,
            title: false,
          });
        } else {
          toast.error("مشکلی پیش آمده است");
        }
      } else {
        toast.error("مقادیر معتبر وارد کنید");
        setTouched({
          image: true,
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
          action="/slider/post-image"
          method="post"
          encType="multipart/form-data"
          className="border-2 p-2 rounded"
        >
          <div className="flex flex-col   my-2">
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
              {errors.image && touched.image && (
                <span className="text-rose-500">{errors.image}</span>
              )}
            </div>
          </div>

          <div className="flex flex-col  my-2">
            <label>عنوان عکس را وارد کنید : </label>
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

export default CreatePhoto;
