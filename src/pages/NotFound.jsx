import React from 'react';
import { Link } from 'react-router-dom';
import styles from "./styles/notFound.module.css"
function NotFound(props) {
    return (
        <div
      className={`${styles.container} flex justify-center items-center`}
    >
      <div className="boxStyle2 flex flex-col justify-center items-center">
          <h1 className="m-5">خطــــا 404</h1>
        <h3 className="m-5">صفــــحه مورد نظر یافت نشد!</h3>
        <Link to="/"><button className="btn p-2">صفــــحه نخست</button></Link>
      </div>
    </div>
    );
}

export default NotFound;