import axios from "axios";
const { REACT_APP_API_URL } = process.env;

export const getUserRating = async(id) => {
    const response = await axios.get(`${REACT_APP_API_URL}/api/v1/users/${id}/rating`);
    return response.data.rating;
};