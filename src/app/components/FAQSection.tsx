"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const faqs = [
  {
    question: "How do I access TiwiFlix?",
    answer:
      "You can access TiwiFlix via our web app or the upcoming mobile app. Simply sign up, create a profile, and start streaming content.",
  },
  {
    question: "What are TP Points and how do they work?",
    answer:
      "TP Points are reward tokens that users earn by watching, sharing, or engaging with content. They can be redeemed for perks or platform benefits.",
  },
  {
    question: "How much TWC do creators need?",
    answer:
      "Creators need a minimum of 100 TWC to unlock premium features and start monetizing their content on TiwiFlix.",
  },
  {
    question: "How does BPWM reward viewers?",
    answer:
      "BPWM rewards viewers for consistent engagement by distributing tokens based on watch time and activity.",
  },
  {
    question: "What’s the revenue sharing model?",
    answer:
      "Revenue is shared between creators and the platform, ensuring creators receive a fair percentage of ad and subscription income.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full brand-bg py-16 px-6 flex flex-col items-center">
      <h2 className="text-2xl md:text-3xl font-bold text-white mb-10">
        Frequently Asked Questions
      </h2>

      <div className="w-full max-w-2xl space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="border border-gray-700 rounded-lg overflow-hidden"
          >
            {/* Question */}
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full flex justify-between items-center px-4 py-3 text-left text-white font-medium bg-[#0F1629] hover:bg-[#151d34] transition"
            >
              {faq.question}
              {openIndex === index ? (
                <ChevronUp className="w-5 h-5 text-[#BCBCBC]" />
              ) : (
                <ChevronDown className="w-5 h-5 text-[#BCBCBC]" />
              )}
            </button>

            {/* Answer with animation */}
            <div
              className={`transition-all duration-500 ease-in-out overflow-hidden ${
                openIndex === index ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
              }`}
            >
              <div className="px-4 py-3 bg-[#151d34] text-gray-300 text-sm">
                {faq.answer}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
