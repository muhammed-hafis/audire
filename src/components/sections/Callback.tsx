"use client";

import { FadeUp } from "@/src/components/ui/motion/FadeUp";
import { m } from "framer-motion";

export default function Callback() {
  return (
    <section className="w-full bg-white py-12 md:py-16 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* CARD */}
        <FadeUp distance={40} className="bg-black text-white rounded-3xl px-10 md:px-14 lg:px-24 py-10 md:py-12 flex flex-col lg:flex-row gap-10 lg:gap-16 items-start">
          {/* LEFT CONTENT */}
          <FadeUp direction="right" delay={0.2} className="lg:w-1/2 font-kumbh space-y-7">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
              Request a Callback
            </h2>

            <p className="text-sm md:text-base leading-loose max-w-md">
              We offer a complimentary consultation to help you get started on
              your journey to a successful career in commerce. During this
              session
            </p>

            <p className="text-sm md:text-base leading-loose max-w-md">
              To get started, simply click the button to request a callback. One
              of our advisors will reach out to you shortly.
            </p>
          </FadeUp>

          {/* RIGHT FORM */}
          <FadeUp direction="left" delay={0.4} className="lg:w-1/2 w-full font-raleway font-semibold">
            <form className="space-y-3">
              <input
                type="text"
                placeholder="Name"
                className="w-full bg-gray-200 text-black px-10 py-4 rounded-xl outline-none"
              />

              <div className="relative w-full">
                <select className="w-full bg-gray-200 text-black px-10 py-4 pr-12 rounded-xl outline-none appearance-none">
                  <option>Course</option>
                  <option>CA</option>
                  <option>CMA</option>
                  <option>ACCA</option>
                </select>

                {/* Custom Arrow */}
                <div className="pointer-events-none absolute inset-y-0 right-10 flex items-center">
                  <svg
                    className="w-5 h-5 text-black"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </div>
              </div>

              <input
                type="tel"
                placeholder="Phone Number"
                className="w-full bg-gray-200 text-black px-10 py-4 rounded-xl outline-none"
              />

              <button
                type="submit"
                className="bg-[#5B0B62] text-white px-12 py-4 mt-2 rounded-xl font-semibold hover:bg-[#4a0950] transition w-full sm:w-auto active:scale-95 shadow-lg"
              >
                Sent Request
              </button>
            </form>
          </FadeUp>
        </FadeUp>
      </div>
    </section>
  );
}
