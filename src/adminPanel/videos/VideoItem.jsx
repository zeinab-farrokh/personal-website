import React from "react";
import styles from "../slider/style/photoItem.module.css";
function VideoItem({ data, deleteHandler }) {
  return (
    <div className={`${styles.container} flex my-2`}>
      <table>
        <tbody>
          <tr>
            <th>ویدیو</th>

            <th></th>
          </tr>
          <tr>
            <td>
              <video>
                <source src={`${import.meta.env.VITE_BASE_URL}${data.video}`} />
              </video>
            </td>

            <td>
              <button
                className="rounded p-2 m-2 bg-red-600 text-white"
                onClick={() => deleteHandler(data._id)}
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

export default VideoItem;
