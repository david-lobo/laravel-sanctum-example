import axios from "axios";

let Api = axios.create({
  baseURL: "http://localhost:8000/api"
});

Api.defaults.withCredentials = true;
//Api.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

Api.defaults.validateStatus = function (status) {
    return (422 || (status >= 200 && status < 300)); // default
};

export default Api;
