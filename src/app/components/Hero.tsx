import { FC } from "react";
import Image from "next/image";

const Hero: FC = () => {
  return (
    <section className="relative  flex flex-col items-center justify-center text-center min-h-screen px-6 overflow-hidden">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover"
      >
        <source src="/videos/hero-bg.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* tiwiflix logo*/}
      
      <div className="flex gap-0 absolute bottom-0 justify-center z-0">
        <Image
        src="/images/vector.svg"
        alt="Left Decorative Vector"
        width={400}
        height={600}
        className=""
      />
{/* 
      <Image
        src="/images/right-vector.svg"
        alt="Right Decorative Vector"
        width={200}
        height={600}
        className=""
      />     */}
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center">
        <h1 className="text-4xl md:text-6xl text-[#FFF] max-w-5xl font-bold leading-tight">
          The Multi-chain Platform Where{" "}
          <span className="text-brand-yellow">Creators Rule</span>
        </h1>
        <p className="mt-6 text-lg text-[#BCBCBC] max-w-md">
          Upload, Stream and monetize, Watch, Earn TP Points, Redeem NFTs and
          support creators directly
        </p>
        <div className="mt-8 flex space-x-4">
          <button className="bg-brand-yellow text-black px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition">
            Launch App
          </button>
          <button className="border border-brand-yellow px-6 py-3 text-[#FF9D1F] rounded-lg font-semibold hover:bg-brand-yellow transition">
            Read Docs
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
