/* eslint-disable react-refresh/only-export-components */
import { lazy } from "react"
import Test from "../pages/Test"

const HomePage = lazy(() => import("../pages/Home"))

const LoginPage = lazy(() => import("../pages/Login"))

const RegisterPage = lazy(() => import("../pages/Register"))

const routes = [
    // home
    { path: "/", component: HomePage },
    // login
    { path: "/login", component: LoginPage },
]

export default routes
