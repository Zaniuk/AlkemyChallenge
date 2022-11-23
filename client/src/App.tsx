import React from "react";
import Router from "./Router";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import UserProvider from "./context/UserProvider";
const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <UserProvider>
        <Router />
      </UserProvider>
    </ThemeProvider>
  );
}

export default App;
