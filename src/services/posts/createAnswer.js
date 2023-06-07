import axios from "axios";

export const createAnswer = async (postId, content, token) => {
  const base = process.env.REACT_APP_API_URL;
  return axios({
    method: "POST",
    url: `${base}/api/v1/posts/${postId}/answers`,
    headers: { Authorization: `Bearer ${token}` },
    data: {
      content
    },
  });
};
