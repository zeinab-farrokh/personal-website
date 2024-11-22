import React from "react";
// import react-router-dom
import { Link, NavLink } from "react-router-dom";
// import style
import styles from "./styles/footer.module.css";
// import icons
import { RiTelegramLine } from "react-icons/ri";
import { FaInstagram } from "react-icons/fa";
import { RiArrowDropLeftFill } from "react-icons/ri";
import { VscArrowSmallLeft } from "react-icons/vsc";
import { IoLocationOutline } from "react-icons/io5";
import { TiPhoneOutline } from "react-icons/ti";

function Footer(props) {
  return (
    <div className={`${styles.footercontainer} `}>
      <div
        className={`${styles.container}  p-2 flex flex-wrap justify-around flex-col items-start md:flex-row py-5 text-white`}
      >
        <div className={`${styles.about}`}>
          <h3 className="mb-2 flex">
            <RiArrowDropLeftFill fontSize={25} />
            دربـــــــــــاره من
          </h3>
          <p className="text-justify">
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
            استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در
            ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و
            کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد
          </p>
        </div>
        <div className={`${styles.footerList}`}>
          <ul className="list-none">
            <li className="mb-2 flex" disabled>
              <RiArrowDropLeftFill fontSize={25} />
              دســــترسی سریع
            </li>
            <li>
              <NavLink
                to="/"
                className={`${({ isActive }) =>
                  isActive ? "active" : ""} flex items-center`}
              >
                <VscArrowSmallLeft fontSize={18} className="ml-2" />
                صفــحه اصلی
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className={`${({ isActive }) =>
                  isActive ? "active" : ""} flex items-center`}
              >
                <VscArrowSmallLeft fontSize={18} className="ml-2" />
                دربــاره من
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/news"
                className={`${({ isActive }) =>
                  isActive ? "active" : ""} flex items-center`}
              >
                <VscArrowSmallLeft fontSize={18} className="ml-2" />
                اخبــار
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/gallery"
                className={`${({ isActive }) =>
                  isActive ? "active" : ""} flex items-center`}
              >
                <VscArrowSmallLeft fontSize={18} className="ml-2" />
                گالــری تصاویر
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                className={`${({ isActive }) =>
                  isActive ? "active" : ""} flex items-center`}
              >
                <VscArrowSmallLeft fontSize={18} className="ml-2" />
                ارتــباط
              </NavLink>
            </li>
          </ul>
        </div>

        <div className={`${styles.address} `}>
          <ul className="list-none  justify-center items center ">
            <li className="mb-2 flex diactive">
              <RiArrowDropLeftFill fontSize={25} />
              ارتــباط
            </li>
            <li className="mx-5 flex items-center">
              <IoLocationOutline fontSize={18} className="ml-2" />
              ادرس : تهران
            </li>
            <li className="mx-5 flex items-center">
              <TiPhoneOutline fontSize={18} className="ml-2" />
              تلفن : 000000
            </li>

            <li className="mx-5 flex items-center">
              <FaInstagram fontSize={18} className="ml-2" />
              <p>اینستاگرام</p>
            </li>
            <li className="mx-5 flex items-center">
              <RiTelegramLine fontSize={18} className="ml-2" />
              <p>تلگرام</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Footer;
