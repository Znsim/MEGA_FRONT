import React from "react";
import ReactDOM from "react-dom/client";
import { NavermapsProvider } from "react-naver-maps";
import App from "./App.jsx";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { NAVER_CLIENT_ID } from "./constants.jsx";
import { GlobalStyled } from "./GlobalStyled.jsx";
import theme from "./Muistyle";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <GlobalStyled />
    <CssBaseline />
    <ThemeProvider theme={theme}>
      <NavermapsProvider ncpClientId={`${NAVER_CLIENT_ID}`}>
        <App />
      </NavermapsProvider>
    </ThemeProvider>
  </React.StrictMode>
);
