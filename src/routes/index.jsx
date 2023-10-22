/* eslint-disable react-refresh/only-export-components */
import { lazy } from "react"

const HomePage = lazy(() => import("../pages/Home"))

const LoginPage = lazy(() => import("../pages/Login"))

const RegisterPage = lazy(() => import("../pages/Register"))

const routes = [
    // home
    { path: "/", component: HomePage },
    // login
    { path: "/login", component: LoginPage },
    // register
    { path: "/register", component: RegisterPage },
]

export default routes
