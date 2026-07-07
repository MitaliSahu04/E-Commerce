import axios from "axios";

const BASE_URL = "https://api.escuelajs.co/api/v1/products";

export const getProducts = async (filters= {}) => {
    console.log(filters)
  try {

    const response = await axios.get(BASE_URL, {
      params: filters,
    });
    console.log(response.config.url);
console.log(response.config.params);

    return response.data;
  } catch (error) {
    console.log(error);
  }
};