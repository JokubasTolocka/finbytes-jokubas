import createTheme from "@mui/material/styles/createTheme";

const colorTheme = createTheme({
  palette: {
    mode: "dark",
    background: {
      default: "#000000",
    },
    primary: {
      main: "#684FA5",
      dark: "#241E29",
      light: "#D1B8FF",
    },
    secondary: {
      main: "#332D32",
      light: "#F7EBF6",
    },
  },
  typography: {
    fontFamily: "Inter",
  },
});

const theme = createTheme(colorTheme, {
  components: {
    MuiInputLabel: {
      styleOverrides: {
        root: {
          "&.Mui-focused": {
            color: "white",
          },
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          variants: [
            {
              props: { variant: "inverse", color: "primary" },
              style: {
                backgroundColor: colorTheme.palette.primary.dark,
                color: colorTheme.palette.primary.light,
              },
            },
          ],
          borderRadius: "50px",
          textTransform: "none",
        },
      },
    },
  },
});

export default theme;
