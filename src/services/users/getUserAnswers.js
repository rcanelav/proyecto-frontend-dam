import axios from "axios";

export const getUserAnswers = async(id, page, limit) => {
  const base = process.env.REACT_APP_API_URL;
  return (await axios.get(`${base}/api/v1/users/${id}/answers?page=${page}&limit=${limit}`)).data;
};
