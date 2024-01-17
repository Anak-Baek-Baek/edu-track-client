import { Navigate, Outlet } from "react-router-dom"
import { auth } from "../config/firebase"
import { Box } from "@mui/material"
import Navbar from "../component/template/Navbar"
import { useAuthState } from "react-firebase-hooks/auth"
import Footer from "../component/template/Footer"

const ProtectedLayout = () => {
    const [user, loading] = useAuthState(auth)

    if (!user && !loading) {
        return <Navigate to="/login" replace />
    }
    return (
        <Box minHeight="100vh" display="flex" flexDirection="column">
            <Navbar />
            <Box component="main">
                <Outlet />
            </Box>
            <Footer />
        </Box>
    )
}

export default ProtectedLayout
