import { useEffect, useState } from "react"
import { Box, Button, Grid, Typography } from "@mui/material"
import CourseCard from "../component/course/CourseCard"
import Grid2 from "@mui/material/Unstable_Grid2/Grid2"
import registerLectureAsset from "../assets/lecturerRegister.gif"
import section2Asset from "../assets/section2.gif"
import CategoryCard from "../component/category/CategoryCard"
import design from "../assets/design.png"
import development from "../assets/development.png"
import marketing from "../assets/marketing.png"
import selfdev from "../assets/selfDevelopment.png"
import business from "../assets/business.png"
import photography from "../assets/photography.png"
import music from "../assets/music.png"
import finance from "../assets/finance.png"
import courses from "../data/data"
import getRandomCourse from "../utils/getRandomCourse"
import Footer from "../component/template/Footer"
import Profile from "../component/profile/Profile"
import { useQuery } from "@tanstack/react-query"
import { getAllLecturer } from "../api/lecturer"
import { useAuthState } from "react-firebase-hooks/auth"
import { auth } from "../config/firebase"
import { useGetAllCourses, useGetLecturer } from "../hooks/use-api"

const Home = () => {
    const recommendedCourse = getRandomCourse(8)

    const { data: allcourses } = useGetAllCourses()

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
                <Profile />
                {/* Course cards */}
                <Grid2 container columns={12} spacing={4}>
                    {allcourses?.map((course, index) => (
                        <Grid2 xs={12} sm={6} md={4} lg={3} key={index}>
                            <CourseCard
                                custom={index}
                                title={course.name}
                                totalSection={course.CourseSection?.length}
                                progressPercent={80}
                                lecturer={course.lecturer.name}
                                imageUrl={course.bacgkroundUrl}
                                id={course.id}
                            />
                        </Grid2>
                    ))}
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
                    <Button color="inherit" variant="contained" fullWidth>
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
                    <Grid2 xs={12} sm={6} md={4} lg={3}>
                        <CategoryCard name="Design" image={design} />
                    </Grid2>
                    <Grid2 xs={12} sm={6} md={4} lg={3}>
                        <CategoryCard name="Development" image={development} />
                    </Grid2>
                    <Grid2 xs={12} sm={6} md={4} lg={3}>
                        <CategoryCard name="Marketing" image={marketing} />
                    </Grid2>
                    <Grid2 xs={12} sm={6} md={4} lg={3}>
                        <CategoryCard name="Self Development" image={selfdev} />
                    </Grid2>
                    <Grid2 xs={12} sm={6} md={4} lg={3}>
                        <CategoryCard name="Business" image={business} />
                    </Grid2>
                    <Grid2 xs={12} sm={6} md={4} lg={3}>
                        <CategoryCard name="Photography" image={photography} />
                    </Grid2>
                    <Grid2 xs={12} sm={6} md={4} lg={3}>
                        <CategoryCard name="Music" image={music} />
                    </Grid2>
                    <Grid2 xs={12} sm={6} md={4} lg={3}>
                        <CategoryCard name="Finance & Accounting" image={finance} />
                    </Grid2>
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
