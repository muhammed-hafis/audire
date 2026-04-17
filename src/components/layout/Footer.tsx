"use client";

import Link from 'next/link';
import { Mail, Phone, MessageCircle } from 'lucide-react';
import Container from "../ui/Container";
import { FadeUp } from "@/src/components/ui/motion/FadeUp";

export default function Footer() {
    return (
        <footer className="bg-white pt-16 pb-12 border-t border-gray-100 overflow-hidden">
            <FadeUp>
                <Container>
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-10 px-5">

                        {/* Column 1: Quick Links */}
                        <FadeUp>
                            <h3 className="text-xl font-[500] mb-6 text-black">Quick Links</h3>
                            <ul className="space-y-4 font-raleway text-black/60 font-semibold">
                                <li><Link href="/" className="hover:text-[#AD0681] transition-colors">Home</Link></li>
                                <li><Link href="/courses" className="hover:text-[#AD0681] transition-colors">Courses</Link></li>
                                <li><Link href="/about" className="hover:text-[#AD0681] transition-colors">About</Link></li>
                                <li><Link href="/placements" className="hover:text-[#AD0681] transition-colors">Placements</Link></li>
                                <li><Link href="/gallery" className="hover:text-[#AD0681] transition-colors">Gallery</Link></li>
                                <li><Link href="/contact" className="hover:text-[#AD0681] transition-colors">Contact Us</Link></li>
                            </ul>
                        </FadeUp>

                        {/* Column 2: Courses */}
                        <div>
                            <h3 className="text-xl font-[500] mb-6 text-black">Courses</h3>
                            <ul className="space-y-4 text-black/60 font-semibold font-raleway">
                                <li><Link href="#" className="hover:text-[#AD0681]">CA</Link></li>
                                <li><Link href="#" className="hover:text-[#AD0681]">CMA</Link></li>
                                <li><Link href="#" className="hover:text-[#AD0681]">ACCA</Link></li>
                            </ul>
                        </div>

                        {/* Column 3: Stories & Testimonials */}
                        <div>
                            <ul className="space-y-4 text-black/60 font-raleway font-semibold">
                                <li><Link href="#" className="hover:text-[#AD0681]">Testimonial</Link></li>
                                <li><Link href="#" className="hover:text-[#AD0681]">Placement Stories</Link></li>
                            </ul>
                        </div>

                        {/* Column 4: Keep In Touch & Address */}
                        <div className="space-y-8">
                            <div>
                                <h3 className="text-xl font-[500] mb-6 text-black">Keep In Touch</h3>
                                <ul className="space-y-4 font-raleway font-semibold">
                                    <li className="flex items-center gap-3 text-black/60">
                                        <Mail className="text-[#AD0681] w-5 h-5 shrink-0" />
                                        <a href="mailto:audirelearnings.info" className="hover:underline truncate">audirelearnings.info</a>
                                    </li>
                                    <li className="flex items-center gap-3 text-black/60">
                                        <Phone className="text-[#AD0681] w-5 h-5 shrink-0" />
                                        <a href="tel:+916548548498">+91 6548548498</a>
                                    </li>
                                    <li className="flex items-center gap-3 text-black/60">
                                        <MessageCircle className="text-[#AD0681] w-5 h-5 shrink-0" />
                                        <a href="https://wa.me/916548548498" target="_blank" rel="noopener noreferrer">+91 6548548498</a>
                                    </li>
                                </ul>
                            </div>

                            <div>
                                <h3 className="text-xl font-[500] mb-4 text-black">Address</h3>
                                <p className="text-black/60 font-raleway font-semibold leading-relaxed">
                                    Near Sagar Auditorium,<br />
                                    Kavumpuram, Valanchery,<br />
                                    Kerala 676552
                                </p>
                            </div>
                        </div>

                    </div>
                </Container>
            </FadeUp>
        </footer>
    );
}