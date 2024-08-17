import { AxiosInstance } from "./AxiosInstance";
import { endpoint } from "./EndPoint";

export const fetchuser = async () => {
  try {
    const { data } = await AxiosInstance.get(`${endpoint.getalluser}`);
    return data;
  } catch (error) {
    throw error;
  }
};

export const getProductById = async (id) => {
  try {
    const response = await AxiosInstance.get(`${endpoint.getProductById(id)}`);
    return response.data;
  } catch (error) {
    console.log("Error fetching products:", error);
    return null;
  }
};

