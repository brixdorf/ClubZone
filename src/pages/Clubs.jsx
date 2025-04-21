import React, { useState } from "react";
import Navbar from "../components/Navbar";
import ClubCard from "../components/ClubCard";
import clubsData from "../data/clubs.json";

const Clubs = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredClubs = clubsData.clubs.filter((club) =>
    club.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <main className="relative min-h-screen">
      <div className="relative z-10 mb-0">
        <Navbar />
      </div>
      <img
        src="images/kick.jpg"
        alt="Football Stadium"
        className="absolute inset-0 w-full h-full object-cover"
      />

      <div className="relative z-10 container mx-auto px-4 pt-6 sm:pt-10 pb-12 sm:pb-20">
        <div className="text-center mb-6 sm:mb-10">
          <h1 className="text-4xl sm:text-5xl md:text-5xl font-bold mb-4 sm:mb-6 text-black font-[Montserrat]">
            Football Clubs
          </h1>
          <div className="max-w-md mx-auto px-4">
            <input
              type="text"
              placeholder="Search for a club..."
              className="w-full px-4 py-2 sm:py-3 rounded-full bg-white bg-opacity-90 text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-600 font-[Montserrat]"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredClubs.map((club, index) => (
            <div key={index} className="flex justify-center">
              <ClubCard
                name={club.name}
                crestImage={club.crestImage}
                leagueName={club.leagueName}
                leagueLogo={club.leagueLogo}
                country={club.country}
                countryFlag={club.countryFlag}
              />
            </div>
          ))}
        </div>

        {filteredClubs.length === 0 && (
          <div className="text-center mt-8 sm:mt-10">
            <p className="text-white text-lg sm:text-xl font-medium bg-black py-3 sm:py-4 px-6 sm:px-8 rounded-lg inline-block font-[Montserrat]">
              No clubs found. Try a different search term.
            </p>
          </div>
        )}
      </div>
    </main>
  );
};

export default Clubs;
