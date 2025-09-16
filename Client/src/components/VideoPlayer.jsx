import React from "react";

const VideoPlayer = ({ src }) => {
  if (!src) {
    return (
      <div className="text-gray-400 text-center py-10">
        Select a movie to play
      </div>
    );
  }

  return (
    <div className="w-full flex justify-center items-center bg-black">
      <div className="relative w-full max-w-5xl aspect-video rounded-2xl overflow-hidden shadow-xl">
        <iframe
          src={src}
          className="w-full h-full"
          allow="autoplay; encrypted-media"
          allowFullScreen
          style={{ border: "none" }}
        ></iframe>
      </div>
    </div>
  );
};

export default VideoPlayer;
