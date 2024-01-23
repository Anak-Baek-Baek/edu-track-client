import {
    Avatar,
    Box,
    Checkbox,
    Divider,
    IconButton,
    List,
    ListItem,
    ListItemButton,
    SwipeableDrawer,
    Typography,
} from "@mui/material"
import { useState } from "react"
import { Link, useNavigate, useParams, useSearchParams } from "react-router-dom"
import Skeleton from "@mui/material/Skeleton"
import ExitToAppIcon from "@mui/icons-material/ExitToApp"
import MenuIcon from "@mui/icons-material/Menu"
import ReactPlayer from "react-player"
import Footer from "../component/template/Footer"
import { useAuthState } from "react-firebase-hooks/auth"
import { auth } from "../config/firebase"

import { useGetCourseDetail } from "../hooks/use-api"
import Loading from "../component/template/Loading"
const CourseDetail = () => {
    const [user, loading] = useAuthState(auth)
    if (!user && !loading) {
        navigate("/login")
    }
    const { id } = useParams()
    const { data, isFetching } = useGetCourseDetail(id)
    const [isShow, setIsShow] = useState(false)
    const [isDrawerOpen, setIsDrawerOpen] = useState(false)
    const [searchParams, setSearchParams] = useSearchParams()
    const navigate = useNavigate()
    const currentSection = searchParams.get("section") ?? 0
    const changeSection = index => {
        setSearchParams(params => {
            params.set("section", index)
            return params
        })
    }
    if (isFetching) return <Loading />

    return (
        <>
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
                        {data?.name}
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
                        {isFetching ? (
                            <Skeleton width="inherit" sx={{ aspectRatio: 16 / 9 }} />
                        ) : (
                            <Box
                                sx={{
                                    aspectRatio: 16 / 9,
                                    overflow: "hidden",
                                }}
                            >
                                <ReactPlayer
                                    width="100%"
                                    height="100%"
                                    url={data?.CourseSection[currentSection]?.videoUrl}
                                    controls
                                    config={{
                                        youtube: {
                                            playerVars: { showinfo: 1 },
                                        },
                                    }}
                                />
                            </Box>
                        )}

                        <Typography variant="h5">
                            {data?.CourseSection[currentSection]?.title}
                        </Typography>
                        <Divider />

                        <Box
                            gap={2}
                            sx={{ cursor: "pointer", display: "flex", alignItems: "center" }}
                            onClick={() => navigate(`/lecturer/${data?.lecturer?.id}`)}
                        >
                            <Avatar src={data?.lecturer?.imageUrl} />
                            <Typography variant="h6">{data?.lecturer?.name}</Typography>
                        </Box>
                        <Divider />
                        <Box
                            sx={{
                                maskImage: isShow
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
                                {data?.CourseSection[currentSection]?.description}
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
                    {isFetching ? (
                        <Box display="flex" flexDirection="column" width="full">
                            {Array.from({ length: 4 }).map((_, index) => (
                                <Skeleton width="full" sx={{ aspectRatio: 1 }} key={index} />
                            ))}
                        </Box>
                    ) : (
                        <List
                            sx={{
                                width: "fit-content",
                                display: { xs: "none", lg: "block" },
                                borderLeft: "1px solid GrayText",
                            }}
                        >
                            {data?.CourseSection?.map((section, index) => (
                                <ListItem key={index} disablePadding sx={{ cursor: "pointer" }}>
                                    <ListItemButton onClick={() => changeSection(index)}>
                                        <Checkbox
                                            inputProps={{ "aria-label": "completedIcon" }}
                                            disabled
                                        />
                                        <Typography
                                            sx={{
                                                color:
                                                    Number(currentSection) === index
                                                        ? "black"
                                                        : "GrayText",
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
                    )}
                </Box>
                <Footer />

                {/* tablet drawer */}
                <SwipeableDrawer
                    anchor="left"
                    variant="temporary"
                    open={isDrawerOpen}
                    onClose={() => setIsDrawerOpen(false)}
                    onOpen={() => setIsDrawerOpen(true)}
                    sx={{ width: "50%" }}
                >
                    <List
                        sx={{
                            borderLeft: "1px solid GrayText",
                        }}
                    >
                        {data?.CourseSection?.map((section, index) => (
                            <ListItem key={index} disablePadding sx={{ cursor: "pointer" }}>
                                <ListItemButton
                                    onClick={() => {
                                        changeSection(index)
                                        setIsDrawerOpen(false)
                                    }}
                                >
                                    <Checkbox
                                        inputProps={{ "aria-label": "completedIcon" }}
                                        disabled
                                    />
                                    <Typography
                                        sx={{
                                            color:
                                                Number(currentSection) === index
                                                    ? "black"
                                                    : "GrayText",
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
        </>
    )
}

export default CourseDetail
