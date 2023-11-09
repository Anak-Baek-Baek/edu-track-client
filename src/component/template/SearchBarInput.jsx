import React, { useState } from "react";
import { Search } from "@mui/icons-material";
import {
  Box,
  IconButton,
  InputBase,
  Paper,
  Popper,
  List,
  ListItem,
  ClickAwayListener,
} from "@mui/material";
import courses from "../../data/data";
import { useNavigate } from "react-router-dom";

const SearchBarInput = () => {
  const navigate = useNavigate();
  const [searchResults, setSearchResults] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedItem, setSelectedItem] = useState(null);
  const [showAutocomplete, setShowAutocomplete] = useState(false);

  const handleSearch = (e) => {
    const query = e.target.value.toLowerCase();
    setSearchQuery(query);

    if (query) {
      const filteredResults = courses.filter((course) =>
        course.name.toLowerCase().includes(query)
      ).slice(0, 10);

      setSearchResults(filteredResults);
      setSelectedItem(null);
      setShowAutocomplete(true);
    } else {
      setSearchResults([]);
      setSelectedItem(null);
      setShowAutocomplete(false);
    }
  };

  const handleItemClick = (result) => {
    setSearchQuery(result.name);
    setSelectedItem(result);
    setShowAutocomplete(false);
    navigate(`/search?q=${encodeURIComponent(result.name)}`);
  };

  const handleMouseEnter = (result) => {
    setSelectedItem(result);
  };

  const handleMouseLeave = () => {
    setSelectedItem(null);
  };

  const handleClickAway = () => {
    setShowAutocomplete(false);
  };

  const renderHighlightedText = (text, query) => {
    const parts = text.split(new RegExp(`(${query})`, "gi"));
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
    );
  };

  return (
    <div style={{ position: "relative" }}>
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
          id="search-input"
          sx={{
            ml: 1,
            flex: 1,
          }}
          placeholder="Search courses, teacher, etc"
          inputProps={{ "aria-label": "Search courses, teacher, etc", autocomplete: "off" }}
          onChange={handleSearch}
          value={searchQuery}
        />
      </Box>

      <Popper open={showAutocomplete} anchorEl={document.getElementById("search-input")}>
        <Paper style={{ width: 400, textAlign: "center" }}
        sx={{zIndex: "1000"}}>
          <ClickAwayListener onClickAway={handleClickAway}>
            {searchResults.length > 0 ? (
              <List>
                {searchResults.map((result, index) => (
                  <ListItem
                    key={index}
                    onClick={() => handleItemClick(result)}
                    onMouseEnter={() => handleMouseEnter(result)}
                    onMouseLeave={handleMouseLeave}
                    style={{
                      cursor: "pointer",
                      background: selectedItem === result ? "#f0f0f0" : "transparent",
                    }}
                  >
                    {renderHighlightedText(result.name, searchQuery)}
                  </ListItem>
                ))}
              </List>
            ) : (
              <p>course not found</p>
            )}
          </ClickAwayListener>
        </Paper>
      </Popper>
    </div>
  );
};

export default SearchBarInput;
