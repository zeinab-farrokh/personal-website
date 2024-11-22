import React, { useEffect, useState } from "react";
import { useLocation } from "react-router";
import { sortData } from "../../utils/function";
import { deleteMessageData, getMessageData } from "../../utils/messageData";
import Layout from "../layout/Layout";
import MessageItem from "./MessageItem";

function IsReplyMessage(props) {
  const [data, setData] = useState([]);
  const location = useLocation();

  useEffect(() => {
    async function fetchData() {
      const { response } = await getMessageData();
      const sortResponse = sortData(response.data.userMessages);

      if (location.pathname == "/dashboard/message/reply") {
        const result = sortResponse.filter((i) => i.reply);
        setData(result);
      } else if (location.pathname == "/dashboard/message/unreply") {
        const result = sortResponse.filter((i) => !i.reply);
        setData(result);
      }
    }
    fetchData();
  }, [data]);

  const deleteHandler = async (id) => {
    await deleteMessageData(id);
    const newData = data.filter((item) => item._id !== id);
    setData(newData);
  };

  return (
    <Layout>
      <div className="boxStyle">
        {data.length ? (
          <div>
            {data.map((item) => (
              <MessageItem key={item._id} data={item} deleteHandler={deleteHandler} />
            ))}
          </div>
        ) : (
          <h3>پیامی وجود ندارد.</h3>
        )}
      </div>
    </Layout>
  );
}

export default IsReplyMessage;
