import React, { useState } from "react";
import VideoPlayer from "../components/VideoPlayer";
import MovieCatalog from "../components/MovieCatalog";

const Homepage = () => {
  const [selectedMovie, setSelectedMovie] = useState(null);

  const handlePlay = (movie) => {
    setSelectedMovie(movie);
  };

  const sampleMovies = [
    {
      title: "Taong Grasa",
      thumbnail:
        "https://m.media-amazon.com/images/M/MV5BODYxNzAwMzYtYWIxOC00NTYxLWE3MjYtYjBjZTU0ODQwNjNmXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
      src: "https://drive.google.com/file/d/1HOcv03poQBMuscFJzHBQ9vx1zbTqnbfC/preview#toolbar=0",
    },
    {
      title: "Virgin forest",
      thumbnail:
        "https://m.media-amazon.com/images/M/MV5BYWU0N2E2MjUtMmFjNy00YjQ4LTk4NTctYmU0Zjg3ZWNhNDM0XkEyXkFqcGc@._V1_.jpg",
      src: "https://drive.google.com/file/d/1zn_d91yqEKYbd331TebMJ8_0GDEeO8xO/preview#toolbar=0",
    },
    {
      title: "Sila ay akin",
      thumbnail:
        "https://m.media-amazon.com/images/M/MV5BZWM5Y2ZiYjItZjZmOC00YTk4LWI2OGYtMTUzZmUyMmI2MDZlXkEyXkFqcGc@._V1_.jpg",
      src: "https://drive.google.com/file/d/1laLDgEJXs0Ww78QPkdhracwdXkOirpv5/preview#toolbar=0",
    },
    {
      title: "Kaulayaw",
      thumbnail:
        "https://m.media-amazon.com/images/M/MV5BYmYxNmI2YzAtMGNiNy00NmQyLTlkMzUtNTgwYzYzNTIwZGI0XkEyXkFqcGc@._V1_.jpg",
      src: "https://drive.google.com/file/d/1BsUOddiZszQ2jcCVQ5UOkU8spGfwAddY/preview#toolbar=0",
    },
    {
      title: "Ligaw",
      thumbnail:
        "https://m.media-amazon.com/images/M/MV5BMWZjZjNjMDQtZjM0My00MGNmLThiZmItMDY2MDEwZWI1M2Y3XkEyXkFqcGc@._V1_.jpg",
      src: "https://drive.google.com/file/d/1VPWon42j1JVeITpCgrqg2z9UUyruSiFe/preview#toolbar=0",
    },
    {
      title: "69",
      thumbnail:
        "https://m.media-amazon.com/images/M/MV5BYjJmYWFiMGUtZmU5ZS00ZTc3LTk3NmYtZjVhZGJiMGU2ODZmXkEyXkFqcGc@._V1_.jpg",
      src: "https://drive.google.com/file/d/1A1ui3tQ2U6zutQDqtzuRW9HJ83NIV1Eo/preview",
    },
    {
      title: "Kandungan",
      thumbnail:
        "https://m.media-amazon.com/images/M/MV5BNDhjNjM3MmYtYzgyYS00ZGNkLTk5OTMtMzEwZmRlY2I1MjgwXkEyXkFqcGc@._V1_.jpg",
      src: "https://drive.google.com/file/d/1DdU9FvQZqoXnPB87yOoBs-EiBQNHbyzv/preview",
    },
  ];

  return (
    <div className="p-6 bg-black text-white min-h-screen">
      <h1 className="text-3xl font-bold mb-6">Homepage</h1>

      <section className="mb-10">
        <VideoPlayer src={selectedMovie?.src} />
      </section>

      <section>
        <MovieCatalog
          title="Available Movies to choose from"
          movies={sampleMovies}
          onSelect={handlePlay} // Pass the function to update selectedMovie
        />
      </section>
    </div>
  );
};

export default Homepage;
