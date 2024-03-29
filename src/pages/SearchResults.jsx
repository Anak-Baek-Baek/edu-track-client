import { useLocation, useNavigate } from "react-router-dom"
import { Box, Typography, Divider, Button } from "@mui/material"
import Skeleton from "@mui/material/Skeleton"
import Grid2 from "@mui/material/Unstable_Grid2/Grid2"
import CourseCard from "../component/course/CourseCard"
import { useGetCourseSearch } from "../hooks/use-api"

const SearchResults = () => {
    const location = useLocation()
    const searchQuery = new URLSearchParams(location.search).get("q")
    const navigate = useNavigate()
    const { data: searchResults, isFetching } = useGetCourseSearch(searchQuery)

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
            <h1>Search Results for &quot;{searchQuery}&quot;</h1>
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
                    {searchResults?.length > 0 ? (
                        <Grid2 container columns={12} spacing={4}>
                            {searchResults?.map((course, index) => (
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
                            <Typography> No results found for &quot;{searchQuery}&quot;</Typography>
                            <Button onClick={() => navigate("/")}>back</Button>
                        </Box>
                    )}
                </>
            )}

            <Divider />
        </Box>
    )
}

export default SearchResults
