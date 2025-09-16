import React from "react";
import "./MovieCatalog.css"; // for hiding scrollbar

const MovieCatalog = ({ title, movies, onSelect }) => {
  return (
    <section className="mb-12">
      {/* Section Title */}
      <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-white mb-6 px-4">
        {title}
      </h2>

      {/* Movie Row */}
      <div className="movie-row flex space-x-4 sm:space-x-5 md:space-x-6 overflow-x-auto px-4">
        {movies.map((movie) => (
          <div
            key={movie.id}
            className="min-w-[140px] sm:min-w-[180px] md:min-w-[250px] relative cursor-pointer group"
            onClick={() => onSelect(movie)}
          >
            {/* Thumbnail */}
            <img
              src={movie.thumbnail || "https://via.placeholder.com/300x170"}
              alt={movie.title}
              className="w-full h-[100px] sm:h-[140px] md:h-[180px] object-contain rounded-xl transition-transform duration-300 transform group-hover:scale-105 shadow-xl"
            />

            {/* Hover Overlay */}
            <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 flex items-center justify-center rounded-xl transition-opacity duration-300">
              <p className="text-xs sm:text-sm md:text-base font-semibold text-white text-center px-2">
                {movie.title}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MovieCatalog;
