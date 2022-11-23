import axios from "axios"

axios.interceptors.request.use(
    function (config) {

        config.headers.Authorization = sessionStorage.getItem("token")
        config.baseURL = `http://localhost`
        return config
    },
    function (error) {
        return Promise.reject(error);
    }
)
//eslint-disable-next-line
export default {
    get: axios.get,
    post: axios.post,
    put: axios.put,
    delete: axios.delete
}