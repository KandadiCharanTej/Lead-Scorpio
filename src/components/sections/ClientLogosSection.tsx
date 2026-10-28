"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

const CLIENT_LOGOS = [
  {
    name: "Kinetic Flow AI",
    src: "/clients/kinetic-flow-ai.png",
    url: "https://www.kineticflowai.com/",
    width: 1024,
    height: 409,
    // Enlarged for prominent brand presence
    className: "h-11 sm:h-12 md:h-14 lg:h-16 w-auto",
  },
  {
    name: "NIT Digital",
    src: "/clients/nitdigital.png",
    url: "https://nitdigital.in/",
    width: 1024,
    height: 576,
    // Sized to match optical weight with Kinetic Flow AI
    className: "h-13 sm:h-14 md:h-16 lg:h-18 w-auto",
  },
];

// CSS filter to convert any image to deep navy #071525 (brand dark)
const NAVY_FILTER =
  "brightness(0) saturate(100%) invert(7%) sepia(36%) saturate(1400%) hue-rotate(183deg) brightness(95%) contrast(98%)";

export default function ClientLogosSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-60px" });
  const [hoveredLogo, setHoveredLogo] = useState<string | null>(null);

  return (
    <section
      ref={sectionRef}
      aria-label="Trusted by our clients"
      className="relative bg-[var(--color-brand-white)] overflow-hidden border-t border-[var(--color-brand-navy)]/8"
    >
      {/* Fine 48px grid — identical to all other sections */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(rgba(7,21,37,0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(7,21,37,0.03) 1px, transparent 1px)
          `,
          backgroundSize: "48px 48px",
        }}
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-12 py-7 md:py-8 relative z-10">
        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="flex justify-center mb-6"
        >
          <span className="text-xs font-mono font-bold tracking-[0.2em] uppercase text-[var(--color-brand-copper)]">
            Trusted by
          </span>
        </motion.div>

        {/* Logo strip */}
        <motion.ul
          role="list"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={{
            hidden: {},
            visible: {
              transition: { staggerChildren: 0.12, delayChildren: 0.1 },
            },
          }}
          className="flex flex-wrap justify-center items-center gap-x-14 gap-y-6 md:gap-x-20 lg:gap-x-24"
        >
          {CLIENT_LOGOS.map((logo) => {
            const isHovered = hoveredLogo === logo.name;
            return (
              <motion.li
                key={logo.name}
                variants={{
                  hidden: { opacity: 0, y: 12 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] },
                  },
                }}
                className="flex items-center justify-center"
              >
                <Link
                  href={logo.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  title={`Visit ${logo.name} (${logo.url})`}
                  onMouseEnter={() => setHoveredLogo(logo.name)}
                  onMouseLeave={() => setHoveredLogo(null)}
                  className={`group flex items-center justify-center transition-all duration-300 transform hover:scale-105 cursor-pointer ${
                    isHovered ? "opacity-100" : "opacity-75"
                  }`}
                >
                  <Image
                    src={logo.src}
                    alt={logo.name}
                    width={logo.width}
                    height={logo.height}
                    className={`${logo.className} object-contain transition-all duration-300`}
                    style={{
                      filter: isHovered ? "none" : NAVY_FILTER,
                    }}
                    draggable={false}
                    priority
                  />
                </Link>
              </motion.li>
            );
          })}
        </motion.ul>
      </div>
    </section>
  );
}
