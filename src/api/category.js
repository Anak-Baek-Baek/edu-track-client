import { axiosInstance } from "../lib/axios"

const BASE_URL = `api/v1/category`

export const getAllCategory = async () => {
    try {
        const res = await axiosInstance.get(BASE_URL)

        return res.data.data
    } catch (error) {
        throw error.message
    }
}

export const getDetailCategory = async id => {
    try {
        const res = await axiosInstance.get(`${BASE_URL}/detail/${id}`)
        return res.data.data
    } catch (error) {
        throw error.message
    }
}
