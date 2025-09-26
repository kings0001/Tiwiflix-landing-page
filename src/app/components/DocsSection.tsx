"use client";

import { BookOpen, Code } from "lucide-react"; 

export default function DocsSection() {
  return (
    <section className="w-full bg-[#11172C] py-16 px-6 flex flex-col items-center">
        <div className="bg-[#080C17] p-20">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl h-auto w-full">
        
        {/* Card 1 */}
        <div className="bg-[#0F1629] p-6 rounded-2xl shadow-lg flex flex-col">
          <div className="flex items-center mb-4">
            <BookOpen className="text-[#FFBC00] w-5 h-5 mr-2" />
            <h3 className="text-lg font-semibold text-white">Explore our Docs</h3>
          </div>
          <p className="text-gray-300 text-sm flex-1 max-w-md">
            Dive deep into the mechanics of TiwiFlix, from tokenomics to content
            moderation.
          </p>
          <button className="bg-[#FFBC00] text-black font-medium px-4 py-2 rounded-lg mt-6 self-start">
            Read Docs
          </button>
        </div>

        {/* Card 2 */}
        <div className="bg-[#0F1629] p-6 rounded-2xl shadow-lg flex flex-col">
          <div className="flex items-center mb-4">
            <Code className="text-[#FFBC00] w-5 h-5 mr-2" />
            <h3 className="text-lg font-semibold text-white">Build on TiwiFlix</h3>
          </div>
          <p className="text-gray-300 text-sm flex-1 max-w-md">
            Access our APIs and SDKs to integrate or build new applications on
            our platform.
          </p>
          <button className="bg-[#FFBC00] text-black font-medium px-4 py-2 rounded-lg mt-6 self-start">
            Developer Portal
          </button>
        </div>

      </div>
      </div>
    </section>
  );
}
