"use client";
import Link from "next/link";
import { FC, useState } from "react";
import Image from "next/image";
import { X } from "lucide-react";

const Navbar: FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full m-4 md:m-0 border border-[#FF9814] md:border-0 rounded-lg md:rounded-none bg-[#02061B] z-50">

      <div className="mx-auto flex justify-between items-center px-6 md:px-20 py-4">
        {/* Logo */}
        <Image
          src="/images/tiwiflix-logo.svg"
          alt="TiwiFlix Logo"
          width={130}
          height={40}
        />

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
        <button className="md:hidden text-white" onClick={() => setIsOpen(true)}>
          {/* <Menu size={28} /> */}
          <Image 
          src={"/images/menu-icon.svg"}
          alt="Menu Icon"
          width={28}
          height={28}
          className=""          
          />
        </button>
      </div>

      {/* Mobile Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-full sm:w-[350px] bg-[#0A0F1F] text-white z-50 transform transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center p-6">
          <Image
            src="/images/tiwiflix-logo.svg"
            alt="TiwiFlix Logo"
            width={120}
            height={40}
          />
          <button onClick={() => setIsOpen(false)} className="text-[#BCBCBC]">
            <X size={28} />
          </button>
        </div>

        <div className="p-6 flex flex-col space-y-6">
          {/* Nav Links */}
          <Link href="#rewards" className="hover:text-brand-yellow">How it works</Link>
          <Link href="#Revenue-Share" className="hover:text-brand-yellow">Revenue Share</Link>
          <Link href="#Creators" className="hover:text-brand-yellow">Creators</Link>
          <Link href="#Live-Stream" className="hover:text-brand-yellow">Live Stream</Link>
          <Link href="#mobile-app" className="hover:text-brand-yellow">Mobile App</Link>

          {/* App Store Buttons */}
          <div className="pt-4 flex flex-col space-y-3">
            <Image
              src="/images/app-store.svg"
              alt="App Store"
              width={120}
              height={40}
            />
            <Image
              src="/images/google-play.svg"
              alt="Google Play"
              width={120}
              height={40}
            />
          </div>

          {/* Legal / Contact */}
          <div className="pt-8 text-sm text-[#BCBCBC] space-y-2">
            <p className="font-semibold text-white">Legal</p>
            <Link href="/terms" className="block hover:text-brand-yellow">Terms</Link>
            <Link href="/privacy" className="block hover:text-brand-yellow">Privacy</Link>

            <p className="pt-4 font-semibold text-white">Contact</p>
            <p>support@TiwiFlix</p>

            <p className="pt-6 text-xs opacity-70">© TiwiFlix2025</p>
          </div>
        </div>
      </div>

      {/* Backdrop */}
      {/* {isOpen && (
        <div
          className="fixed inset-0 bg-[#080C17] z-40"
          onClick={() => setIsOpen(false)}
        ></div>
      )} */}
    </nav>
  );
};

export default Navbar;
