import axios from "axios";

export const authentication = async(id_token, email) => {
    const base = process.env.REACT_APP_API_URL;
    return  (await axios.post( `${base}/api/v1/auth`, {
        id_token,
        email,
    })).data;
};
