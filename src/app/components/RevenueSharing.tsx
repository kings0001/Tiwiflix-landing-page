import { FC } from "react";
import Image from "next/image";

const RevenueSharing: FC = () => {
  return (
    <section className="bg-[#080C17] py-20 px-6">
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center rounded-xl p-8">
        {/* Left Content */}
        <div>
          {/* Label */}
          <div className="inline-flex items-center bg-[#271600] text-[#FFBC00] rounded px-2 py-2 mb-4 text-sm font-medium">
            <Image
              src="/images/logo.svg"
              alt="logo"
              width={16}
              height={16}
              className="mr-1"
            />
            <span>Revenue Sharing Model</span>
          </div>

          {/* Heading */}
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Fair Earnings for{" "}
            <span className="text-brand-yellow">Creators.</span>
          </h2>

          <ul className="space-y-3 text-white/90 text-base">
            <li className="flex items-start">
              <Image
                src="/images/tick.svg"
                alt="check"
                width={18}
                height={18}
                className="mr-3 mt-0.5"
              />
              90% of all revenue goes to creators.
            </li>
            <li className="flex items-start">
              <Image
                src="/images/tick.svg"
                alt="check"
                width={18}
                height={18}
                className="mr-3 mt-0.5"
              />
              10% supports the TiwiFlix ecosystem (growth, rewards,
              development).
            </li>
            <li className="flex items-start">
              <Image
                src="/images/tick.svg"
                alt="check"
                width={18}
                height={18}
                className="mr-3 mt-0.5"
              />
              Creators keep 100% of revenue. No ecosystem cut.
            </li>
          </ul>
        </div>

        {/* Right Static Image */}
        <div className="flex justify-center">
          <Image
            src="/images/three-d-icon.svg"
            alt="Revenue Sharing Chart"
            width={350}
            height={350}
            className="w-full max-w-[400px]"
          />
        </div>
      </div>
    </section>
  );
};

export default RevenueSharing;
