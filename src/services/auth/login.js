import axios from "axios";

export const login = async (email, password) => {
  const base = process.env.REACT_APP_API_URL;
  return (
    await axios.post(`${base}/api/v1/auth/login`, {
      email,
      password,
    })
  ).data;
};
