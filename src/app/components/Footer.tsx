"use client";

import Image from "next/image";

export default function Footer() {
  return (
    <footer className="w-full brand-dark-bg text-gray-300 py-12 px-2 md:px-20">
      <div className="mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left: Logo + Description */}
        <div>
          <Image
            src="/images/tiwiflix-logo.svg"
            alt="Tiwiflix Logo"
            width={140}
            height={40}
            className="mb-1"
          />
          <p className="text-base text-[#9BA9B4] mb-4 max-w-xs md:max-w-sm">
            No. 1 Multi-Chain Decentralized Video Streaming and Entertainment
            Platform.
          </p>
          <div className="flex gap-3">
            <Image
              src="/images/google-play.svg"
              alt="Get it on Google Play"
              width={120}
              height={40}
            />
            <Image
              src="/images/app-store.svg"
              alt="Download on the App Store"
              width={120}
              height={40}
            />
          </div>
          {/* Bottom copyright */}
          <div className=" pt-6  text-sm text-[#9BA9B4]">
            © TiwiFlix.io. All rights reserved.
          </div>
        </div>

        {/* Right: Grid of 4 sections */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Products */}
          <div>
            <h3 className="font-semibold text-base text-white mb-3">Products</h3>
            <ul className="space-y-2 text-[#9BA9B4] text-sm">
              <li>TWT Ecosystem</li>
              <li>TiwiFlix App</li>
              <li>TiwiFlix Docs</li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-semibold text-base text-white mb-3">Resources</h3>
            <ul className="space-y-2 text-[#9BA9B4] text-sm">
              <li>FAQ</li>
            </ul>
          </div>

          {/* Dive in */}
          <div>
            <h3 className="font-semibold text-base text-white mb-3">Dive in</h3>
            <ul className="space-y-2 text-[#9BA9B4] text-sm">
              <li>Buy TWC</li>
              <li>Explore Videos</li>
              <li>Become a creator</li>
              <li>Live Stream</li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h3 className="font-semibold text-base text-white mb-3">Connect</h3>
            <ul className="space-y-2 text-[#9BA9B4] text-sm">
              <li>X</li>
              <li>Facebook</li>
              <li>Instagram</li>
              <li>LinkedIn</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
