import  axios from "axios";

const ApiManager = axios.create({
    baseURL: 'http://localhost:8080/api',
    responseType: 'json',
    withCredentials: true,
});

// const ApiManager = axios.create({
//     baseURL: 'http://54.242.54.140:8080/api',
//     responseType: 'json',
//     withCredentials: true,
// });


export default ApiManager;