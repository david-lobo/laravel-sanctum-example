import axios from "axios";

let Web = axios.create({
  baseURL: "http://localhost:8000"
});

Web.defaults.withCredentials = true;
//Api.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

Web.defaults.validateStatus = function (status) {
    return (422 || (status >= 200 && status < 300)); // default
};

export default Web;
