import { FC } from "react";
import Image from "next/image";

const Creators: FC = () => {
  return (
    <section className="bg-[#080C17] h-screen px-20">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12 rounded-xl p-8">
        
        {/* Left Side - Static Image */}
        <div className="flex-1">
          <Image
            src="/images/creator-img.svg" 
            alt="Creator Power Zone"
            width={500}
            height={400}
            className="w-full h-auto rounded-md"
          />
        </div>

        {/* Right Side - Content */}
        <div className="flex-1">
          {/* Label */}
          <div className="inline-flex items-center gap-1 bg-[#271600] text-[#FFBC00] rounded-full px-4 py-3 mb-4 text-sm font-medium">
            <Image 
              src="/images/logo.svg" 
              alt="logo" 
              width={16} 
              height={16} 
              className="mr-1"
            />
            <span>Creator Power Zone</span>
          </div>

          {/* Heading */}
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 leading-snug">
            Create more. <br />
            <span className="text-brand-yellow">Earn more.</span>
          </h2>

          {/* Bullet Points */}
          <ul className="space-y-3 text-white/90 text-base mb-6">
            <li className="flex items-start">
              <Image
                src="/images/tick.svg"
                alt="check"
                width={18}
                height={18}
                className="mr-3 mt-0.5"
              />
              Upload premium content, movies, and courses.
            </li>
            <li className="flex items-start">
              <Image
                src="/images/tick.svg"
                alt="check"
                width={18}
                height={18}
                className="mr-3 mt-0.5"
              />
              Host interactive live sessions with tips & tickets.
            </li>
            <li className="flex items-start">
              <Image
                src="/images/tick.svg"
                alt="check"
                width={18}
                height={18}
                className="mr-3 mt-0.5"
              />
              Mint NFTs across multiple chains.
            </li>
            <li className="flex items-start">
              <Image
                src="/images/tick.svg"
                alt="check"
                width={18}
                height={18}
                className="mr-3 mt-0.5"
              />
              Analyze growth via Influence Maps & Leaderboards.
            </li>
          </ul>

          {/* CTA Button */}
          <button className="bg-[#FFBC00] text-black font-medium text-sm px-6 py-3 rounded-lg hover:bg-[#e6a800] transition">
            Become a Creator
          </button>
        </div>
      </div>
    </section>
  );
};

export default Creators;
