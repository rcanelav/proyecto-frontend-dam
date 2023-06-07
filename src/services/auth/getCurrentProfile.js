import axios from "axios";

export const getCurrentProfile = async (token) => {
  const base = process.env.REACT_APP_API_URL;
  return (
    await axios({
      method: "GET",
      url: `${base}/api/v1/auth/current`,
      headers: { Authorization: `Bearer ${token}` },
    })
  ).data;
};
