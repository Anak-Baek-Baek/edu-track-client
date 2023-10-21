import { Search } from "@mui/icons-material"
import { Box, IconButton, InputBase } from "@mui/material"

const SearchBarInput = () => {
    return (
        <Box
            component="form"
            sx={{
                p: "2px 4px",
                display: "flex",
                alignItems: "center",
                width: 400,
                border: "1px solid",
                borderRadius: "3.125rem",
                bgcolor: "white",
                ":hover": { filter: "brightness(.98)" },
                transition: "filter .2s",
            }}
        >
            <IconButton sx={{ p: "10px" }} aria-label="menu">
                <Search />
            </IconButton>
            <InputBase
                sx={{ ml: 1, flex: 1 }}
                placeholder="search courses, teacher ,etc"
                inputProps={{ "aria-label": "search courses, teacher ,etc" }}
            />
        </Box>
    )
}

export default SearchBarInput
