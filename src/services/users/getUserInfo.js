import axios from "axios";

export const getUserInfo = async(id) => {
  const base = process.env.REACT_APP_API_URL;
  return (await axios.get(`${base}/api/v1/users/${id}`)).data.userData;
};
