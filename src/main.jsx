import ReactDOM from "react-dom/client"
import { BrowserRouter, Route, Routes } from "react-router-dom"

import { CssBaseline, ThemeProvider } from "@mui/material"
import { theme } from "./lib/mui/theme"
import { SnackbarProvider } from "notistack"
import { Suspense, lazy } from "react"
import Loading from "./component/template/Loading"

const HomePage = lazy(() => import("./pages/Home"))
const LoginPage = lazy(() => import("./pages/Login"))
const CourseDetailPage = lazy(() => import("./pages/CourseDetail"))
const ProtectedLayout = lazy(() => import("./layout/ProtectedLayout"))
const RegisterPage = lazy(() => import("./pages/Register"))
const LecturerDetailPage = lazy(() => import("./pages/LecturerDetail"))

ReactDOM.createRoot(document.getElementById("root")).render(
    <Suspense fallback={<Loading />}>
        <ThemeProvider theme={theme}>
            <SnackbarProvider maxSnack={4}>
                <CssBaseline />
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<ProtectedLayout />}>
                            <Route index Component={HomePage} />
                            <Route path="lecturer/:name" Component={LecturerDetailPage} />
                        </Route>
                        <Route path="/login" Component={LoginPage} />
                        <Route path="/register" Component={RegisterPage} />
                        <Route path="course/:id" Component={CourseDetailPage} />
                    </Routes>
                </BrowserRouter>
            </SnackbarProvider>
        </ThemeProvider>
    </Suspense>
)
