import axios from 'axios';

const apiCapitals = axios.create({
    baseURL: 'https://apitempo.inmet.gov.br/condicao/capitais/'

});

export default apiCapitals;