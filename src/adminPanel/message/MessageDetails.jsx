import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { getMessageData } from "../../utils/messageData";
import Layout from "../layout/Layout";
import styles from "./styles/messageDetails.module.css";
import Reply from "./Reply";

function MessageDetails(props) {
  const [message, setMessage] = useState([]);
  const [isShow, setIsShow] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    async function fetchMessage() {
      const { response } = await getMessageData();
      setMessage(response.data.userMessages.find((item) => item._id == id));
    }
    fetchMessage();
  }, []);

  const replyHandler = () => {
    setIsShow(!isShow);
  };

  const printHandler = () => {
    window.print();
  };

  return (
    <Layout>
      <div
        className={`${styles.container} boxStyle flex flex-col justify-center `}
      >
        <div className="border-2 border-solid p-2 mb-3">
          <h3 className="my-2">فرستنده : {message.name}</h3>
          <h3 className="my-2">موبایل : {message.mobile}</h3>
          <h3 className="my-2">عنوان : {message.subject}</h3>
          <h3 className="my-2">پیام : </h3>
          <p className="text-justify">{message.text}</p>
          <button
            className={`${styles.detailBtn} rounded p-2 noprint `}
            onClick={printHandler}
          >
            چاپ
          </button>
        </div>
        {message.reply ? (
          <div className="border-2 border-solid p-2 mb-3">
            <h3 className="text-lime-500">پاسخ داده شده</h3>
            <h3>پیام شما : </h3>
            <p className="text-justify">{message.reply}</p>
          </div>
        ) : (
          <div className="flex ">
            <button
              className={`${styles.detailBtn} rounded p-2 noprint `}
              onClick={replyHandler}
            >
              پاسخ
            </button>

            {/* <button
          className={`${styles.detailBtn} rounded p-2 bg-red-600`}
          onClick={() => deleteHandler(data._id)}
        >
          حذف
        </button> */}
          </div>
        )}

        {isShow && <Reply messageDetail={message} />}
      </div>
    </Layout>
  );
}

export default MessageDetails;
