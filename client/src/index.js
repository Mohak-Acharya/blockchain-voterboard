import ReactDOM from "react-dom/client"; // Importing the ReactDOM library
import React from "react"; // Importing the React library

import { BrowserRouter } from "react-router-dom"; // Importing BrowserRouter from react-router-dom

import "./index.css"; // Importing a CSS file named index.css
import App from "./App"; // Importing the main App component

// Create a root to render the React application
const root = ReactDOM.createRoot(document.getElementById("root")); // Creating a root using ReactDOM.createRoot method

// Rendering the main App component wrapped in React.StrictMode and BrowserRouter
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App /> {/* Rendering the main App component */}
    </BrowserRouter>
  </React.StrictMode>
);
