import { useState, useEffect } from "react";
import React from "react";

const Admin = () => {
    const BASE_URL = "https://myflix-ff2q.onrender.com/"
    // const BASE_URL = "http://localhost:5000"
    const [movies, setMovies] = useState([]);
    const [message, setMessage] = useState("");
    const [form, setForm] = useState({
        title: "",
        thumbnail: "",
        src: "",
      });
    const [showForm, setShowForm] = useState(false);

    const handleChange = (e) => {
    setForm({ ...form, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");
    try {
      const res = await fetch(`${BASE_URL}/movies`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setMessage("Movie added successfully!");
        setForm({ title: "", thumbnail: "", src: "" });
      } else {
        const data = await res.json();
        setMessage(data.message || "Failed to add movie.");
      }
    } catch (err) {
      setMessage("Error connecting to server.");
    }
  };
  
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
      <h1 className="text-3xl md:text-4xl font-bold text-white mb-8 tracking-wide">Welcome to the admin dashboard</h1>
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
            <>
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
                  <button
                    onClick={() => handleDelete(movie._id)}
                    className="mt-auto py-2 px-4 rounded bg-red-600 hover:bg-red-700 text-white font-semibold transition"
                  >
                    Delete
                  </button>
                </div>
              ))}
              {/* Add Movie Button */}
              <div className="flex flex-col items-center justify-center bg-black/60 rounded-lg shadow-lg p-4 cursor-pointer hover:bg-black/80 transition"
                onClick={() => setShowForm(true)}
              >
                <span className="text-5xl text-red-500 font-bold">+</span>
                <span className="text-white mt-2">Add Movie</span>
              </div>
            </>
          )}
        </div>
      </div>
      {/* Modal Overlay for Form */}
      {showForm && (
        <div className="fixed inset-0 bg-transparent backdrop-blur-sm flex items-center justify-center z-50">
          <div className="bg-black/80 rounded-lg shadow-lg p-8 w-full max-w-lg relative">
            <button
              className="absolute top-2 right-2 text-gray-400 hover:text-white text-2xl font-bold"
              onClick={() => setShowForm(false)}
              aria-label="Close"
            >
              &times;
            </button>
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label className="block text-gray-300 mb-1 font-medium" htmlFor="title">
                  Movie Title
                </label>
                <input
                  id="title"
                  type="text"
                  value={form.title}
                  onChange={handleChange}
                  className="w-full px-4 py-2 rounded bg-gray-800 text-white border border-gray-700 focus:border-red-500 focus:outline-none"
                  placeholder="Enter movie title"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-300 mb-1 font-medium" htmlFor="thumbnail">
                  Thumbnail URL
                </label>
                <input
                  id="thumbnail"
                  type="text"
                  value={form.thumbnail}
                  onChange={handleChange}
                  className="w-full px-4 py-2 rounded bg-gray-800 text-white border border-gray-700 focus:border-red-500 focus:outline-none"
                  placeholder="Paste image URL"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-300 mb-1 font-medium" htmlFor="src">
                  Movie Source URL
                </label>
                <input
                  id="src"
                  type="text"
                  value={form.src}
                  onChange={handleChange}
                  className="w-full px-4 py-2 rounded bg-gray-800 text-white border border-gray-700 focus:border-red-500 focus:outline-none"
                  placeholder="Paste movie/video URL"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full py-2 rounded bg-red-600 hover:bg-red-700 text-white font-semibold transition"
              >
                Add Movie
              </button>
              {message && (
                <div className="mt-4 text-center text-sm text-red-400">{message}</div>
              )}
            </form>
          </div>
        </div>
      )}
    </div>
  )
}

export default Admin
