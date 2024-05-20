import axios from 'axios';

const REST_API_URL = "http://localhost:8080/api/cliente";

export const addCliente = (cliente) => axios.post(REST_API_URL, cliente);
export const getCliente = (id) => axios.get(REST_API_URL + "/" + id);
export const getClientes = () => axios.get(REST_API_URL);
export const deleteCliente = (id) => axios.delete(REST_API_URL + "/" + id);
