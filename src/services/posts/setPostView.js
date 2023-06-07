import axios from "axios";

export const setPostView = async(id) => {
  const base = process.env.REACT_APP_API_URL;
  await axios.put(`${base}/api/v1/posts/${id}/view`);
};
