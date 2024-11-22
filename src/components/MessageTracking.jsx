import React, { useEffect, useState } from "react";
import validationTrackingForm from "../utils/tracking.validation";
import styles from "./styles/messageTracking.module.css";
import spinner from "/images/Spinner.gif";
// import toaster
import toast, { Toaster } from "react-hot-toast";
import { postMessageCode } from "../utils/messageData";
function MessageTracking(props) {
  const [touched, setTouched] = useState({});
  const [errors, setErrors] = useState({});
  const [reply, setReply] = useState("");
  const [isLoading, setIsLoading] = useState();
  const [data, setData] = useState({
    code: "",
    mobile: "",
  });

  useEffect(() => {
    setErrors(validationTrackingForm(data));
  }, [data, touched]);

  const changeHandler = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      if (!Object.keys(errors).length) {
        const { response } = await postMessageCode(data);
        setIsLoading(true);
        if (response.status == 200) {
          setReply(response.data.reply);
          setIsLoading(false);
        }
      } else {
        toast.error("مقادیر معتبر وارد کنید");
        setTouched({
          code: true,
          mobile: true,
        });
      }
    } catch (error) {
      toast.error("پیغامی وجود ندارد");
      setIsLoading(false);
    }
  };

  return (
    <div
      className={`${styles.container} boxStyle2 flex flex-col items-center basis-1/3  rounded  lg:order-first`}
    >
      <form onSubmit={submitHandler}>
        <h2 className="text-center my-2">پیگیری پیام</h2>
        <div className={styles.formItem}>
          <label>شماره پیگیری را وارد کنید : </label>
          <input
            type="number"
            name="code"
            placeholder="شماره پیگیری"
            value={data.code}
            className={`${styles.nospinners}
            ${
              errors.mobile && touched.mobile
                ? "border-2 border-solid  border-rose-500 rounded p-1 "
                : "border-2 border-solid rounded p-1 "
            }`}
            onChange={changeHandler}
          />
          <div className={styles.errorContainer}>
            {errors.code && touched.code && (
              <span className="text-rose-500">{errors.code}</span>
            )}
          </div>
        </div>
        <div className={styles.formItem}>
          <label>شماره موبایل خود را وارد کنید : </label>
          <input
            type="number"
            name="mobile"
            placeholder="شماره موبایل"
            value={data.mobile}
            className={`${styles.nospinners}
            ${
              errors.mobile && touched.mobile
                ? "border-2 border-solid  border-rose-500 rounded p-1 "
                : "border-2 border-solid rounded p-1 "
            }`}
            onChange={changeHandler}
          />
          <div className={styles.errorContainer}>
            {errors.mobile && touched.mobile && (
              <span className="text-rose-500">{errors.mobile}</span>
            )}
          </div>
        </div>
        <div className={`${styles.formItem}`}>
          <button type="submit" className="btn">
            جستجو
          </button>
        </div>
        <Toaster
          position="top-right
          "
          reverseOrder={false}
        />
      </form>

      {isLoading ? (
        <img src={spinner} alt="spinner" />
      ) : reply ? (
        <div>
          <h3>پیام شما توسط ادمین پاسخ داده شده است :</h3>
          <p>{reply}</p>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

export default MessageTracking;
