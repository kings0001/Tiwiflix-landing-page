"use client";

import Image from "next/image";

export default function OnTheGoSection() {
  return (
    <section className="relative w-full h-screen bg-[linear-gradient(155deg,#F9AC17_44.93%,#FF5E01_85.88%)] px-6 flex flex-col items-center text-center overflow-hidden">
      
      {/* Background image starting from bottom to paragraph */}
      <div className="absolute bottom-0 left-0 right-0 h-[75%] bg-[url('/images/biglogovector.svg')] bg-no-repeat bg-bottom bg-contain" />

      {/* Heading + Paragraph */}
      <div className="relative z-10 mt-20">
        <h2 className="text-3xl md:text-4xl font-bold text-black">
          TiwiFlix On-The-Go
        </h2>
        <p className="text-black/80 max-w-xl mt-4 mb-6">
          Your favorite decentralized streaming app is coming soon to mobile.
          Create and watch content anytime, anywhere.
        </p>
        <button className="bg-black text-white px-6 py-2 rounded-lg font-medium">
          Join Waitlist
        </button>
      </div>

      {/* Phone image pinned to bottom */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[320px] md:w-[420px] flex justify-center items-center">
        {/* Single phone image */}
        <Image
          src="/images/tiwiflix-phone.svg"
          alt="Phones"
          width={400}
          height={400}
          className="relative z-10"
        />

        {/* Floating labels (hidden on mobile) */}
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

        <div className="absolute -left-24 bottom-12 bg-[#271600] text-[#FFBC00] text-sm px-6 py-4 rounded-full hidden md:inline-flex items-center z-10">
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
  );
}
