/* eslint-disable react/prop-types */
import {
    Box,
    Button,
    Card,
    CardActionArea,
    CardActions,
    CardContent,
    CardMedia,
    Grow,
    IconButton,
    LinearProgress,
    Typography,
} from "@mui/material"
import exampleImage from "../../assets/example.jpg"
import { MenuBook } from "@mui/icons-material"
import { useEffect, useState } from "react"
import "./courseCard.css"
import { Link } from "react-router-dom"
const CourseCard = props => {
    const { imageUrl, title, lecturer, totalSection, progressPercent, id } = props
    const [progress, setProgress] = useState(0)

    useEffect(() => {
        const timer = setInterval(() => {
            setProgress(progressPercent)
        }, 1000)

        return () => {
            clearInterval(timer)
        }
    }, [])
    return (
        <Card
            variant="outlined"
            className="fade-in"
            sx={{
                padding: "0.625rem",
                width: "100%",
                borderRadius: "1rem",
                border: "1px solid #CFCFCF",
                bgcolor: "transparent",
                display: "flex",
                flexDirection: "column",
                gap: "1rem",
                cursor: "pointer",
                transition: "transform 0.3s, box-shadow 0.3s",

                ":hover": {
                    transform: "scale(1.025)",
                    boxShadow: "rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px",
                },
            }}
        >
            <CardActionArea LinkComponent={Link} to={`course/${id}`}>
                <CardMedia
                    sx={{ height: 160, borderRadius: ".5rem" }}
                    image={imageUrl || exampleImage}
                    title="green iguana"
                />
                <CardContent sx={{ padding: 0, display: "flex", flexDirection: "column", gap: 2 }}>
                    <Box>
                        <Typography variant="h5" noWrap textTransform="capitalize" fontWeight="700">
                            {title}
                        </Typography>
                        <Typography variant="body2" fontSize="small">
                            {lecturer}
                        </Typography>
                    </Box>
                    <Box sx={{ display: "flex", alignItems: "center", gap: ".3rem" }}>
                        <IconButton
                            sx={{ borderRadius: 100, padding: 0.6, border: "1.2px solid #6A00FF" }}
                        >
                            <MenuBook color="secondary" fontSize="small" />
                        </IconButton>
                        <Typography variant="p" fontSize="larger">
                            {totalSection > 1
                                ? `${totalSection} sections`
                                : `${totalSection} section`}
                        </Typography>
                    </Box>
                    <Box display="flex" flexDirection="column" gap={1}>
                        <LinearProgress
                            variant="determinate"
                            value={progress}
                            sx={{ borderRadius: 100, height: 8 }}
                            color={
                                progress < 30
                                    ? "info"
                                    : progress < 70
                                    ? "primary"
                                    : progress < 100
                                    ? "success"
                                    : "inherit"
                            }
                        />
                        <Typography variant="p" fontSize="larger">
                            {progress}% completed
                        </Typography>
                    </Box>
                </CardContent>
            </CardActionArea>
        </Card>
    )
}

export default CourseCard
