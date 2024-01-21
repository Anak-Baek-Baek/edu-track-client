import { axiosInstance } from "../lib/axios"

const baseUrl = `/api/v1/lecturer`

export const getAllLecturer = async () => {
    const res = await axiosInstance.get(baseUrl)
    return res.data
}

/**
 * Get details of a lecturer.
 *
 * @param {string} id - The ID of the lecturer.
 * @returns {Promise<{
 *   id: string;
 *   name: string;
 *   bio: string | null;
 *   createdAt: Date;
 *   updatedAt: Date;
 *   pictureUrl:string | null
 *   Course:Course[]
 * }>} Lecturer detail.
 */
export const getLecturerDetail = async id => {
    const res = await axiosInstance.get(`${baseUrl}/detail/${id}`)

    return res.data.data
}

export const getLecturerAsUser = async () => {
    const res = await axiosInstance.get(`${baseUrl}/asUser`)
    return res.data.data
}

export const createLecturer = async data => {
    try {
        const res = await axiosInstance.post(`${baseUrl}`, data)
        return res.data
    } catch (error) {
        throw error.message
    }
}

export const getLecturerCourses = async id => {
    const res = await axiosInstance.get(`${baseUrl}/detail/${id}/courses`)
    return res.data.data
}
