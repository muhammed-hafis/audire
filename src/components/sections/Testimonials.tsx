"use client";

import React, { useState } from "react";
import Image from "next/image";
import Container from "../ui/Container";
import { Quote } from "lucide-react";

export default function Testimonials() {
    const [hoveredId, setHoveredId] = useState(null);

    const testimonials = [
        {
            id: 1,
            image: "/testimonials/image1.jpg",
            quote: "Audire Learning was essential for my CA journey. The expert faculty and practical approach helped me secure a position at Deloitte.",
            author: "Amritha, Wayanad",
        },
        {
            id: 2,
            image: "/testimonials/image2.jpg",
            quote: "Thanks to Audire Learning, I gained the skills needed for cost management. I now work at Tata Steel as a Cost Management Accountant",
            author: "Melvin, Kollam",
        },
        {
            id: 3,
            image: "/testimonials/image3.jpg",
            quote: "Audire Learning's ACCA course opened doors to international opportunities. Now im working in a multinational company thanks to Audire.",
            author: "Anna Meri, Ernakulam",
        },
    ];

    return (
        <section className="bg-white pb-10 lg:pb-16 overflow-hidden">
            <Container>
                <div className="mb-8 sm:mb-10 md:mb-12">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#AD0681] leading-tight">
                        What our learners have to say about us!
                    </h2>
                </div>

            
                <div className="flex sm:grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 overflow-x-auto pb-6 sm:pb-0 snap-x snap-mandatory scroll-smooth no-scrollbar">
                    {testimonials.map((testimonial) => (
                        <div
                            key={testimonial.id}
                            className="min-w-[85%] sm:min-w-full flex flex-col rounded-xl overflow-hidden h-full shadow-sm hover:shadow-md transition-shadow duration-300 snap-center"
                            onMouseEnter={() => setHoveredId(testimonial.id)}
                            onMouseLeave={() => setHoveredId(null)}
                        >
                            {/* Image Container */}
                            <div className="relative w-full h-[180px] sm:h-[200px] md:h-[220px] overflow-hidden group cursor-pointer">
                                <Image
                                    src={testimonial.image}
                                    alt={testimonial.author}
                                    fill
                                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                />

                                {/* Play Button Overlay */}
                                <div
                                    className={`absolute inset-0 flex items-center justify-center bg-black/30 transition-opacity duration-300 ${hoveredId === testimonial.id ? "opacity-100" : "opacity-0"
                                        }`}
                                >
                                    <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-white/90 flex items-center justify-center transform hover:scale-110 transition-transform duration-300 shadow-lg">
                                        <svg
                                            className="w-6 h-6 sm:w-7 sm:h-7 text-[#AD0681] ml-0.5"
                                            fill="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path d="M8 5v14l11-7z" />
                                        </svg>
                                    </div>
                                </div>
                            </div>

                            {/* Quote Content */}
                            <div className="flex-1 bg-[#F1F1F1] p-5 flex flex-col justify-between">
                                <div>
                                    <Quote className="w-8 h-8 sm:w-10 sm:h-10 text-[#5B0B62] mb-2 transform rotate-180 fill-[#5B0B62]" />
                                    <p className="text-sm md:text-[15px] text-black font-kumbh font-[500] leading-relaxed line-clamp-4">
                                        {testimonial.quote}
                                    </p>
                                </div>

                                <p className="text-xs sm:text-sm font-bold text-black text-right mt-4 opacity-80">
                                    — {testimonial.author}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </Container>

            {/* Tailwind Utility for hiding scrollbar (Add to your globals.css for best result) */}
            <style jsx global>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
        </section>
    );
}