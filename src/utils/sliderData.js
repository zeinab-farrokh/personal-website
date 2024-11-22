import api from "../config/config";

async function getPhoto() {
  try {
    const response = await api.get("slider/get-image");
    return { response };
  } catch (error) {
    return { error };
  }
}

async function postPhoto(formData) {
  try {
    const response = await api.post("slider/post-image", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    return { response };
  } catch (error) {
    return { error };
  }
}

export { getPhoto, postPhoto };
