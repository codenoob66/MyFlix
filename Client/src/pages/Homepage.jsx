import React, { useState } from "react";
import VideoPlayer from "../components/VideoPlayer";
import MovieCatalog from "../components/MovieCatalog";
import { useEffect, useRef} from "react";

const Homepage = () => {
  const BASE_URL = "https://myflix-ff2q.onrender.com/"
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [movies, setMovies] = useState([])
  const inputRef = useRef(null)

  const handlePlay = (movie) => {
    setSelectedMovie(movie);
  };

  const handleFocus = () => {
    if(inputRef.current){
      inputRef.current.focus()
    }
  };

  async function getMovies() {
    const response = await fetch(BASE_URL)
    const data = await response.json()

    console.log(data)
    setMovies(data)
}

useEffect(() => {
  getMovies();
}, [])


  return (
    <div className="p-6 bg-black text-white min-h-screen">
    

      <section className="mb-10" ref={inputRef}>
        <VideoPlayer src={selectedMovie?.src} />
      </section>

      <section>
        <MovieCatalog
          title="Available Movies today"
          movies={movies}
          onSelect={handlePlay} // Pass the function to update selectedMovie
          onClick={handleFocus}
        />
      </section>
    </div>
  );
};

export default Homepage;
