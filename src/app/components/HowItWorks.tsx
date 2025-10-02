import { FC } from "react";
import Image from "next/image";

const HowItWorks: FC = () => {
  return (
    <section
      className="bg-[#080C17] py-20 px-4 sm:px-8 md:px-20"
      id="how-it-works"
    >
      <div className="max-w-7xl mx-auto text-center">
        {/* Heading */}
        <div className="flex flex-col items-center">
          <h2 className="text-3xl sm:text-3xl md:text-6xl text-white font-bold mb-3">
            How it <span className="text-brand-yellow">Works</span>
          </h2>
          <p className="text-[#BCBCBC] text-xl md:text-lg max-w-xs sm:max-w-md md:max-w-md">
            A simple breakdown of how to watch, earn, and enjoy.
          </p>
        </div>

        {/* Steps */}
        <div className="flex flex-col md:flex-row w-full justify-center gap-4 mt-10 mx-auto max-w-6xl md:h-[24rem]">
          {/* Card 1 - Connect */}
          <div className="rounded-2xl md:w-[30%] w-full px-4 flex flex-col justify-between overflow-hidden bg-[#11172C] text-white">
            <div className="pt-6 text-left">
              <h3 className="text-xl md:text-2xl font-semibold mb-2">
                Connect
              </h3>
              <p className="text-lg md:text-base leading-relaxed text-[#BCBCBC]">
                Link your wallet or socials to get started in seconds.
              </p>
            </div>
            <div className="w-full flex items-center justify-center mt-auto">
              <Image
                src="/images/connect.svg"
                alt="Connect"
                width={220}
                height={282}
                className="object-cover w-full h-60"
              />
            </div>
          </div>

          {/* Card 2 - Access */}
          <div className="rounded-2xl md:w-[35%] w-full flex flex-col overflow-hidden bg-gradient-to-b from-[#FFD335] to-[#FF8C00] text-[#080C17]">
            {/* Text */}
            <div className="pt-6 px-4 text-left">
              <h3 className="text-xl md:text-2xl font-semibold mb-2">Access</h3>
              <p className="text-lg md:text-base leading-relaxed text-[#080C17]">
                Hold ≥ $1 TiwiCat or mint a TiwiFlix NFT.
              </p>
            </div>

            {/* Inner Gradient Wrapper with Image at Bottom */}
            <div className="mt-auto w-full flex flex-col h-60 bg-gradient-to-b from-[#FF5E01] to-[#F9AC17] rounded-t-lg">
              <div className="flex justify-center items-end w-full flex-1">
                <Image
                  src="/images/img-nft.svg"
                  alt="Access"
                  width={400}
                  height={300}
                  className="object-contain max-h-full"
                />
              </div>
            </div>
          </div>

          {/* Card 3 - Watch & Earn */}
          <div className="rounded-2xl md:w-[30%] w-full px-4 flex flex-col justify-between overflow-hidden bg-[#11172C] text-white">
            <div className="pt-6 text-left">
              <h3 className="text-xl md:text-2xl font-semibold mb-2">
                Watch & Earn
              </h3>
              <p className="text-lg md:text-base leading-tight text-[#BCBCBC]">
                Enjoy content, complete tasks, earn TP Points → Redeem NFTs.
              </p>
            </div>
            <div className="w-full  flex items-center justify-center mt-auto">
              <Image
                src="/images/watch-earn.svg"
                alt="Watch & Earn"
                width={220}
                height={282}
                className="object-cover w-full h-60"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
