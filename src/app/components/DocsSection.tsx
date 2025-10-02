"use client";

import { BookText, Code } from "lucide-react"; 

export default function DocsSection() {
  return (
    <section className="w-full bg-[#11172C] py-0 md:py-0 px-2 md:px-20 flex flex-col items-center">
  <div className="bg-[#080C17] h-full w-full px-6 py-20 md:p-20 ">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl w-full">
      
      {/* Card 1 */}
      <div className="bg-[#0F1629] p-8 md:p-6 rounded-2xl shadow-lg flex flex-col items-center md:items-start">
        <div className="flex flex-col md:flex-row items-center mb-3 md:mb-4">
          <BookText  className="text-[#FFBC00] w-8 h-8 md:mr-2" />
          <h3 className="text-2xl md:text-3xl font-semibold text-white">Explore our Docs</h3>
        </div>
        <p className="text-[#BCBCBC] text-lg md:text-base text-center md:text-left  flex-1 max-w-md">
          Dive deep into the mechanics of TiwiFlix, from tokenomics to content
          moderation.
        </p>
        <button className="bg-[#FFBC00] text-black font-medium text-lg px-4 py-3 rounded-lg mt-4 md:mt-6">
          Read Docs
        </button>
      </div>

      {/* Card 2 */}
      <div className="bg-[#0F1629] p-8 md:p-6 rounded-2xl shadow-lg flex flex-col">
        <div className="flex flex-col md:flex-row items-center mb-3 md:mb-4">
          <Code className="text-[#FFBC00] w-8 h-8 md:mr-2" />
          <h3 className="text-2xl md:text-3xl font-semibold text-white">Build on TiwiFlix</h3>
        </div>
        <p className="text-[#BCBCBC] text-lg  md:text-base text-center md:text-left flex-1 mx-auto max-w-md">
          Access our APIs and SDKs to integrate or build new applications on
          our platform.
        </p>
        <button className="bg-[#FFBC00] text-black font-medium text-lg  mx-4 md:mx-0 px-4 py-3 md:self-start rounded-lg mt-4 md:mt-6">
          Developer Portal
        </button>
      </div>

    </div>
  </div>
</section>

  );
}
