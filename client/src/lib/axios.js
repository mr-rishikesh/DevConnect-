import axios from "axios"
// this is for the connect to backend api 
export const axiosInstance = axios.create({
    baseURL : import.meta.env.MODE === "development" ? "http://localhost:3000" : "/api",
    withCredentials : true 
})