import { Link } from "react-router-dom";
import { useState } from "react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-black">
      <div className="px-4 py-2 grid grid-cols-2 md:grid-cols-3 items-center">
        <div>
          <Link to="/">
            <img
              src="/images/white_logo.svg"
              alt="ClubZone Logo"
              className="h-12 md:h-15 w-auto"
            />
          </Link>
        </div>
        
        <div className="hidden md:flex items-center justify-center space-x-4 lg:space-x-10">
          <Link
            to="/"
            className="font-[Montserrat] text-white hover:text-gray-300 transition duration-300 relative group"
          >
            HOME
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white group-hover:w-full transition-all duration-300"></span>
          </Link>
          <Link
            to="/clubs"
            className="font-[Montserrat] text-white hover:text-gray-300 transition duration-300 relative group"
          >
            CLUBS
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white group-hover:w-full transition-all duration-300"></span>
          </Link>
          <Link
            to="/favourites"
            className="font-[Montserrat] text-white hover:text-gray-300 transition duration-300 relative group"
          >
            FAVOURITES
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white group-hover:w-full transition-all duration-300"></span>
          </Link>
          <Link
            to="/rate-a-club"
            className="font-[Montserrat] text-white hover:text-gray-300 transition duration-300 relative group"
          >
            RATE A CLUB
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white group-hover:w-full transition-all duration-300"></span>
          </Link>
        </div>

        <div className="flex justify-end md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)} className="text-white">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
              {menuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        <div></div>
      </div>
      
      {menuOpen && (
        <div className="md:hidden bg-black border-t border-gray-800 py-3">
          <div className="flex flex-col items-center space-y-4">
            <Link
              to="/"
              onClick={() => setMenuOpen(false)}
              className="font-[Montserrat] text-white hover:text-gray-300 transition duration-300"
            >
              HOME
            </Link>
            <Link
              to="/clubs"
              onClick={() => setMenuOpen(false)}
              className="font-[Montserrat] text-white hover:text-gray-300 transition duration-300"
            >
              CLUBS
            </Link>
            <Link
              to="/favourites"
              onClick={() => setMenuOpen(false)}
              className="font-[Montserrat] text-white hover:text-gray-300 transition duration-300"
            >
              FAVOURITES
            </Link>
            <Link
              to="/rate-a-club"
              onClick={() => setMenuOpen(false)}
              className="font-[Montserrat] text-white hover:text-gray-300 transition duration-300"
            >
              RATE A CLUB
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
