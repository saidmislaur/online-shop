import axios from 'axios';

const API_URL = 'https://2b26ecac1f0a88c3.mokky.dev/products';

export const getProducts = async () => {
  try {
    return await axios.get(`${API_URL}`);
  } catch (error) {
    console.error('Error fetching products:', error);
    throw error;
  }
};
