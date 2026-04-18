"use client";

import { useEffect, useRef, useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import Container from "../ui/Container";
import { m, AnimatePresence } from "framer-motion";

const links = [
  { name: "Home", id: "hero", isHome: true },
  { name: "Courses", id: "courses" },
  { name: "About", id: "about" },
  { name: "Results", id: "results" },
  { name: "Gallery", id: "gallery" },
  { name: "Contact Us", id: "contact" },
];

const NAVBAR_HEIGHT = 64;

export default function Navbar() {
  const router = useRouter();
  const pathname = usePathname();
  const [activeSection, setActiveSection] = useState<string>("hero");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const isNavigatingRef = useRef(false);


  const scrollToElement = (id: string) => {
    const element = document.getElementById(id);
    if (!element) return;

    isNavigatingRef.current = true;

    if ((window as any).lenis) {
      (window as any).lenis.scrollTo(element, {
        offset: -NAVBAR_HEIGHT,
        duration: 1.5,
        onComplete: () => {
          setTimeout(() => {
            isNavigatingRef.current = false;
          }, 100);
        }
      });
    } else {
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - NAVBAR_HEIGHT;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });

      setTimeout(() => {
        isNavigatingRef.current = false;
      }, 1000);
    }


    // Use history.replaceState to update hash without Next.js router transitions
    if (window.location.hash !== `#${id}`) {
      window.history.replaceState(null, '', `#${id}`);
    }
  };


  useEffect(() => {
    const sectionIds = links.map(link => link.id);

    const handleIntersection = (entries: IntersectionObserverEntry[]) => {

      if (isNavigatingRef.current) return;

      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);

          if (window.location.hash !== `#${entry.target.id}`) {
            window.history.replaceState(null, '', `#${entry.target.id}`);
          }
        }
      });
    };

    const observerOptions = {
      root: null,
      rootMargin: `-${NAVBAR_HEIGHT + 10}px 0px -70% 0px`,
      threshold: 0,
    };

    const observer = new IntersectionObserver(handleIntersection, observerOptions);

    sectionIds.forEach((id) => {
      const element = document.getElementById(id);
      if (element) {
        observer.observe(element);
      }
    });

    return () => observer.disconnect();
  }, [pathname, router]);

  const handleNavClick = (e: React.MouseEvent, id: string) => {
    e.preventDefault();

    setActiveSection(id); 
    setIsMobileMenuOpen(false);
    scrollToElement(id);
  };

  const menuVariants = {
    closed: {
      opacity: 0,
      y: -20,
      transition: {
        staggerChildren: 0.05,
        staggerDirection: -1,
      },
    },
    open: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    closed: { opacity: 0, x: -10 },
    open: { opacity: 1, x: 0 },
  };

  return (
    <m.nav 
      initial={{ y: -64, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98] }}
      className="fixed top-0 left-0 w-full bg-[#5b0b62]/90 backdrop-blur-md z-[100] text-white shadow-lg border-b border-white/5"
    >
      <Container>
        <div className="flex h-16 justify-between items-center px-4">
          {/* Logo Placeholder (Keeping existing structure) */}

          <div className="flex-shrink-0">
          </div>

          {/* Desktop Menu */}
          <div className="hidden font-raleway md:flex w-full items-center justify-between lg:gap-8 md:gap-4 pr-12">
            {links.map((link) => (
              <button
                key={link.id}
                onClick={(e) => handleNavClick(e, link.id)}
                className={`relative cursor-pointer transition-all duration-300 py-2 text-[16px] lg:text-[18px] whitespace-nowrap font-medium ${
                  activeSection === link.id
                    ? "text-white"
                    : "text-white/75 hover:text-white"
                }`}
              >
                {link.name}
                <AnimatePresence>
                  {activeSection === link.id && (
                    <m.span
                      initial={{ scaleX: 0, opacity: 0 }}
                      animate={{ scaleX: 1, opacity: 1 }}
                      exit={{ scaleX: 0, opacity: 0 }}
                      className="absolute bottom-3 left-0 h-[1.5px] bg-white w-full origin-center"
                      transition={{ duration: 0.3, ease: "easeOut" }}
                    />
                  )}
                </AnimatePresence>
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden ml-auto">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 hover:bg-white/10 rounded-full transition-all active:scale-90"
              aria-label="Toggle Menu"
            >
              <AnimatePresence mode="wait">
                {isMobileMenuOpen ? (
                  <m.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                  >
                    <X size={24} />
                  </m.div>
                ) : (
                  <m.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                  >
                    <Menu size={24} />
                  </m.div>
                )}
              </AnimatePresence>
            </button>
          </div>
        </div>
      </Container>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <m.div
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
            className="md:hidden absolute top-16 left-0 w-full bg-[#5b0b62] backdrop-blur-xl border-t border-white/5 shadow-2xl overflow-hidden"
          >
            <div className="flex flex-col p-4 space-y-2">
              {links.map((link) => (
                <m.button
                  key={link.id}
                  variants={itemVariants}
                  onClick={(e) => handleNavClick(e, link.id)}
                  className={`w-full text-left px-6 py-4 rounded-xl text-lg font-medium transition-all ${
                    activeSection === link.id
                      ? "bg-white/10 text-white translate-x-1"
                      : "text-white/70 hover:bg-white/5 hover:translate-x-1"
                  }`}
                >
                  {link.name}
                </m.button>
              ))}
            </div>
          </m.div>
        )}
      </AnimatePresence>
    </m.nav>
  );
}
