import axios from "axios";
const api = import.meta.env.VITE_GraphQl_Server

const axiosGraphQl = axios.create({
    baseURL:String(api),
    // headers:{'Content-Type':'application/json'}
})

export default axiosGraphQl