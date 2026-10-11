"use client";

import { useEffect, useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import Image from "next/image";

interface NavLink {
  label: string;
  href: string;
  id: string;
}

const navLinks: NavLink[] = [
  { label: "Services", href: "#services", id: "services" },
  { label: "How It Works", href: "#how-it-works", id: "how-it-works" },
  { label: "About", href: "#about", id: "about" },
  { label: "Contact", href: "#contact", id: "contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("");

  // Smooth scroll detection
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Track active section via IntersectionObserver with hysteresis to avoid flickering
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "-25% 0px -55% 0px",
      threshold: 0,
    };

    const handleIntersect: IntersectionObserverCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersect, observerOptions);

    navLinks.forEach((link) => {
      const el = document.getElementById(link.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <header
      role="banner"
      className={`fixed left-0 right-0 z-50 transition-all duration-400 ease-[cubic-bezier(0.16,1,0.3,1)] ${
        scrolled
          ? "top-3 sm:top-5 px-4 sm:px-6 pointer-events-none flex justify-center"
          : "top-0 px-0 w-full bg-[#FAF9F6]"
      }`}
    >
      <div
        className={`w-full transition-all duration-400 ease-[cubic-bezier(0.16,1,0.3,1)] flex items-center justify-between pointer-events-auto ${
          scrolled
            ? "max-w-[1140px] h-[60px] sm:h-[64px] rounded-full bg-[#FAF9F6]/95 backdrop-blur-xl shadow-[0_8px_30px_rgba(7,21,37,0.04)] px-6 sm:px-8"
            : "max-w-7xl mx-auto h-[74px] sm:h-[78px] px-6 md:px-10 lg:px-12"
        }`}
      >
        {/* LEFT — BRAND: Original LeadScorpio Logo */}
        <a
          href="#"
          className="flex items-center shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C65D2E]/40 rounded-full transition-all duration-200 hover:opacity-85 hover:scale-[1.02] active:scale-[0.98]"
          aria-label="LeadScorpio - Back to top"
        >
          <Image
            src="/Logo_darktext.png"
            alt="LeadScorpio"
            width={170}
            height={56}
            className="w-[112px] sm:w-[118px] h-auto object-contain"
            priority
          />
        </a>

        {/* CENTER — NAVIGATION: Refined Needle-Style Pill Hover with Copper Bloom */}
        <nav
          role="navigation"
          aria-label="Main Navigation"
          className="hidden md:flex items-center gap-1.5 lg:gap-2.5 p-1 rounded-full bg-[#071525]/[0.025]"
        >
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.id}
                href={link.href}
                className={`relative inline-flex items-center justify-center py-2 px-4 text-[13.5px] font-medium tracking-tight rounded-full transition-all duration-250 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C65D2E]/40 group ${
                  isActive
                    ? "text-[#071525] font-semibold bg-white shadow-sm"
                    : "text-[#526071] hover:text-[#071525] hover:bg-white/80 hover:shadow-[0_2px_8px_rgba(7,21,37,0.03)]"
                }`}
                aria-current={isActive ? "page" : undefined}
              >
                <span className="transition-colors duration-200">
                  {link.label}
                </span>
              </a>
            );
          })}
        </nav>

        {/* RIGHT — PRIMARY CTA: Premium Pill with Subtle Elevation */}
        <div className="hidden sm:flex items-center">
          <a
            href="#contact"
            className="relative inline-flex items-center justify-center gap-1.5 h-[38px] sm:h-[40px] px-5 rounded-full bg-[#C65D2E] text-white text-[12.5px] font-medium tracking-normal transition-all duration-250 ease-out hover:bg-[#A64B24] hover:shadow-[0_6px_20px_rgba(198,93,46,0.35)] hover:-translate-y-0.5 active:translate-y-0 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C65D2E]/50 shadow-sm"
          >
            <span>Book a Strategy Call</span>
            <ArrowUpRight
              size={13}
              aria-hidden="true"
              className="text-white/90 transition-transform duration-250 ease-out group-hover:translate-x-0.5 group-hover:-translate-y-0.5 motion-reduce:transition-none shrink-0"
            />
          </a>
        </div>

        {/* MOBILE — MENU TRIGGER */}
        <div className="flex items-center gap-2.5 sm:hidden">
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="p-2 text-[#071525] hover:text-[#C65D2E] hover:bg-[#071525]/[0.04] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C65D2E]/40 rounded-full transition-colors"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* MOBILE MENU PANEL */}
      {mobileOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Mobile Navigation"
          className="fixed inset-x-4 top-[76px] z-50 bg-[#FAF9F6] rounded-3xl p-5 flex flex-col gap-4 sm:hidden shadow-xl animate-in fade-in zoom-in-95 duration-200 pointer-events-auto"
        >
          <nav className="flex flex-col gap-1">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className={`flex items-center justify-between py-2.5 px-3.5 rounded-full text-sm font-medium transition-colors ${
                    isActive
                      ? "text-[#071525] bg-white font-semibold shadow-sm"
                      : "text-[#526071] hover:text-[#C65D2E] hover:bg-white/60"
                  }`}
                >
                  <span>{link.label}</span>
                </a>
              );
            })}
          </nav>

          <a
            href="#contact"
            onClick={() => setMobileOpen(false)}
            className="inline-flex items-center justify-center gap-1.5 w-full h-[42px] rounded-full bg-[#C65D2E] text-white text-xs font-medium tracking-normal transition-colors hover:bg-[#A64B24] shadow-sm"
          >
            <span>Book a Strategy Call</span>
            <ArrowUpRight size={13} />
          </a>
        </div>
      )}
    </header>
  );
}