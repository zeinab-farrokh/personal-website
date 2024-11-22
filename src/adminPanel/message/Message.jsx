import React, { useEffect, useState } from "react";
// import functions
import { sortData } from "../../utils/function";
import { deleteMessageData, getMessageData } from "../../utils/messageData";
// import components
import Layout from "../layout/Layout";
import MessageItem from "./MessageItem";
// import style
import styles from "./styles/message.module.css";

function Message(props) {
  const [data, setData] = useState([]);

  const deleteHandler = async (id) => {
    await deleteMessageData(id);
    const newData = data.filter((item) => item._id !== id);
    setData(newData);
  };

  useEffect(() => {
    async function fetchData() {
      const { response } = await getMessageData();
      const sortResponse = sortData(response.data.userMessages);
      setData(sortResponse);
    }
    fetchData();
  }, []);

  return (
    <Layout>
      <div className={`${styles.container} boxStyle`}>
        {data.length ? (
          <div>
            {data.map((item) => (
              <MessageItem
                key={item._id}
                data={item}
                deleteHandler={deleteHandler}
              />
            ))}
          </div>
        ) : (
          <h3>پیامی وجود ندارد.</h3>
        )}
      </div>
    </Layout>
  );
}

export default Message;
