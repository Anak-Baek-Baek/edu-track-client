import { Box, Button, Typography } from "@mui/material"
import CourseCard from "../component/course/CourseCard"
import Grid2 from "@mui/material/Unstable_Grid2/Grid2"
import registerLectureAsset from "../assets/lecturerRegister.gif"
import section2Asset from "../assets/section2.gif"
import CategoryCard from "../component/category/CategoryCard"
import Skeleton from "@mui/material/Skeleton"
import { useGetALlCategory, useGetAllCourses } from "../hooks/use-api"

import getRandomCourse from "../utils/getRandomCourse"

const Home = () => {
    const { data: allcourses, isFetching: isCourseLoading } = useGetAllCourses()
    const { data: allCategory, isFetching: isCategoryLoading } = useGetALlCategory()
    const courses = getRandomCourse(allcourses, 8)
    return (
        <>
            <Box
                sx={{
                    width: "min(95%,1440px)",
                    mx: "auto",
                    p: 4,
                    display: "flex",
                    flexDirection: "column",
                    gap: 2,
                }}
            >
                <Typography variant="h4" fontWeight="700">
                    learn new thing
                </Typography>
                {/* Course cards */}
                <Grid2 container columns={12} spacing={4}>
                    {isCourseLoading ? (
                        <>
                            {Array.from({ length: 8 })
                                ?.fill(null)
                                .map((_, index) => (
                                    <Grid2 xs={12} sm={6} md={4} lg={3} key={index}>
                                        <Skeleton width="full" sx={{ aspectRatio: 1 }} />
                                    </Grid2>
                                ))}
                        </>
                    ) : (
                        <>
                            {courses?.map((course, index) => (
                                <Grid2 xs={12} sm={6} md={4} lg={3} key={index}>
                                    <CourseCard
                                        custom={index}
                                        title={course.name}
                                        totalSection={course.CourseSection?.length}
                                        progressPercent={80}
                                        lecturer={course.lecturer.name}
                                        backgroundUrl={course.backgroundUrl}
                                        id={course.id}
                                    />
                                </Grid2>
                            ))}
                        </>
                    )}
                </Grid2>
            </Box>

            {/* Register lecturer section */}
            <Box
                bgcolor="#005B99"
                display="flex"
                padding={4}
                flexDirection={{ xs: "column", md: "row" }}
                gap={10}
                justifyContent="center"
                width="100vw"
            >
                <img src={registerLectureAsset} alt="register lecturer" />
                <Box
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    flexDirection="column"
                    gap={4}
                >
                    <Typography
                        variant="h4"
                        textAlign="center"
                        color="#E1E5EA"
                        textTransform="capitalize"
                        fontWeight="bold"
                    >
                        become the instructor
                    </Typography>
                    <Typography textAlign="center" color="#E1E5EA" width="35ch">
                        Instructors from around the world teach millions of learners on edutrack. We
                        provide the tools and skills to teach what you love.
                    </Typography>
                    <Button
                        color="inherit"
                        onClick={() => {
                            window.location.href = import.meta.env.VITE_LECTURER_URL
                        }}
                        variant="contained"
                        fullWidth
                    >
                        register!
                    </Button>
                </Box>
            </Box>

            {/* Top Categories */}
            <Box
                sx={{
                    width: "min(95%,1440px)",
                    mx: "auto",
                    p: 4,
                    display: "flex",
                    flexDirection: "column",
                    gap: 2,
                }}
            >
                <Typography variant="h4" textTransform="capitalize" fontWeight="700">
                    top categories
                </Typography>
                {/* Category cards */}
                <Grid2 container columns={12} spacing={4}>
                    {isCategoryLoading ? (
                        <>
                            {Array.from({ length: 8 })
                                ?.fill(null)
                                .map((_, index) => (
                                    <Grid2 xs={12} sm={6} md={4} lg={3} key={index}>
                                        <Skeleton width="full" sx={{ aspectRatio: 1 }} />
                                    </Grid2>
                                ))}
                        </>
                    ) : (
                        <>
                            {allCategory?.map((category, index) => (
                                <Grid2 xs={12} sm={6} md={4} lg={3} key={index}>
                                    <CategoryCard
                                        name={category.name}
                                        image={category.imageUrl}
                                        id={category.id}
                                    />
                                </Grid2>
                            ))}
                        </>
                    )}
                </Grid2>
            </Box>
            {/* Podcast section */}
            <Box
                bgcolor="#DBCDEE"
                display="flex"
                padding={4}
                flexDirection={{ xs: "column-reverse", md: "row" }}
                gap={10}
                justifyContent="center"
                width="100vw"
            >
                <Box
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    flexDirection="column"
                    gap={4}
                >
                    <Typography
                        variant="h4"
                        textAlign="center"
                        textTransform="capitalize"
                        fontWeight="bold"
                    >
                        Leading Up lifts you up
                    </Typography>
                    <Typography width="30ch" textAlign="center">
                        Listen to the edutrack.’s leadership development podcast and grow as a
                        person and professional.
                    </Typography>
                </Box>
                <img src={section2Asset} height="min(50%,450)" alt="podcast section" />
            </Box>
        </>
    )
}

export default Home
