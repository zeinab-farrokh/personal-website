import axios from "axios";
import React from "react";
import { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
// import react-router-dom
import { useNavigate } from "react-router";
import { getCookie } from "../utils/cookie";
import { postUser } from "../utils/userData";
// import style
import styles from "./admin.module.css";
// import functions
import isValidUser from "./utils/login.validation";

function Admin(props) {
  const navigate = useNavigate();
  const [touched, setTouched] = useState({});
  const [errors, setErrors] = useState({});
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  useEffect(() => {
    setErrors(isValidUser(data));
  }, [data, touched]);

  const focusHandler = (e) => {
    setTouched({ ...touched, [e.target.name]: true });
  };

  const changeHandler = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      if (!Object.keys(errors).length) {
        const { response } = await postUser(data);
        if (response.status == 200) {
          toast.success("ورود با موفقیت انجام شد", { position: "top-right" });
          navigate("/dashboard/news");
        }
      } else {
        toast.error("مقادیر معتبر وارد کنید");
        setTouched({
          email: true,
          password: true,
        });
      }
    } catch (error) {
      if (error.status == 404) {
        toast.error("حساب کاربری وجود ندارد", { position: "top-right" });
      } else if (error.status == 401) {
        toast.error("ایمیل یا پسورد نادرست است", { position: "top-right" });
      }
    }
  };

  return (
    <div className={styles.adminContainer}>
      <form className="p-3 boxStyle2" onSubmit={submitHandler}>
        <div className={`${styles.formItem} mb-2 `}>
          <label>ایمیل :</label>
          <input
            type="email"
            name="email"
            placeholder="ایمیل خود را وارد کنید"
            className={
              errors.email && touched.email
                ? "border-2 border-solid  border-rose-500 rounded p-1 "
                : "border-2 border-solid rounded p-1 "
            }
            value={data.email}
            onChange={changeHandler}
            onFocus={focusHandler}
          />
          <div className={styles.errorContainer}>
            {errors.email && touched.email && <span>{errors.email}</span>}
          </div>
        </div>

        <div className={`${styles.formItem} mb-2`}>
          <label>رمز عبور :</label>
          <input
            type="password"
            name="password"
            placeholder="رمز خود را وارد کنید"
            className={
              errors.password && touched.password
                ? "border-2 border-solid  border-rose-500 rounded p-1 "
                : "border-2 border-solid rounded p-1 "
            }
            value={data.mobile}
            onChange={changeHandler}
            onFocus={focusHandler}
          />
          <div className={styles.errorContainer}>
            {errors.password && touched.password && (
              <span>{errors.password}</span>
            )}
          </div>
        </div>

        <div className={`${styles.formItem}`}>
          <button type="submit">ارسال</button>
        </div>

        <Toaster position="top-right" reverseOrder={false} />
      </form>
    </div>
  );
}

export default Admin;
