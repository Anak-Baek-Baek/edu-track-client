import { Avatar, Box, Divider, Typography } from "@mui/material"
import React from "react"
import { useParams } from "react-router-dom"
import lecturers from "../data/lecturer"
import Grid2 from "@mui/material/Unstable_Grid2/Grid2"
import courses from "../data/data"
import CourseCard from "../component/course/CourseCard"

const LecturerDetail = () => {
    const { name } = useParams()
    const findLecturer = lecturers.find(lecturer => lecturer.name === name)
    const allLecturerCourse = courses.filter(course => course.lecturer.id === findLecturer.id)
    return (
        <Box
            sx={{
                width: "min(95%,1080px)",
                mx: "auto",
                p: 4,
                display: "flex",
                flexDirection: "column",
                gap: 4,
            }}
        >

            <Box
                display="flex"
                alignItems={{ xs: "center", md: "flex-start" }}
                justifyContent={{ xs: "center", md: "flex-start" }}
                flexDirection={{ xs: "column", md: "row" }}
                gap={{ xs: 2, md: 8 }}
            >
                <Avatar src={findLecturer.imageUrl} sx={{ width: "10rem", height: "auto" }} />
                <Box display="flex" flexDirection="column" gap=".5rem">
                    <Typography variant="h4">{name}</Typography>
                    <Typography fontSize="larger">lecturer</Typography>
                </Box>
            </Box>
            <Divider />
            <Box>
                <Typography textTransform="capitalize" fontWeight="700" variant="h5">
                    bio
                </Typography>
                <Typography mt={2}>{findLecturer.bio.trim()}</Typography>
            </Box>
            <Divider />
            <Box>
                <Typography textTransform="capitalize" fontWeight="700" variant="h5">
                    courses
                </Typography>
                <Grid2 mt={2} container columns={12} spacing={4}>
                    {allLecturerCourse.map((course, index) => (

                        <Grid2 xs={12} sm={6} md={4} lg={3} key={index}>

                            <CourseCard
                                custom={index}
                                title={course.name}
                                totalSection={course.totalSections}
                                progressPercent={80}
                                lecturer={course.lecturer.name}
                                imageUrl={course.bacgkroundUrl}
                                id={course.id}
                            />
                        </Grid2>
                    ))}
                </Grid2>
            </Box>
        </Box>
    )
}

export default LecturerDetail
