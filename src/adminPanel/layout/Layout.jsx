import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { useNavigate } from "react-router";
// import style
import styles from "./layout.module.css";
// import icons
import { CiUser } from "react-icons/ci";
import { IoIosClose } from "react-icons/io";
import { IoMenu } from "react-icons/io5";
import { getCookie } from "../../utils/cookie";
import axios from "axios";
import { logOut } from "../../utils/userData";

function Layout({ children }) {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const clickHandler = () => {
    setOpen(!open);
  };

  const closeHandler = () => {
    setOpen(false);
  };

  const logOutHandler = async () => {
    try {
      // axios.get("http://localhost:3000/user/logout", {
      //   withCredentials: true,
      // });
      const { response } = await logOut();
      console.log(response);
      if (response.status == 200) {
        navigate("/admin");
        window.location.reload();
      }
      console.log(response);
    } catch (error) {
      console.log("no");
    }
  };

  return (
    <div className={styles.container}>
      {/* start sidebar adminPanel layout */}
      <nav
        className={`${styles.navbar} ${
          open && styles.show
        } flex flex-col items-center justify-center noprint`}
      >
        <IoIosClose
          fontSize={40}
          className={`lg:hidden`}
          onClick={closeHandler}
        />
        <div className={`${styles.username} border-b-2 mb-4`}>
          <CiUser fontSize={50} />
          <h3 className="text-center">ادمین</h3>
        </div>

        <ul>
          <li>
            <NavLink
              className={({ isActive }) => (isActive ? "active" : "")}
              to="/dashboard/news"
            >
              اخبار
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) => (isActive ? "active" : "")}
              to="/dashboard/related-news"
            >
              اخبار مرتبط
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) => (isActive ? "active" : "")}
              to="/dashboard/photos"
            >
              گالری
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) => (isActive ? "active" : "")}
              to="/dashboard/videos"
            >
              ویدئوها
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) => (isActive ? "active" : "")}
              to="/dashboard/message"
            >
              پیام ها
            </NavLink>
            <ul>
              <li>
                <NavLink
                  className={({ isActive }) => (isActive ? "active" : "")}
                  to="/dashboard/message/unreply"
                >
                  پیام های پاسخ داده نشده
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={({ isActive }) => (isActive ? "active" : "")}
                  to="/dashboard/message/reply"
                >
                  پیام های پاسخ داده شده
                </NavLink>
              </li>
            </ul>
          </li>
          <li onClick={logOutHandler}>
            <Link>خروج از حساب</Link>
          </li>
        </ul>
      </nav>
      <main className={styles.main}>
        <div className={`${styles.header} flex lg:hidden noprint`}>
          <div onClick={clickHandler}>
            <i>
              <IoMenu fontSize={40} />
            </i>
          </div>
        </div>
        <div className={styles.childContainer}>{children}</div>
      </main>
    </div>
  );
}

export default Layout;
