import React from "react"
import ReactDOM from "react-dom/client"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import routes from "./routes"
import { CssBaseline, ThemeProvider } from "@mui/material"
import { theme } from "./lib/mui/theme"

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <BrowserRouter>
                <Routes>
                    {routes.map(({ component, path }, idx) => (
                        <Route path={path} Component={component} key={idx} />
                    ))}
                </Routes>
            </BrowserRouter>
        </ThemeProvider>
    </React.StrictMode>
)
