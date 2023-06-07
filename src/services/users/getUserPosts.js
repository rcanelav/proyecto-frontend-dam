import axios from "axios";

export const getUserPosts = async(id, page, limit) => {
  const base = process.env.REACT_APP_API_URL;
  return (await axios.get(`${base}/api/v1/users/${id}/posts?page=${page}&limit=${limit}`)).data;
};
