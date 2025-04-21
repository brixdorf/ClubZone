import React from "react";
import Navbar from "../components/Navbar";
import { useFavourites } from "../context/FavouriteContext";
import clubsData from "../data/clubs.json";
import ClubCard from "../components/ClubCard";
import { Link } from "react-router-dom";

const Favourites = () => {
  const { favourites } = useFavourites();

  const favouriteClubs = clubsData.clubs.filter((club) =>
    favourites.includes(club.name)
  );

  return (
    <main className="relative min-h-screen">
      <div className="relative z-10">
        <Navbar />
      </div>
      <img
        src="images/stadium_celebration.jpg"
        alt="Football Stadium Celebration"
        className="absolute inset-0 w-full h-full object-cover"
      />

      <div className="relative z-10 container mx-auto px-6 py-12">
        <div className="flex justify-center mb-8">
          <h1 className="text-5xl font-bold text-white font-[Montserrat] bg-black py-2 px-8 rounded inline-block">
            My Favourite Clubs
          </h1>
        </div>

        {favouriteClubs.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {favouriteClubs.map((club, index) => (
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
        ) : (
          <div className="bg-white bg-opacity-90 rounded-lg p-8 max-w-2xl mx-auto text-center">
            <div className="text-6xl mb-4">💔</div>
            <h2 className="text-2xl font-bold mb-4 font-[Montserrat] text-gray-800">
              No Favourite Clubs Yet
            </h2>
            <p className="text-gray-600 mb-6 font-[Montserrat]">
              You haven't added any clubs to your favourites list yet. Visit the
              clubs page and click the heart icon on any club card to add it to
              your favourites.
            </p>
            <Link
              to="/clubs"
              className="inline-block px-6 py-3 bg-indigo-600 text-white rounded-full hover:bg-indigo-700 transition duration-300 font-[Montserrat]"
            >
              Explore Clubs
            </Link>
          </div>
        )}
      </div>
    </main>
  );
};

export default Favourites;
