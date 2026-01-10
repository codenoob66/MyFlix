import { useState, useEffect } from "react";

const Movies = () => {
  const BASE_URL = "https://myflix-backend.codesbyrafael.com";
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch(BASE_URL)
      .then((res) => res.json())
      .then((data) => setMovies(data))
      .catch(() => setMessage("Failed to load movies."));
  }, []);
  return (
    <>
      <div className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-gray-800 pt-28 pb-16 flex flex-col items-center">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {movies.map((movie) => (
            <div
              key={movie._id}
              className="bg-black/80 rounded-lg shadow-lg p-4 flex flex-col items-center"
            >
              <img
                src={movie.thumbnail}
                alt={movie.title}
                className="w-full h-48 object-cover rounded mb-4 border border-gray-700"
              />
              <h2 className="text-lg font-semibold text-white mb-2 text-center">
                {movie.title}
              </h2>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Movies;
