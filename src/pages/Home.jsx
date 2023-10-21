import { Box, Typography } from "@mui/material"
import CourseCard from "../component/course/CourseCard"
import Grid2 from "@mui/material/Unstable_Grid2/Grid2"

const Home = () => {
    return (
        <Box
            sx={{
                width: "min(95%,1080px)",
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
            <Grid2 container spacing={4}>
                {Array.from(Array(8)).map((_, index) => (
                    <Grid2 xs={12} sm={4} lg={3} key={index}>
                        <CourseCard />
                    </Grid2>
                ))}
            </Grid2>
        </Box>
    )
}

export default Home
