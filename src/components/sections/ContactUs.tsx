"use client";

import { FadeUp } from "@/src/components/ui/motion/FadeUp";
import Container from "../ui/Container";
import { Raleway } from "next/font/google";

const raleway = Raleway({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export default function ContactSection() {
  return (
    <section className="relative min-h-[500px] w-full flex items-center bg-gradient-to-br from-[#791883] to-[#AD0681] overflow-hidden">
      {/* Pattern Image - Left Bottom */}
      <div
        className="absolute left-0 bottom-0 w-1/3 h-[70%] bg-contain bg-left-bottom bg-no-repeat pointer-events-none"
        style={{ backgroundImage: "url('/frame2.png')" }}
      ></div>

      <Container>
        <div className="flex flex-col md:flex-row gap-10 md:gap-0 items-center md:items-end px-5 pt-16 md:pt-20">
          {/* Left Side: Form */}
          <FadeUp className="flex-1 lg:flex-[1.5] pb-10 md:pb-20 z-10 w-full">
            <h2 className="text-white text-3xl md:text-4xl lg:text-5xl font-bold mb-10 md:mb-16 lg:mb-20 leading-tight">
              Would you like to learn more?
            </h2>

            <form className="space-y-6 md:space-y-7 max-w-xl">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Name"
                  className="w-full p-4 rounded-xl bg-white/50 placeholder-white/80 text-white focus:outline-none focus:ring-2 focus:ring-white/50 transition-all"
                />
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full p-4 rounded-xl bg-white/50 placeholder-white/80 text-white focus:outline-none focus:ring-2 focus:ring-white/50 transition-all"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  type="tel"
                  placeholder="Phone"
                  className="w-full p-4 rounded-xl bg-white/50 placeholder-white/80 text-white focus:outline-none focus:ring-2 focus:ring-white/50 transition-all"
                />
                <div className="relative">
                  <select className="w-full p-4 rounded-xl bg-white/50 text-white appearance-none focus:outline-none focus:ring-2 focus:ring-white/50 transition-all cursor-pointer">
                    <option className="text-black" value="">
                      Course
                    </option>
                    <option className="text-black" value="web">
                      Web Development
                    </option>
                    <option className="text-black" value="uiux">
                      UI/UX Design
                    </option>
                  </select>
                  <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none text-white">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="6 9 12 15 18 9"></polyline>
                    </svg>
                  </div>
                </div>
              </div>

              <textarea
                placeholder="Message"
                rows={4}
                className="w-full p-4 rounded-xl bg-white/50 placeholder-white/80 text-white focus:outline-none focus:ring-2 focus:ring-white/50 transition-all"
              ></textarea>

              <button
                type="submit"
                className={`${raleway.className} w-full bg-white text-[#91168B] py-4 rounded-xl text-lg font-bold hover:bg-opacity-90 transition-all shadow-lg active:scale-[0.98]`}
              >
                Submit
              </button>
            </form>
          </FadeUp>

          <FadeUp
            direction="left"
            className="hidden flex-1 w-full md:flex justify-center md:justify-end items-end relative"
          >
            <img
              src="/contact.png"
              alt="Student illustration"
              className="max-h-[400px] md:max-h-[500px] lg:max-h-[625px] w-auto object-contain object-bottom md:relative md:-right-20 lg:-right-10 xl:right-35"
            />
          </FadeUp>
        </div>
      </Container>
    </section>
  );
}