import Footer from "@/src/components/layout/Footer";
import Navbar from "@/src/components/layout/Navbar";
import About from "@/src/components/sections/About";
import Callback from "@/src/components/sections/Callback";
import ContactUs from "@/src/components/sections/ContactUs";
import Courses from "@/src/components/sections/Courses";
import FAQ from "@/src/components/sections/FAQ";
import Gallery from "@/src/components/sections/Gallery";
import Hero from "@/src/components/sections/Hero";
import Results from "@/src/components/sections/Results";
import Testimonials from "@/src/components/sections/Testimonials";

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
