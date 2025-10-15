import React, { useEffect, useState } from "react";

const DeleteMoviePage = () => {
  const BASE_URL = "https://myflix-drnx.onrender.com/"
  const [movies, setMovies] = useState([]);
  const [message, setMessage] = useState("");

  // Fetch movies on mount
  useEffect(() => {
    fetch(BASE_URL)
      .then((res) => res.json())
      .then((data) => setMovies(data))
      .catch(() => setMessage("Failed to load movies."));
  }, []);

  // Delete movie handler
  const handleDelete = async (id) => {
    setMessage("");
    try {
      const res = await fetch(`${BASE_URL}movies/${id}`, {
        method: "DELETE",
      });
      if (res.ok) {
        setMovies(movies.filter((movie) => movie._id !== id));
        setMessage("Movie deleted successfully!");
      } else {
        setMessage("Failed to delete movie.");
      }
    } catch {
      setMessage("Error connecting to server.");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-gray-800 pt-28 pb-16 flex flex-col items-center">
      <h1 className="text-3xl md:text-4xl font-bold text-red-600 mb-8 tracking-wide">
        Delete a Movie
      </h1>
      <div className="w-full max-w-4xl">
        {message && (
          <div className="mb-6 text-center text-sm text-red-400">{message}</div>
        )}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {movies.length === 0 ? (
            <div className="col-span-full text-gray-400 text-center">
              No movies found.
            </div>
          ) : (
            movies.map((movie) => (
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
                <button
                  onClick={() => handleDelete(movie._id)}
                  className="mt-auto py-2 px-4 rounded bg-red-600 hover:bg-red-700 text-white font-semibold transition"
                >
                  Delete
                </button>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default DeleteMoviePage;
