import { FC } from "react";
import Image from "next/image";

const HowItWorks: FC = () => {
  const HowItWorksSteps = [
    {
      title: "Connect",
      description: "Link your wallet or socials to get started in seconds.",
      image: "/images/connect.svg",
    },
    {
      title: "Access",
      description: "Hold ≥ $1 TWC or mint a TiwiFlix NFT.",
      image: "/images/access.svg",
    },
    {
      title: "Watch & Earn",
      description:
        "Enjoy content, complete tasks, earn TP Points → Redeem NFTs.",
      image: "/images/watch-earn.svg",
    },
  ];

  return (
    <section
      className="bg-[#080C17] py-12 px-4 sm:px-8 md:px-20"
      id="how-it-works"
    >
      <div className="max-w-7xl mx-auto text-center">
        {/* Heading */}
        <div className="flex flex-col items-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl text-white font-bold mb-3">
            How it <span className="text-brand-yellow">Works</span>
          </h2>
          <p className="text-[#BCBCBC] text-sm sm:text-base max-w-md">
            A simple breakdown of how to watch, earn, and enjoy.
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mt-10 md:mt-12">
          {HowItWorksSteps.map((step, index) => (
            <div
              key={index}
              className={`rounded-2xl flex flex-col justify-between ${
                index === 1
                  ? "bg-brand-yellow text-[#080C17]"
                  : "bg-[#11172C] text-white"
              }`}
            >
              {/* Text Section */}
              <div className="p-6">
                <h3
                  className={`text-lg sm:text-xl font-semibold mb-2 ${
                    index === 1 ? "text-[#080C17]" : "text-white"
                  }`}
                >
                  {step.title}
                </h3>
                <p
                  className={`text-sm sm:text-base leading-relaxed ${
                    index === 1 ? "text-[#080C17]" : "text-[#BCBCBC]"
                  }`}
                >
                  {step.description}
                </p>
              </div>

              {/* Image Section */}
              <div
                className={`relative w-full ${
                  index === 1 ? "h-40 sm:h-52 md:h-64" : "h-48 sm:h-64 md:h-72"
                }`}
              >
                <div
                  className={`${index === 1 ? "p-6 sm:p-10" : "px-4 sm:px-6 pb-4 sm:pb-6"} w-full h-full`}
                >
                  <Image
                    src={step.image}
                    alt={step.title}
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
