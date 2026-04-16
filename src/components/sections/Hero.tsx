import React from "react";
import Image from "next/image";
import Container from "../ui/Container";
import { GraduationCap } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative w-full  pb-20 bg-white">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-1 items-center">
        {/* LEFT SIDE: CONTENTS */}

        <div className="flex pl-4 md:pl-8 lg:pl-16 xl:pl-24 pt-16 flex-col space-y-10">
          {/* Logo - Matching the image scale */}
          <div className="flex flex-start">
            <Image
              src="/logo.png"
              alt="Audire School of Commerce Logo"
              width={140} // Adjusted to match the visual scale in your screenshot
              height={10} // This will maintain aspect ratio with object-contain
              className="object-contain"
              priority
            />
          </div>

          {/* Main Text Container - reduced top margin slightly to match image spacing */}

          <h1 className="font-kumbh font-[900] text-[42px] text-[#5B0B62] leading-tight tracking-tight">
            Trusted by 5000+ Students
          </h1>

          <h2 className="text-[#5B0B62] font-kumbh font-[700] text-[28px] leading-snug tracking-tight">
            Expert Coaching for CA | CMA | ACCA
          </h2>

          <p className="text-gray-800 font-kumbh font-[500] text-[16px] leading-[1.7] max-w-[580px]">
            Our mission is to provide a transformative learning experience that
            combines rigorous academic curriculum with hands-on practical
            training. We aim to cultivate a community of critical thinkers,
            ethical decision-makers, and innovative problem solvers who are
            equipped to navigate and lead in the ever- evolving landscape of
            commerce.
          </p>

          {/* Button */}
          <button className="bg-[#5B0B62] text-white font-raleway font-[600] text-[16px] px-10 py-4 rounded-lg w-fit hover:bg-[#4a0950] transition-all transform hover:scale-105 active:scale-95 shadow-md ">
            View Courses
          </button>
        </div>

        {/* RIGHT SIDE: IMAGE COMPOSITION */}
        <div className="relative bg-slate-200 w-full aspect-[4/3] lg:aspect-square flex items-center justify-center">
          {/* Main Image (image3) */}
          <div className="relative w-[100%] h-[100%]  overflow-hidden shadow-2xl z-10  ">
            <Image
              src="/hero-section/image1.jpg" // Ensure this exists in your public folder
              alt="Main Student Image"
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Left Top Image (image1) */}
          <div className="absolute top-[14%] left-[-9%] w-[39%] h-[25%]  overflow-hidden shadow-xl  z-20">
            <Image
              src="/hero-section/image3.jpg"
              alt="Classroom View"
              fill
              className="object-cover"
            />
          </div>

          {/* Center Bottom Image (image2) */}
          {/* Note: I'm using image2 here as image3 is already the main background */}
          <div className="absolute bottom-[-2%] right-[22%]  w-[46%] h-[26%] overflow-hidden shadow-xl z-30">
            <Image
              src="/hero-section/image2.jpg"
              alt="Achievement"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
