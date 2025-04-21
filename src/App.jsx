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
      <h1 className="relative z-10 font-[Montserrat] text-white text-8xl font-extrabold pt-30 pl-10">
        THE ULTIMATE HUB FOR FOOTBALL FANS
      </h1>
      <p className="relative z-10 font-[Montserrat] text-white text-2xl font-medium pl-10 max-w-4xl pt-5">
        ClubZone is your all-in-one website to explore football clubs, discover
        top players, and manage your personal favourites — all in one place.
        Dive into club details, rate clubs, and build your dream list.
      </p>
      <div className="relative z-10 pl-10 pt-10">
        <Button text={"Explore Football Clubs"} to={"/clubs"} />
      </div>
    </main>
  );
}

export default App;
