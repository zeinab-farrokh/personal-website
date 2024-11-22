import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
// import styles
import styles from "./styles/time.module.css";
//import icons
import { FaInstagram } from "react-icons/fa";
import { RiTelegramLine } from "react-icons/ri";

function Time(props) {
  const [time, setTime] = useState(new Date());
  useEffect(() => {
    setInterval(() => {
      setTime(new Date());
    }, 1000);
  }, []);

  return (
    <div className={`${styles.timeContainer} flex items-center`}>
      <div className={`${styles.time} flex justify-between items-center`}>
        <div>
          <p>امــــروز : {time.toLocaleString("fa-ir")}</p>
        </div>
        <div>
          <ul className="flex list-none ">
            <li className="mx-1">
              <FaInstagram fontSize={20} />
            </li>

            <li className="mx-1">
              <RiTelegramLine fontSize={20} />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Time;
