import axios from "axios";

export const getUserById = async ( userId ) => {
    const base = process.env.REACT_APP_API_URL;
    return (await axios.get(`${base}/api/v1/users/${userId}`)).data;
};
