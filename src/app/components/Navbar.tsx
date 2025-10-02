"use client";
import Link from "next/link";
import { FC, useState } from "react";
import Image from "next/image";
import { SquareX } from "lucide-react";

const Navbar: FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className="w-full flex justify-center items-center">
      <div className="sm:hidden w-full h-4 fixed top-0 z-50 blur-2xl backdrop-blur-2xl"></div>

      <nav className="fixed top-0 w-11/12 md:w-full mt-4 md:mt-0 border border-[#FF9814] md:border-0 rounded-lg md:rounded-none bg-[#02061B] z-50">
        <div className="mx-auto flex justify-between items-center px-6 md:px-20 py-4">
          {/* Logo */}
          <Image
            src="/images/tiwiflix-logo.svg"
            alt="TiwiFlix Logo"
            width={130}
            height={40}
          />

          {/* Tablet Links (sm:flex until md:hidden) */}
          <div className="hidden sm:flex md:hidden space-x-6 text-[#BCBCBC] text-sm overflow-x-auto scrollbar-hide">
            <Link href="#rewards" className="hover:text-brand-yellow whitespace-nowrap">
              How it works
            </Link>
            <Link href="#Revenue-Share" className="hover:text-brand-yellow whitespace-nowrap">
              Revenue Share
            </Link>
            <Link href="#Creators" className="hover:text-brand-yellow whitespace-nowrap">
              Creators
            </Link>
            <Link href="#Live-Stream" className="hover:text-brand-yellow whitespace-nowrap">
              Live Stream
            </Link>
            <Link href="#mobile-app" className="hover:text-brand-yellow whitespace-nowrap">
              Mobile App
            </Link>
          </div>

          {/* Tablet CTA */}
          <Link
            href="/signup"
            className="hidden sm:inline-block md:hidden bg-brand-yellow text-black px-3 py-1.5 rounded-md font-semibold text-sm hover:opacity-90 transition"
          >
            Launch App
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex space-x-8 text-[#BCBCBC] text-base">
            <Link href="#rewards" className="hover:text-brand-yellow">
              How it works
            </Link>
            <Link href="#Revenue-Share" className="hover:text-brand-yellow">
              Revenue Share
            </Link>
            <Link href="#Creators" className="hover:text-brand-yellow">
              Creators
            </Link>
            <Link href="#Live-Stream" className="hover:text-brand-yellow">
              Live Stream
            </Link>
            <Link href="#mobile-app" className="hover:text-brand-yellow">
              Mobile App
            </Link>
          </div>

          {/* Desktop CTA */}
          <Link
            href="/signup"
            className="hidden md:inline-block bg-brand-yellow text-black px-4 py-2 rounded-lg font-semibold hover:opacity-90 transition"
          >
            Launch App
          </Link>

          {/* Mobile Toggle */}
          <button
            className="sm:hidden text-white"
            onClick={() => setIsOpen(true)}
          >
            <Image
              src={"/images/menu-icon.svg"}
              alt="Menu Icon"
              width={28}
              height={28}
            />
          </button>
        </div>

        {/* Backdrop */}
        {isOpen && (
          <div
            className="fixed inset-0 bg-black/60 z-40"
            onClick={() => setIsOpen(false)}
          ></div>
        )}

        {/* Mobile Drawer */}
        <div
          className={`fixed top-0 right-0 h-full w-full sm:w-[350px] bg-[#0A0F1F] text-white z-50 transform transition-transform duration-300 ${
            isOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex flex-col h-full">
            {/* Header */}
            <div className="flex justify-between items-center p-6 border-b border-[#1E293B]">
              <Image
                src="/images/tiwiflix-logo.svg"
                alt="TiwiFlix Logo"
                width={120}
                height={40}
              />
              <button onClick={() => setIsOpen(false)}>
                <SquareX size={35} className="text-[#FF9D1F]" />
              </button>
            </div>

            {/* Links + Footer */}
            <div className="flex flex-col flex-1 justify-between p-6">
              <div className="flex flex-col space-y-4 text-[#BCBCBC] text-lg">
                <Link href="#rewards" onClick={() => setIsOpen(false)} className="hover:text-brand-yellow">
                  How it works
                </Link>
                <Link href="#Revenue-Share" onClick={() => setIsOpen(false)} className="hover:text-brand-yellow">
                  Revenue Share
                </Link>
                <Link href="#Creators" onClick={() => setIsOpen(false)} className="hover:text-brand-yellow">
                  Creators
                </Link>
                <Link href="#Live-Stream" onClick={() => setIsOpen(false)} className="hover:text-brand-yellow">
                  Live Stream
                </Link>
                <Link href="#mobile-app" onClick={() => setIsOpen(false)} className="hover:text-brand-yellow">
                  Mobile App
                </Link>
              </div>

              <div className="flex justify-center gap-4 mt-8">
                <a href="https://www.apple.com/app-store/" target="_blank">
                  <Image
                    src="/images/app-store.svg"
                    alt="App Store"
                    width={140}
                    height={45}
                  />
                </a>
                <a href="https://play.google.com/store" target="_blank">
                  <Image
                    src="/images/google-play.svg"
                    alt="Google Play"
                    width={140}
                    height={45}
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </section>
  );
};

export default Navbar;
