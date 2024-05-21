import axios from 'axios';

const REST_API_URL = "http://localhost:8080/api/producto";

export const addProducto = (producto) => axios.post(REST_API_URL, producto);
export const getProducto = (id) => axios.get(REST_API_URL + "/" + id);
export const getProductos = () => axios.get(REST_API_URL);
export const deleteProducto = (id) => axios.delete(REST_API_URL + "/" + id);
