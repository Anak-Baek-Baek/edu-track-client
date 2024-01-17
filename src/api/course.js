import { axiosInstance } from "../lib/axios"

const BASE_URL = `api/v1/course`

export const getAllCourse = async () => {
    try {
        const res = await axiosInstance.get(BASE_URL)
        return res.data.data
    } catch (error) {
        throw error.message
    }
}

export const getCourseDetail = async id => {
    try {
        const res = await axiosInstance.get(`${BASE_URL}/detail/${id}`)
        return res.data.data
    } catch (error) {
        throw error.message
    }
}

export const getSearchCourse = async q => {
    try {
        const res = await axiosInstance.get(`${BASE_URL}/search`, {
            params: { q },
        })
        return res.data.data
    } catch (error) {
        throw error.message
    }
}
