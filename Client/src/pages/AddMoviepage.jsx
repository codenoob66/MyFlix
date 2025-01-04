import React, { useState } from "react";

const AddMoviepage = () => {
  const [form, setForm] = useState({
    title: "",
    thumbnail: "",
    src: "",
  });
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");
    try {
      const res = await fetch("http://localhost:5000/movies", {
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

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-gray-800 pt-28 pb-16 flex flex-col items-center">
      <h1 className="text-3xl md:text-4xl font-bold text-red-600 mb-8 tracking-wide">
        Add a New Movie
      </h1>
      <div className="bg-black/80 rounded-lg shadow-lg p-8 w-full max-w-lg">
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
  );
};

export default AddMoviepage;
