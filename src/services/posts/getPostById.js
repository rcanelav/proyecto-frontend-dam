import axios from "axios";

export const getPostById = async(id) => {
  const base = process.env.REACT_APP_API_URL;
  return (await axios.get(`${base}/api/v1/posts/${id}`)).data;
};
