import axios from "axios";

export const setLikeToPublication = async (type, publicationId, token) => {
    const base = process.env.REACT_APP_API_URL;
    const response = await axios(
        {
            method: 'POST',
            url: `${base}/api/v1/${type}/${publicationId}/likes`,
            headers: {'Authorization': `Bearer ${token}`}
        }
    );
    return response.data;
};
