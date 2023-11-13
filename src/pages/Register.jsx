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
import registerAsset from "../assets/register.gif"
import { useState } from "react"
import { Visibility, VisibilityOff } from "@mui/icons-material"
import GoogleIcon from "../component/icon/GoogleIcon"
import { Helmet } from "react-helmet"
import { useForm } from "react-hook-form"
import { GoogleAuthProvider, createUserWithEmailAndPassword, signInWithPopup } from "firebase/auth"
import { auth, googleProvider } from "../config/firebase"
import { enqueueSnackbar } from "notistack"
import { useNavigate } from "react-router-dom"

const RegisterPage = () => {
    const [showPassword, setShowPassword] = useState(false)

    const handleClickShowPassword = () => setShowPassword(show => !show)

    const handleMouseDownPassword = event => {
        event.preventDefault()
    }

    const navigate = useNavigate()

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()

    const onSubmit = async ({ email, password }) => {
        try {
            await createUserWithEmailAndPassword(auth, email, password)
            enqueueSnackbar("success register", {
                variant: "success",
                anchorOrigin: { horizontal: "right", vertical: "top" },
                autoHideDuration: 2000,
            })
            setTimeout(() => {
                navigate("/login")
            }, 500)
        } catch (error) {
            enqueueSnackbar("failed to register", {
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
                    <Stack
                        component="form"
                        onSubmit={handleSubmit(onSubmit)}
                        sx={{ width: "min(80%,480px)", mx: "auto" }}
                        spacing={4}
                    >
                        <Stack spacing={1}>
                            <Typography variant="h3" fontWeight="800">
                                Register
                            </Typography>
                            <Typography variant="h7" color="GrayText" fontWeight="bold">
                                welcome to edutrack! create account and start learning
                            </Typography>
                        </Stack>

                        <FormControl variant="outlined">
                            <InputLabel htmlFor="email">Email</InputLabel>
                            <OutlinedInput
                                {...register("email", {
                                    required: { message: "email wajib diisi" },
                                })}
                                type="email"
                                label="email"
                            />
                            {errors.email ? (
                                <FormHelperText>{errors.email.message}</FormHelperText>
                            ) : (
                                ""
                            )}
                        </FormControl>
                        <Stack spacing={1}>
                            <FormControl variant="outlined">
                                <InputLabel htmlFor="password">Password</InputLabel>
                                <OutlinedInput
                                    type={showPassword ? "text" : "password"}
                                    required
                                    {...register("password", {
                                        pattern: {
                                            value: /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-])/,
                                            message:
                                                "Password harus memiliki 1 huruf besar dan 1 simbol",
                                        },
                                        required: { message: "password is required" },
                                    })}
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
                            Register
                        </Button>
                        <Divider>OR</Divider>
                        <Button
                            startIcon={<GoogleIcon />}
                            variant="outlined"
                            color="primary"
                            size="large"
                            sx={{ borderRadius: 100 }}
                            fullWidth
                            onClick={handleGoogleLogin}
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
    )
}

export default RegisterPage
