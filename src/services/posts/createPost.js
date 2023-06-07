import axios from "axios";

export const createPost = async (title, content, technology, token) => {
  const base = process.env.REACT_APP_API_URL;
  return axios({
    method: "POST",
    url: `${base}/api/v1/posts`,
    headers: { Authorization: `Bearer ${token}` },
    data: {
      title,
      content,
      technology,
    },
  });
};
