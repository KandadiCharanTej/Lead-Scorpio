"use client";

import { motion } from "framer-motion";
import { Target, ArrowRight } from "lucide-react";
import DotPattern from "@/components/ui/dot-pattern-1";

export default function AboutSection() {
  return (
    <section id="about" className="bg-[var(--color-brand-white)]">
      {/* ========================================================================= */}
      {/* OUR PHILOSOPHY — REFINED EDITORIAL BRAND CARD                             */}
      {/* ========================================================================= */}
      <div className="py-20 sm:py-24 md:py-28 bg-[#FAF9F6] relative overflow-hidden">
        {/* Background Architectural Grid */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: `
              linear-gradient(rgba(7,21,37,0.03) 1px, transparent 1px),
              linear-gradient(90deg, rgba(7,21,37,0.03) 1px, transparent 1px)
            `,
            backgroundSize: "48px 48px",
          }}
        />

        <div className="max-w-6xl mx-auto px-6 md:px-10 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
            className="relative rounded-3xl sm:rounded-[2.5rem] bg-[#071525] border border-white/[0.08] shadow-[0_24px_70px_-20px_rgba(7,21,37,0.45)] overflow-hidden px-6 py-16 sm:px-12 sm:py-20 md:px-16 md:py-24 text-center select-none"
          >
            {/* Subtle radial glow inside card */}
            <div
              className="absolute inset-0 pointer-events-none opacity-40"
              style={{
                background: "radial-gradient(ellipse at 50% 20%, #0f2742 0%, #071525 75%)",
              }}
            />

            {/* Corner square anchors */}
            <div className="absolute -left-1.5 -top-1.5 h-3.5 w-3.5 bg-[#C65D2E] shadow-sm z-30" />
            <div className="absolute -bottom-1.5 -left-1.5 h-3.5 w-3.5 bg-[#C65D2E] shadow-sm z-30" />
            <div className="absolute -right-1.5 -top-1.5 h-3.5 w-3.5 bg-[#C65D2E] shadow-sm z-30" />
            <div className="absolute -bottom-1.5 -right-1.5 h-3.5 w-3.5 bg-[#C65D2E] shadow-sm z-30" />

            <div className="relative z-10 flex flex-col items-center max-w-4xl mx-auto">
              {/* Eyebrow */}
              <div className="flex flex-col items-center gap-2 mb-6 sm:mb-8">
                <div className="flex items-center gap-2">
                  <span className="text-[11px] sm:text-xs font-mono font-bold tracking-[0.25em] uppercase text-[#C65D2E]">
                    OUR PHILOSOPHY
                  </span>
                </div>
                <div className="w-8 h-px bg-[#C65D2E]/40" />
              </div>

              {/* Scaled-Down Balanced Headline */}
              <div className="flex flex-col items-center justify-center leading-none tracking-tight mb-6 sm:mb-8">
                <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-[4.75rem] font-black tracking-[-0.03em] text-[#C65D2E]">
                  Precision
                </h2>

                <span className="text-xl sm:text-2xl md:text-3xl lg:text-[2.25rem] font-bold tracking-tight text-[#526071] my-1 sm:my-1.5">
                  over
                </span>

                <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-[4.75rem] font-black tracking-[-0.03em] text-[#FAF9F6]">
                  volume<span className="text-[#C65D2E]">.</span>
                </h2>
              </div>

              {/* Supporting Description */}
              <p className="text-sm sm:text-base md:text-lg text-[#94A3B8] max-w-xl sm:max-w-2xl mx-auto leading-relaxed font-normal">
                Effective lead generation isn't about sending more messages. It's about understanding the business,
                identifying the right prospects, and creating conversations that matter.
              </p>
            </div>

            {/* Glowing Copper Horizon Arc at Bottom of Card */}
            <div className="absolute inset-x-0 bottom-0 flex justify-center pointer-events-none overflow-hidden h-32 sm:h-40">
              <svg
                className="w-full h-full"
                viewBox="0 0 1200 160"
                fill="none"
                preserveAspectRatio="none"
              >
                <defs>
                  <linearGradient id="cardArcGlowGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#C65D2E" stopOpacity="0" />
                    <stop offset="25%" stopColor="#C65D2E" stopOpacity="0.25" />
                    <stop offset="50%" stopColor="#FF9E6C" stopOpacity="1" />
                    <stop offset="75%" stopColor="#C65D2E" stopOpacity="0.25" />
                    <stop offset="100%" stopColor="#C65D2E" stopOpacity="0" />
                  </linearGradient>

                  <linearGradient id="cardArcCoreGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#C65D2E" stopOpacity="0" />
                    <stop offset="35%" stopColor="#FFA07A" stopOpacity="0.7" />
                    <stop offset="50%" stopColor="#FFFFFF" stopOpacity="1" />
                    <stop offset="65%" stopColor="#FFA07A" stopOpacity="0.7" />
                    <stop offset="100%" stopColor="#C65D2E" stopOpacity="0" />
                  </linearGradient>

                  <filter id="cardArcBlur" x="-20%" y="-100%" width="140%" height="300%">
                    <feGaussianBlur stdDeviation="12" result="blur" />
                    <feMerge>
                      <feMergeNode in="blur" />
                      <feMergeNode in="SourceGraphic" />
                    </feMerge>
                  </filter>
                </defs>

                {/* Diffused Glow */}
                <path
                  d="M -50 160 Q 600 20 1250 160"
                  stroke="url(#cardArcGlowGradient)"
                  strokeWidth="18"
                  strokeOpacity="0.5"
                  filter="url(#cardArcBlur)"
                />

                {/* Main Copper Line */}
                <path
                  d="M -50 160 Q 600 20 1250 160"
                  stroke="#C65D2E"
                  strokeWidth="2.5"
                  strokeOpacity="0.9"
                />

                {/* Incandescent Core Line */}
                <path
                  d="M -50 160 Q 600 20 1250 160"
                  stroke="url(#cardArcCoreGradient)"
                  strokeWidth="1.5"
                />
              </svg>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Why Scorpio? — Framed Architectural Quote with DotPattern */}
      <div className="py-24 sm:py-32 md:py-40 relative overflow-hidden bg-[#FAF9F6]">
        {/* Background Architectural Grid (outside the card, same as all other sections) */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: `
              linear-gradient(rgba(7,21,37,0.03) 1px, transparent 1px),
              linear-gradient(90deg, rgba(7,21,37,0.03) 1px, transparent 1px)
            `,
            backgroundSize: "48px 48px",
          }}
        />

        <div className="max-w-6xl mx-auto px-6 md:px-10 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
            className="relative flex flex-col items-center border border-[#C65D2E]/30 bg-white shadow-[0_20px_60px_-15px_rgba(7,21,37,0.07)] overflow-hidden"
          >
            {/* Corner square anchors */}
            <div className="absolute -left-2.5 -top-2.5 h-4.5 w-4.5 bg-[#C65D2E] shadow-xs z-30" />
            <div className="absolute -bottom-2.5 -left-2.5 h-4.5 w-4.5 bg-[#C65D2E] shadow-xs z-30" />
            <div className="absolute -right-2.5 -top-2.5 h-4.5 w-4.5 bg-[#C65D2E] shadow-xs z-30" />
            <div className="absolute -bottom-2.5 -right-2.5 h-4.5 w-4.5 bg-[#C65D2E] shadow-xs z-30" />

            {/* Content Container */}
            <div className="relative z-20 w-full px-6 py-12 sm:px-12 sm:py-14 md:px-16 md:py-18 text-left">
              {/* Eyebrow badge */}
              <div className="flex items-center gap-3 mb-6 sm:mb-7">
                <span className="w-2 h-2 rounded-full bg-[#C65D2E]" />
                <p className="text-xs sm:text-sm font-bold tracking-[0.2em] uppercase text-[#C65D2E]">
                  Why Scorpio? — The Principle
                </p>
              </div>

              {/* Bold Alternating Quote Typography */}
              <div className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl tracking-tighter text-[#071525] leading-[1.12] sm:leading-[1.1] mb-8 sm:mb-10">
                <div className="flex flex-wrap items-baseline gap-x-2 sm:gap-x-3">
                  <span className="font-extrabold">&ldquo;Focus,</span>
                  <span className="font-extralight text-[#526071]">patience,</span>
                  <span className="font-extrabold text-[#C65D2E]">precision,</span>
                </div>
                <div className="flex flex-wrap items-baseline gap-x-2 sm:gap-x-3">
                  <span className="font-extralight text-[#526071]">and</span>
                  <span className="font-extrabold">persistence</span>
                  <span className="font-extralight text-[#526071]">are the</span>
                </div>
                <div className="flex flex-wrap items-baseline gap-x-2 sm:gap-x-3">
                  <span className="font-extralight text-[#526071]">foundations of</span>
                  <span className="font-extrabold text-[#071525]">every qualified</span>
                </div>
                <div className="flex flex-wrap items-baseline gap-x-2 sm:gap-x-3">
                  <span className="font-extrabold text-[#C65D2E]">pipeline.&rdquo;</span>
                </div>
              </div>

              {/* Bottom Details Footer inside the card */}
              <div className="pt-7 sm:pt-8 border-t border-[#071525]/10 flex flex-col md:flex-row md:items-center justify-between gap-5 sm:gap-6">
                <p className="text-sm sm:text-base text-[#526071] max-w-2xl leading-relaxed">
                  We don’t rush. We don’t spray and pray. We identify, engage, and build the right conversations with verified B2B decision-makers — systematically.
                </p>

                <div className="flex items-center gap-2 text-xs sm:text-sm font-bold tracking-[0.15em] uppercase text-[#071525] shrink-0">
                  <span className="text-[#C65D2E]">LEADSCORPIO</span>
                  <span className="text-[#071525]/30">/</span>
                  <span className="text-[#526071]">OUTBOUND DISCIPLINE</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
