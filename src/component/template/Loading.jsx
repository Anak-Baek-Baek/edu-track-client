import { Box } from "@mui/material"
import loadingAnimation from "../../assets/loading.svg"
const Loading = () => {
    return (
        <Box display="grid" sx={{ placeItems: "center", width: "100vw", height: "100vh" }}>
            <img src={loadingAnimation} width={300} />
        </Box>
    )
}

export default Loading
