import axios from 'axios';

const REST_API_URL = "http://localhost:8080/api/clienteslista";

export const clientesLista = () =>
{
    return axios.get(REST_API_URL);
}