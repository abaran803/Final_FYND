import axios from 'axios';

const baseURL = 'http://localhost:3000';

const getSellerData = async (sellerId) => {
    const token = localStorage.getItem('isUserExist');
    console.log(token);
    const data = await axios.get(`${baseURL}/user/seller/${sellerId}`, {
        headers: {
            Authorization: 'Bearer ' + token //the token is a variable which holds the token
        }
    });
    return data;
}

export const getAllCategories = async () => {
    const res = await axios.get(`${baseURL}/user/getAllCategories`);
    const data = res.data;
    return data;
}

export const searchProducts = async (query) => {
    const token = localStorage.getItem('isUserExist');
    const res = await axios.get(`${baseURL}/user/productsByName/` + query, {
        headers: {
            Authorization: 'Bearer ' + token //the token is a variable which holds the token
        }
    });
    const data = res.data;
    return data;
}

export const uploadBulkData = async (formData) => {
    const res = await axios.post(`${baseURL}/user/upload/bulk`, formData);
    const data = res.data;
    return data;
}

export const getProductDetails = async (id) => {
    const res = await axios.get(`${baseURL}/user/getProductById/${id}`);
    const data = res.data;
    return data;
}

export const register = async (formData) => {
    const res = await axios.post(`${baseURL}/auth/register`, formData);
    const data = res.data;
    return data;
}

export const login = async (formData) => {
    const res = await axios.post(`${baseURL}/auth/login`, formData);
    return res;
}

// export const uploadOneProduct = async (formData) => {
// const res = await axios.post('http://localhost:3000/user/upload/bulk', formData);
// const data = res.data;
// return data;
// }

export { getSellerData };