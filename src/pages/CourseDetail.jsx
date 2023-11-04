import { Box, IconButton, List, ListItem, ListItemButton, Typography } from "@mui/material"
import React from "react"
import { Link, useParams } from "react-router-dom"
import courses from "../data/data"
import LogoIcon from "../component/icon/Logo"
import ExitToAppIcon from "@mui/icons-material/ExitToApp"
import ReactPlayer from "react-player"
const CourseDetail = () => {
    const { id } = useParams()
    const data = courses?.find(course => course.id === Number(id))
    return (
        <Box sx={{ minHeight: "100vh" }} display="flex" flexDirection="column">
            {/* header */}
            <Box
                component="header"
                display="flex"
                alignItems="center"
                gap={4}
                padding={4}
                bgcolor="rgba(5, 3, 8, 1)"
            >
                {/* logo */}
                <Box display="flex" gap={1} alignItems="center">
                    <Link to="/">
                        <LogoIcon fontSize="large" />
                        <Typography variant="h5" color="white" fontWeight="bold">
                            edutrack.
                        </Typography>
                    </Link>
                </Box>
                {/* judul course */}
                <Typography variant="h6" color="white">
                    {data.name}
                </Typography>
                {/* tombol exit */}
                <IconButton aria-label="exit" color="success" sx={{ ml: "auto" }}>
                    <ExitToAppIcon sx={{ color: "white" }} fontSize="large" />
                </IconButton>
            </Box>
            <Box display="flex" gap={4} sx={{ flex: 1 }}>
                {/* sidebar */}
                <List sx={{ width: "fit-content", borderRight: "1px solid" }}>
                    {data.section.map((section, index) => (
                        <ListItem key={index} disablePadding>
                            <ListItemButton>{section.title}</ListItemButton>
                        </ListItem>
                    ))}
                </List>
                {/* main content */}

                <Box
                    sx={{
                        flex: 1,
                        padding: 4,
                        overflow: "hidden",
                    }}
                >
                    <Box sx={{ aspectRatio: 16 / 9, width: 3 / 4 }}>
                        <ReactPlayer
                            width="100%"
                            height="100%"
                            url={data.section[0].videoUrl}
                            controls
                            config={{
                                youtube: {
                                    playerVars: { showinfo: 1 },
                                },
                            }}
                        />
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}

export default CourseDetail
