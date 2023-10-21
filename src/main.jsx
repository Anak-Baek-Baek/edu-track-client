import ReactDOM from "react-dom/client"
import { BrowserRouter, Route, Routes } from "react-router-dom"

import { CssBaseline, ThemeProvider } from "@mui/material"
import { theme } from "./lib/mui/theme"
import { SnackbarProvider } from "notistack"
import { Suspense, lazy } from "react"
import ProtectedLayout from "./layout/ProtectedLayout"

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
                        </Route>
                        <Route path="/login" Component={LoginPage} />
                    </Routes>
                </BrowserRouter>
            </SnackbarProvider>
        </ThemeProvider>
    </Suspense>
)
