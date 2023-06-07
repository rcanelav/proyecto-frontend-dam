import axios from "axios";

export const searchPublication = async (url) => {
    const base = process.env.REACT_APP_API_URL;
    return (await axios.get(`${base}/api/v1/${url}`)).data;
};
