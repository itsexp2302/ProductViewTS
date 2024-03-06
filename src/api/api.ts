import axios from 'axios';
const baseURL = '/data.json';

export const fetchProducts = async () => {
    try {
        const response = await axios.get('./data.json');
        return response.data;
      } catch (error) {
        throw new Error('Error fetching products');
      }
};

export const addProduct = async (productData: any) => {
  const response = await axios.post(`${baseURL}`, productData);
  return response.data;
};
