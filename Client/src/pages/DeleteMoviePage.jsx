import React, { useEffect, useState } from "react";

const DeleteMoviePage = () => {
  const BASE_URL = "https://myflix-drnx.onrender.com";
  const [movies, setMovies] = useState([]);
  const [message, setMessage] = useState("");

  // Fetch movies on mount
  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const res = await fetch(`${BASE_URL}/`);
        if (!res.ok) throw new Error("Failed to load movies");
        const data = await res.json();
        setMovies(data);
      } catch (error) {
        console.error(error);
        setMessage("Failed to load movies.");
      }
    };

    fetchMovies();
  }, []);

  // Delete movie handler
  const handleDelete = async (id) => {
    setMessage("");
    try {
      const res = await fetch(`${BASE_URL}/movies/${id}`, {
        method: "DELETE",
      });

      if (!res.ok) throw new Error("Failed to delete movie");

      setMovies((prev) => prev.filter((movie) => movie._id !== id));
      setMessage("Movie deleted successfully!");
    } catch (error) {
      console.error(error);
      setMessage("Error deleting movie. Please try again.");
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
            movies.map(({ _id, thumbnail, title }) => (
              <div
                key={_id}
                className="bg-black/80 rounded-lg shadow-lg p-4 flex flex-col items-center"
              >
                <img
                  src={thumbnail}
                  alt={title}
                  className="w-full h-48 object-cover rounded mb-4 border border-gray-700"
                />
                <h2 className="text-lg font-semibold text-white mb-2 text-center">
                  {title}
                </h2>
                <button
                  onClick={() => handleDelete(_id)}
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
