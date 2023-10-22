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
} from "@mui/material";
import registerAsset from "../assets/register.gif";
import { useState } from "react";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import GoogleIcon from "../component/icon/GoogleIcon";
import { Helmet } from "react-helmet";

const RegisterPage = () => {
    const [showPassword, setShowPassword] = useState(false);

    const handleClickShowPassword = () => setShowPassword(show => !show);

    const handleMouseDownPassword = event => {
        event.preventDefault()
    };

    return (
        <Stack spacing={2} direction="row">
            <Helmet>
                <title>Register</title>
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
                                Register
                            </Typography>
                            <Typography
                                variant="h7"
                                color="GrayText"
                                fontWeight="bold"
                            >
                                welcome to edutrack! create account and start learning
                            </Typography>
                        </Stack>
                        <FormControl variant="outlined">
                            <InputLabel htmlFor="standard-adornment-name">Name</InputLabel>
                            <OutlinedInput
                                id="standard-adornment-name"
                                type="text"
                                label="Name"
                            />
                        </FormControl>
                        <FormControl variant="outlined">
                            <InputLabel htmlFor="standard-adornment-email">Email</InputLabel>
                            <OutlinedInput
                                id="standard-adornment-email"
                                type="email"
                                label="Email"
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
                                    label="Password"
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
                        </Stack>
                        <Button color="secondary" variant="contained" size="large" fullWidth>
                            Register
                        </Button>
                        <Divider>OR</Divider>
                        <Button
                            startIcon={<GoogleIcon />}
                            variant="outlined"
                            color="primary"
                            size="large"
                            fullWidth
                        >
                            Continue with Google
                        </Button>
                        <Box alignSelf="center" display="flex" gap={0.5}>
                            <Typography>Already have an account?</Typography>
                            <Link href="/login" textTransform="capitalize" fontWeight="bold">
                                Login
                            </Link>
                        </Box>
                    </Stack>
                </Fade>
            </Box>
            <Box
                sx={{
                    flex: 1,
                    height: "100vh",
                    bgcolor: "#6A00FF",
                    justifyContent: "center",
                    alignItems: "center",
                }}
                display={{ xs: "none", md: "flex" }}
            >
                <img src={registerAsset} width={450} />
            </Box>
        </Stack>
    );
};

export default RegisterPage
