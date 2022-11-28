import axios from 'axios';

const baseURL = 'http://localhost:3000';

const getSellerData = async (sellerId) => {
    const data = await axios.get(`${baseURL}/user/seller/${sellerId}`);
    return data;
}

export const getAllCategories = async () => {
    const res = await axios.get(`${baseURL}/user/getAllCategories`);
    const data = res.data;
    return data;
}

export const searchProducts = async (query) => {
    const res = await axios.get(`${baseURL}/user/productsByName/` + query);
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

// export const uploadOneProduct = async (formData) => {
    // const res = await axios.post('http://localhost:3000/user/upload/bulk', formData);
    // const data = res.data;
    // return data;
// }

export {getSellerData};