import { FC } from "react";
import Image from "next/image";

const UserExperience: FC = () => {
  return (
    <section className="bg-[#080C17] py-20 px-6">
      <div className="max-w-6xl mx-auto rounded-xl p-8">
        {/* Label */}
        <div className="mx-auto text-center mb-12">
          <div className="inline-flex  items-center bg-[#271600] text-[#FFBC00] rounded-md px-4 py-3 text-sm font-medium mb-6">
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
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
            Watch. <span className="text-brand-yellow">Earn.</span> Enjoy.
          </h2>
          <p className="mx-auto text-white mb-10 max-w-lg">
            Earn points while you watch, complete tasks, invite friends, and
            enjoy movies together in real time.
          </p>
        </div>
        {/* Grid Layout */}
        <div className="grid md:grid-cols-2 gap-10 items-center">
          {/* Left Content - Stacked Cards */}
          <div className="space-y-4">
            {/* Card 1  */}  {/*bg-gradient-to-r from-[#080C17] to-[#080C17]*/}
            <div className="flex items-start bg-[#11172C] rounded-lg p-4 text-white text-sm">
              <Image
                src="/images/coins-01.svg"
                alt="icon"
                width={20}
                height={20}
                className="mr-3"
              />
              <div>
                <h4 className="font-semibold">BP2W</h4>
                <p className="text-[#BCBCBC] text-sm">
                  Be-Paid-to-Watch – Earn TP Points watching sponsored videos.
                </p>
              </div>
            </div>

            {/* Card 2 (Highlighted in yellow) */}
            <div className="flex items-start bg-[#FFBC00] text-black rounded-lg p-4 text-sm font-medium">
              <Image
                src="/images/task-daily-02.svg"
                alt="icon"
                width={20}
                height={20}
                className="mr-3"
              />
              <div>
                <h4 className="font-semibold">Tasks & Referrals</h4>
                <p className="text-black/80 text-sm">
                  Complete missions, invite friends, unlock NFT rewards.
                </p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="flex items-start bg-[#1C243A] rounded-lg p-4 text-white/90 text-sm">
              <Image
                src="/images/tv-smart.svg"
                alt="icon"
                width={20}
                height={20}
                className="mr-3"
              />
              <div>
                <h4 className="font-semibold">Watch Parties</h4>
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
              className="w-full max-w-sm rounded-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default UserExperience;
