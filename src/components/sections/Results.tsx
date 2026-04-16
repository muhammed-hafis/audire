"use client";

import Image from "next/image";
import Container from "../ui/Container";
import {  ChevronsRight } from "lucide-react";

const students = [
  {
    name: "Shamsheed",
    company: "Edoxe",
    location: "Palakkad",
    image: "/results/image1.png",
  },
  {
    name: "Aiswarya",
    company: "Malabar Developers",
    location: "Kozhikkode",
    image: "/results/image2.png",
  },
  {
    name: "Hisham Muhammed",
    company: "Verna Resorts",
    location: "Ernakulam",
    image: "/results/image3.png",
  },
  {
    name: "Hisham Muhammed",
    company: "Verna Resorts",
    location: "Ernakulam",
    image: "/results/image4.png",
  },
];

export default function Results() {
  return (
    <section className="w-full bg-white py-14 md:py-20 lg:py-24 lg:pt-17">
      <Container>
        <div className="max-w-[1400px] mx-auto">
          {/* Title */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-[52px] font-bold text-[#8B1C7D] mb-10 md:mb-14">
            Student Results
          </h2>

          {/* Cards */}
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 md:gap-8">
            {students.map((student, index) => (
              <div
                key={index}
                className="group relative bg-[#EEEEEE] rounded-2xl overflow-hidden"
              >
                {/* Image */}
                <div className="relative w-full aspect-[3/4] overflow-hidden">
                  <Image
                    src={student.image}
                    alt={student.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                {/* Overlay */}
                <div
                  className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 right-3 sm:right-4 
                bg-[#5B0B62]/60 text-white rounded-xl 
                px-3 sm:px-4 py-2 sm:py-3 text-xs sm:text-sm space-y-1"
                >
                  <p>
                    <span className="font-medium">Name :</span> {student.name}
                  </p>
                  <p>
                    <span className="font-medium">Company :</span>{" "}
                    {student.company}
                  </p>
                  <p>
                    <span className="font-medium">Location :</span>{" "}
                    {student.location}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Button */}
          <div className="flex justify-center mt-12 md:mt-16">
            <button
              className="bg-[#5B0B62] font-raleway text-white 
            px-2 sm:px-3 md:px-4 py-2 sm:py-3 
            rounded-xl text-sm md:text-base font-[500]
            flex items-center gap-2 hover:bg-[#4a0950] transition-all"
            >
              View More Placements
              <ChevronsRight className="w-4 h-4 md:w-7 md:h-7" />
            </button>
          </div>
        </div>
      </Container>
    </section>
  );
}
