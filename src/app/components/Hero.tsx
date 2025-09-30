import { FC } from "react";
import Image from "next/image";

const Hero: FC = () => {
  return (
    <section className="relative flex flex-col items-center justify-center text-center min-h-screen px-0 md:px-6 overflow-hidden">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover max-sm:w-screen"
      >
        <source src="/videos/hero-bg.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-60"></div>

      
      {/* <div className="hidden md:flex gap-[2.125rem] md:gap-0 absolute bottom-0 justify-center z-0">
        <Image
          src="/images/vector.svg"
          alt="tiwiflix Vector logo"
          width={400}
          height={600}
        />
      </div> */}

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center md:mt-44">
        <h1 className="text-5xl md:text-5xl text-[#FFF] max-w-sm md:max-w-5xl font-semibold leading-tight">
          The Multi-chain Platform Where{" "} <br />
          <span className="text-brand-yellow">Creators Rule</span>
        </h1>

        <p className="mt-6 text-2xl md:text-lg text-[#BCBCBC] max-w-sm md:max-w-md">
          Upload, Stream and monetize, Watch, Earn TP Points, Redeem NFTs and
          support creators directly
        </p>

        <div className="mt-8 flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
          <button
            className="flex items-center justify-center gap-2 px-6 py-2 md:px-8  
             rounded-md bg-[#FF9D1F] text-black font-semibold 
             hover:opacity-90 transition w-full sm:w-auto"
          >
            Launch App
          </button>

          <button className="border border-brand-yellow px-6 py-2 text-[#FF9D1F] rounded-lg font-semibold hover:bg-brand-yellow transition w-full sm:w-auto">
            Read Docs
          </button>
        </div>
      </div>


      {/* Bottom Vector Logo */}
      <div className="hidden md:flex gap-[2.125rem] md:gap-0 mt-auto  justify-center z-0">
        <Image
          src="/images/vector.svg"
          alt="tiwiflix Vector logo"
          width={400}
          height={600}
        />
      </div>
    </section>
  );
};

export default Hero;
