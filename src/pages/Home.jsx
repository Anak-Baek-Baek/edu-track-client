import { Box, Button, Grid, Typography } from "@mui/material"
import CourseCard from "../component/course/CourseCard"
import Grid2 from "@mui/material/Unstable_Grid2/Grid2"
import registerLectureAsset from "../assets/lecturerRegister.gif"
const Home = () => {
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
                    {Array.from(Array(8)).map((_, index) => (
                        <Grid2 xs={12} sm={6} md={4} lg={3} key={index}>
                            <CourseCard
                                title="computer science asdoasdoijosda doasijdoasjodjasoi doasjodasjoij"
                                totalSection={5}
                                progressPercent={80}
                                lecturer="john"
                            />
                        </Grid2>
                    ))}
                </Grid2>
                {/* register lecturer section */}
            </Box>
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
        </>
    )
}

export default Home
