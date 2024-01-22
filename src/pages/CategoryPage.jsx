import { useParams } from "react-router-dom"
import { Box, Typography, Divider, Button } from "@mui/material"
import Grid2 from "@mui/material/Unstable_Grid2/Grid2"
import CourseCard from "../component/course/CourseCard"
import { useNavigate } from "react-router-dom"
import { useGetAllCourseByCategory, useGetDetailCategory } from "../hooks/use-api"
import Skeleton from "@mui/material/Skeleton"
const CategoryPage = () => {
    const { category } = useParams()

    const navigate = useNavigate()
    const { data: filteredCourses, isFetching } = useGetAllCourseByCategory(category)
    const { data: categoryData } = useGetDetailCategory(category)
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
                {categoryData?.name} Courses
            </Typography>
            <Divider />
            {isFetching ? (
                <Grid2 container columns={12} spacing={4}>
                    {Array.from({ length: 8 })
                        ?.fill(null)
                        .map((_, index) => (
                            <Grid2 xs={12} sm={6} md={4} lg={3} key={index}>
                                <Skeleton width="full" sx={{ aspectRatio: 1 }} />
                            </Grid2>
                        ))}
                </Grid2>
            ) : (
                <>
                    {filteredCourses?.length > 0 ? (
                        <Grid2 container columns={12} spacing={4}>
                            {filteredCourses?.map((course, index) => (
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
                        </Grid2>
                    ) : (
                        <Box display="flex" flexDirection="column" gap={2} alignItems="center">
                            <Typography>
                                {" "}
                                No results found for &quot;{categoryData?.name}&quot;
                            </Typography>
                            <Button onClick={() => navigate("/")}>back</Button>
                        </Box>
                    )}
                </>
            )}
            <Divider />
        </Box>
    )
}

export default CategoryPage
