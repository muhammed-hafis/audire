"use client";

import React from "react";
import Image from "next/image";
import Container from "../ui/Container";
import { FadeUp } from "@/src/components/ui/motion/FadeUp";
import { StaggerContainer, staggerChildVariants } from "@/src/components/ui/motion/StaggerContainer";
import { m } from "framer-motion";

export default function Gallery() {
  const images = [
    { id: 1, src: "/gallery/event1.jpg", alt: "Large Event", isLarge: true },
    { id: 2, src: "/gallery/event2.png", alt: "Students working" },
    { id: 3, src: "/gallery/event3.png", alt: "Graduation" },
    { id: 4, src: "/gallery/event4.png", alt: "Classroom" },
    { id: 5, src: "/gallery/event5.png", alt: "Lab session" },
  ];

  return (
    <section className="bg-white py-12 lg:py-20 overflow-hidden">
      <Container>
        {/* Header */}
        <FadeUp className="mb-8 lg:mb-12 sm:text-left">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#AD0681]">
            Events & Celebrations
          </h2>
        </FadeUp>

        {/* Gallery Grid */}
        <StaggerContainer 
          className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4 lg:gap-6 auto-rows-[150px] md:auto-rows-[250px]"
          staggerChildren={0.1}
        >
          {/* Large Featured Image */}
          <m.div 
            variants={staggerChildVariants}
            className="col-span-2 row-span-2 relative overflow-hidden rounded-sm group"
          >
            <Image
              src={images[0].src}
              alt={images[0].alt}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover group-hover:scale-105 transition-transform duration-500"
            />
          </m.div>

          {/* Smaller Images */}
          {images.slice(1).map((img) => (
            <m.div 
              key={img.id} 
              variants={staggerChildVariants}
              className="relative overflow-hidden rounded-sm group"
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                sizes="(max-width: 768px) 50vw, 25vw"
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </m.div>
          ))}
        </StaggerContainer>

        {/* View More Button */}
        <FadeUp className="mt-12 flex justify-center">
          <button className="bg-[#5B0B62] hover:bg-purple-800 text-white font-raleway px-5 py-3 rounded-md transition-all duration-200 text-lg font-medium shadow-md active:scale-95">
            View More
          </button>
        </FadeUp>
      </Container>
    </section>
  );
}