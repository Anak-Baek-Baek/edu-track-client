import { useQuery, useMutation } from "@tanstack/react-query"
import {
    createLecturer,
    getAllLecturer,
    getLecturerAsUser,
    getLecturerCourses,
    getLecturerDetail,
} from "../api/lecturer"
import {
    getAllCourse,
    getAllCourseByCategory,
    getCourseDetail,
    getSearchCourse,
} from "../api/course"
import { getAllCategory, getDetailCategory } from "../api/category"

export const useGetLecturer = () => {
    return useQuery({
        queryKey: ["lecturer"],
        queryFn: async () => {
            return await getAllLecturer()
        },
    })
}

export const useGetAllCourses = () => {
    return useQuery({
        queryKey: ["course"],
        queryFn: async () => {
            return await getAllCourse()
        },
    })
}

export const useGetCourseDetail = id => {
    return useQuery({
        queryKey: ["course", id],
        queryFn: async () => {
            return await getCourseDetail(id)
        },
    })
}

export const useGetLecturerDetail = id => {
    return useQuery({
        queryKey: ["lecturer", id],
        queryFn: async () => {
            return await getLecturerDetail(id)
        },
    })
}

export const useGetCourseSearch = q => {
    return useQuery({
        queryKey: ["searchCourses", q],
        queryFn: async () => {
            return await getSearchCourse(q)
        },
    })
}

export const useGetLecturerAsUser = () => {
    return useQuery({
        queryKey: ["isLecturer"],
        queryFn: async () => {
            return await getLecturerAsUser()
        },
    })
}

export const useGetLecturerCourses = id => {
    return useQuery({
        queryKey: ["lecturerCourses", id],
        queryFn: async () => {
            return await getLecturerCourses(id)
        },
    })
}

export const useCreateLecturer = () => {
    return useMutation({
        mutationFn: async data => {
            return await createLecturer(data)
        },
    })
}

export const useGetALlCategory = () => {
    return useQuery({
        queryKey: ["categories"],
        queryFn: async () => {
            return await getAllCategory()
        },
    })
}

export const useGetDetailCategory = id => {
    return useQuery({
        queryKey: ["categoriesDetail", id],
        queryFn: async () => {
            return await getDetailCategory(id)
        },
    })
}

export const useGetAllCourseByCategory = id => {
    return useQuery({
        queryKey: ["coursesCategory", id],
        queryFn: async () => {
            return await getAllCourseByCategory(id)
        },
    })
}
