import axios from "axios";

export const axiosConfig = axios.create({
    baseURL: process.env.BASE_URL_API || 'https://peliculas-back.onrender.com/api/v1'
/*     baseURL: process.env.BASE_URL_API || '//localhost:4000/api/v1' */
})
