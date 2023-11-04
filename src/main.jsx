import ReactDOM from "react-dom/client"
import { BrowserRouter, Route, Routes } from "react-router-dom"

import { CssBaseline, ThemeProvider } from "@mui/material"
import { theme } from "./lib/mui/theme"
import { SnackbarProvider } from "notistack"
import { Suspense, lazy } from "react"
import ProtectedLayout from "./layout/ProtectedLayout"
import RegisterPage from "./pages/Register"
import CourseDetail from "./pages/CourseDetail"

const HomePage = lazy(() => import("./pages/Home"))
const LoginPage = lazy(() => import("./pages/Login"))

ReactDOM.createRoot(document.getElementById("root")).render(
    <Suspense fallback={<h1>loading...</h1>}>
        <ThemeProvider theme={theme}>
            <SnackbarProvider maxSnack={4}>
                <CssBaseline />
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<ProtectedLayout />}>
                            <Route index Component={HomePage} />
                            <Route path="course/:id" Component={CourseDetail} />
                        </Route>
                        <Route path="/login" Component={LoginPage} />
                        <Route path="/register" Component={RegisterPage} />
                    </Routes>
                </BrowserRouter>
            </SnackbarProvider>
        </ThemeProvider>
    </Suspense>
)
