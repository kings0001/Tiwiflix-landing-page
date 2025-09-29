import { FC } from "react";
import Image from "next/image";

const HowItWorks: FC = () => {
  return (
    <section
      className="bg-[#080C17] py-32 px-4 sm:px-8 md:px-20"
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
        <div className="md:flex w-full justify-center  gap-2 mt-20 mx-auto max-w-6xl h-96">
          {/* Card 1 - Connect */}
          <div className="rounded-2xl w-[27%] px-3 flex flex-col justify-between overflow-hidden bg-[#11172C] text-white">
            <div className="pt-6 text-left">
              <h3 className="text-lg md:text-2xl font-semibold mb-2">Connect</h3>
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
                className="object-contain w-full h-full"
              />
            </div>
          </div>

          {/* Card 2 - Access */}
          <div className="rounded-2xl w-[35%]  flex flex-col px-3 overflow-hidden bg-gradient-to-b from-[#FFD335] to-[#FF8C00] text-[#080C17] ">
            {/* Text */}
            <div className="pt-6 text-left">
              <h3 className="text-lg md:text-2xl font-semibold mb-2">Access</h3>
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
                className="object-contain w-full h-full"
              />
            </div>
          </div>

          {/* Card 3 - Watch & Earn */}
          <div className="rounded-2xl px-3 flex flex-col justify-between overflow-hidden bg-[#11172C] text-white w-[27%] ">
            <div className="pt-6 text-left">
              <h3 className="text-lg md:text-2xl font-semibold mb-2">
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
                className="object-contain w-full h-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
