import ReactDOM from "react-dom/client"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import routes from "./routes"
import { CssBaseline, ThemeProvider } from "@mui/material"
import { theme } from "./lib/mui/theme"
import { SnackbarProvider } from "notistack"

ReactDOM.createRoot(document.getElementById("root")).render(
    <ThemeProvider theme={theme}>
        <SnackbarProvider maxSnack={4}>
            <CssBaseline />
            <BrowserRouter>
                <Routes>
                    {routes.map(({ component, path }, idx) => (
                        <Route path={path} Component={component} key={idx} />
                    ))}
                </Routes>
            </BrowserRouter>
        </SnackbarProvider>
    </ThemeProvider>
)
