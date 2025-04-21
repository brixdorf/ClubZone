import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import clubDetailsData from "../data/clubDetails.json";

const ClubDetails = () => {
  const { clubName } = useParams();
  const [club, setClub] = useState(null);

  useEffect(() => {
    // Find the club in the JSON data
    const decodedClubName = decodeURIComponent(clubName);
    
    // Find exact match or partial match (case insensitive)
    const foundClub = clubDetailsData.clubsDetails.find(
      (c) => c.name.toLowerCase() === decodedClubName.toLowerCase() || 
             c.name.toLowerCase().includes(decodedClubName.toLowerCase()) ||
             decodedClubName.toLowerCase().includes(c.name.toLowerCase())
    );
    
    setClub(foundClub);
  }, [clubName]);

  if (!club) {
    return (
      <div>
        <Navbar />
        <div className="container mx-auto py-16 px-4 text-center">
          <div className="bg-white p-8 rounded-lg shadow-md max-w-xl mx-auto">
            <div className="text-6xl mb-4">🔍</div>
            <h2 className="text-2xl font-bold text-red-600 font-[Montserrat] mb-4">
              Club not found
            </h2>
            <p className="text-gray-700 mb-6 font-[Montserrat]">
              We couldn't find detailed information about "{decodeURIComponent(clubName)}".
            </p>
            <Link
              to="/clubs"
              className="inline-block px-6 py-3 bg-indigo-600 text-white rounded-full hover:bg-indigo-700 transition duration-300 font-[Montserrat]"
            >
              Explore Other Clubs
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-gray-100">
      <div className="relative z-10">
        <Navbar />
      </div>

      {/* Content Container */}
      <div className="container mx-auto px-4 py-8">
        {/* Club Header */}
        <div className="bg-white bg-opacity-95 rounded-lg shadow-xl p-6 mb-8 md:p-8">
          <div className="flex flex-col md:flex-row items-center">
            {/* Club Crest */}
            <div className="md:w-1/3 flex justify-center mb-6 md:mb-0">
              <img 
                src={`/${club.crestImage}`} 
                alt={`${club.name} crest`} 
                className="h-48 w-auto"
              />
            </div>
            
            {/* Club Info */}
            <div className="md:w-2/3 md:pl-10 text-center md:text-left">
              <h1 className="text-4xl font-bold font-[Montserrat] mb-4">
                {club.name}
              </h1>
              
              <p className="italic text-indigo-800 font-medium mb-4">
                "{club.motto}"
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div>
                  <span className="text-gray-600">Founded:</span>{" "}
                  <span className="font-semibold">{club.founded}</span>
                </div>
                <div className="flex items-center justify-center md:justify-start">
                  <span className="text-gray-600 mr-2">Country:</span>{" "}
                  <span className="font-semibold">{club.country}</span>
                  <img 
                    src={`/images/${club.country.toLowerCase()}.svg`} 
                    alt={club.country} 
                    className="h-5 ml-2" 
                  />
                </div>
              </div>
              
              <p className="text-gray-700">
                {club.description}
              </p>
            </div>
          </div>
        </div>

        {/* Club Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          {/* Trophy Stats */}
          <div className="bg-white bg-opacity-95 rounded-lg shadow-lg p-6">
            <h2 className="text-2xl font-bold mb-6 text-center font-[Montserrat] border-b-2 border-indigo-200 pb-2">
              Club Achievements
            </h2>
            <div className="grid grid-cols-2 gap-y-6">
              <div className="text-center">
                <div className="text-4xl font-bold text-indigo-700 flex items-center justify-center">
                  <img 
                    src="/images/trophy.svg" 
                    alt="Total Trophy" 
                    className="inline-block w-6 h-6 mr-1"
                  />
                  {club.totalTrophies}
                </div>
                <div className="text-gray-600 font-[Montserrat]">Total Trophies</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-indigo-700 flex items-center justify-center">
                  <img 
                    src="/images/trophy.svg" 
                    alt="" 
                    className="inline-block w-8 h-8 mr-1"
                  />
                  {club.uclTitles}
                </div>
                <div className="text-gray-600 font-[Montserrat]">Champions League</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-indigo-700 flex items-center justify-center">
                  <img 
                    src={`/${club.leagueTitleIcon}`} 
                    alt="League Trophy" 
                    className="inline-block w-6 h-6 mr-1"
                  />
                  {club.leagueTitles}
                </div>
                <div className="text-gray-600 font-[Montserrat]">League Titles</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-indigo-700 flex items-center justify-center">
                  <img 
                    src={`/${club.cupTitleIcon}`} 
                    alt="Cup Trophy" 
                    className="inline-block w-6 h-6 mr-1"
                  />
                  {club.cupTitles}
                </div>
                <div className="text-gray-600 font-[Montserrat]">Cup Titles</div>
              </div>
            </div>
          </div>

          {/* Stadium & Management */}
          <div className="bg-white bg-opacity-95 rounded-lg shadow-lg p-6">
            <h2 className="text-2xl font-bold mb-6 text-center font-[Montserrat] border-b-2 border-indigo-200 pb-2">
              Stadium & Management
            </h2>
            <div className="mb-4">
              <div className="text-center mb-4">
                <div className="text-xl font-bold text-indigo-700">{club.stadium}</div>
                <div className="text-gray-600">Capacity: {club.capacity.toLocaleString()} seats</div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4 mt-6">
              <div className="text-center">
                <div className="text-gray-600 mb-1">Manager</div>
                <div className="font-semibold">{club.manager}</div>
              </div>
              <div className="text-center">
                <div className="text-gray-600 mb-1">Chairman</div>
                <div className="font-semibold">{club.chairman}</div>
              </div>
            </div>
            <div className="text-center mt-6">
              <a 
                href={club.website} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-flex items-center text-indigo-600 hover:text-indigo-800 transition duration-300"
              >
                <span>Official Website</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Squad */}
        <div className="bg-white bg-opacity-95 rounded-lg shadow-xl p-6 mb-8">
          <h2 className="text-2xl font-bold mb-6 text-center font-[Montserrat] border-b-2 border-indigo-200 pb-2">
            Squad
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {Object.entries(club.players).map(([position, players]) => (
              <div key={position} className="bg-gray-100 rounded-lg p-4">
                <h3 className="font-bold text-indigo-700 mb-3 text-center font-[Montserrat]">
                  {position}
                </h3>
                <ul className="space-y-1">
                  {players.map((player, idx) => (
                    <li key={idx} className="border-b border-gray-200 last:border-0 py-1 text-center">
                      {player}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
};

export default ClubDetails;