import { useParams } from "react-router-dom";
import { Box, Typography, Divider, Button } from "@mui/material";
import courses from "../data/data";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import CourseCard from "../component/course/CourseCard";
import { useNavigate } from "react-router-dom";

const CategoryPage = () => {
  const { category } = useParams();
  const navigate = useNavigate();

  const filteredCourses = courses.filter(
    (course) => course.category.toLowerCase() === category.toLowerCase()
  );

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
        {category} Courses
      </Typography>
      <Divider />
      {filteredCourses.length > 0 ? (
        <Grid2 container columns={12} spacing={4}>
          {filteredCourses.map((course, index) => (
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
      ) : (
        <Box display="flex" flexDirection="column" gap={2} alignItems="center">
          <Typography>No courses found for {category}</Typography>
          <Button onClick={() => navigate("/")}>Back to Home</Button>
        </Box>
      )}
      <Divider />
    </Box>
  );
};

export default CategoryPage;
