import { Box, Grid, Typography } from "@mui/material"
import CourseCard from "../component/course/CourseCard"
import Grid2 from "@mui/material/Unstable_Grid2/Grid2"
const Home = () => {
    return (
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
        </Box>
    )
}

export default Home
