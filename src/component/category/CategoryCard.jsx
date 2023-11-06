import { Box, Typography } from "@mui/material"
import React from "react"

const CategoryCard = ({ asset }) => {
    return (
        <Box
            display="flex"
            flexDirection="column"
            sx={{
                ":hover p": { fontWeight: 700 },
                ":hover div": {
                    boxShadow: "rgba(0, 0, 0, 0.16) 0px 1px 4px",
                    filter: "brightness(0.985)",
                    transform: "scale(1.1)",
                },
                cursor: "pointer",
            }}
            gap={2}
            alignItems="center"
        >
            <Box
                bgcolor="white"
                sx={{
                    boxShadow:
                        "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px",

                    transition: "all .3s",
                    transform: "scale(1)",
                }}
                borderRadius={8}
                width="min-content"
            >
                <img src={asset} height={200} />
            </Box>
            <Typography sx={{ transition: "font-weight .2s" }}>design</Typography>
        </Box>
    )
}

export default CategoryCard
