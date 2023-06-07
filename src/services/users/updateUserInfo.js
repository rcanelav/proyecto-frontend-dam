import axios from "axios";

const base = process.env.REACT_APP_API_URL;
export const updateUserInfo = async( userData, token ) => {
    await axios({
        method: "PUT",
        url: `${base}/api/v1/users/${userData.userId}`,
        headers: { Authorization: `Bearer ${token}` },
        data: userData
    });
};

export const updateUserRole = async( userData, token ) => {
    await axios({
        method: "PUT",
        url: `${base}/api/v1/users/${userData.userId}/role`,
        headers: { Authorization: `Bearer ${token}` },
        data: userData
    });
};

export const updateProfilePicture = async( userData, token ) => {
        const updatedUser = await axios({
            method: "PUT",
            url: `${base}/api/v1/users/${userData.userId}/image`,
            headers: { Authorization: `Bearer ${token}` },
            data: userData.formData
            
        });
        return updatedUser.data.image;
};
