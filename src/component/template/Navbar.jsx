import { AppBar, Box, Divider, Grid, IconButton, Toolbar, Typography } from "@mui/material"
import LogoIcon from "../icon/Logo"
import SearchBarInput from "./SearchBarInput"
import { useAuthState } from "react-firebase-hooks/auth"
import { auth } from "../../config/firebase"
import Person4Icon from "@mui/icons-material/Person4"
import { useNavigate } from "react-router-dom"
import Loading from "./Loading"
const Navbar = () => {
    const [user] = useAuthState(auth)
    const navigate = useNavigate()
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
                    onClick={() => navigate("/")}
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
                    <IconButton aria-label="profile" color="inherit" size="large">
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
                </Box>
            </Toolbar>
        </AppBar>
    )
}

export default Navbar
