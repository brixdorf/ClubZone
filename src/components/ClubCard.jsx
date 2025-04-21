import React from "react";
import { Link } from "react-router-dom";
import { useFavourites } from "../context/FavouriteContext";

const ClubCard = ({
  name,
  crestImage,
  leagueName,
  leagueLogo,
  country,
  countryFlag,
}) => {
  const { toggleFavourite, isFavourite } = useFavourites();
  const fav = isFavourite(name);

  return (
    <div className="w-full max-w-[280px] bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
      <div className="bg-black text-white font-[Montserrat] p-3 flex items-center justify-center space-x-3 rounded-t-lg font-bold">
        <span>{country}</span>
        <img src={countryFlag} alt={country} className="h-7 w-auto" />
      </div>

      <div className="p-4 sm:p-6 relative">
        <button
          onClick={() => toggleFavourite(name)}
          className="absolute top-3 sm:top-5 right-3 sm:right-4 text-xl sm:text-2xl"
        >
          {fav ? (
            <span className="text-red-500">♥</span>
          ) : (
            <span className="text-gray-400">♡</span>
          )}
        </button>

        <h2 className="text-lg sm:text-xl font-bold text-center font-[Montserrat]">
          {name}
        </h2>
        <div className="flex justify-center my-3 sm:my-4">
          <img src={crestImage} alt={name} className="h-20 sm:h-24 w-auto" />
        </div>

        <div className="flex justify-center mt-3 sm:mt-4">
          <Link to={`/clubs/${encodeURIComponent(name)}`}>
            <button className="px-3 sm:px-4 py-1.5 sm:py-2 bg-slate-800 text-white rounded-full hover:bg-indigo-700 transition duration-300 text-sm sm:text-base font-medium font-[Montserrat]">
              View Club
            </button>
          </Link>
        </div>
      </div>

      <div className="bg-black text-white p-2 sm:p-3 flex flex-col items-center justify-center rounded-b-lg font-bold font-[Montserrat]">
        <span className="mb-1 sm:mb-2 text-sm sm:text-base">{leagueName}</span>
        <img src={leagueLogo} alt={leagueName} className="h-6 sm:h-8 w-auto" />
      </div>
    </div>
  );
};

export default ClubCard;
