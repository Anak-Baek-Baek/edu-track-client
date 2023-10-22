/* eslint-disable react/prop-types */
import {
    Box,
    Button,
    Card,
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

const CourseCard = props => {
    const { imageUrl, title, lecturer, totalSection, progressPercent } = props
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
        <Grow in timeout={800} style={{ transformOrigin: "0 0 0" }}>
            <Card
                variant="outlined"
                sx={{
                    padding: "0.625rem",
                    width: "100%",
                    borderRadius: "1rem",
                    border: "1px solid #CFCFCF",
                    bgcolor: "transparent",
                    display: "flex",
                    flexDirection: "column",
                    gap: "1rem",
                }}
            >
                <CardMedia
                    sx={{ height: 160, borderRadius: ".5rem" }}
                    image={imageUrl ?? exampleImage}
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
            </Card>
        </Grow>
    )
}

export default CourseCard
