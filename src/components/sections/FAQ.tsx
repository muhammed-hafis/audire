"use client";

import React, { useState } from "react";
import Container from "../ui/Container";
import { FadeUp } from "@/src/components/ui/motion/FadeUp";
import { StaggerContainer, staggerChildVariants } from "@/src/components/ui/motion/StaggerContainer";
import { m } from "framer-motion";

const ChevronUp = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="18 15 12 9 6 15"></polyline>
    </svg>
);

const ChevronDown = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="6 9 12 15 18 9"></polyline>
    </svg>
);

export default function FAQ() {
    const [openId, setOpenId] = useState<number | null>(1);

    const faqs = [
        {
            id: 1,
            question: "Can students transfer credits from other institutions to Audire for their commerce courses?",
            answer: "Students interested in transferring credits should reach out to the admissions office at Audire for further information and guidance on the specific process and requirements.",
        },
        {
            id: 2,
            question: "What are the entry requirements for the CA course at Audire",
            answer: "Entry requirements include specific academic qualifications and a foundation in commerce-related subjects.",
        },
        {
            id: 3,
            question: "Can you provide information on the faculty members teaching the CMA course at Audire?",
            answer: "Audire boasts a diverse and experienced faculty for our CMA course, comprising seasoned industry professionals and academic experts. Profiles of our key faculty members can be found on our website under the 'Faculty' section.",
        },
        {
            id: 4,
            question: "Are there any specific study materials provided for students enrolled in the ACCA course at Audire?",
            answer: "Yes, students enrolled in the ACCA course at Audire receive comprehensive study materials, including detailed textbooks, revision kits, and online resources specifically curated for the ACCA curriculum.",
        },
        {
            id: 5,
            question: "What is the duration of the CA course at Audire?",
            answer: "The typical duration of the CA course at Audire is about [Number] years, depending on the full-time or part-time option selected and the student's progress. Please contact us for specific information regarding the various study paths available.",
        },
        {
            id: 6,
            question: "Are there any scholarships or financial aid options available for students at Audire?",
            answer: "Audire does offer various scholarship and financial aid opportunities to deserving students based on merit and financial need. For more details on the application process and deadlines, please visit our 'Scholarships' page.",
        },
    ];

    const toggleAccordion = (id: number) => {
        setOpenId(openId === id ? null : id);
    };

    return (
        <section className="bg-white py-12 lg:py-20 overflow-hidden">
            <Container>
                <FadeUp className="mb-10">
                    <h2 className="text-4xl md:text-5xl font-bold text-[#AD0681]">FAQ</h2>
                </FadeUp>

                <StaggerContainer className="space-y-6">
                    {faqs.map((faq) => {
                        const isActive = openId === faq.id;

                        return (
                            <m.div
                                key={faq.id}
                                variants={staggerChildVariants}
                                className={`group rounded-lg border-1 transition-all duration-300 px-6 py-4 ${isActive
                                        ? "border-[#AD0681]"
                                        : "border-gray-300 bg-white"
                                    }`}
                            >
                                <button
                                    onClick={() => toggleAccordion(faq.id)}
                                    className="flex w-full items-center justify-between text-left"
                                >
                                    <span className="text-lg font-[500] text-gray-900 pr-4">
                                        {faq.question}
                                    </span>
                                    <span className={`${isActive ? "text-[#AD0681]" : "text-gray-600"} `}>
                                        {isActive ? <ChevronUp /> : <ChevronDown />}
                                    </span>
                                </button>

                                <div
                                    className={`grid transition-all duration-300 ease-in-out ${isActive ? "grid-rows-[1fr] opacity-100 mt-4" : "grid-rows-[0fr] opacity-0"
                                        }`}
                                >
                                    <div className="overflow-hidden">
                                        <p className="text-[#DA5FC8]/70 font-[500] leading-relaxed">
                                            {faq.answer}
                                        </p>
                                    </div>
                                </div>
                            </m.div>
                        );
                    })}
                </StaggerContainer>
            </Container>
        </section>
    );
}