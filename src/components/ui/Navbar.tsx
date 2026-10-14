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
      setScrolled(window.scrollY > 25);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Track active section via IntersectionObserver with hysteresis to avoid flickering
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "-20% 0px -50% 0px",
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
      className="fixed top-0 left-0 right-0 z-50 flex justify-center pointer-events-none transition-all duration-300 px-4 sm:px-6 pt-3 sm:pt-4"
    >
      <div
        className={`w-full max-w-6xl pointer-events-auto transition-all duration-300 rounded-full flex items-center justify-between px-4 sm:px-6 md:px-7 ${
          scrolled
            ? "h-[60px] sm:h-[64px] bg-[#FAF9F6]/90 backdrop-blur-md border border-[#071525]/[0.08] shadow-[0_8px_30px_rgba(7,21,37,0.06)]"
            : "h-[66px] sm:h-[70px] bg-[#FAF9F6]/75 backdrop-blur-sm border border-[#071525]/[0.05]"
        }`}
      >
        {/* Brand: Original LeadScorpio Logo */}
        <a
          href="#"
          className="flex items-center shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C65D2E]/40 rounded-full transition-transform duration-200 hover:scale-[1.02] active:scale-[0.98]"
          aria-label="LeadScorpio - Back to top"
        >
          <Image
            src="/logo-dark.png"
            alt="LeadScorpio"
            width={200}
            height={64}
            className="w-[130px] sm:w-[145px] md:w-[155px] h-auto object-contain"
            priority
          />
        </a>

        {/* Desktop Navigation Links */}
        <nav
          role="navigation"
          aria-label="Main Navigation"
          className="hidden md:flex items-center gap-1 lg:gap-1.5 p-1 rounded-full bg-[#071525]/[0.02]"
        >
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.id}
                href={link.href}
                className={`relative px-4 py-2 text-[13px] font-medium tracking-tight rounded-full transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C65D2E]/40 ${
                  isActive
                    ? "text-[#071525] font-semibold bg-white shadow-xs"
                    : "text-[#526071] hover:text-[#071525] hover:bg-white/70"
                }`}
                aria-current={isActive ? "page" : undefined}
              >
                <span>{link.label}</span>
              </a>
            );
          })}
        </nav>

        {/* Primary CTA Button: Book a Strategy Call */}
        <div className="hidden sm:flex items-center">
          <a
            href="#contact"
            className="relative inline-flex items-center justify-center gap-1.5 h-[38px] sm:h-[40px] px-5 rounded-full bg-[#C65D2E] text-white text-[13px] font-semibold tracking-normal transition-all duration-250 ease-out hover:bg-[#A64B24] hover:shadow-[0_6px_20px_rgba(198,93,46,0.32)] hover:-translate-y-0.5 active:translate-y-0 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C65D2E]/50 shadow-xs"
          >
            <span>Book a Strategy Call</span>
            <ArrowUpRight
              size={14}
              aria-hidden="true"
              className="text-white/90 transition-transform duration-250 ease-out group-hover:translate-x-0.5 group-hover:-translate-y-0.5 shrink-0"
            />
          </a>
        </div>

        {/* Mobile Hamburger Trigger */}
        <div className="flex items-center gap-2 sm:hidden">
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

      {/* Mobile Drawer Panel */}
      {mobileOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Mobile Navigation"
          className="fixed inset-x-4 top-[74px] z-50 bg-[#FAF9F6]/95 backdrop-blur-xl border border-[#071525]/[0.08] rounded-3xl p-5 flex flex-col gap-4 sm:hidden shadow-xl animate-in fade-in zoom-in-95 duration-200 pointer-events-auto"
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
                      ? "text-[#071525] bg-white font-semibold shadow-xs"
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
            className="inline-flex items-center justify-center gap-1.5 w-full h-[42px] rounded-full bg-[#C65D2E] text-white text-xs font-semibold tracking-normal transition-colors hover:bg-[#A64B24] shadow-xs"
          >
            <span>Book a Strategy Call</span>
            <ArrowUpRight size={13} />
          </a>
        </div>
      )}
    </header>
  );
}