"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

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

function InfiniteRow({
  movies,
  direction = "left",
}: {
  movies: { src: string; title: string }[];
  direction?: "left" | "right";
}) {
  const rowRef = useRef<HTMLDivElement>(null);

  return (
    <motion.div
      className="flex gap-4"
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
        <div
          key={i}
          className="relative w-60 h-36 shrink-0 group overflow-hidden rounded-md"
        >
          <Image
            src={movie.src}
            alt={movie.title}
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 flex items-center justify-center text-white text-lg font-bold transition-opacity">
            <button className="px-3 py-1 rounded-full text-white font-light bg-[linear-gradient(117deg,#F9AC17_0%,#FF5E01_100%)]  transition flex items-center">
                <span> Stream Now </span>
                {/* {movie.title} */}
                <Image
                  src="/images/play-button.svg"
                  alt="Play Button"
                    width={24}
                    height={24}
                  className="inline-block ml-2"
                />
            </button>
          </div>
        </div>
      ))}
    </motion.div>
  );
}

export default function MovieSlider() {
  return (
    <div className="w-full bg-[#080C17] py-8 overflow-hidden space-y-6">
      <InfiniteRow movies={row1Movies} direction="left" />
      <InfiniteRow movies={row2Movies} direction="right" />
    </div>
  );
}
