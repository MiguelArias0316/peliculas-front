import axios from "axios";

export const axiosConfig = axios.create({
    baseURL: process.env.BASE_URL_API || 'http://localhost:4000/api/v1'
})
