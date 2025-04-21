import React, { useState } from "react";
import Navbar from "../components/Navbar";
import { useFavourites } from "../context/FavouriteContext";
import clubsData from "../data/clubs.json";
import { Link } from "react-router-dom";

const RateClub = () => {
  const { favourites } = useFavourites();
  const favouriteClubs = clubsData.clubs.filter((club) =>
    favourites.includes(club.name)
  );

  const [club, setClub] = useState("");
  const [rating, setRating] = useState(0);
  const [review, setReview] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!club) {
      setError("Please select a club to rate.");
      return;
    }

    if (rating === 0) {
      setError("Please provide a star rating.");
      return;
    }

    if (review.length < 10) {
      setError("Review must be at least 10 characters long.");
      return;
    }

    setSubmitted(true);
    setError("");
  };

  const resetForm = () => {
    setClub("");
    setRating(0);
    setReview("");
    setSubmitted(false);
    setError("");
  };

  const renderStars = () => {
    return (
      <div className="flex items-center mt-2">
        {[1, 2, 3, 4, 5].map((star) => (
          <button
            key={star}
            type="button"
            className={`text-3xl ${
              star <= rating ? "text-yellow-400" : "text-gray-300"
            } focus:outline-none`}
            onClick={() => setRating(star)}
          >
            ★
          </button>
        ))}
      </div>
    );
  };

  return (
    <main className="relative min-h-screen">
      <div className="relative z-10">
        <Navbar />
      </div>
      <img
        src="images/more_than_a_club.jpg"
        alt="More Than A Club"
        className="absolute inset-0 w-full h-full object-cover"
      />

      <div className="relative z-10 container mx-auto px-6 py-12">
        <div className="flex justify-center mb-8">
          <h1 className="text-5xl font-bold text-white font-[Montserrat] bg-black py-2 px-8 rounded">
            Rate A Club
          </h1>
        </div>

        {submitted ? (
          <div className="bg-white p-8 rounded-lg max-w-xl mx-auto shadow-lg">
            <div className="text-center">
              <div className="text-6xl mb-4">✅</div>
              <h2 className="text-2xl font-bold text-green-600 mb-4 font-[Montserrat]">
                Thanks for your rating!
              </h2>
              <div className="bg-gray-100 p-4 rounded-lg mb-6">
                <p className="text-gray-800 font-[Montserrat] mb-2">
                  You rated <strong>{club}</strong>
                </p>
                <div className="flex justify-center mb-2">
                  {[...Array(5)].map((_, i) => (
                    <span
                      key={i}
                      className={`text-2xl ${
                        i < rating ? "text-yellow-400" : "text-gray-300"
                      }`}
                    >
                      ★
                    </span>
                  ))}
                </div>
                <p className="text-gray-700 font-[Montserrat] italic">
                  "{review}"
                </p>
              </div>
              <button
                onClick={resetForm}
                className="bg-indigo-600 hover:bg-indigo-700 text-white py-2 px-6 rounded font-[Montserrat] transition duration-300"
              >
                Rate Another Club
              </button>
            </div>
          </div>
        ) : favouriteClubs.length === 0 ? (
          <div className="bg-white p-8 rounded-lg max-w-xl mx-auto shadow-lg text-center">
            <div className="text-6xl mb-4">💔</div>
            <h2 className="text-2xl font-bold font-[Montserrat] mb-4">
              No Favourite Clubs Yet
            </h2>
            <p className="text-gray-600 font-[Montserrat] mb-6">
              You need to add clubs to your favourites before rating them!
            </p>
            <Link
              to="/clubs"
              className="inline-block px-6 py-3 bg-indigo-600 text-white rounded-full hover:bg-indigo-700 transition duration-300 font-[Montserrat]"
            >
              Explore Clubs
            </Link>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="bg-white bg-opacity-95 p-8 rounded-lg max-w-xl mx-auto shadow-lg"
          >
            <h2 className="text-2xl font-bold mb-6 font-[Montserrat] text-center">
              Rate Your Favourite Club
            </h2>

            {error && (
              <p className="text-red-600 mb-4 font-[Montserrat] bg-red-50 p-2 rounded border border-red-200">
                {error}
              </p>
            )}

            <label className="block mb-4 font-[Montserrat]">
              Select Club:
              <select
                className="w-full mt-2 p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
                value={club}
                onChange={(e) => setClub(e.target.value)}
              >
                <option value="">-- Choose a Club --</option>
                {favouriteClubs.map((club, idx) => (
                  <option key={idx} value={club.name}>
                    {club.name}
                  </option>
                ))}
              </select>
            </label>

            <label className="block mb-4 font-[Montserrat]">
              Your Rating:
              {renderStars()}
            </label>

            <label className="block mb-6 font-[Montserrat]">
              What did you like about this club?
              <textarea
                className="w-full mt-2 p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
                rows="4"
                value={review}
                onChange={(e) => setReview(e.target.value)}
                placeholder="Write your thoughts (at least 10 characters)..."
              />
              <span className="text-sm text-gray-500">
                {review.length}/10 characters minimum
              </span>
            </label>

            <button
              type="submit"
              className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-3 rounded font-[Montserrat] transition duration-300"
            >
              Submit Rating
            </button>
          </form>
        )}
      </div>
    </main>
  );
};

export default RateClub;
