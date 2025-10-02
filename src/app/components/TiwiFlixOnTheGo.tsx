"use client";

import Image from "next/image";

export default function OnTheGoSection() {
  return (
    <div className="w-full brand-bg px-2 md:px-20">
      <section className="relative md:min-h-screen bg-[linear-gradient(155deg,#F9AC17_44.93%,#FF5E01_85.88%)] px-6 pt-0 md:pt-20 flex flex-col text-center ">
        {/* Background image */}
        <div className="absolute bottom-0 left-0 right-0 h-[75%] bg-[url('/images/biglogovector.svg')] bg-no-repeat bg-bottom bg-contain" />

        {/* Content block (text only) */}
        <div className="flex flex-col items-center justify-center mt-20 md:mt-0 z-10">
          <h2 className="text-4xl md:text-5xl font-bold text-[#080C17]">
            TiwiFlix On-The-Go
          </h2>
          <p className="text-[#080C17] text-lg md:text-xl max-w-xs md:max-w-xl mt-4 mb-6">
           Your favorite decentralized streaming app is coming soon to mobile. 
           Create and watch content anytime, anywhere.
          </p>
          <span className="bg-[#080C17] text-white px-6 py-3 rounded-lg font-medium">
            Join Waitlist
          </span>
        </div>

        {/* Phone block */}
        <div className="mt-10 md:mt-auto flex justify-center items-center relative mx-auto">
          <Image
            src="/images/tiwiflix-phone.svg"
            alt="Phones"
            width={420}
            height={520}
            className="relative z-10"
          />

          {/* Floating labels (desktop only) */}
          <div className="absolute -left-32 top-16 bg-[#271600] text-[#FFBC00] text-sm px-6 py-4 rounded-full hidden md:inline-flex items-center z-10">
            <Image
              src="/images/logo.svg"
              alt="logo"
              width={20}
              height={20}
              className="mr-1"
            />
            <span>Watch on the go</span>
          </div>

          <div className="absolute -left-28 bottom-12 bg-[#271600] text-[#FFBC00] text-sm px-6 py-4 rounded-full hidden md:inline-flex items-center z-10">
            <Image
              src="/images/logo.svg"
              alt="logo"
              width={16}
              height={16}
              className="mr-1"
            />
            <span>Earn TP</span>
          </div>

          <div className="absolute -right-32 top-24 bg-[#271600] text-[#FFBC00] text-sm px-6 py-4 rounded-full hidden md:inline-flex items-center z-10">
            <Image
              src="/images/logo.svg"
              alt="logo"
              width={16}
              height={16}
              className="mr-1"
            />
            <span>Redeem NFTs</span>
          </div>
        </div>
      </section>
    </div>
  );
}
