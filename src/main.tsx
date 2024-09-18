import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import ThemeProvider from "@mui/material/styles/ThemeProvider";
import theme from "./utils/theme.ts";
import CssBaseline from "@mui/material/CssBaseline/CssBaseline";
import { SecurityProvider } from "./contexts/Trade/TradeProvider.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <SecurityProvider>
        <App />
      </SecurityProvider>
      <CssBaseline />
    </ThemeProvider>
  </StrictMode>
);
