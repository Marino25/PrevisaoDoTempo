import axios from 'axios';

const api = axios.create({
    baseURL: 'https://apitempo.inmet.gov.br/condicao/capitais/'

});

export default api;