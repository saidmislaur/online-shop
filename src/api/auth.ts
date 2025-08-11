import axios from 'axios';

const API_URL = 'https://2b26ecac1f0a88c3.mokky.dev/';

export const register = async (userData: object) => {
  try {
    return await axios.post(`${API_URL}/users`, userData);
  } catch (error) {
    console.error('ошибка при регистрации', error);
  }
};

export const getUser = async () => {
  try {
    return await axios.get(`${API_URL}/users`);
  } catch (error) {
    console.error('Ошибка в получении списка пользователей', error);
  }
};
