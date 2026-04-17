"use client";

import React from "react";
import Image from "next/image";
import { Download } from "lucide-react";
import { FadeUp } from "@/src/components/ui/motion/FadeUp";

export default function Courses() {
  const courses = [
    {
      id: 1,
      title: "Chartered Accountant - CA",
      description:
        "Our CA course offers a strong foundation in accounting principles, auditing, taxation, and financial management. The curriculum meets the latest industry standards, preparing students for various roles in accounting firms, corporate finance, and consulting.",
      image: "/courses/image1.jpg",
      cta: "Learn More",
      downloadText: "Download Brochure",
      imagePosition: "right",
    },
    {
      id: 2,
      title: "Certified Management Accountant - CMA",
      description:
        "The CMA program focuses on cost management, budgeting, and financial analysis. Ideal for those wanting to specialize in cost accounting, this course provides the skills needed for effective financial decision-making and organizational improvement.",
      image: "/courses/image2.jpg",
      cta: "Learn More",
      downloadText: "Download Brochure",
      imagePosition: "left",
    },
    {
      id: 3,
      title: "Association of Chartered Certified Accountants - ACCA",
      description:
        "Our ACCA course is globally recognized and covers financial reporting, taxation, audit, and business law. This qualification opens up international career opportunities, preparing students to succeed in multinational companies and financial institutions.",
      image: "/courses/image3.jpg",
      cta: "Learn More",
      downloadText: "Download Brochure",
      imagePosition: "right",
    },
  ];

  return (
    <div className="bg-white flex flex-col gap-y-12 lg:gap-y-18 py-10 lg:py-18 overflow-hidden">
      {courses.map((course) => (
        <section
          key={course.id}
          className={`flex flex-col ${course.imagePosition === "right" ? "lg:flex-row" : "lg:flex-row-reverse"
            } items-stretch w-full h-auto lg:min-h-[400px] overflow-hidden 
      border border-gray-100 shadow-sm lg:border-none lg:shadow-none lg:rounded-none rounded-xl`}
        >
          {/* Text Content Container */}
          <FadeUp
            direction={course.imagePosition === "right" ? "right" : "left"}
            distance={50}
            className={`flex-1 flex flex-col justify-between gap-y-6 py-8 lg:py-0 
          ${course.imagePosition === "left"
                ? "items-end text-right pr-6 sm:pr-10 md:pr-14 lg:pr-16 xl:pr-24 pl-6 md:pl-25"
                : "items-start text-left pl-6 sm:pl-10 md:pr-14 lg:pl-16 xl:pl-24 pr-6 md:pr-6"
              }`}
          >
            <h2 className="text-2xl sm:text-3xl lg:text-[32px] xl:text-[36px] font-bold text-[#AD0681] leading-tight mt-0">
              {course.title}
            </h2>

            <p className={`text-black text-sm sm:text-base font-kumbh font-[500] leading-loose ${course.imagePosition === "left" ? "max-w-full" : "max-w-[90%]"}`}>
              {course.description}
            </p>

            <a
              href="#"
              className={`inline-flex items-center text-cyan-500 hover:text-cyan-600 font-medium text-base sm:text-lg transition-colors 
    ${course.imagePosition === "left" ? "flex-row" : "flex-row"}`}
            >
              {course.downloadText}
              <span className="ml-3">
                <Download className="w-5 h-5" />
              </span>
            </a>

            <button className="w-full font-raleway sm:w-max bg-[#5B0B62] hover:bg-purple-800 text-white py-3 px-10 sm:px-14 rounded-lg transition-all duration-200 text-base sm:text-lg active:scale-95 shadow-md">
              {course.cta}
            </button>
          </FadeUp>

          {/* Image Container */}
          <FadeUp
            direction={course.imagePosition === "right" ? "left" : "right"}
            distance={50}
            className="flex-[1.7] relative overflow-hidden min-h-[300px] lg:min-h-full group cursor-pointer"
          >
            <Image
              src={course.image}
              alt={course.title}
              fill
              className="object-cover transition-all duration-200 ease-in-out"
              sizes="(max-width: 1024px) 100vw, 60vw"
              priority={course.id === 1}
            />

            {/* The Snappy Color-Cast Overlay */}
            <div className="absolute inset-0 bg-[#5B0B62] opacity-0 group-hover:opacity-40 transition-opacity duration-200 ease-in-out mix-blend-multiply" />
          </FadeUp>
        </section>
      ))}
    </div>
  );
}