import React from "react";

const MovieCatalog = ({ title, movies }) => {
  return (
    <div className="mb-10">
      {/* Section Title */}
      <h2 className="text-2xl font-bold text-white mb-4 px-4">{title}</h2>

      {/* Movie Row */}
      <div className="flex space-x-4 overflow-x-auto scrollbar-hide px-4">
        {movies.map((movie) => (
          <div
            key={movie.id}
            className="min-w-[200px] relative cursor-pointer group"
          >
            {/* Thumbnail */}
            <img
              src={movie.thumbnail || "https://via.placeholder.com/300x170"}
              alt={movie.title}
              className="w-full h-[120px] object-cover rounded-lg transition-transform transform group-hover:scale-105 shadow-lg"
            />

            {/* Overlay on hover */}
            <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 flex items-center justify-center rounded-lg transition">
              <p className="text-sm font-semibold text-white text-center px-2">
                {movie.title}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MovieCatalog;
