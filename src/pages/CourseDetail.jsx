import {
    Avatar,
    Box,
    Checkbox,
    Divider,
    Drawer,
    IconButton,
    List,
    ListItem,
    ListItemButton,
    SwipeableDrawer,
    Typography,
} from "@mui/material"
import { useState } from "react"
import { Link, useParams, useSearchParams } from "react-router-dom"
import courses from "../data/data"

import ExitToAppIcon from "@mui/icons-material/ExitToApp"
import MenuIcon from "@mui/icons-material/Menu"
import ReactPlayer from "react-player"
import Footer from "../component/template/Footer"
const CourseDetail = () => {
    const { id } = useParams()
    const data = courses?.find(course => course.id === Number(id))
    const [isShow, setIsShow] = useState(false)
    const [isDrawerOpen, setIsDrawerOpen] = useState(false)
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
                padding={2}
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
                <IconButton
                    sx={{ display: { xs: "block", lg: "none" } }}
                    aria-label="open drawer"
                    onClick={() => setIsDrawerOpen(true)}
                >
                    <MenuIcon sx={{ color: "white" }} />
                </IconButton>
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
                    <Box display="flex" alignItems="center" gap={2}>
                        <Avatar src={data.lecturer.imageUrl} />
                        <Typography variant="h6">{data.lecturer.name}</Typography>
                    </Box>
                    <Divider />
                    <Box
                        sx={{
                            "mask-image": isShow
                                ? ""
                                : "linear-gradient(180deg, rgba(0, 0, 0, 1), transparent 100%)",
                        }}
                        overflow="hidden"
                    >
                        <Typography
                            variant="body1"
                            fontSize="larger"
                            maxHeight={isShow ? "fit-content" : "3rem"}
                        >
                            {data.section[currentSection].description}
                        </Typography>
                    </Box>
                    <Box
                        display="flex"
                        justifyContent="center"
                        width="100%"
                        height={36}
                        sx={{ cursor: "pointer" }}
                        onClick={() => setIsShow(prev => !prev)}
                    >
                        <Typography variant="body1" fontSize="larger">
                            tampilkan lebih {isShow ? "sedikit" : "banyak"}
                        </Typography>
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

            {/* tablet drawer */}
            <SwipeableDrawer
                anchor="left"
                variant="temporary"
                open={isDrawerOpen}
                onClose={() => setIsDrawerOpen(false)}
                sx={{ width: "50%" }}
            >
                <List
                    sx={{
                        borderLeft: "1px solid GrayText",
                    }}
                >
                    {data.section.map((section, index) => (
                        <ListItem key={index} disablePadding sx={{ cursor: "pointer" }}>
                            <ListItemButton
                                onClick={() => {
                                    changeSection(index)
                                    setIsDrawerOpen(false)
                                }}
                            >
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
            </SwipeableDrawer>
        </Box>
    )
}

export default CourseDetail
