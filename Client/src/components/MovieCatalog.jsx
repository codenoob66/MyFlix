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
      <h2 className="text-lg sm:text-2xl font-extrabold text-white mb-6 px-4">
        {title}
      </h2>

      <Swiper
        modules={[Navigation]}
        onBeforeInit={(swiper) => {
          swiperRef.current = swiper;
        }}
        spaceBetween={10}
        slidesPerView={"auto"}
        navigation={{
          nextEl: ".next-btn",
          prevEl: ".prev-btn",
        }}
        breakpoints={{
          320: { slidesPerView: 2, spaceBetween: 12 },
          640: { slidesPerView: 3, spaceBetween: 14 },
          1024: { slidesPerView: 5, spaceBetween: 16 },
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
                className="w-full h-[100px] sm:h-[140px] md:h-[180px] object-cover rounded-xl transition-transform duration-300 transform group-hover/movie:scale-105 shadow-xl"
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

      {/* Custom Arrows (hidden until hover) */}
      <button
        className="prev-btn absolute left-0 top-1/2 -translate-y-1/2 z-10 
          hidden group-hover:flex items-center justify-center 
          bg-black/60 hover:bg-black text-white rounded-full w-10 h-10 transition"
      >
        ◀
      </button>
      <button
        className="next-btn absolute right-0 top-1/2 -translate-y-1/2 z-10 
          hidden group-hover:flex items-center justify-center 
          bg-black/60 hover:bg-black text-white rounded-full w-10 h-10 transition"
      >
        ▶
      </button>
    </section>
  );
}
