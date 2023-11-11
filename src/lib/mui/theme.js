import { createTheme, responsiveFontSizes } from "@mui/material"

export const theme = responsiveFontSizes(
    createTheme({
        palette: {
            secondary: {
                main: "#6A00FF",
            },
            background: {
                default: "rgba(245, 249, 255, 1)",
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
            allVariants: {
                color: "rgba(5, 3, 8, 1)",
            },
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
)
