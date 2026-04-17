"use client";

import { useEffect, useRef, useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import Container from "../ui/Container";
import { m } from "framer-motion";

const links = [
  { name: "Home", id: "hero", isHome: true },
  { name: "Courses", id: "courses" },
  { name: "About", id: "about" },
  { name: "Results", id: "results" },
  { name: "Gallery", id: "gallery" },
  { name: "Contact Us", id: "contact" },
];

const NAVBAR_HEIGHT = 64;
const SCROLL_DEBOUNCE_DELAY = 100;

export default function Navbar() {
  const router = useRouter();
  const pathname = usePathname();
  const [activeSection, setActiveSection] = useState<string>("hero");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const isScrollingRef = useRef(false);
  const scrollTimeoutRef = useRef<NodeJS.Timeout>();
  const debounceTimeoutRef = useRef<NodeJS.Timeout>();

  // Scroll to element with offset
  const scrollToElement = (id: string) => {
    const element = document.getElementById(id);
    if (!element) return;

    isScrollingRef.current = true;

    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - NAVBAR_HEIGHT;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });

    // Update URL
    router.replace(`${pathname}#${id}`, { scroll: false });

    // Reset scrolling flag after animation
    if (scrollTimeoutRef.current) clearTimeout(scrollTimeoutRef.current);
    scrollTimeoutRef.current = setTimeout(() => {
      isScrollingRef.current = false;
    }, 800);
  };

  // Update active section based on scroll position
  useEffect(() => {
    const updateActiveLink = () => {
      if (isScrollingRef.current) return;

      const scrollPosition = window.scrollY + NAVBAR_HEIGHT + 50;
      let foundSection = "hero";

      // Find which section is currently in view
      for (const link of links) {
        const element = document.getElementById(link.id);
        if (!element) continue;

        const { offsetTop, offsetHeight } = element;
        if (
          scrollPosition >= offsetTop &&
          scrollPosition < offsetTop + offsetHeight
        ) {
          foundSection = link.id;
          break;
        }
      }

      setActiveSection(foundSection);

      // Update URL hash if different
      if (window.location.hash.slice(1) !== foundSection) {
        router.replace(`${pathname}#${foundSection}`, { scroll: false });
      }
    };

    const debouncedScroll = () => {
      if (debounceTimeoutRef.current) clearTimeout(debounceTimeoutRef.current);
      debounceTimeoutRef.current = setTimeout(
        updateActiveLink,
        SCROLL_DEBOUNCE_DELAY,
      );
    };

    window.addEventListener("scroll", debouncedScroll, { passive: true });
    updateActiveLink(); // Initial check

    return () => {
      window.removeEventListener("scroll", debouncedScroll);
      if (debounceTimeoutRef.current) clearTimeout(debounceTimeoutRef.current);
    };
  }, [pathname, router]);

  // Handle initial hash navigation on mount
  useEffect(() => {
    const hash = window.location.hash.slice(1);
    if (hash && links.some((link) => link.id === hash)) {
      // Small delay to ensure DOM is ready
      const timer = setTimeout(() => {
        scrollToElement(hash);
      }, 100);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleNavClick = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    setActiveSection(id);
    setIsMobileMenuOpen(false);
    scrollToElement(id);
  };

  const handleHomeClick = (e: React.MouseEvent) => {
    if (pathname !== "/") return;
    e.preventDefault();
    setIsMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
    router.replace("/", { scroll: false });
  };

  return (
    <m.nav 
      initial={{ y: -64, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] }}
      className="fixed top-0 left-0 w-full bg-[#5b0b62] z-[100] text-white shadow-md"
    >
      <Container>
        
        <div className="flex h-16 justify-between pt-3 items-center pr-12">
          {/* Desktop Menu */}
          <div className="hidden  font-raleway md:flex w-full items-center justify-between lg:gap-8 md:gap-4">
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
                <span
                  className={`absolute bottom-3 left-0 h-[1.5px] bg-white transition-all duration-300 ${
                    activeSection === link.id
                      ? "w-full opacity-100"
                      : "w-0 opacity-0"
                  }`}
                />
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 hover:bg-white/10 rounded-md transition-colors"
              aria-label="Toggle Menu"
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </Container>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-[#5b0b62]/95 backdrop-blur-sm border-t border-white/10 animate-in fade-in slide-in-from-top-2 duration-300">
          <div className="flex flex-col items-stretch">
            {/* Mobile Home Link */}
            {pathname === "/" && (
              <button
                onClick={handleHomeClick}
                className="w-full text-center py-4 text-lg font-medium transition-colors text-white hover:bg-white/10"
              >
                Home
              </button>
            )}

            {/* Other Links */}
            {links
              .filter((link) => !(pathname === "/" && link.isHome))
              .map((link) => (
                <button
                  key={link.id}
                  onClick={(e) => handleNavClick(e, link.id)}
                  className={`w-full text-center py-4 text-lg font-medium transition-colors ${
                    activeSection === link.id
                      ? "bg-white/10 text-white font-semibold"
                      : "text-white/80 hover:bg-white/5"
                  }`}
                >
                  {link.name}
                </button>
              ))}
          </div>
        </div>
      )}
    </m.nav>
  );
}
