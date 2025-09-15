import React from "react";
import VideoPlayer from "../components/VideoPlayer";
import MovieCatalog from "../components/MovieCatalog";

const Homepage = () => {
  const sampleMovies = [
    {
      id: 1,
      title: "Movie One",
      thumbnail: "https://via.placeholder.com/300x170?text=Movie+One",
    },
    {
      id: 2,
      title: "Movie Two",
      thumbnail: "https://via.placeholder.com/300x170?text=Movie+Two",
    },
    {
      id: 3,
      title: "Movie Three",
      thumbnail: "https://via.placeholder.com/300x170?text=Movie+Three",
    },
    {
      id: 4,
      title: "Movie Four",
      thumbnail: "https://via.placeholder.com/300x170?text=Movie+Four",
    },
    {
      id: 5,
      title: "Movie Five",
      thumbnail: "https://via.placeholder.com/300x170?text=Movie+Five",
    },
  ];

  return (
    <div className="p-6 bg-black text-white min-h-screen">
      <h1 className="text-3xl font-bold mb-6">Homepage</h1>

      <section className="mb-10">
        <VideoPlayer />
      </section>

      <section>
        <MovieCatalog title="Available Movies" movies={sampleMovies} />
      </section>
    </div>
  );
};

export default Homepage;
