import axios from "axios";

export const getTechnologies = async () => {
  const base = process.env.REACT_APP_API_URL;
  return (await axios.get(`${base}/api/v1/technologies`)).data.technologies;
};
