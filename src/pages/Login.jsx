import {
    Box,
    Button,
    Divider,
    Fade,
    FormControl,
    FormHelperText,
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
import { useForm } from "react-hook-form"
import { GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth"
import { auth, googleProvider } from "../config/firebase"
import { useSnackbar } from "notistack"
import { useNavigate } from "react-router-dom"

const LoginPage = () => {
    const [showPassword, setShowPassword] = useState(false)
    const handleClickShowPassword = () => setShowPassword(show => !show)
    const { enqueueSnackbar } = useSnackbar()

    const handleMouseDownPassword = event => {
        event.preventDefault()
    }

    const navigate = useNavigate()

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        mode: "onBlur",
    })

    const onSubmit = async ({ email, password }) => {
        try {
            await signInWithEmailAndPassword(auth, email, password)
            enqueueSnackbar("success login", {
                variant: "success",
                anchorOrigin: { horizontal: "right", vertical: "top" },
                autoHideDuration: 2000,
            })
            setTimeout(() => {
                navigate("/")
            })
        } catch (error) {
            enqueueSnackbar("email or password is wrong", {
                variant: "error",
                anchorOrigin: { horizontal: "right", vertical: "top" },
                autoHideDuration: 2000,
            })
        }
    }

    const handleGoogleLogin = async () => {
        try {
            const res = await signInWithPopup(auth, googleProvider)
            const credential = GoogleAuthProvider.credentialFromResult(res)
            if (credential) {
                navigate("/")
            }
        } catch (error) {
            console.log(error)
        }
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
                    <Stack
                        component="form"
                        onSubmit={handleSubmit(onSubmit)}
                        sx={{ width: "min(80%,480px)", mx: "auto" }}
                        spacing={4}
                    >
                        <Stack spacing={1}>
                            <Typography variant="h3" fontWeight="800">
                                Login
                            </Typography>
                            <Typography variant="h6" color="GrayText" fontWeight="bold">
                                welcome back to edutrack!
                            </Typography>
                        </Stack>
                        <FormControl variant="outlined">
                            <InputLabel htmlFor="email">Email</InputLabel>
                            <OutlinedInput
                                id="email"
                                {...register("email", {
                                    required: {
                                        value: true,
                                        message: "email wajib diisi",
                                    },
                                })}
                                type="email"
                                label="email"
                            />
                            {errors.email ? (
                                <FormHelperText sx={{ color: "red", ml: 0 }}>
                                    {errors.email.message}
                                </FormHelperText>
                            ) : null}
                        </FormControl>
                        <Stack spacing={1}>
                            <FormControl variant="outlined">
                                <InputLabel htmlFor="password">Password</InputLabel>
                                <OutlinedInput
                                    id="password"
                                    type={showPassword ? "text" : "password"}
                                    label="password"
                                    {...register("password", {
                                        pattern: {
                                            value: /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-])/,
                                            message:
                                                "Password harus memiliki 1 huruf besar,1 angka dan 1 simbol",
                                        },
                                        required: { message: "password is required" },
                                    })}
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
                                {errors.password ? (
                                    <FormHelperText sx={{ color: "red", ml: 0 }}>
                                        {errors.password.message}
                                    </FormHelperText>
                                ) : null}
                            </FormControl>
                        </Stack>
                        <Button
                            color="secondary"
                            type="submit"
                            variant="contained"
                            size="large"
                            sx={{ borderRadius: 100 }}
                            fullWidth
                        >
                            login
                        </Button>
                        <Divider>OR</Divider>
                        <Button
                            onClick={handleGoogleLogin}
                            startIcon={<GoogleIcon />}
                            variant="outlined"
                            color="primary"
                            size="large"
                            fullWidth
                            sx={{ borderRadius: 100 }}
                        >
                            login with google
                        </Button>
                        <Box alignSelf="center" display="flex" gap={0.5}>
                            <Typography>dont have a account?</Typography>
                            <Link href="/register" textTransform="capitalize" fontWeight="bold">
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
                    bgcolor: "secondary.main",
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
