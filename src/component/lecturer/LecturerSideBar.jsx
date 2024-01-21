import { AccountCircle, Bookmark, Inbox } from "@mui/icons-material"
import { Typography } from "@mui/material"
import Box from "@mui/material/Box"
import { useGetLecturerAsUser } from "../../hooks/use-api"
import List from "@mui/material/List"
import ListItem from "@mui/material/ListItem"
import ListItemButton from "@mui/material/ListItemButton"
import ListItemIcon from "@mui/material/ListItemIcon"
import ListItemText from "@mui/material/ListItemText"
const LecturerSideBar = () => {
    const { data: lecturerDetail } = useGetLecturerAsUser()
    return (
        <Box flex={1} display="flex" flexDirection="column" gap={2} p={4} borderRight="1px solid">
            <Box
                border="1px solid"
                display="flex"
                width="100%"
                borderRadius="8px"
                gap={2}
                justifyContent="center"
                padding={4}
                alignItems="center"
            >
                <AccountCircle fontSize="large" />
                <Typography variant="h6">{lecturerDetail?.name}</Typography>
            </Box>
            <Box>
                <Typography textAlign="center" color="GrayText" fontWeight="bold">
                    main menu
                </Typography>
                <List>
                    <ListItem>
                        <ListItemButton>
                            <ListItemIcon>
                                <Bookmark />
                            </ListItemIcon>
                            <ListItemText
                                style={{
                                    fontWeight: "bold",
                                    textTransform: "capitalize",
                                    fontSize: "2rem",
                                }}
                                primary="courses"
                            />
                        </ListItemButton>
                    </ListItem>
                </List>
            </Box>
        </Box>
    )
}

export default LecturerSideBar
