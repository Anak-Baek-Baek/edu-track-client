import { createTheme } from "@mui/material"

export const theme = createTheme({
    palette: {
        background: {
            default: "rgba(254, 249, 239, 1)",
        },
        accent: {
            main: "rgba(162, 210, 255, 1)",
            light: "rgba(212, 234, 255, 1)",
            dark: "rgba(147, 191, 232, 1)",
        },
    },

    typography: {
        fontFamily: [
            "Poppins",
            "-apple-system",
            "BlinkMacSystemFont",
            '"Segoe UI"',
            "Roboto",
            '"Helvetica Neue"',
            "Arial",
            "sans-serif",
            '"Apple Color Emoji"',
            '"Segoe UI Emoji"',
            '"Segoe UI Symbol"',
        ].join(","),
        fontSize: 12,
    },

    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    textTransform: "capitalize",
                    boxShadow: "none",
                    borderRadius: "0.9375rem",
                    fontWeight: 600,
                    fontSize: 14,
                },
            },
            variants: [
                {
                    props: { variant: "contained", color: "accent" },
                    style: {
                        border: `2px solid #7395B5`,
                        boxShadow: "none",
                        ":hover": {
                            boxShadow: "none",
                        },
                    },
                },
            ],
        },
        MuiOutlinedInput: {
            styleOverrides: {
                root: {
                    "& .MuiOutlinedInput-notchedOutline": {
                        borderWidth: "2px", // Increase the border width
                    },
                },
            },
        },
    },
})