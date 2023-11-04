import {
    Box,
    Checkbox,
    Divider,
    IconButton,
    List,
    ListItem,
    ListItemButton,
    Typography,
} from "@mui/material"
import React from "react"
import { Link, useParams, useSearchParams } from "react-router-dom"
import courses from "../data/data"

import ExitToAppIcon from "@mui/icons-material/ExitToApp"
import ReactPlayer from "react-player"
import Footer from "../component/template/Footer"
const CourseDetail = () => {
    const { id } = useParams()
    const data = courses?.find(course => course.id === Number(id))
    const [searchParams, setSearchParams] = useSearchParams()
    const currentSection = searchParams.get("section") ?? 0
    const changeSection = index => {
        setSearchParams(params => {
            params.set("section", index)
            return params
        })
    }
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
                {/* <Box display="flex" gap={1} alignItems="center">
                    <Link to="/">
                        <LogoIcon fontSize="large" />
                        <Typography variant="h5" color="white" fontWeight="bold">
                            edutrack.
                        </Typography>
                    </Link>
                </Box> */}
                {/* judul course */}
                <Typography variant="h6" color="white">
                    {data.name}
                </Typography>
                {/* tombol exit */}
                <IconButton
                    aria-label="exit"
                    color="success"
                    sx={{ ml: "auto" }}
                    LinkComponent={Link}
                    to="/"
                >
                    <ExitToAppIcon sx={{ color: "white" }} fontSize="large" />
                </IconButton>
            </Box>
            <Box display="flex" gap={4} width="min(90%,2440px)" mx="auto" sx={{ flex: 1 }}>
                {/* main content */}
                <Box
                    sx={{
                        flex: 1,
                        display: "flex",
                        gap: 2,
                        flexDirection: "column",
                        overflow: "hidden",
                        p: 2,
                    }}
                >
                    <Box
                        sx={{
                            aspectRatio: 16 / 9,
                            overflow: "hidden",
                        }}
                    >
                        <ReactPlayer
                            width="100%"
                            height="100%"
                            url={data.section[currentSection].videoUrl}
                            controls
                            config={{
                                youtube: {
                                    playerVars: { showinfo: 1 },
                                },
                            }}
                        />
                    </Box>
                    <Typography variant="h5">{data.section[currentSection].title}</Typography>
                    <Divider />
                    <Typography variant="body1">
                        {data.section[currentSection].description}
                    </Typography>
                    <Divider />
                    <Box>
                        <Typography variant="h3">about lecturer</Typography>
                    </Box>
                </Box>
                {/* sidebar */}
                <List
                    sx={{
                        width: "fit-content",
                        display: { xs: "none", lg: "block" },
                        borderLeft: "1px solid GrayText",
                    }}
                >
                    {data.section.map((section, index) => (
                        <ListItem key={index} disablePadding sx={{ cursor: "pointer" }}>
                            <ListItemButton onClick={() => changeSection(index)}>
                                <Checkbox inputProps={{ "aria-label": "completedIcon" }} disabled />
                                <Typography
                                    sx={{
                                        color:
                                            Number(currentSection) === index ? "black" : "GrayText",
                                        transition: "all .2s",
                                        ":hover": {
                                            color: "black",
                                        },
                                        display: "-webkit-box",
                                        " -webkit-line-clamp": 2,
                                        " -webkit-box-orient": "vertical",
                                        overflow: "hidden",
                                        width: "30ch",
                                    }}
                                >
                                    {section.title}
                                </Typography>
                            </ListItemButton>
                        </ListItem>
                    ))}
                </List>
            </Box>
            <Footer />
        </Box>
    )
}

export default CourseDetail
