import Navbar from "@/src/components/layout/Navbar";
import About from "@/src/components/sections/About";
import Callback from "@/src/components/sections/Callback";
import ContactUs from "@/src/components/sections/ContactUs";
import Courses from "@/src/components/sections/Courses";
import Gallery from "@/src/components/sections/Gallery";
import Hero from "@/src/components/sections/Hero";
import Results from "@/src/components/sections/Results";
import WhyAudire from "@/src/components/sections/WhyAudire";
import React from "react";

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

      <section id="whyaudire">
        <WhyAudire />
      </section>
      
      <section id="courses">
        <Courses />
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
