import React from "react";
import styles from "./style/photoItem.module.css";

function PhotoItem({ data, deleteHandler }) {
  return (
    <div className={`${styles.container} flex my-2`}>
      <table>
        <tbody>
          <tr>
            <th>عکس</th>

            <th></th>
          </tr>
          <tr>
            <td>
              <img
                src={`${import.meta.env.VITE_BASE_URL}${data.image}`}
                alt={data.title}
              />
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

export default PhotoItem;
