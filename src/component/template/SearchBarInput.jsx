import React, { useState } from "react"
import { Close, ExitToAppRounded, Search } from "@mui/icons-material"
import {
    Box,
    IconButton,
    InputBase,
    Paper,
    List,
    ListItem,
    ClickAwayListener,
    Fade,
    Grow,
} from "@mui/material"
import { useNavigate } from "react-router-dom"
import useDebounce from "../../hooks/useDebounce"
import { useGetCourseSearch } from "../../hooks/use-api"

const SearchBarInput = ({ w, onModalClose }) => {
    const navigate = useNavigate()
    const [searchQuery, setSearchQuery] = useState("")
    const { data: coursesData, refetch, isFetching } = useGetCourseSearch(searchQuery)
    const [selectedItem, setSelectedItem] = useState(null)
    const [showAutocomplete, setShowAutocomplete] = useState(false)
    const { debouncedValue, isLoading } = useDebounce(coursesData, 700)
    console.log(coursesData)
    const handleSearch = e => {
        const query = e.target.value.toLowerCase()
        setSearchQuery(query)

        if (query) {
            refetch()
            setSelectedItem(null)
            setShowAutocomplete(true)
        } else {
            setSelectedItem(null)
            setShowAutocomplete(false)
        }
    }

    const handleItemClick = result => {
        setSearchQuery(result.name)
        setSelectedItem(result)
        setShowAutocomplete(false)
        onModalClose && onModalClose()
        navigate(`/search?q=${encodeURIComponent(result.name)}`)
    }

    const handleMouseEnter = result => {
        setSelectedItem(result)
    }

    const handleMouseLeave = () => {
        setSelectedItem(null)
    }

    const handleClickAway = () => {
        setShowAutocomplete(false)
    }

    const renderHighlightedText = (text, query) => {
        const parts = text.split(new RegExp(`(${query})`, "gi"))
        return (
            <p>
                {parts.map((part, index) => (
                    <span
                        key={index}
                        style={{
                            fontWeight:
                                part.toLowerCase() === query.toLowerCase() ? "bold" : "normal",
                        }}
                    >
                        {part}
                    </span>
                ))}
            </p>
        )
    }

    return (
        <Box sx={{ position: "relative" }}>
            <Box
                component="form"
                sx={{
                    p: "2px 4px",
                    display: "flex",
                    alignItems: "center",
                    width: w ?? 600,
                    border: "2px solid #E7E7E7",
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
                    sx={{
                        ml: 1,
                        flex: 1,
                    }}
                    placeholder="Search courses, teacher, etc"
                    inputProps={{
                        "aria-label": "Search courses, teacher, etc",
                        autoComplete: "off",
                    }}
                    onChange={handleSearch}
                    value={searchQuery}
                />
                <IconButton
                    sx={{ p: "10px", display: { xs: "flex", sm: "none" } }}
                    aria-label="menu"
                    onClick={onModalClose}
                >
                    <Close />
                </IconButton>
            </Box>

            <Grow in={showAutocomplete}>
                <Paper
                    elevation={0}
                    sx={{
                        position: "absolute",
                        left: 0,
                        right: 0,
                        mt: 2,
                    }}
                >
                    <ClickAwayListener onClickAway={handleClickAway}>
                        <List>
                            {isFetching && isLoading ? (
                                <ListItem>loading...</ListItem>
                            ) : debouncedValue?.length > 0 && searchQuery ? (
                                <>
                                    {coursesData?.map((result, index) => (
                                        <ListItem
                                            key={index}
                                            onClick={() => handleItemClick(result)}
                                            onMouseEnter={() => handleMouseEnter(result)}
                                            onMouseLeave={handleMouseLeave}
                                            style={{
                                                cursor: "pointer",
                                                background:
                                                    selectedItem === result
                                                        ? "#f0f0f0"
                                                        : "transparent",
                                            }}
                                        >
                                            {renderHighlightedText(result.name, searchQuery)}
                                        </ListItem>
                                    ))}
                                </>
                            ) : (
                                <ListItem>course not found</ListItem>
                            )}
                        </List>
                    </ClickAwayListener>
                </Paper>
            </Grow>
        </Box>
    )
}

export default SearchBarInput
