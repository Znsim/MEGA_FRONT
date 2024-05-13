import React from "react";
import ReactDOM from "react-dom/client";
import { NavermapsProvider } from "react-naver-maps";
import App from "./App.jsx";
import { CssBaseline } from "@mui/material";
import { NAVER_CLIENT_ID } from "./constants.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <CssBaseline />
    <NavermapsProvider ncpClientId={`${NAVER_CLIENT_ID}`}>
      <App />
    </NavermapsProvider>
  </React.StrictMode>
);
