import axios from 'axios';

const apiCity = axios.create({
    baseURL: 'https://api.tutiempo.net/json'

});

export default apiCity;