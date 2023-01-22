import { createTheme, ThemeProvider } from "@mui/material";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));

const theme = createTheme({
  palette: {
    mode: "dark",
  },
  typography:{
    fontSize:16,
  }
});

root.render(
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>
);
