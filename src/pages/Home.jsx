import { Box } from "@mui/material"
import { useAuthState } from "react-firebase-hooks/auth"
import { app, auth } from "../config/firebase"
const Home = () => {
    const [user, loading, error] = useAuthState(auth)
    return <Box>{JSON.stringify(user?.email)}</Box>
}

export default Home
