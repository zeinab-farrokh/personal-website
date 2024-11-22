import api from "../config/config";

async function postMessageData({ name, mobile, subject, text }) {
  try {
    const response = await api.post("message/post-message", {
      name,
      mobile,
      subject,
      text,
    });
    return { response };
  } catch (error) {
    return { error };
  }
}

async function postMessageCode({ code, mobile }) {
  try {
    const response = await api.post("message/post-MessageCode", {
      code,
      mobile,
    });
    return { response };
  } catch (error) {
    return { error };
  }
}

async function getMessageData() {
  try {
    const response = await api.get("message/get-message");
    return { response };
  } catch (error) {
    return { error };
  }
}

async function deleteMessageData(id) {
  try {
    const response = await api.delete(`message/delete-message/${id}`);
    return { response };
  } catch (error) {
    return { error };
  }
}

async function updateMessageData(id, reply) {
  try {
    const response = await api.patch(`message/update-message/${id}`, {
      reply,
    });
    return { response };
  } catch (error) {}
}

export {
  postMessageData,
  getMessageData,
  deleteMessageData,
  updateMessageData,
  postMessageCode,
};
