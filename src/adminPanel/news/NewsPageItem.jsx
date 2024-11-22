import React from "react";
import { useNavigate } from "react-router";
import styles from "./style/newsPageItem.module.css";
function NewsPageItem({data,deleteHandler}) {
  const navigate = useNavigate();
  const updateHandler = async (id) => {
    navigate(`/dashboard/news/update/${id}`);
  };

  return (
    <div className={`${styles.container} flex my-2`}>
      <table>
        <tbody>
          <tr>
            <th>عکس</th>
            <th>عنوان</th>
            <th>متن</th>
            <th></th>
          </tr>
          <tr>
            <td>
              <img
                src={`${import.meta.env.VITE_BASE_URL}${data.image}`}
                alt=""
              />
            </td>
            <td>{data.title}</td>
            <td>{data.text.substring(0, 200)}[...]</td>
            <td>
              <button
                className="rounded p-2 m-2 bg-red-600 text-white"
                onClick={() => deleteHandler(data._id)}
              >
                حذف
              </button>

              <button
                className="rounded p-2 btn"
                onClick={() => updateHandler(data._id)}
              >
                ویرایش
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default NewsPageItem;
