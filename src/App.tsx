// Packages
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

// Pages
import MainPage from "./pages/Main";
import SignUpPage from "./pages/Signup";

function App() {
  return (
    <>
      <React.StrictMode>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/sign-up" element={<SignUpPage />} />
            <Route path="*" element={<h1>404</h1>} />
          </Routes>
        </BrowserRouter>
      </React.StrictMode>
    </>
  );
}

export default App;
