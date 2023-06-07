import axios from "axios";

export const registerUser = async (user) => {
  const base = process.env.REACT_APP_API_URL;
  return (await axios.post( `${base}/api/v1/users`, user )).data;
};
