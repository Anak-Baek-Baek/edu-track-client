import { Box, Button, Grid, Typography } from "@mui/material"
import CourseCard from "../component/course/CourseCard"
import Grid2 from "@mui/material/Unstable_Grid2/Grid2"
import registerLectureAsset from "../assets/lecturerRegister.gif"
import section2Asset from "../assets/section2.gif"
import LogoIcon from "../component/icon/Logo"
import CategoryCard from "../component/category/CategoryCard"
import categoryAsset from "../assets/category.png"
import courses from "../data/data"
import getRandomCourse from "../utils/getRandomCourse"
import Footer from "../component/template/Footer"
const thisYear = new Date().getFullYear()

const Home = () => {
    const recomendedCourse = getRandomCourse(8)
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
                {/* course cards */}
                <Grid2 container columns={12} spacing={4}>
                    {recomendedCourse.map((course, index) => (
                        <Grid2 xs={12} sm={6} md={4} lg={3} key={index}>
                            <CourseCard
                                title={course.name}
                                totalSection={course.totalSections}
                                progressPercent={80}
                                lecturer={course.lecturer}
                                imageUrl={course.bacgkroundUrl}
                                id={course.id}
                            />
                        </Grid2>
                    ))}
                </Grid2>
            </Box>
            {/* register lecturer section */}

            <Box
                bgcolor="#005B99"
                display="flex"
                padding={4}
                flexDirection={{ xs: "column", md: "row" }}
                gap={10}
                justifyContent="center"
                width="100vw"
            >
                <img src={registerLectureAsset} height="min(50%,450)" />
                <Box
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    flexDirection="column"
                    gap={4}
                >
                    <Typography
                        variant="h4"
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
                {/* category cards */}
                <Grid2 container columns={12} spacing={4}>
                    {Array.from(Array(8)).map((_, index) => (
                        <Grid2 xs={12} sm={6} md={4} lg={3} key={index}>
                            <CategoryCard asset={categoryAsset} />
                        </Grid2>
                    ))}
                </Grid2>
            </Box>
            {/* podcast section */}
            <Box>
                <Box
                    bgcolor="#DBCDEE"
                    display="flex"
                    padding={4}
                    flexDirection={{ xs: "column-reverse", md: "row" }}
                    alignItems="center"
                    gap={10}
                    justifyContent="center"
                    width="100vw"
                >
                    <Box display="flex" justifyContent="center" flexDirection="column" gap={4}>
                        <Typography variant="h4" textTransform="capitalize" fontWeight="bold">
                            Leading Up lifts you up
                        </Typography>
                        <Typography width="50ch">
                            Listen to the edutrack.’s leadership development podcast and grow as a
                            person and professional.
                        </Typography>
                    </Box>
                    <img src={section2Asset} height="min(50%,450)" />
                </Box>
                <Footer />
            </Box>
        </>
    )
}

export default Home
