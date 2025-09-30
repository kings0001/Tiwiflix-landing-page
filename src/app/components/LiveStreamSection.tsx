"use client";

import { useRef, useState } from "react";
import { Play, Pause, Volume2, VolumeX, MessageCircle } from "lucide-react";
import Image from "next/image";

export default function LiveStreamSection() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  const toggleMute = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = !videoRef.current.muted;
    setIsMuted(videoRef.current.muted);
  };

  return (
    <>
      {/* Desktop + Tablet view (with brand-bg) */}
      <div className="hidden sm:block w-full brand-bg px-10 md:px-20 py-16 md:py-20">
        <section className="w-full bg-[#0E1321] rounded-2xl py-12 md:py-16 px-4 md:px-6 flex flex-col items-center text-center">
          {/* Heading */}
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Experience Live{" "}
            <span className="text-[#FF9D1F]">
              Streams
            </span>
          </h2>
          <p className="text-gray-300 max-w-2xl mb-10">
            Go live, engage your audience, and earn more. TiwiFlix gives you
            powerful streaming tools with chat, tipping, and fun interactive
            features.
          </p>

          {/* Video + Chat */}
          <div className="flex flex-col md:flex-row gap-6 items-start justify-center">
            {/* Video Player */}
            <div className="relative rounded-xl w-[560px] h-[315px] overflow-hidden">
              <video
                ref={videoRef}
                src="/videos/livestream.mp4"
                className="w-full h-full object-cover"
                autoPlay
                loop
                playsInline
              />

              {/* Controls */}
              <div className="absolute bottom-0 left-0 w-full px-4 py-2 bg-[#1a1f35]/90 flex justify-between items-center gap-4">
                <button
                  onClick={togglePlay}
                  className="text-gray-300 hover:text-white"
                >
                  {isPlaying ? <Pause size={18} /> : <Play size={18} />}
                </button>

                <div className="flex items-center gap-4">
                  <button
                    onClick={toggleMute}
                    className="text-gray-300 hover:text-white"
                  >
                    {isMuted ? <VolumeX size={18} /> : <Volume2 size={18} />}
                  </button>

                  <button className="text-gray-300 hover:text-white">
                    <MessageCircle size={18} />
                  </button>
                </div>
              </div>
            </div>

            {/* Chat Box */}
            <div className="relative w-[260px] h-[315px]">
              <Image
                src="/images/chat-box.svg"
                alt="Live Chat"
                fill
                className="object-contain h-full w-full"
              />
            </div>
          </div>

          {/* Button */}
          <button className="mt-10 px-6 py-2 rounded-lg text-black font-semibold bg-[#FFBC00] hover:opacity-90 transition">
            Host a Live Stream
          </button>
        </section>
      </div>

      
    </>
  );
}
