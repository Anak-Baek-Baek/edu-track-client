import ReactDOM from "react-dom/client"
import { BrowserRouter, Route, Routes } from "react-router-dom"

import { CssBaseline, ThemeProvider } from "@mui/material"
import { theme } from "./lib/mui/theme"
import { SnackbarProvider } from "notistack"
import { Suspense, lazy } from "react"
import Loading from "./component/template/Loading"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"

const HomePage = lazy(() => import("./pages/Home"))
const LoginPage = lazy(() => import("./pages/Login"))
const CourseDetailPage = lazy(() => import("./pages/CourseDetail"))
const ProtectedLayout = lazy(() => import("./layout/ProtectedLayout"))
const RegisterPage = lazy(() => import("./pages/Register"))
const LecturerDetailPage = lazy(() => import("./pages/LecturerDetail"))
const SearchResult = lazy(() => import("./pages/SearchResults"))
const CategoryPage = lazy(() => import("./pages/CategoryPage"))
const LecturerPage = lazy(() => import("./pages/LecturerPage"))

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById("root")).render(
    <Suspense fallback={<Loading />}>
        <QueryClientProvider client={queryClient}>
            <ThemeProvider theme={theme}>
                <SnackbarProvider maxSnack={4}>
                    <CssBaseline />
                    <BrowserRouter>
                        <Routes>
                            <Route path="/" element={<ProtectedLayout />}>
                                <Route index Component={HomePage} />
                                <Route path="lecturer/:id" Component={LecturerDetailPage} />
                                <Route path="search" Component={SearchResult} />
                                <Route path="category/:category" element={<CategoryPage />} />
                                <Route path="lecturer-page" Component={LecturerPage} />
                            </Route>
                            <Route path="/login" Component={LoginPage} />
                            <Route path="/register" Component={RegisterPage} />
                            <Route path="course/:id" Component={CourseDetailPage} />
                        </Routes>
                    </BrowserRouter>
                </SnackbarProvider>
            </ThemeProvider>
        </QueryClientProvider>
    </Suspense>
)
