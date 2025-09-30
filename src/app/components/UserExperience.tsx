import { FC } from "react";
import Image from "next/image";

const UserExperience: FC = () => {
  return (
    <section className="bg-[#080C17] min-h-screen px-4 sm:px-6 md:px-20 py-2 md:py-12">
      <div className="max-w-6xl mx-auto rounded-xl p-6 sm:p-8">
        {/* Label */}
        <div className="mx-auto text-center mb-12">
          <div className="inline-flex items-center gap-1 bg-[#271600] text-[#FFBC00] rounded-full px-4 py-2 sm:py-3 mb-4 text-xs sm:text-sm font-medium">
            <Image
              src="/images/logo.svg"
              alt="logo"
              width={16}
              height={16}
              className="mr-1"
            />
            <span>User Experience Tiwiflix</span>
          </div>

          {/* Heading + Subtitle */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3">
            Watch. <span className="text-brand-yellow">Earn.</span> Enjoy.
          </h2>
          <p className="mx-auto text-white mb-8 sm:mb-10 max-w-md sm:max-w-lg text-sm sm:text-base">
            Earn points while you watch, complete tasks, invite friends, and
            enjoy movies together in real time.
          </p>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 items-center">
          {/* Left Content - Stacked Cards */}
          <div className="space-y-4">
            {/* Card 1 with gradient bottom border */}
            <div className="relative flex items-start bg-[#11172C] rounded-lg p-6 text-white text-sm">
              <Image
                src="/images/coins-01.svg"
                alt="icon"
                width={20}
                height={20}
                className="mr-3"
              />
              <div>
                <h4 className="font-semibold text-[15px]">BP2W</h4>
                <p className="text-[#BCBCBC] text-sm">
                  Be-Paid-to-Watch – Earn TP Points watching sponsored videos.
                </p>
              </div>

              <div className="absolute bottom-0 left-0 w-full h-[3px] rounded-b-lg bg-gradient-to-r from-[#080C17] via-[#FFBC00] to-[#080C17]" />
            </div>

            {/* Card 2 */}
            <div className="flex items-start bg-gradient-to-r from-[#F9AC17] to-[#FF5E01] text-black rounded-lg p-6 text-sm font-medium">
              <Image
                src="/images/task-daily-02.svg"
                alt="icon"
                width={20}
                height={20}
                className="mr-3"
              />
              <div>
                <h4 className="font-semibold text-[15px]">Tasks & Referrals</h4>
                <p className="text-black/80 text-sm">
                  Complete missions, invite friends, unlock NFT rewards.
                </p>
              </div>
            </div>

            {/* Card 3 with gradient top border */}
            <div className="relative flex items-start bg-[#11172C] rounded-t-lg p-6 text-white/90 text-sm">
              <div className="absolute top-0 left-0 w-full h-[3px] rounded-t-lg bg-gradient-to-r from-[#080C17] via-[#FFBC00] to-[#080C17]" />

<div className="absolute -bottom-6 left-0 w-full h-[28px] bg-gradient-to-b from-[#11172C] via-[#080c179c] to-transparent" />
              <Image
                src="/images/tv-smart.svg"
                alt="icon"
                width={20}
                height={20}
                className="mr-3"
              />
              <div>
                <h4 className="font-semibold text-[15px]">Watch Parties</h4>
                <p className="text-white/70 text-sm">
                  Sync and watch movies with friends in real time.
                </p>
              </div>
            </div>
          </div>

          {/* Right Content - Static Image */}
          <div className="flex justify-center">
            <Image
              src="/images/happyuser.svg"
              alt="User Experience Tiwiflix"
              width={400}
              height={400}
              className="w-full max-w-xs sm:max-w-sm md:max-w-md h-auto rounded-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default UserExperience;
