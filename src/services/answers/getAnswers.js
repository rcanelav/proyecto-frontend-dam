import axios from "axios";

export const getAnswers = async (postId, page, limit) => {
    const base = process.env.REACT_APP_API_URL;
    return (await axios.get(`${base}api/v1/posts/${postId}/answers?page=${page}&limit=${limit}`)).data;
};
