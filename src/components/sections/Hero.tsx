"use client";

import React from "react";
import Image from "next/image";
import { FadeUp } from "@/src/components/ui/motion/FadeUp";
import { StaggerContainer, staggerChildVariants } from "@/src/components/ui/motion/StaggerContainer";
import { m } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative w-full pb-10 sm:pb-16 md:pb-20 lg:pb-20 bg-white">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 md:gap-8 lg:gap-1 items-center px-4 sm:px-6 md:px-0">
        <StaggerContainer className="flex pl-0 sm:pl-4 md:pl-8 lg:pl-16 xl:pl-24 pt-14 sm:pt-12 md:pt-16 flex-col space-y-6 sm:space-y-8 md:space-y-10">
          <m.div variants={staggerChildVariants} className="flex flex-start">
            <Image
              src="/logo.png"
              alt="Audire School of Commerce Logo"
              width={140}
              height={40}
              className="h-auto w-[100px] sm:w-[120px] md:w-[140px] object-contain"
              priority
            />
          </m.div>

          <m.h1 
            variants={staggerChildVariants}
            className="font-kumbh font-[900] z-99 text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-[#5B0B62] leading-tight tracking-tight"
          >
            Trusted by 5000+ Students
          </m.h1>

          <m.h2 
            variants={staggerChildVariants}
            className="text-[#5B0B62] font-kumbh font-[700] text-xl sm:text-2xl md:text-2xl lg:text-3xl leading-snug tracking-tight"
          >
            Expert Coaching for CA | CMA | ACCA
          </m.h2>

          <m.p 
            variants={staggerChildVariants}
            className="text-gray-800 font-kumbh font-[500] text-sm sm:text-base md:text-base lg:text-base leading-[1.7] max-w-full sm:max-w-[480px] md:max-w-[520px] lg:max-w-[580px]"
          >
            Our mission is to provide a transformative learning experience that
            combines rigorous academic curriculum with hands-on practical
            training. We aim to cultivate a community of critical thinkers,
            ethical decision-makers, and innovative problem solvers who are
            equipped to navigate and lead in the ever- evolving landscape of
            commerce.
          </m.p>

          <m.div variants={staggerChildVariants}>
            <button className="bg-[#5B0B62] text-white font-raleway font-[500] text-sm sm:text-base md:text-base px-6 sm:px-8 md:px-10 py-2 sm:py-2 md:py-3 rounded-lg w-fit hover:bg-[#4a0950] transition-all transform hover:scale-105 active:scale-95 shadow-md">
              View Courses
            </button>
          </m.div>
        </StaggerContainer>

        <div className="relative bg-slate-200 w-full aspect-[4/3] sm:aspect-[4/3] md:aspect-[4/3] lg:aspect-square flex items-center justify-center mt-8 sm:mt-10 md:mt-0">

          <m.div
            initial={{ opacity: 0, scale: 0.9, rotate: -2 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ type: "spring", stiffness: 50, damping: 20, delay: 0.2 }}
            className="relative w-[100%] h-[100%] overflow-hidden shadow-2xl z-10"
          >
            <Image
              src="/hero-section/image1.jpg"
              alt="Main Student Image"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
              priority
            />
          </m.div>

          <FadeUp
            delay={0.5}
            distance={60}
            direction="right"
            className="absolute top-[10%] sm:top-[12%] md:top-[14%] lg:top-[14%] left-[-8%] sm:left-[-9%] md:left-[-9%] lg:left-[-9%] w-[35%] sm:w-[37%] md:w-[38%] lg:w-[39%] h-[22%] sm:h-[24%] md:h-[25%] lg:h-[25%] overflow-hidden shadow-xl z-20"
          >
            <m.div 
               whileHover={{ scale: 1.05 }}
               transition={{ type: "spring", stiffness: 300, damping: 20 }}
               className="relative w-full h-full"
            >
              <Image
                src="/hero-section/image3.jpg"
                alt="Classroom View"
                fill
                sizes="(max-width: 1024px) 35vw, 15vw"
                className="object-cover"
              />
            </m.div>
          </FadeUp>

          <FadeUp
            delay={0.8}
            distance={60}
            direction="up"
            className="absolute bottom-[-2%] sm:bottom-[-4%] md:bottom-[-4%] lg:bottom-[-4%] right-[18%] sm:right-[20%] md:right-[21%] lg:right-[22%] w-[42%] sm:w-[44%] md:w-[45%] lg:w-[46%] h-[25%] sm:h-[26%] md:h-[28%] lg:h-[28%] overflow-hidden shadow-xl z-30"
          >
            <m.div 
               whileHover={{ scale: 1.05 }}
               transition={{ type: "spring", stiffness: 300, damping: 20 }}
               className="relative w-full h-full"
            >
              <Image
                src="/hero-section/image2.jpg"
                alt="Achievement"
                fill
                sizes="(max-width: 1024px) 45vw, 20vw"
                className="object-cover"
              />
            </m.div>
          </FadeUp>

        </div>
      </div>
    </section>
  );
}
