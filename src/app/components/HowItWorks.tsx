import { FC } from "react";
import Image from "next/image";

const HowItWorks: FC = () => {
  return (
    <section
      className="bg-[#080C17] py-12 px-4 sm:px-8 md:px-20"
      id="how-it-works"
    >
      <div className="max-w-7xl mx-auto text-center">
        {/* Heading */}
        <div className="flex flex-col items-center">
          <h2 className="text-2xl sm:text-3xl md:text-6xl text-white font-bold mb-3">
            How it <span className="text-brand-yellow">Works</span>
          </h2>
          <p className="text-[#BCBCBC] text-sm md:text-lg max-w-md">
            A simple breakdown of how to watch, earn, and enjoy.
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          {/* Card 1 - Connect */}
          <div className="rounded-2xl flex flex-col justify-between overflow-hidden bg-[#11172C] text-white">
            <div className="p-6 text-left">
              <h3 className="text-lg sm:text-xl font-semibold mb-2">Connect</h3>
              <p className="text-sm sm:text-base leading-relaxed text-[#BCBCBC]">
                Link your wallet or socials to get started in seconds.
              </p>
            </div>
            <div className="relative w-full flex items-center justify-center">
              <Image
                src="/images/connect.svg"
                alt="Connect"
                width={220}
                height={282}
                className="object-contain mx-1 w-[22.875rem] h-[17.625rem]"
              />
            </div>
          </div>

 {/* Card 2 - Access */}
<div className="rounded-2xl flex flex-col px-2 overflow-hidden bg-gradient-to-b from-[#FFD335] to-[#FF8C00] text-[#080C17] h-[32rem]">
  {/* Text */}
  <div className="p-6 text-left">
    <h3 className="text-lg sm:text-xl font-semibold mb-2">Access</h3>
    <p className="text-sm sm:text-base leading-relaxed text-[#080C17]">
      Hold ≥ $1 TWC or mint a TiwiFlix NFT.
    </p>
  </div>

  {/* Image forced to base */}
  <div className="relative w-full flex justify-center mt-auto">
    <Image
      src="/images/access.svg"
      alt="Access"
      width={220}
      height={292}
      className="object-contain mx-1 w-[29.6875rem] h-[21.625rem]"
    />
  </div>
</div>




          {/* Card 3 - Watch & Earn */}
          <div className="rounded-2xl flex flex-col justify-between overflow-hidden bg-[#11172C] text-white">
            <div className="p-6 text-left">
              <h3 className="text-lg sm:text-xl font-semibold mb-2">
                Watch & Earn
              </h3>
              <p className="text-sm sm:text-base leading-relaxed text-[#BCBCBC]">
                Enjoy content, complete tasks, earn TP Points → Redeem NFTs.
              </p>
            </div>
            <div className="relative w-full flex items-center justify-center">
              <Image
                src="/images/watch-earn.svg"
                alt="Watch & Earn"
                width={220}
                height={282}
                className="object-contain mx-1 w-[22.875rem] h-[17.625rem]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
