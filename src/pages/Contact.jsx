import React, { useEffect, useState } from "react";
// import layout
import Layout from "../layout/Layout";
// import toaster
import toast, { Toaster } from "react-hot-toast";
// import style
import styles from "./styles/contact.module.css";
// import functions
import validationContactForm from "../utils/contact.validation";
import { postMessageData } from "../utils/messageData";
import MessageTracking from "../components/MessageTracking";

function Contact(props) {
  const [touched, setTouched] = useState({});
  const [errors, setErrors] = useState({});
  const [send, setSend] = useState(false);
  const [data, setData] = useState({
    name: "",
    mobile: "",
    subject: "",
    text: "",
  });

  useEffect(() => {
    setErrors(validationContactForm(data));
  }, [data, touched]);

  const changeHandler = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      if (!Object.keys(errors).length) {
        const { response, error } = await postMessageData(data);
        if (response && response.status == 200) {
          // toast.success("پیام شما با موفقیت ارسال شد", {
          //   position: "top-right",
          // });
          setSend(true);
          // setData({
          //   name: "",
          //   mobile: "",
          //   subject: "",
          //   text: "",
          // });
          // setTouched({
          //   name: false,
          //   mobile: false,
          //   subject: false,
          //   text: false,
          // });
        } else {
          toast.error("مشکلی پیش امده است");
        }
      } else {
        toast.error("مقادیر معتبر وارد کنید");
        setTouched({
          name: true,
          mobile: true,
          subject: true,
          text: true,
        });
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Layout>
      <div
        className={`${styles.contactContainer} flex justify-center flex-col lg:flex-row`}
      >
        <MessageTracking />
        <div
          className={`${styles.contact} flex flex-col items-center basis-3/4 mt-5 lg:mt-0`}
        >
          {!send ? (
            <form className="p-3 boxStyle2" onSubmit={submitHandler}>
              <h2 className="text-center my-2">ارسال پیام</h2>
              <div className={`${styles.formItem} mb-2 `}>
                <label>نام و نام خانوادگی :</label>

                <input
                  type="text"
                  name="name"
                  placeholder="نام و نام خانوادگی را وارد کنید"
                  className={
                    errors.name && touched.name
                      ? "border-2 border-solid  border-rose-500 rounded p-1 "
                      : "border-2 border-solid rounded p-1 "
                  }
                  value={data.name}
                  onChange={changeHandler}
                />
                <div className={styles.errorContainer}>
                  {errors.name && touched.name && <span>{errors.name}</span>}
                </div>
              </div>
              <div className={`${styles.formItem} mb-2`}>
                <label>تلفن همراه :</label>

                <input
                  type="number"
                  name="mobile"
                  placeholder="تلفن همراه را وارد کنید"
                  className={`${styles.nospinners}
                ${
                  errors.mobile && touched.mobile
                    ? "border-2 border-solid  border-rose-500 rounded p-1 "
                    : "border-2 border-solid rounded p-1 "
                }`}
                  maxLength="11"
                  value={data.mobile}
                  onChange={changeHandler}
                />
                <div className={styles.errorContainer}>
                  {errors.mobile && touched.mobile && (
                    <span>{errors.mobile}</span>
                  )}
                </div>
              </div>
              <div className={`${styles.formItem} mb-2 `}>
                <label className="text-right">موضوع :</label>

                <input
                  type="text"
                  name="subject"
                  placeholder="موضوع را وارد کنید "
                  className={
                    errors.subject && touched.subject
                      ? "border-2 border-solid  border-rose-500 rounded p-1 "
                      : "border-2 border-solid rounded p-1 "
                  }
                  value={data.subject}
                  onChange={changeHandler}
                />
                <div className={styles.errorContainer}>
                  {errors.subject && touched.subject && (
                    <span>{errors.subject}</span>
                  )}
                </div>
              </div>
              <div className={`${styles.formItem} mb-2 `}>
                <label className="text-right">متن :</label>
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

              <div className={`${styles.formItem}`}>
                <button type="submit" className="btn">
                  ارسال
                </button>
              </div>
              <Toaster
                position="top-right
          "
                reverseOrder={false}
              />
            </form>
          ) : (
            <div
              className={`${styles.send} flex justify-center items-center boxStyle2`}
            >
              <h2 className="text-lime-500">پیام شما با موفقیت ارسال شد</h2>
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
}

export default Contact;
