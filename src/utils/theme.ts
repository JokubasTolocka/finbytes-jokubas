import createTheme from "@mui/material/styles/createTheme";

const theme = createTheme({
  palette: { mode: "dark" },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: "50px",
          textTransform: "none",
        },
      },
    },
  },
});

export default theme;
