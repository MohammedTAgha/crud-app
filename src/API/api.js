import axios from 'axios';

const baseURL = 'https://some-data.onrender.com';

const api = axios.create({
  baseURL,
});

export const getAllStores = async () => {
  try {
    const response = await api.get('/stores');
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getStoreById = async (id) => {
  try {
    const response = await api.get(`/stores/${id}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const createOrUpdateStore = async (storeData) => {
  try {
    if (storeData.id) {
      const response = await api.put(`/stores/${storeData.id}`, storeData);
      return response.data;
    } else {
      const response = await api.post('/stores', storeData);
      return response.data;
    }
  } catch (error) {
    throw error;
  }
};

export const deleteStore = async (id) => {
  try {
    const response = await api.delete(`/stores/${id}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export default api;
