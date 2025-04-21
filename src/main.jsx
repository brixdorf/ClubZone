import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { FavouriteProvider } from "./context/FavouriteContext.jsx";
import "./index.css";
import App from "./App.jsx";
import Clubs from "./pages/Clubs.jsx";
import ClubDetails from "./pages/ClubDetails";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <FavouriteProvider>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/clubs" element={<Clubs />} />
          <Route path="/clubs/:clubName" element={<ClubDetails />} />
        </Routes>
      </FavouriteProvider>
    </BrowserRouter>
  </StrictMode>
);
