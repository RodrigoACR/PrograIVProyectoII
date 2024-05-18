import axios from 'axios';

const REST_API_URL = "http://localhost:8080/api/cliente";

export const getClientes = () => axios.get(REST_API_URL);
