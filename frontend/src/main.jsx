import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import "@fontsource/poppins/400.css";
import "@fontsource/poppins/800.css";
import "@fontsource/poppins/600.css";
import "@fontsource/poppins/800-italic.css";
import "@fontsource/manrope/600.css";

import "@fontsource-variable/manrope";
import "@fontsource/pacifico";
import "./index.css";
import App from "./App.jsx";
import { Provider } from "react-redux";
import { store } from "./store/app/store.js";
import { ThemeProvider, CssBaseline } from "@mui/material";
import { theme } from "./theme/index.js";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <App />
      </ThemeProvider>
    </Provider>
  </StrictMode>
);
