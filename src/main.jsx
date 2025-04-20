import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { FavouriteProvider } from "./context/FavouriteContext.jsx";
import "./index.css";
import App from "./App.jsx";
import Clubs from "./pages/Clubs.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <FavouriteProvider>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/clubs" element={<Clubs />} />
        </Routes>
      </FavouriteProvider>
    </BrowserRouter>
  </StrictMode>
);