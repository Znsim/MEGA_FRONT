import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      light: "#FEC200",
      main: "#fff",
      // dark: "#002884",
      contrastText: "#000",
    },
  },
  typography: {
    fontFamily: ["Roboto"].join(","),
  },
});

export default theme;
