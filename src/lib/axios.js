import axios from "axios"
import { getAccessToken } from "../api/accessToken"

export const axiosInstance = axios.create({
    baseURL: import.meta.env.VITE_BASE_URL,
})

axiosInstance.interceptors.request.use(
    async config => {
        const token = await getAccessToken()
        if (token) {
            config.headers["Authorization"] = `Bearer ${token}`
        }
        return config
    },
    error => {
        return Promise.reject(error)
    }
)
