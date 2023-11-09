import {
    AppBar,
    Box,
    Divider,
    Grid,
    IconButton,
    List,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    Popover,
    Toolbar,
    Typography,
} from "@mui/material"
import LogoIcon from "../icon/Logo"
import SearchBarInput from "./SearchBarInput"
import { useAuthState } from "react-firebase-hooks/auth"
import { auth } from "../../config/firebase"
import Person4Icon from "@mui/icons-material/Person4"
import { useLocation, useNavigate } from "react-router-dom"
import { useState } from "react"
import { Logout, Try } from "@mui/icons-material"
import { signOut } from "firebase/auth"
import { useSnackbar } from "notistack"
const Navbar = () => {
    const [user] = useAuthState(auth)
    const navigate = useNavigate()
    const location = useLocation()
    const { enqueueSnackbar } = useSnackbar()
    const handleNavigate = () => {
        if (location.pathname === "/") return
        navigate("/")
    }
    const [anchorEl, setAnchorEl] = useState(null)

    const handleClick = event => {
        setAnchorEl(event.currentTarget)
    }

    const handleClose = () => {
        setAnchorEl(null)
    }

    const handleSignOut = async () => {
        try {
            await signOut(auth)
            enqueueSnackbar("success log out", {
                variant: "success",
                anchorOrigin: { horizontal: "right", vertical: "top" },
                autoHideDuration: 2000,
            })
        } catch (error) {
            console.log(error.message)
        }
    }

    const open = Boolean(anchorEl)
    const id = open ? "open-popover" : undefined
    return (
        <AppBar
            component="nav"
            position="sticky"
            color="transparent"
            sx={{
                boxShadow: "none",
                borderBottom: "1px solid #E7E7E7",
                bgcolor: "background.default",
            }}
        >
            <Toolbar sx={{ padding: 3, justifyContent: "space-between" }}>
                <Box
                    display="flex"
                    gap={1}
                    alignItems="center"
                    sx={{ cursor: "pointer" }}
                    onClick={handleNavigate}
                >
                    <LogoIcon fontSize="large" />
                    <Typography variant="h5" fontWeight="bold">
                        edutrack.
                    </Typography>
                </Box>
                <SearchBarInput />
                <Box display="flex" gap={1} alignItems="center">
                    <Typography variant="p">student</Typography>
                    <Divider orientation="vertical" flexItem />
                    <IconButton
                        aria-label="profile"
                        color="inherit"
                        size="large"
                        onClick={handleClick}
                    >
                        {user?.photoURL ? (
                            <Grid
                                sx={{
                                    placeItems: "center",
                                    aspectRatio: 1,
                                    borderRadius: 100,
                                    overflow: "hidden",
                                }}
                            >
                                <img src={user?.photoURL} style={{ width: 32 }} />
                            </Grid>
                        ) : (
                            <Person4Icon sx={{ fontSize: 32 }} />
                        )}
                    </IconButton>
                    <Popover
                        id={id}
                        open={open}
                        anchorEl={anchorEl}
                        onClose={handleClose}
                        anchorOrigin={{
                            vertical: "bottom",
                            horizontal: "left",
                        }}
                    >
                        <List
                            sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
                            aria-labelledby="nested-list-subheader"
                        >
                            <ListItemButton onClick={handleSignOut}>
                                <ListItemIcon>
                                    <Logout />
                                </ListItemIcon>
                                <ListItemText primary="log out" />
                            </ListItemButton>
                        </List>
                    </Popover>
                </Box>
            </Toolbar>
        </AppBar>
    )
}

export default Navbar
