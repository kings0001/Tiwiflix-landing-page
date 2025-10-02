"use client";

import { useRef, useState, useEffect } from "react";
import { Play, Pause, Volume2, VolumeX } from "lucide-react";
import Image from "next/image";

export default function LiveStreamSection() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(true); // default: playing
  const [isMuted, setIsMuted] = useState(true);
  const [progress, setProgress] = useState(0); // seek bar progress (0–100)

  // keep updating progress as video plays
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const updateProgress = () => {
      if (video.duration) {
        setProgress((video.currentTime / video.duration) * 100);
      }
    };

    video.addEventListener("timeupdate", updateProgress);
    return () => video.removeEventListener("timeupdate", updateProgress);
  }, []);

  const handlePlay = () => {
    if (!videoRef.current) return;
    videoRef.current.play();
    setIsPlaying(true);
  };

  const handlePause = () => {
    if (!videoRef.current) return;
    videoRef.current.pause();
    setIsPlaying(false);
  };

  const toggleMute = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = !videoRef.current.muted;
    setIsMuted(videoRef.current.muted);
  };

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!videoRef.current) return;
    const newTime =
      (parseFloat(e.target.value) / 100) * videoRef.current.duration;
    videoRef.current.currentTime = newTime;
    setProgress(parseFloat(e.target.value));
  };

  return (
    <div className="w-full brand-bg px-0 sm:px-8 lg:px-20 py-12 md:py-20">
      <section className="w-full bg-[#11172C] md:bg-[#080C17] rounded-2xl py-10 md:py-16 px-4 md:px-8 flex flex-col items-center text-center">
        {/* Heading */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
          Experience Live <span className="text-[#FF9D1F]">Streams</span>
        </h2>
        <p className="text-[#BCBCBC] max-w-2xl mb-10 text-sm sm:text-base">
          Go live, engage your audience, and earn more. TiwiFlix gives you
          powerful streaming tools with chat, tipping, and fun interactive
          features.
        </p>

        {/* Video + Chat */}
        <div className="flex flex-col md:flex-row gap-6 items-center md:items-start justify-center w-full">
          {/* Video Player */}
          <div className="relative w-full md:flex-1 h-[428px] sm:h-[360px] md:h-[400px] rounded-t-xl overflow-hidden">
            <video
              ref={videoRef}
              src="/videos/livestream.mp4"
              className="w-full h-full object-cover"
              autoPlay
              loop
              playsInline
              muted={isMuted}
            />

            {/* Controls */}
            <div className="absolute bottom-0 left-0 w-full bg-[#11172C]">
              {/* Interactive Seek Bar */}
              <input
                type="range"
                min="0"
                max="100"
                value={progress}
                onChange={handleSeek}
                className="w-full h-1 accent-[#FF9D1F] cursor-pointer"
              />

              {/* Buttons Row */}
              <div className="px-4 py-2 flex justify-between items-center gap-4">
                {/* Play button */}
                <button
                  onClick={handlePlay}
                  className="text-gray-300 hover:text-white"
                >
                  <Play size={18} />
                </button>

                {/* Pause button */}
                <button
                  onClick={handlePause}
                  className="text-gray-300 hover:text-white"
                >
                  <Pause size={18} />
                </button>

                {/* Mute Button */}
                <button
                  onClick={toggleMute}
                  className="text-gray-300 hover:text-white"
                >
                  {isMuted ? <VolumeX size={18} /> : <Volume2 size={18} />}
                </button>

                <div className="flex items-center gap-4 ml-auto">
                  <button className="text-gray-300 hover:text-white">
                    <Image
                      src="/images/ellipse.svg"
                      alt="domant chat"
                      width={20}
                      height={20}
                    />
                  </button>

                  <button className="text-gray-300 hover:text-white">
                    <Image
                      src="/images/ellipse.svg"
                      alt="domant chat"
                      width={20}
                      height={20}
                    />
                  </button>
                </div>
              </div>
            </div>
          </div>

      {/* Chat Box */}
<div className="relative w-full md:w-[280px] h-[504px] sm:h-[360px] md:h-[400px]">
  <Image
    src="/images/chat-box.svg"
    alt="Live Chat"
    fill
    className="object-contain w-full h-full"
  />
</div>


        </div>

        {/* Button */}
        <button className="mt-10 px-6 py-3 rounded-lg text-black font-semibold bg-[#FFBC00] hover:opacity-90 transition">
          Host a Live Stream
        </button>
      </section>
    </div>
  );
}
