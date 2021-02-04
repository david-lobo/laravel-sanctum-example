import axios from "axios";

const baseURL = process.env.REACT_APP_API_URL;

let Api = axios.create({
  baseURL: baseURL + '/api'
});

Api.defaults.withCredentials = true;
//Api.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

Api.defaults.validateStatus = function (status) {
    return (422 || (status >= 200 && status < 300)); // default
};

export default Api;
