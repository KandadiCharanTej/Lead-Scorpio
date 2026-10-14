"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Compass,
  Target,
  Users,
  ShieldCheck,
  Send,
  MessageSquare,
  Sparkles,
  CalendarCheck,
  ArrowRight,
} from "lucide-react";

interface Step {
  number: string;
  title: string;
  description: string;
  icon: any;
}

const steps: Step[] = [
  {
    number: "01",
    title: "Understand",
    description: "Learn the client's business, offer, customers, sales process, and goals.",
    icon: Compass,
  },
  {
    number: "02",
    title: "Define Your Ideal Customer",
    description: "Establish the ICP, buyer personas, industries, company size, and decision-maker roles.",
    icon: Target,
  },
  {
    number: "03",
    title: "Build Your Prospect List",
    description: "Research relevant companies and identify the right decision-makers.",
    icon: Users,
  },
  {
    number: "04",
    title: "Verify & Enrich",
    description: "Check available contact information and enrich prospect records for accurate targeting.",
    icon: ShieldCheck,
  },
  {
    number: "05",
    title: "Create the Outreach Strategy",
    description: "Develop channel selection, messaging, campaign structure, and follow-up sequences.",
    icon: Sparkles,
  },
  {
    number: "06",
    title: "Reach Your Prospects",
    description: "Execute personalized LinkedIn outreach, cold email, and cold calling.",
    icon: Send,
  },
  {
    number: "07",
    title: "Follow Up & Qualify",
    description: "Manage responses, follow up appropriately, assess fit and interest, and identify qualified opportunities.",
    icon: MessageSquare,
  },
  {
    number: "08",
    title: "Book, Handoff & Optimize",
    description: "Schedule qualified meetings, hand them over to the sales team, review performance, and improve the next campaign.",
    icon: CalendarCheck,
  },
];

export default function HowItWorksSection() {
  const [hoveredStep, setHoveredStep] = useState<number | null>(null);

  return (
    <section
      id="how-it-works"
      className="py-24 md:py-32 bg-[#071525] relative overflow-hidden border-t border-[#1C2C3E] scroll-mt-28"
    >
      {/* Ambient background glows */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
        <div
          className="absolute -top-32 left-1/4 w-[600px] h-[600px] rounded-full opacity-20 blur-[140px]"
          style={{ background: "radial-gradient(circle, #C65D2E 0%, transparent 70%)" }}
        />
        <div
          className="absolute bottom-10 right-1/4 w-[700px] h-[700px] rounded-full opacity-15 blur-[160px]"
          style={{ background: "radial-gradient(circle, #FF7A3D 0%, transparent 70%)" }}
        />
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(#FAF9F6 1px, transparent 1px), linear-gradient(90deg, #FAF9F6 1px, transparent 1px)`,
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-10 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center max-w-3xl mx-auto mb-16 md:mb-20"
        >
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[#FF7A3D]" />
            <span className="text-xs font-mono font-bold tracking-[0.2em] uppercase text-[#FF7A3D]">
              OUR PROCESS
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-[#FAF9F6] mb-4 leading-tight">
            From Business Understanding to Qualified Meetings
          </h2>
          <p className="text-base sm:text-lg text-[#B8C3D0] leading-relaxed">
            A structured outbound process built around your business, your ideal customers, and your sales goals.
          </p>
        </motion.div>

        {/* ========================================================================= */}
        {/* DESKTOP CONNECTED WINDING PATH (2 Rows of 4 Cards with S-curve connector) */}
        {/* ========================================================================= */}
        <div className="hidden lg:block relative mb-12">
          {/* SVG S-Curve Pipeline Ribbon Connecting Row 1 (L->R) and Row 2 (R->L) */}
          <svg
            className="absolute inset-0 w-full h-full pointer-events-none z-0"
            viewBox="0 0 1200 680"
            fill="none"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <defs>
              <linearGradient id="pathGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#C65D2E" stopOpacity="0.4" />
                <stop offset="50%" stopColor="#FF7A3D" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#FFA26B" stopOpacity="0.5" />
              </linearGradient>
              <filter id="orangeGlow" x="-20%" y="-20%" width="140%" height="140%">
                <feGaussianBlur stdDeviation="6" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>

            {/* Glowing Winding Path: Row 1 (x: 140 -> 1060, y: 155), loops down through x: 1140, y: 340, to Row 2 (x: 1060 -> 140, y: 525) */}
            <path
              d="M 140 155 L 1060 155 C 1150 155, 1150 525, 1060 525 L 140 525"
              stroke="#0C1D30"
              strokeWidth="24"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M 140 155 L 1060 155 C 1150 155, 1150 525, 1060 525 L 140 525"
              stroke="url(#pathGradient)"
              strokeWidth="12"
              strokeLinecap="round"
              strokeLinejoin="round"
              filter="url(#orangeGlow)"
              opacity="0.45"
            />
            <motion.path
              d="M 140 155 L 1060 155 C 1150 155, 1150 525, 1060 525 L 140 525"
              stroke="#FF7A3D"
              strokeWidth="3"
              strokeDasharray="8 8"
              strokeLinecap="round"
              strokeLinejoin="round"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 2, ease: [0.16, 1, 0.3, 1] }}
            />
          </svg>

          {/* Row 1: Steps 01 to 04 (Left to Right) */}
          <div className="grid grid-cols-4 gap-6 relative z-10 mb-20">
            {steps.slice(0, 4).map((step, idx) => {
              const Icon = step.icon;
              const isHovered = hoveredStep === idx;
              return (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  onMouseEnter={() => setHoveredStep(idx)}
                  onMouseLeave={() => setHoveredStep(null)}
                  className={`relative p-6 rounded-2xl backdrop-blur-md transition-all duration-300 flex flex-col justify-between group min-h-[300px] ${
                    isHovered
                      ? "bg-[#0D2238] border-2 border-[#FFA26B] shadow-[0_16px_40px_rgba(2,8,16,0.9),0_0_25px_rgba(255,122,61,0.35)] -translate-y-1.5"
                      : "bg-[#091A2C]/90 border border-[#21354A] hover:border-[#FF7A3D]/70 shadow-xl"
                  }`}
                >
                  <div>
                    {/* Top Row: Number Badge & Icon */}
                    <div className="flex items-center justify-between mb-5">
                      <div className="w-12 h-12 rounded-xl bg-[#0F263D] border border-[#21354A] flex items-center justify-center group-hover:border-[#FF7A3D] group-hover:bg-[#FF7A3D]/10 transition-colors duration-300">
                        <Icon size={22} className="text-[#FF7A3D] transition-transform duration-300 group-hover:scale-110" />
                      </div>
                      <span className="font-mono text-3xl font-black text-[#FF7A3D]/90 group-hover:text-[#FFA26B] transition-colors">
                        {step.number}
                      </span>
                    </div>

                    {/* Step Title */}
                    <h3 className="text-xl font-bold text-[#FAF9F6] tracking-tight mb-2 group-hover:text-[#FFA26B] transition-colors">
                      {step.title}
                    </h3>

                    {/* Step Description */}
                    <p className="text-xs text-[#B8C3D0] leading-relaxed">
                      {step.description}
                    </p>
                  </div>

                  {/* Step Sequence Marker Pin at Bottom */}
                  <div className="pt-4 mt-4 border-t border-[#1C2C3E] flex items-center justify-between text-[11px] font-mono text-[#B8C3D0]/60">
                    <span>STEP {step.number} OF 08</span>
                    <span className="w-2 h-2 rounded-full bg-[#FF7A3D] group-hover:animate-ping" />
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Row 2: Steps 05 to 08 (Displayed left-to-right as 05, 06, 07, 08 for optimal reading order) */}
          <div className="grid grid-cols-4 gap-6 relative z-10">
            {steps.slice(4, 8).map((step, idx) => {
              const actualIdx = idx + 4;
              const Icon = step.icon;
              const isHovered = hoveredStep === actualIdx;
              const isLast = actualIdx === 7;
              return (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: actualIdx * 0.1 }}
                  onMouseEnter={() => setHoveredStep(actualIdx)}
                  onMouseLeave={() => setHoveredStep(null)}
                  className={`relative p-6 rounded-2xl backdrop-blur-md transition-all duration-300 flex flex-col justify-between group min-h-[300px] ${
                    isHovered
                      ? "bg-[#0D2238] border-2 border-[#FFA26B] shadow-[0_16px_40px_rgba(2,8,16,0.9),0_0_25px_rgba(255,122,61,0.35)] -translate-y-1.5"
                      : isLast
                      ? "bg-[#0A1D31]/95 border-2 border-[#FF7A3D]/70 shadow-[0_12px_36px_rgba(2,8,16,0.85)]"
                      : "bg-[#091A2C]/90 border border-[#21354A] hover:border-[#FF7A3D]/70 shadow-xl"
                  }`}
                >
                  <div>
                    {/* Top Row: Number Badge & Icon */}
                    <div className="flex items-center justify-between mb-5">
                      <div className="w-12 h-12 rounded-xl bg-[#0F263D] border border-[#21354A] flex items-center justify-center group-hover:border-[#FF7A3D] group-hover:bg-[#FF7A3D]/10 transition-colors duration-300">
                        <Icon size={22} className="text-[#FF7A3D] transition-transform duration-300 group-hover:scale-110" />
                      </div>
                      <div className="flex items-center gap-2">
                        {isLast && (
                          <span className="px-2 py-0.5 rounded-full bg-[#FF7A3D]/20 border border-[#FF7A3D]/50 text-[10px] font-mono font-bold text-[#FFA26B] uppercase tracking-wider">
                            GOAL
                          </span>
                        )}
                        <span className="font-mono text-3xl font-black text-[#FF7A3D]/90 group-hover:text-[#FFA26B] transition-colors">
                          {step.number}
                        </span>
                      </div>
                    </div>

                    {/* Step Title */}
                    <h3 className="text-xl font-bold text-[#FAF9F6] tracking-tight mb-2 group-hover:text-[#FFA26B] transition-colors">
                      {step.title}
                    </h3>

                    {/* Step Description */}
                    <p className="text-xs text-[#B8C3D0] leading-relaxed">
                      {step.description}
                    </p>
                  </div>

                  {/* Step Sequence Marker Pin at Bottom */}
                  <div className="pt-4 mt-4 border-t border-[#1C2C3E] flex items-center justify-between text-[11px] font-mono text-[#B8C3D0]/60">
                    <span>STEP {step.number} OF 08</span>
                    <span className="w-2 h-2 rounded-full bg-[#FF7A3D] group-hover:animate-ping" />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* ========================================================================= */}
        {/* MOBILE & TABLET VERTICAL TIMELINE / STACKED CARDS                         */}
        {/* ========================================================================= */}
        <div className="lg:hidden relative">
          {/* Vertical Glowing Connector Line */}
          <div className="absolute left-[27px] sm:left-[31px] top-6 bottom-6 w-0.5 bg-gradient-to-b from-[#FF7A3D] via-[#C65D2E] to-[#FFA26B] opacity-40" />

          <div className="space-y-6 sm:space-y-8 relative z-10">
            {steps.map((step, idx) => {
              const Icon = step.icon;
              const isLast = idx === 7;
              return (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.08 }}
                  className="flex items-start gap-4 sm:gap-6"
                >
                  {/* Numbered Circular Pin */}
                  <div className="relative shrink-0 mt-1">
                    <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#08182B] border-2 border-[#FF7A3D] flex items-center justify-center shadow-[0_0_16px_rgba(255,122,61,0.3)]">
                      <Icon size={20} className="text-[#FF7A3D]" />
                    </div>
                  </div>

                  {/* Step Card Content */}
                  <div
                    className={`flex-1 p-5 sm:p-6 rounded-2xl backdrop-blur-md shadow-xl ${
                      isLast
                        ? "bg-[#0A1D31] border-2 border-[#FF7A3D]"
                        : "bg-[#091A2C]/90 border border-[#21354A]"
                    }`}
                  >
                    <div className="flex items-center justify-between mb-1.5">
                      <span className="text-xl sm:text-2xl font-mono font-black text-[#FF7A3D]">
                        {step.number}
                      </span>
                      {isLast && (
                        <span className="px-2 py-0.5 rounded-full bg-[#FF7A3D]/20 border border-[#FF7A3D]/50 text-[10px] font-mono font-bold text-[#FFA26B] uppercase tracking-wider">
                          GOAL
                        </span>
                      )}
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold text-[#FAF9F6] tracking-tight mb-1.5">
                      {step.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#B8C3D0] leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Bottom Callout / Assurance Strip */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-14 pt-8 border-t border-[#1C2C3E] flex flex-col sm:flex-row items-center justify-between gap-6"
        >
          <div className="flex items-center gap-3 text-sm text-[#B8C3D0]">
            <span className="w-2 h-2 rounded-full bg-[#FF7A3D]" />
            <span>Structured outbound execution with full transparency and zero guesswork.</span>
          </div>

          <a
            href="#contact"
            className="inline-flex items-center gap-2 text-sm font-bold text-[#FAF9F6] hover:text-[#FF7A3D] transition-colors group"
          >
            <span>Start your outbound campaign</span>
            <ArrowRight
              size={15}
              className="text-[#FF7A3D] group-hover:translate-x-1 transition-transform"
            />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
