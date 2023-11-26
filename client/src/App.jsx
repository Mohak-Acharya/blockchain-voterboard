import Home from "./screens/Home"; // Importing the Home component
import Navbar from "./components/Navbar"; // Importing the Navbar component

import { ThemeProvider, createTheme } from "@mui/material/styles"; // Importing ThemeProvider and createTheme from Material-UI
import { Routes, Route } from "react-router-dom"; // Importing necessary components from react-router-dom

// Creating a light theme using Material-UI's createTheme
const lightTheme = createTheme({
  palette: {
    mode: "light", // Setting the palette mode to 'light'
  },
});

function App() {
  return (
    <ThemeProvider theme={lightTheme}> {/* Providing the lightTheme using ThemeProvider */}
      <Routes>
        {/* Route for the Home component */}
        <Route path="/" element={<Home />} />
        {/* Route for the Navbar component */}
        <Route path="/*" element={<Navbar />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App; // Exporting the App component as default
