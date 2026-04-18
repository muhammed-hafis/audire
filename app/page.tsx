import dynamic from 'next/dynamic';
import Navbar from "@/src/components/layout/Navbar";
import Hero from "@/src/components/sections/Hero";

// Dynamically import sections below the fold
const About = dynamic(() => import("@/src/components/sections/About"));
const Callback = dynamic(() => import("@/src/components/sections/Callback"));
const ContactUs = dynamic(() => import("@/src/components/sections/ContactUs"));
const Courses = dynamic(() => import("@/src/components/sections/Courses"));
const FAQ = dynamic(() => import("@/src/components/sections/FAQ"));
const Gallery = dynamic(() => import("@/src/components/sections/Gallery"));
const Results = dynamic(() => import("@/src/components/sections/Results"));
const Testimonials = dynamic(() => import("@/src/components/sections/Testimonials"));
const Footer = dynamic(() => import("@/src/components/layout/Footer"));

function page() {
  return (
    <>
      <Navbar />
      <section id="hero">
        <Hero />
      </section>

      <section id="callback">
        <Callback />
      </section>
      <section id="results">
        <Results />
      </section>

      <section id="about">
        <About />
      </section>
      
      <section id="courses">
        <Courses />
      </section>

      <section id="testimonials">
        <Testimonials />
      </section>

      <section id="gallery">
        <Gallery />
      </section>
      <section id="FAQ">
        <FAQ />
      </section>
      <section id="contact">
        <ContactUs/>
      </section>
      <section id="footer">
        <Footer/>
      </section>
    </>
  );
}

export default page;
