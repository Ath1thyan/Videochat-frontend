import React from "react";
import { createRoot } from "react-dom/client";
import { ThemeProvider, createTheme } from "@mui/material/styles"; // Correct import
import { ContextProvider } from "./components/SocketContext";
import "./styles.css";
import App from "./App";
// import Footer from "./components/Footer";

const theme = createTheme();
createRoot(document.getElementById('root')).render(
    <ContextProvider>
      <ThemeProvider theme={theme}> {/* Wrapped the App inside ThemeProvider */}
          <App />
      </ThemeProvider>
    </ContextProvider>, 
);
