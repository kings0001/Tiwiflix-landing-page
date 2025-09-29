import { FC } from "react";
import Image from "next/image";

const RevenueSharing: FC = () => {
  return (
    <section className="bg-[#080C17] py-12 px-4 sm:px-8 md:px-20">
      <div className="mx-auto flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12 rounded-xl p-4 md:p-8">
        {/* Left Content */}
        <div className="flex-1 max-w-md text-center md:text-left ">
          {/* Label */}
          <div className="inline-flex items-center gap-1 bg-[#271600] text-[#FFBC00] rounded-full px-4 py-2 mb-4 text-xs sm:text-sm font-medium">
            <Image
              src="/images/logo.svg"
              alt="logo"
              width={16}
              height={16}
            />
            <span>Revenue Sharing Model</span>
          </div>

          {/* Heading */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-6 leading-snug">
            Fair Earnings for{" "}
            <span className="text-brand-yellow">Creators.</span>
          </h2>

          <ul className="space-y-3 text-white text-sm sm:text-base">
            <li className="flex items-start justify-start">
              <Image
                src="/images/tick.svg"
                alt="check"
                width={18}
                height={18}
                className="mr-2 mt-0.5"
              />
              90% of all revenue goes to creators.
            </li>
            <li className="flex items-start md:justify-start">
              <Image
                src="/images/tick.svg"
                alt="check"
                width={18}
                height={18}
                className="mr-2 mt-0.5"
              />
              10% supports the TiwiFlix ecosystem (growth, rewards, development).
            </li>
            <li className="flex items-start md:justify-start">
              <Image
                src="/images/tick.svg"
                alt="check"
                width={18}
                height={18}
                className="mr-2 mt-0.5"
              />
              Creators keep 100% of revenue. No ecosystem cut.
            </li>
          </ul>
        </div>

        {/* Right Static Image */}
        <div className="flex-1 flex justify-center mt-8 md:mt-0">
          <Image
            src="/images/three-d-icon.svg"
            alt="Revenue Sharing Chart"
            width={350}
            height={350}
            className="w-64 sm:w-80 md:w-full max-w-[600px]"
          />
        </div>
      </div>
    </section>
  );
};

export default RevenueSharing;
