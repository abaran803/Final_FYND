import axios from 'axios';

const baseURL = process.env.VUE_APP_BACKEND_URL;

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
    const token = localStorage.getItem('isUserExist');
    const res = await axios.get(`${baseURL}/user/getAllCategories`, {
        headers: {
            Authorization: 'Bearer ' + token //the token is a variable which holds the token
        }
    });
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
    const token = localStorage.getItem('isUserExist');
    const res = await axios.post(`${baseURL}/user/upload/bulk`, formData, {
        headers: {
            Authorization: 'Bearer ' + token //the token is a variable which holds the token
        }
    });
    const data = res.data;
    return data;
}

export const uploadSingleProduct = async (formData) => {
    const token = localStorage.getItem('isUserExist');
    const res = await axios.post(`${baseURL}/user/upload/single`, formData, {
        headers: {
            Authorization: 'Bearer ' + token //the token is a variable which holds the token
        }
    });
    const data = res.data;
    return data;
}

export const getProductDetails = async (id) => {
    const token = localStorage.getItem('isUserExist');
    const res = await axios.get(`${baseURL}/user/getProductById/${id}`, {
        headers: {
            Authorization: 'Bearer ' + token //the token is a variable which holds the token
        }
    });
    const data = res.data;
    return data;
}

export const getProductByCategoryName = async (cat_name) => {
    console.log(cat_name);
    const token = localStorage.getItem('isUserExist');
    const res = await axios.get(`${baseURL}/user/getProductsByCategory/${cat_name}`, {
        headers: {
            Authorization: 'Bearer ' + token //the token is a variable which holds the token
        }
    });
    const data = res.data;
    return data;
}

export const register = async (formData) => {
    const token = localStorage.getItem('isUserExist');
    const res = await axios.post(`${baseURL}/auth/register`, formData, {
        headers: {
            Authorization: 'Bearer ' + token //the token is a variable which holds the token
        }
    });
    const data = res.data;
    return data;
}

export const login = async (formData) => {
    const token = localStorage.getItem('isUserExist');
    const res = await axios.post(`${baseURL}/auth/login`, formData, {
        headers: {
            Authorization: 'Bearer ' + token //the token is a variable which holds the token
        }
    });
    return res;
}

// export const uploadOneProduct = async (formData) => {
// const res = await axios.post('http://localhost:3000/user/upload/bulk', formData);
// const data = res.data;
// return data;
// }

export { getSellerData };