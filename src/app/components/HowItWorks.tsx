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
    <section className="bg-brand-dark h-screen py-20 px-6" id="how-it-works">
      <div className="max-w-7xl mx-auto text-center">
        {/* Heading */}
        <div className="flex flex-col items-center">
          <h2 className="text-3xl md:text-4xl text-[#fff] font-bold mb-4">
            How it <span className="text-brand-yellow">Works</span>
          </h2>
          <p className="text-white text-sm">
            A simple breakdown of how to watch, earn, and enjoy.
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {HowItWorksSteps.map((step, index) => (
            <div
              key={index}
              className={`rounded-2xl p-4 flex flex-col justify-between ${
                index === 1
                  ? "bg-brand-yellow text-black"
                  : "bg-[#11172C] text-white"
              }`}
            >
              <div>
                <h3
                  className={`text-xl font-semibold mb-2 ${
                    index === 1 ? "text-black" : "text-white"
                  }`}
                >
                  {step.title}
                </h3>
                <p
                  className={`text-sm ${
                    index === 1 ? "text-black/80" : "text-gray-300"
                  }`}
                >
                  {step.description}
                </p>
              </div>

              {/* Full-width image */}
              <div className="mt-6">
                <Image
                  src={step.image}
                  alt={step.title}
                  width={600}
                  height={400}
                  className="w-full h-40 object-cover rounded-lg"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
