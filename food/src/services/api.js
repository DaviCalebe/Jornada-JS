import axios from "axios";

const URL_SERVER = "http://localhost:5173/";

const api = axios.create({
    baseURL: URL_SERVER
});

export default api;