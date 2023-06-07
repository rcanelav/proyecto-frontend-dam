import axios from "axios";

export const activateUserAccount = async ( code ) => {
    const base = process.env.REACT_APP_API_URL;
    return axios.get(`${base}/api/v1/users/activation?code=${code}`);
}
