"use client";

import Image from "next/image";
import { FadeUp } from "@/src/components/ui/motion/FadeUp";
import { StaggerContainer, staggerChildVariants } from "@/src/components/ui/motion/StaggerContainer";
import { m } from "framer-motion";

export default function About() {
  return (
    <section
      className="w-full py-12 sm:py-16 md:py-20 lg:py-24 
      bg-gradient-to-br from-[#791883] to-[#AD0681] text-white
      relative overflow-hidden"
    >

      <div
        className="absolute top-0 right-0 h-full w-[150px] lg:w-[40%] 
          bg-contain bg-right bg-no-repeat opacity-90 pointer-events-none"
        style={{ backgroundImage: `url('/frame1.png')` }}
      />


      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12 relative z-10">

        <FadeUp className="mb-8 sm:mb-10 md:mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-4xl xl:text-5xl font-bold leading-tight">
            Why Audire ?
          </h2>
        </FadeUp>


        <div className="flex flex-col lg:flex-row gap-6 sm:gap-8 lg:gap-16 items-stretch">

          <div className="w-full lg:w-[65%] flex flex-col justify-center">
            <div className="space-y-4 sm:space-y-6 md:space-y-8">
              <FadeUp delay={0.1}>
                <p className="text-base sm:text-lg md:text-xl lg:text-[22px] leading-relaxed text-white">
                  Discover Audire, where excellence in commerce education meets
                  specialized programs in CA, CMA, and ACCA. Our seasoned faculty
                  brings real-world experience to the classroom, bridging theory
                  with practical insights. With a comprehensive curriculum and
                  experiential learning through case studies and internships, we
                  prepare students for global business success. Gain a global
                  perspective and thrive in a supportive environment focused on
                  your success. Choose Audire for a transformative educational
                  journey towards a rewarding career in commerce and beyond.
                </p>
              </FadeUp>

              <FadeUp delay={0.2}>
                <p className="text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed text-white/90">
                  At Audire Learning, our faculty comprises highly qualified and
                  experienced professionals dedicated to providing the best
                  education. Each instructor brings a wealth of knowledge and
                  practical experience to the classroom.
                </p>
              </FadeUp>
            </div>
          </div>


          <FadeUp direction="left" className="w-full lg:w-[35%] flex items-center relative z-10">
            <div className="relative w-full aspect-square overflow-hidden bg-black/10">
              <Image
                src="/audire.jpg"
                alt="Graduation"
                fill
                className="object-cover"
              />
            </div>
          </FadeUp>
        </div>


        <StaggerContainer
          className="flex flex-row items-start justify-between gap-2 sm:gap-10 mt-16 sm:mt-24 relative z-10"
          staggerChildren={0.15}
        >

          <m.div variants={staggerChildVariants} className="flex-1 flex flex-col gap-1">
            <h3 className="text-2xl sm:text-4xl md:text-5xl lg:text-7xl font-bold font-raleway whitespace-nowrap">
              5000+
            </h3>
            <p className="text-[11px] sm:text-base md:text-xl lg:text-3xl font-bold font-raleway opacity-90 leading-tight">
              Students
            </p>
          </m.div>


          <m.div variants={staggerChildVariants} className="flex-1 flex flex-col gap-1 border-l border-white/20 pl-4 sm:border-none sm:pl-0">
            <h3 className="text-2xl sm:text-4xl md:text-5xl lg:text-7xl font-bold font-raleway whitespace-nowrap">
              4600+
            </h3>
            <p className="text-[11px] sm:text-base md:text-xl lg:text-3xl font-bold font-raleway opacity-90 leading-tight">
              Pass Outs
            </p>
          </m.div>


          <m.div variants={staggerChildVariants} className="flex-1 flex flex-col gap-1 border-l border-white/20 pl-4 sm:border-none sm:pl-0">
            <h3 className="text-2xl sm:text-4xl md:text-5xl lg:text-7xl font-bold font-raleway whitespace-nowrap">
              3000+
            </h3>
            <p className="text-[11px] sm:text-base md:text-xl lg:text-3xl font-bold font-raleway opacity-90 leading-tight">
              Reviews
            </p>
          </m.div>
        </StaggerContainer>
      </div>
    </section>
  );
}