import api from "../config/config";
import { getCookie } from "./cookie";

const postUser = async (data) => {
  const response = await api.post("user/post-user", data, {
    withCredentials: true,
  });
  return { response };
};

const getUser = async (token) => {
  const response = await api.get("user/get-user", {
    headers: { Authorization: `Bearer ${token}` },
  });
  return { response };
};

const logOut = async () => {
  const response = await api.get("user/logout", {
    withCredentials: true,
  });
  return { response };
};

export { getUser, postUser, logOut };
