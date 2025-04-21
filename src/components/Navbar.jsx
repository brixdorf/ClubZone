import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-black">
      <div className="px-4 py-2 grid grid-cols-3 items-center">
        <div>
          <Link to="/">
            <img
              src="/images/white_logo.svg"
              alt="ClubZone Logo"
              className="h-15 w-auto"
            />
          </Link>
        </div>
        <div className="flex items-center justify-center space-x-10">
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
            to="/add-player"
            className="font-[Montserrat] text-white hover:text-gray-300 transition duration-300 relative group"
          >
            ADD PLAYER
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white group-hover:w-full transition-all duration-300"></span>
          </Link>
        </div>
        <div></div>
      </div>
    </nav>
  );
};

export default Navbar;
