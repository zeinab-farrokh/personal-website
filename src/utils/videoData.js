import api from "../config/config";

async function getVideo() {
  try {
    const response = await api.get("video/get-video");
    return { response };
  } catch (error) {
    return { error };
  }
}

async function postVideo(formData) {
  try {
    const response = await api.post("video/post-video", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    return { response };
  } catch (error) {
    return { error };
  }
}

export { getVideo, postVideo };
