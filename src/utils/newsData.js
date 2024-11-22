import api from "../config/config";

async function postNews(formData) {
  try {
    const response = await api.post("news/post-news", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    console.log(response);
    return { response };
  } catch (error) {
    return { error };
  }
}

async function getNews() {
  try {
    const response = await api.get("news/get-news");
    return { response };
  } catch (error) {
    return { error };
  }
}

async function getNewsById(id) {
  try {
    const response = await api.get(`news/get-news/${id}`);
    return { response };
  } catch (error) {
    return { error };
  }
}

async function getNewsBySlug(slug) {
  try {
    console.log(slug);
    console.log(`news/get-news/${slug}`);
    const response = await api.get(`news/get-news/${slug}`);
    return { response };
  } catch (error) {
    return { error };
  }
}

async function updateNews(id, formData) {
  try {
    console.log({ formData });
    const response = await api.patch(`news/update-news/${id}`, formData);
    return { response };
  } catch (error) {
    return { error };
  }
}

async function deleteNews(id) {
  try {
    const response = await api.delete(`news/delete-news/${id}`);
    return { response };
  } catch (error) {
    return { error };
  }
}

export {
  postNews,
  getNews,
  deleteNews,
  getNewsById,
  updateNews,
  getNewsBySlug,
};
