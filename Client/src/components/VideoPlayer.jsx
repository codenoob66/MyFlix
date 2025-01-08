import { forwardRef } from "react";

const VideoPlayer = forwardRef(({ src }, ref) => {

  return (
    <div className="w-full flex justify-center items-center bg-black">
      <div className="relative w-full max-w-5xl aspect-video overflow-hidden shadow-xl" ref={ref}>
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
});

export default VideoPlayer;
