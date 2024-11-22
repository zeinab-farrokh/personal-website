import React, { useEffect, useState } from "react";
import replyValidation from "../utils/reply.validation";
import styles from "./styles/reply.module.css";
// import toaster
import toast, { Toaster } from "react-hot-toast";
import { updateMessageData } from "../../utils/messageData";
import { useNavigate } from "react-router";

function Reply({ messageDetail }) {
  const navigate = useNavigate();
  const [touched, setTouched] = useState({});
  const [errors, setErrors] = useState({});
  const [data, setData] = useState({
    reply: "",
  });

  useEffect(() => {
    setErrors(replyValidation(data));
  }, [data, touched]);

  const changeHandler = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      if (!Object.keys(errors).length) {
        const { response, error } = await updateMessageData(
          messageDetail._id,
          data.reply
        );
        console.log(response);
        if (response.status == 200) {
          toast.success("پیام شما با موفقیت ارسال شد", {
            position: "top-right",
          });
          navigate("/dashboard/message/reply");
          // setData({
          //   reply: "",
          // });
          // setTouched({
          //   reply: false,
          // });
        } else {
          toast.error("مشکلی پیش امده است");
        }
      } else {
        toast.error("مقادیر معتبر وارد کنید");
        setTouched({
          reply: true,
        });
      }
    } catch (error) {
      toast.error("مشکلی پیش آمده است");
    }
  };

  return (
    <div className={`${styles.container} my-4`}>
      <form onSubmit={submitHandler}>
        <div className={`mb-2 flex flex-col`}>
          <h3>ارسال به : {messageDetail.mobile}</h3>
          <h3>پیام :</h3>
          <textarea
            className={
              errors.text && touched.text
                ? "border-2 border-solid  border-rose-500 rounded p-1 "
                : "border-2 border-solid rounded p-1 "
            }
            name="reply"
            value={data.reply}
            onChange={changeHandler}
          />
          <div className={styles.errorContainer}>
            {errors.reply && touched.reply && <span>{errors.reply}</span>}
          </div>
        </div>
        <div>
          <button type="submit" className="bg-lime-500 rounded p-2 w-full">
            ارسال
          </button>
        </div>
        <Toaster
          position="top-right
          "
          reverseOrder={false}
        />
      </form>
    </div>
  );
}

export default Reply;
