"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useRef, useState, useEffect } from "react";

const row1Movies = [
  { src: "/images/image_slider/photo1.svg", title: "The Pickup" },
  { src: "/images/image_slider/photo2.svg", title: "The Creator" },
  { src: "/images/image_slider/photo3.svg", title: "A Working Man" },
  { src: "/images/image_slider/photo4.svg", title: "Fast & Furious 12" },
  { src: "/images/image_slider/photo5.svg", title: "Elle" },
  { src: "/images/image_slider/photo6.svg", title: "The Goat Life" },
];

const row2Movies = [
  { src: "/images/image_slider/image_slider_row-2/Property 1=Variant25.svg", title: "Fast & Furious 12" },
  { src: "/images/image_slider/image_slider_row-2/Property 1=Variant26.svg", title: "Elle" },
  { src: "/images/image_slider/image_slider_row-2/Property 1=Variant27.svg", title: "The Goat Life" },
  { src: "/images/image_slider/image_slider_row-2/Property 1=Variant28.svg", title: "The Goat Life" },
  { src: "/images/image_slider/image_slider_row-2/Property 1=Variant29.svg", title: "The Goat Life" },
  { src: "/images/image_slider/image_slider_row-2/Property 1=Variant30.svg", title: "The Goat Life" },
  { src: "/images/image_slider/image_slider_row-2/Property 1=Variant31.svg", title: "The Goat Life" },
  { src: "/images/image_slider/image_slider_row-2/Property 1=Variant32.svg", title: "The Goat Life" },
];

function MovieCard({
  movie,
  index,
  activeIndex,
  setActiveIndex,
  rowRef,
}: {
  movie: { src: string; title: string };
  index: number;
  activeIndex: number | null;
  setActiveIndex: (i: number | null) => void;
  rowRef: React.RefObject<HTMLDivElement>;
}) {
  const isActive = activeIndex === index;

  const handleToggle = (e: React.MouseEvent) => {
    if (window.innerWidth < 640) {
      e.stopPropagation(); // prevent row click
      setActiveIndex(isActive ? null : index);
    }
  };

  return (
    <div
      onClick={handleToggle}
      className="
        relative shrink-0 group overflow-hidden rounded-md cursor-pointer
        w-[70%] h-44 sm:w-[50%] sm:h-52 md:w-60 md:h-36
      "
    >
      <Image src={movie.src} alt={movie.title} fill className="object-cover" />
      <div
        className={`
          absolute inset-0 bg-[#000000B2] flex items-center justify-center text-white font-bold transition-opacity
          ${isActive ? "opacity-100" : "opacity-0"}
          sm:opacity-0 sm:group-hover:opacity-100
        `}
      >
        <button className="px-3 md:px-4 py-2 rounded-lg text-white text-sm md:text-base font-light bg-[linear-gradient(117deg,#F9AC17_0%,#FF5E01_100%)] transition flex items-center">
          <span>Stream Now</span>
          <Image
            src="/images/play-button.svg"
            alt="Play Button"
            width={20}
            height={20}
            className="inline-block ml-2"
          />
        </button>
      </div>
    </div>
  );
}

function InfiniteRow({
  movies,
  direction = "left",
}: {
  movies: { src: string; title: string }[];
  direction?: "left" | "right";
}) {
  const rowRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  // Close overlay when tapping outside row
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (rowRef.current && !rowRef.current.contains(e.target as Node)) {
        setActiveIndex(null);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <motion.div
      className="flex gap-3 md:gap-4"
      ref={rowRef}
      animate={{
        x: direction === "left" ? ["0%", "-100%"] : ["-100%", "0%"],
      }}
      transition={{
        repeat: Infinity,
        duration: 25,
        ease: "linear",
      }}
    >
      {[...movies, ...movies].map((movie, i) => (
        <MovieCard
          key={i}
          movie={movie}
          index={i}
          activeIndex={activeIndex}
          setActiveIndex={setActiveIndex}
          rowRef={rowRef}
        />
      ))}
    </motion.div>
  );
}

export default function MovieSlider() {
  return (
    <div className="w-full bg-[#080C17] py-6 md:py-8 overflow-hidden space-y-4 md:space-y-6">
      <h3 className="bg-[#080C17] text-white text-lg md:text-3xl px-4 md:pl-20 font-semibold">
        Stream now
      </h3>
      <InfiniteRow movies={row1Movies} direction="left" />
      <InfiniteRow movies={row2Movies} direction="right" />
    </div>
  );
}
