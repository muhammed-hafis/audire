"use client";

import React from "react";
import Image from "next/image";
import Container from "../ui/Container";

export default function Gallery() {
  const images = [
    { id: 1, src: "/gallery/event1.jpg", alt: "Large Event", isLarge: true },
    { id: 2, src: "/gallery/event2.png", alt: "Students working" },
    { id: 3, src: "/gallery/event3.png", alt: "Graduation" },
    { id: 4, src: "/gallery/event4.png", alt: "Classroom" },
    { id: 5, src: "/gallery/event5.png", alt: "Lab session" },
  ];

  return (
    <section className="bg-white py-12 lg:py-20">
      <Container>
        {/* Header */}
        <div className="mb-8 lg:mb-12 sm:text-left">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#AD0681]">
            Events & Celebrations
          </h2>
        </div>

        {/* Gallery Grid */}
        {/* - Changed grid-cols-1 to grid-cols-2 for mobile
          - Adjusted auto-rows to 150px for mobile so two-wide looks balanced 
        */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4 lg:gap-6 auto-rows-[150px] md:auto-rows-[250px]">

          {/* Large Featured Image */}
          {/* On mobile, this will span 2 columns (full width) to maintain the hierarchy */}
          <div className="col-span-2 row-span-2 relative overflow-hidden rounded-sm group">
            <Image
              src={images[0].src}
              alt={images[0].alt}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover group-hover:scale-105 transition-transform duration-500"
            />
          </div>

          {/* Smaller Images */}
          {images.slice(1).map((img) => (
            <div key={img.id} className="relative overflow-hidden rounded-sm group">
              <Image
                src={img.src}
                alt={img.alt}
                fill
                sizes="(max-width: 768px) 50vw, 25vw"
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
          ))}
        </div>

        {/* View More Button */}
        <div className="mt-12 flex justify-center">
          <button className="bg-[#5B0B62] hover:bg-purple-800 text-white font-raleway px-5 py-3 rounded-md transition-all duration-200 text-lg font-medium shadow-md active:scale-95">
            View More
          </button>
        </div>
      </Container>
    </section>
  );
}