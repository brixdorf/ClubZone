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
    <div className="w-68 bg-white rounded-lg">
      {/* Header */}
      <div className="bg-black text-white font-[Montserrat] p-3 flex items-center justify-center space-x-3 rounded-t-lg font-bold">
        <span>{country}</span>
        <img src={countryFlag} alt={country} className="h-7 w-auto" />
      </div>

      {/* Body */}
      <div className="p-6 relative">
        <button
          onClick={() => toggleFavourite(name)}
          className="absolute top-5 right-5 text-2xl"
        >
          {fav ? (
            <span className="text-red-500">♥</span>
          ) : (
            <span className="text-gray-400">♡</span>
          )}
        </button>

        <h2 className="text-xl font-bold text-center font-[Montserrat]">
          {name}
        </h2>
        <div className="flex justify-center my-4">
          <img src={crestImage} alt={name} className="h-24 w-auto" />
        </div>

        {/* View Club Button */}
        <div className="flex justify-center mt-4">
          <Link to={`/clubs/${encodeURIComponent(name)}`}>
            <button className="px-4 py-2 bg-slate-800 text-white rounded-full hover:bg-indigo-700 transition duration-300 text-sm font-medium font-[Montserrat]">
              View Club
            </button>
          </Link>
        </div>
      </div>

      {/* Footer */}
      <div className="bg-black text-white p-3 flex flex-col items-center justify-center rounded-b-lg font-bold font-[Montserrat]">
        <span className="mb-2">{leagueName}</span>
        <img src={leagueLogo} alt={leagueName} className="h-8 w-auto" />
      </div>
    </div>
  );
};

export default ClubCard;
