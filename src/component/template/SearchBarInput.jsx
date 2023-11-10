import React, { useState } from "react"
import { Search } from "@mui/icons-material"
import {
    Box,
    IconButton,
    InputBase,
    Paper,
    List,
    ListItem,
    ClickAwayListener,
} from "@mui/material"
import courses from "../../data/data"
import { useNavigate } from "react-router-dom"
import useDebounce from "../../hooks/useDebounce"

const SearchBarInput = () => {
    const navigate = useNavigate()
    const [searchResults, setSearchResults] = useState([])
    const [searchQuery, setSearchQuery] = useState("")
    const [selectedItem, setSelectedItem] = useState(null)
    const [showAutocomplete, setShowAutocomplete] = useState(false)
    const { debouncedValue, isLoading } = useDebounce(searchResults, 700)
    const handleSearch = e => {
        const query = e.target.value.toLowerCase()
        setSearchQuery(query)

        if (query) {
            const filteredResults = courses
                .filter(course => course.name.toLowerCase().includes(query))
                .slice(0, 10)

            setSearchResults(filteredResults)
            setSelectedItem(null)
            setShowAutocomplete(true)
        } else {
            setSearchResults([])
            setSelectedItem(null)
            setShowAutocomplete(false)
        }
    }

    const handleItemClick = result => {
        setSearchQuery(result.name)
        setSelectedItem(result)
        setShowAutocomplete(false)
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
                    width: 400,
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
            </Box>
            <Paper
                elevation={0}
                sx={{
                    position: "absolute",
                    display: showAutocomplete ? "block" : "none",
                    left: 0,
                    right: 0,
                    mt: 2,
                }}
            >
                <ClickAwayListener onClickAway={handleClickAway}>
                    <List>
                        {isLoading ? (
                            <ListItem>loading...</ListItem>
                        ) : debouncedValue.length > 0 && searchQuery ? (
                            <>
                                {debouncedValue.map((result, index) => (
                                    <ListItem
                                        key={index}
                                        onClick={() => handleItemClick(result)}
                                        onMouseEnter={() => handleMouseEnter(result)}
                                        onMouseLeave={handleMouseLeave}
                                        style={{
                                            cursor: "pointer",
                                            background:
                                                selectedItem === result ? "#f0f0f0" : "transparent",
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
        </Box>
    )
}

export default SearchBarInput
