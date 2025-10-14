import React, { useState } from "react";
import VideoPlayer from "../components/VideoPlayer";
import MovieCatalog from "../components/MovieCatalog";
import { useEffect, useRef} from "react";

const Homepage = () => {
  const BASE_URL = "https://myflix-production.up.railway.app/"
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [movies, setMovies] = useState([])
  const targetRef = useRef(null)

  const handlePlay = (movie) => {
    setSelectedMovie(movie);
  };

  const handleFocus = () => {
    targetRef.current?.scrollIntoView({behavior: 'smooth'})
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
    

      <section className="mb-10" >
        <VideoPlayer ref={targetRef} src={selectedMovie?.src} />
      </section>

      <section>
        <MovieCatalog
          title="Available Movies today"
          movies={movies}
          onSelect={(movie) => {
            handlePlay(movie)
            handleFocus()
          }} // Pass the function to update selectedMovie
        />

      </section>
    </div>
  );
};

export default Homepage;
