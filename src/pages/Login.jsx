import {
    Box,
    Button,
    Divider,
    Fade,
    FormControl,
    IconButton,
    InputAdornment,
    InputLabel,
    Link,
    OutlinedInput,
    Stack,
    Typography,
} from "@mui/material"
import loginAsset from "../assets/login.gif"
import { useState } from "react"
import { Visibility, VisibilityOff } from "@mui/icons-material"
import GoogleIcon from "../component/icon/GoogleIcon"
import { Helmet } from "react-helmet"

const LoginPage = () => {
    const [showPassword, setShowPassword] = useState(false)

    const handleClickShowPassword = () => setShowPassword(show => !show)

    const handleMouseDownPassword = event => {
        event.preventDefault()
    }

    return (
        <Stack spacing={2} direction="row">
            <Helmet>
                <title>login</title>
            </Helmet>
            <Box
                sx={{
                    flex: 1,
                    display: "grid",
                    placeItems: "center",
                    minHeight: "100vh",
                }}
            >
                <Fade in timeout={800}>
                    <Stack sx={{ width: "min(80%,480px)", mx: "auto" }} spacing={4}>
                        <Stack spacing={1}>
                            <Typography variant="h3" fontWeight="800">
                                Login
                            </Typography>
                            <Typography
                                variant="h6"
                                color="GrayText"
                                fontWeight="
                    bold"
                            >
                                welcome back to edutrack!
                            </Typography>
                        </Stack>
                        <FormControl variant="outlined">
                            <InputLabel htmlFor="standard-adornment-password">Email</InputLabel>
                            <OutlinedInput
                                id="standard-adornment-email"
                                type="email"
                                label="email"
                            />
                        </FormControl>
                        <Stack spacing={1}>
                            <FormControl variant="outlined">
                                <InputLabel htmlFor="standard-adornment-password">
                                    Password
                                </InputLabel>
                                <OutlinedInput
                                    id="standard-adornment-password"
                                    type={showPassword ? "text" : "password"}
                                    label="password"
                                    endAdornment={
                                        <InputAdornment position="end">
                                            <IconButton
                                                aria-label="toggle password visibility"
                                                onClick={handleClickShowPassword}
                                                onMouseDown={handleMouseDownPassword}
                                            >
                                                {showPassword ? <VisibilityOff /> : <Visibility />}
                                            </IconButton>
                                        </InputAdornment>
                                    }
                                />
                            </FormControl>
                            <Link
                                href="/"
                                alignSelf="self-end"
                                textTransform="capitalize"
                                fontWeight="bold"
                            >
                                forgot password?
                            </Link>
                        </Stack>
                        <Button color="accent" variant="contained" size="large" fullWidth>
                            login
                        </Button>
                        <Divider>OR</Divider>
                        <Button
                            startIcon={<GoogleIcon />}
                            variant="outlined"
                            color="primary"
                            size="large"
                            fullWidth
                        >
                            login with google
                        </Button>
                        <Box alignSelf="center" display="flex" gap={0.5}>
                            <Typography>dont have a account?</Typography>
                            <Link href="/" textTransform="capitalize" fontWeight="bold">
                                sign up
                            </Link>
                        </Box>
                    </Stack>
                </Fade>
            </Box>
            <Box
                sx={{
                    flex: 1,
                    height: "100vh",
                    bgcolor: "#EAF3FF",
                    justifyContent: "center",
                    alignItems: "center",
                }}
                display={{ xs: "none", md: "flex" }}
            >
                <img src={loginAsset} width={450} />
            </Box>
        </Stack>
    )
}

export default LoginPage
