import axios from "axios"

export const axiosInstance = axios.create({
    baseURL: "https://grupo15-api.herokuapp.com/"
});