import React from "react";
import { Link } from "react-router-dom";
// import style
import styles from "./styles/messageItem.module.css";

function MessageItem({ data, deleteHandler }) {
  return (
    <div
      className={`${styles.container} flex flex-col justify-between items-center m-2 p-2 `}
    >
      <table>
        <tbody>
          <tr>
            <th>نام</th>
            <th>موبایل</th>
            <th>موضوع</th>
            <th>متن</th>
            <th></th>
          </tr>
          <tr>
            <td>{data.name}</td>
            <td>{data.mobile}</td>
            <td>{data.subject}</td>
            <td className={styles.text}>{data.text.slice(0, 100)}[...]</td>
            <td>
              <Link to={`/dashboard/message/${data._id}`}>
                <button className="rounded p-2 m-1 btn">جزئیات</button>
              </Link>
              <button
                className="rounded p-2 bg-red-600 text-white m-1"
                onClick={()=>deleteHandler(data._id)}
              >
                حذف
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default MessageItem;
