import Navbar from "@/src/components/layout/Navbar";
import About from "@/src/components/sections/About";
import ContactUs from "@/src/components/sections/ContactUs";
import Courses from "@/src/components/sections/Courses";
import Gallery from "@/src/components/sections/Gallery";
import Hero from "@/src/components/sections/Hero";
import Results from "@/src/components/sections/Results";
import React from "react";

function page() {
  return (
    <>
      <Navbar />
      <section id="hero">
        <Hero />
      </section>

      <section id="courses">
        <Courses />
      </section>

      <section id="about">
        <About />
      </section>

      <section id="results">
        <Results />
      </section>

      <section id="gallery">
        <Gallery />
      </section>

      <section id="contact">
        <ContactUs />
      </section>
    </>
  );
}

export default page;
