import React from "react";
import { useLocation } from "react-router-dom";
import Navbar from "../component/template/Navbar";
import { Box, Typography, List, ListItem, ListItemText } from "@mui/material";
import LogoIcon from "../component/icon/Logo";
const thisYear = new Date().getFullYear();

const SearchResults = () => {
  const location = useLocation();
  const searchQuery = new URLSearchParams(location.search).get("q");

  const courses = [
    { id: 1, name: "Course 1" },
    { id: 2, name: "Course 2" },
  ];

  const searchResults = courses.filter((course) =>
    course.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      <Navbar />
      <h1>Search Results for "{searchQuery}"</h1>
      <hr style={{marginLeft: 200, marginRight: 200, marginBottom: 50}}/>
      {searchResults.length > 0 ? (
        <List>
          {searchResults.map((result) => (
            <ListItem key={result.id}>
              <ListItemText primary={result.name} />
            </ListItem>
          ))}
        </List>
      ) : (
        <p style={{ textAlign: "center", marginTop: "30px" }}>
          No results found for "{searchQuery}"
        </p>
      )}
      <hr style={{marginLeft: 200, marginRight: 200, marginTop: 50, marginBottom: 50}}/>
      <hr style={{marginLeft: 200, marginRight: 200, marginTop: 50, marginBottom: 50}}/>
      <Box
        bgcolor="#100"
        padding={4}
        component="footer"
        height="100%"
        color={"white"}
      >
        <Box display={"flex"} marginRight="20px">
          <Box component="ul" style={{ listStyleType: "none", padding: 0}}>
            <li>Teach on edutrack.</li>
            <li>About us</li>
            <li>Contact us</li>
            <li>Blog</li>
          </Box>
          <Box component="ul" style={{ listStyleType: "none", marginLeft: 50}}>
            <li>Help and Support</li>
            <li>Terms</li>
            <li>Privacy policy</li>
            <li>Cookie settings</li>
          </Box>
        </Box>
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          height={120}
        >
          <Box display="flex" gap={1} alignItems="center">
            <LogoIcon fontSize="large" />
            <Typography variant="h5" color="white" fontWeight="bold">
              edutrack.
            </Typography>
          </Box>
          <Typography color="white">&copy; {thisYear} edutech.tech </Typography>
        </Box>
      </Box>
    </div>
  );
};

export default SearchResults;
