import React, { useState } from "react";
// import styles
import styles from "./styles/navbar.module.css";
// import icons 
import { IoMenu } from "react-icons/io5";
// import react-router-dom
import { NavLink } from "react-router-dom";

function Navbar(props) {
  const [menu, setMenu] = useState({ isOpen: false });

  const clickHandler = () => {
    setMenu({ isOpen: !menu.isOpen });
  };

  return (
    <div className={`${styles.container} text-white`}>
      <div className="flex  md:hidden " onClick={clickHandler}>
        <i>
          <IoMenu fontSize={35} />
        </i>
      </div>

      <div className={menu.isOpen ? styles.show : styles.unshow}>
        <ul className="list-none flex flex-col justify-center items center md:flex-row ">
          <li className="md:mx-5">
            <NavLink
              className={({ isActive }) => (isActive ? "active" : "")}
              to="/"
            >
              صفحه اصلی
            </NavLink>
          </li>
          <li className="md:mx-5">
            <NavLink
              to="/about"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              درباره من
            </NavLink>
          </li>
          <li className="md:mx-5">
            <NavLink
              to="/news"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              اخبار
            </NavLink>
          </li>
          <li className="md:mx-5">
            <NavLink
              to="/gallery"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              گالری تصاویر
            </NavLink>
          </li>
          <li className="md:mx-5">
            <NavLink
              to="/contact"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              ارتباط
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
