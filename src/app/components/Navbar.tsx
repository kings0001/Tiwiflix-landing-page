import Link from "next/link";
import { FC } from "react";
import React from "react";
import Image from "next/image";

const Navbar: FC = () => {
  return (
    <nav className="fixed top-0 w-full bg-[#02061B] z-50">
      <div className="mx-auto flex justify-between items-center px-20 py-4">

        {/* Logo */}
        <Image
          src="/images/tiwiflix-logo.svg"
          alt="TiwiFlix Logo"
          width={150}
          height={50}
          />

        {/* Links */}
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

        {/* Button */}
        <Link
          href="/signup"
          className="bg-brand-yellow text-black px-4 py-2 rounded-lg font-semibold hover:opacity-90 transition"
        >
          Launch App
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
