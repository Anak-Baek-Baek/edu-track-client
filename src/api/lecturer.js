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
    const res = await axiosInstance.get(`${baseUrl}/${id}`)

    return res.data.data
}
