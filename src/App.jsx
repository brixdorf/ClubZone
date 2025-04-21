import "./App.css";
import Button from "./components/Button";
import Navbar from "./components/Navbar";

function App() {
  return (
    <main className="relative min-h-screen">
      <div className="relative z-10 mb-0">
        <Navbar />
      </div>
      <img
        src="images/stadium.jpg"
        alt="Football Stadium"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="relative z-10 pt-10 md:pt-20 px-6 md:px-10 max-w-full">
        <h1 className="font-[Montserrat] text-white text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-extrabold">
          THE ULTIMATE HUB FOR FOOTBALL FANS
        </h1>
        <p className="font-[Montserrat] text-white text-lg md:text-xl lg:text-2xl font-medium max-w-4xl pt-4 md:pt-5">
          ClubZone is your all-in-one website to explore football clubs, discover
          top players, and manage your personal favourites — all in one place.
          Dive into club details, rate clubs, and build your dream list.
        </p>
        <div className="pt-6 md:pt-10">
          <Button text={"Explore Football Clubs"} to={"/clubs"} />
        </div>
      </div>
    </main>
  );
}

export default App;
