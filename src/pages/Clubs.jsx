import React from "react";
import Navbar from "../components/Navbar";

const Clubs = () => {
  return (
    <main className="relative min-h-screen">
      <div className="relative z-10 mb-0">
        <Navbar/>
      </div>
      <img
        src="images/kick.jpg"
        alt="Football Stadium"
        className="absolute inset-0 w-full h-full object-cover"
      />
    </main>
  );
};

export default Clubs;
