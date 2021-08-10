import axios from 'axios';

const apiLatitude = axios.create({
    baseURL: "https://maps.googleapis.com/maps/api/geocode/json?address="

});

export default apiLatitude;