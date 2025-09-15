import React from "react";

const VideoPlayer = ({ src }) => {
  return (
    <div className="w-full flex justify-center items-center bg-black">
      <div className="relative w-full max-w-5xl aspect-video rounded-2xl overflow-hidden shadow-xl">
        <iframe
          src="https://drive.google.com/file/d/1HOcv03poQBMuscFJzHBQ9vx1zbTqnbfC/preview"
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
