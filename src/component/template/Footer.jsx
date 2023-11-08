import { Box, Typography } from "@mui/material"
import React from "react"
import LogoIcon from "../icon/Logo"
import Loading from "./Loading"
const thisYear = new Date().getFullYear()

const Footer = () => {
    return (
        <Box
            component="footer"
            display="flex"
            padding={4}
            justifyContent="space-between"
            alignItems="center"
            height={120}
            bgcolor="#100"
        >
            <Box display="flex" gap={1} alignItems="center">
                <LogoIcon fontSize="large" />
                <Typography variant="h5" color="white" fontWeight="bold">
                    edutrack.
                </Typography>
            </Box>

            <Typography color="white">&copy; {thisYear} edutech.tech </Typography>
        </Box>
    )
}

export default Footer
