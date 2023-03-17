import { useState } from "react";
import { ThemeProvider } from "styled-components";
import themes from "./themes/schema.json";
import { GlobalStyles } from "./themes/globalStyles";
import { Route, Routes } from "react-router-dom";
import Page from "./page";
import Navbar from "./components/Navbar";
const App = () => {
  const [theme, setTheme] = useState(themes.light);
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Navbar setTheme={setTheme} />
      <Routes>
        <Route path="/*" element={<Page />} />
      </Routes>
    </ThemeProvider>
  );
};

export default App;
