import React, { useState } from "react";
import VideoPlayer from "../components/VideoPlayer";
import MovieCatalog from "../components/MovieCatalog";
import { useEffect } from "react";

const Homepage = () => {
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [movies, setMovies] = useState([])

  const handlePlay = (movie) => {
    setSelectedMovie(movie);
  };

  async function getMovies() {
    const response = await fetch("http://localhost:5000")
    const data = await response.json()

    console.log(data)
    setMovies(data)
}

useEffect(() => {
  getMovies();
}, [])


  return (
    <div className="p-6 bg-black text-white min-h-screen">
    

      <section className="mb-10">
        <VideoPlayer src={selectedMovie?.src} />
      </section>

      <section>
        <MovieCatalog
          title="Available Movies today"
          movies={movies}
          onSelect={handlePlay} // Pass the function to update selectedMovie
        />
      </section>
    </div>
  );
};

export default Homepage;
