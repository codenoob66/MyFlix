import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { useRef } from "react";

export default function MovieCatalog({ title, movies, onSelect }) {
  const swiperRef = useRef(null);

  return (
    <section className="mb-12 group relative">
      {/* Section Title */}
      <h2 className="text-center text-lg sm:text-2xl font-extrabold text-white mb-6 px-4">
        {title}
      </h2>

      <Swiper
        modules={[Navigation]}
        onBeforeInit={(swiper) => {
          swiperRef.current = swiper;
        }}
        spaceBetween={12}
        slidesPerView={2}
        loop={true} // Enable infinite scroll
        navigation={{
          nextEl: ".next-btn",
          prevEl: ".prev-btn",
        }}
        breakpoints={{
          320: { slidesPerView: 2, spaceBetween: 12 },    // Small phones
          480: { slidesPerView: 2.5, spaceBetween: 14 },  // Larger phones
          640: { slidesPerView: 3, spaceBetween: 16 },    // Tablets
          768: { slidesPerView: 4, spaceBetween: 18 },    // Small laptops
          1024: { slidesPerView: 5, spaceBetween: 20 },   // Desktops
          1280: { slidesPerView: 6, spaceBetween: 22 },   // Large screens
          1536: { slidesPerView: 7, spaceBetween: 24 },   // Extra large screens
        }}
        className="px-8"
      >
        {movies.map((movie) => (
          <SwiperSlide
            key={movie.id}
            className="!w-[140px] sm:!w-[180px] md:!w-[250px]"
          >
            <div
              className="relative cursor-pointer group/movie"
              onClick={() => onSelect(movie)}
            >
              {/* Thumbnail */}
              <img
                src={movie.thumbnail || "https://via.placeholder.com/300x170"}
                alt={movie.title}
                className="w-full h-[100px] sm:h-[140px] md:h-[180px] object-contain rounded-xl bg-black transition-transform duration-300 transform group-hover/movie:scale-105 shadow-xl"
              />

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover/movie:opacity-100 flex items-center justify-center rounded-xl transition-opacity duration-300">
                <p className="text-xs sm:text-sm md:text-base font-semibold text-white text-center px-2">
                  {movie.title}
                </p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom Arrows with SVG Icons */}
      <button
        className="prev-btn absolute left-0 top-1/2 -translate-y-1/2 z-10 
          hidden group-hover:flex items-center justify-center 
          bg-black/60 hover:bg-black text-white rounded-full w-10 h-10 transition"
        aria-label="Previous"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <button
        className="next-btn absolute right-0 top-1/2 -translate-y-1/2 z-10 
          hidden group-hover:flex items-center justify-center 
          bg-black/60 hover:bg-black text-white rounded-full w-10 h-10 transition"
        aria-label="Next"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </section>
  );
}
