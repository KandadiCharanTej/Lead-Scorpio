"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const CLIENT_LOGOS = [
  {
    name: "Kinetic Flow AI",
    src: "/clients/kinetic-flow-ai.png",
    url: "https://www.kineticflowai.com/",
    width: 1024,
    height: 409,
    // Horizontal logo: slightly shorter height so total visual mass matches the square-ish logo
    className: "h-9 sm:h-10 md:h-11 w-auto",
  },
  {
    name: "NIT Digital",
    src: "/clients/nitdigital.png",
    url: "https://nitdigital.in/",
    width: 1024,
    height: 843,
    // Square-ish logo: matching balanced height for optical harmony
    className: "h-11 sm:h-12 md:h-13 w-auto",
  },
];

// CSS filter to convert any image to deep navy #071525 (dark)
const NAVY_FILTER =
  "brightness(0) saturate(100%) invert(7%) sepia(36%) saturate(1400%) hue-rotate(183deg) brightness(95%) contrast(98%)";

export default function ClientLogosSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-60px" });

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

      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-12 py-6 md:py-7 relative z-10">
        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="flex justify-center mb-5"
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
          className="flex flex-wrap justify-center items-center gap-x-14 gap-y-5 md:gap-x-20 lg:gap-x-24"
        >
          {CLIENT_LOGOS.map((logo) => (
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
                className="group flex items-center justify-center opacity-65 hover:opacity-100 transition-all duration-300 transform hover:scale-105 cursor-pointer"
              >
                <Image
                  src={logo.src}
                  alt={logo.name}
                  width={logo.width}
                  height={logo.height}
                  className={`${logo.className} object-contain transition-all duration-300`}
                  style={{
                    filter: NAVY_FILTER,
                  }}
                  draggable={false}
                  priority
                />
              </Link>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
}
