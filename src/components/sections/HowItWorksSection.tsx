"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, BarChart3 } from "lucide-react";

// ——————————————————————————————————————————————————
// EIGHT PROCESS STAGES (EXACT SPECIFIED WORDING)
// Steps 01, 03, 05, 07 appear ABOVE the line
// Steps 02, 04, 06, 08 appear BELOW the line
// ——————————————————————————————————————————————————
interface ProcessStage {
  step: string;
  title: string;
  description: string;
  isAbove: boolean; // true = above the line, false = below the line
}

const processStages: ProcessStage[] = [
  {
    step: "01",
    title: "Understand",
    description: "Learn your business, offer, and goals.",
    isAbove: true,
  },
  {
    step: "02",
    title: "Define Your Ideal Customer",
    description: "Identify ideal companies and decision-makers.",
    isAbove: false,
  },
  {
    step: "03",
    title: "Build Your Prospect List",
    description: "Find relevant companies and contacts.",
    isAbove: true,
  },
  {
    step: "04",
    title: "Verify & Enrich",
    description: "Check and complete prospect details.",
    isAbove: false,
  },
  {
    step: "05",
    title: "Create the Outreach Strategy",
    description: "Plan channels, messaging, and follow-ups.",
    isAbove: true,
  },
  {
    step: "06",
    title: "Reach Your Prospects",
    description: "Launch personalized LinkedIn, email, and call outreach.",
    isAbove: false,
  },
  {
    step: "07",
    title: "Follow Up & Qualify",
    description: "Manage replies and identify genuine interest.",
    isAbove: true,
  },
  {
    step: "08",
    title: "Book, Handoff & Optimize",
    description: "Schedule meetings and improve future campaigns.",
    isAbove: false,
  },
];

export default function HowItWorksSection() {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  return (
    <section
      id="how-it-works"
      className="py-20 md:py-28 bg-[var(--color-brand-white)] relative overflow-hidden border-t border-[#071525]/[0.08] scroll-mt-20"
    >
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

      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-12 relative z-10">
        {/* ========================================================================= */}
        {/* SECTION HEADER                                                            */}
        {/* ========================================================================= */}
        <div className="max-w-3xl mb-14 md:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col items-start gap-2.5"
          >
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2">
              <span className="text-xs font-mono font-bold tracking-[0.2em] uppercase text-[#C65D2E]">
                OUR PROCESS
              </span>
            </div>

            {/* Headline */}
            <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-black tracking-tight leading-[1.12] text-[#071525]">
              From Business Understanding <br className="hidden sm:inline" />
              to <span className="text-[#C65D2E]">Qualified Meetings.</span>
            </h2>

            {/* Description */}
            <p className="text-base sm:text-lg text-[#526071] leading-relaxed pt-1 max-w-2xl">
              A structured outbound process built around your business, your ideal customers, and your sales goals.
            </p>
          </motion.div>
        </div>

        {/* ========================================================================= */}
        {/* DESKTOP STRAIGHT HORIZONTAL TIMELINE (ALL 8 STEPS VISIBLE TOGETHER)        */}
        {/* Straight copper line, 8 circular copper nodes, alternating above & below  */}
        {/* ========================================================================= */}
        <div className="hidden lg:block relative w-full my-8 select-none">
          {/* Main Container with 8 Columns */}
          <div className="relative grid grid-cols-8 gap-3 xl:gap-4 items-center">
            {/* 1. Continuous Straight Horizontal Copper Line Through All Nodes */}
            {/* Positioned exactly through vertical center (50%) */}
            <div className="absolute inset-x-4 top-1/2 -translate-y-1/2 h-[2px] bg-[#C65D2E]/30 pointer-events-none z-0">
              <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                style={{ transformOrigin: "left center" }}
                className="w-full h-full bg-[#C65D2E]"
              />
            </div>

            {/* 2. Eight Columns with Alternating Content Above & Below */}
            {processStages.map((stage, idx) => {
              const isHovered = hoveredIdx === idx;

              return (
                <div
                  key={stage.step}
                  onMouseEnter={() => setHoveredIdx(idx)}
                  onMouseLeave={() => setHoveredIdx(null)}
                  className="relative flex flex-col items-center group cursor-default"
                >
                  {/* ——————————————————————————————————————————
                      UPPER HALF (Steps 01, 03, 05, 07)
                      Fixed height: 160px so all nodes align perfectly
                      —————————————————————————————————————————— */}
                  <div className="w-full h-[165px] flex flex-col justify-end items-start px-1">
                    {stage.isAbove ? (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{
                          duration: 0.5,
                          delay: idx * 0.08,
                          ease: [0.16, 1, 0.3, 1],
                        }}
                        className="w-full pb-3"
                      >
                        {/* Copper Number */}
                        <span className="text-2xl xl:text-3xl font-mono font-black text-[#C65D2E] block leading-none mb-1.5 transition-transform duration-200 group-hover:scale-105 origin-left">
                          {stage.step}
                        </span>
                        {/* Title */}
                        <h3 className="text-xs xl:text-[13px] font-bold text-[#071525] leading-snug tracking-tight mb-1">
                          {stage.title}
                        </h3>
                        {/* Description */}
                        <p className="text-[10px] xl:text-[11px] text-[#526071] leading-relaxed">
                          {stage.description}
                        </p>
                      </motion.div>
                    ) : null}
                  </div>

                  {/* ——————————————————————————————————————————
                      CENTER LINE & MARKER
                      Top stalk (if step is above), Circular Marker, Bottom stalk (if step is below)
                      —————————————————————————————————————————— */}
                  <div className="relative flex flex-col items-center z-10 py-1">
                    {/* Top vertical connecting stalk for above steps */}
                    <div
                      className={`w-[1.5px] h-3.5 transition-colors duration-200 ${
                        stage.isAbove
                          ? isHovered
                            ? "bg-[#C65D2E]"
                            : "bg-[#C65D2E]/60"
                          : "opacity-0"
                      }`}
                    />

                    {/* Circular Numbered Copper Marker */}
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.4,
                        delay: 0.15 + idx * 0.08,
                        type: "spring",
                        stiffness: 260,
                        damping: 20,
                      }}
                      className={`w-7 h-7 rounded-full bg-[#C65D2E] text-white flex items-center justify-center text-[10px] font-mono font-bold shadow-sm transition-all duration-300 ${
                        isHovered
                          ? "scale-125 bg-[#B34F22] shadow-[0_0_12px_rgba(198,93,46,0.4)]"
                          : ""
                      }`}
                    >
                      {stage.step}
                    </motion.div>

                    {/* Bottom vertical connecting stalk for below steps */}
                    <div
                      className={`w-[1.5px] h-3.5 transition-colors duration-200 ${
                        !stage.isAbove
                          ? isHovered
                            ? "bg-[#C65D2E]"
                            : "bg-[#C65D2E]/60"
                          : "opacity-0"
                      }`}
                    />
                  </div>

                  {/* ——————————————————————————————————————————
                      LOWER HALF (Steps 02, 04, 06, 08)
                      Fixed height: 160px so all nodes align perfectly
                      —————————————————————————————————————————— */}
                  <div className="w-full h-[165px] flex flex-col justify-start items-start px-1">
                    {!stage.isAbove ? (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{
                          duration: 0.5,
                          delay: idx * 0.08,
                          ease: [0.16, 1, 0.3, 1],
                        }}
                        className="w-full pt-3"
                      >
                        {/* Copper Number */}
                        <span className="text-2xl xl:text-3xl font-mono font-black text-[#C65D2E] block leading-none mb-1.5 transition-transform duration-200 group-hover:scale-105 origin-left">
                          {stage.step}
                        </span>
                        {/* Title */}
                        <h3 className="text-xs xl:text-[13px] font-bold text-[#071525] leading-snug tracking-tight mb-1">
                          {stage.title}
                        </h3>
                        {/* Description */}
                        <p className="text-[10px] xl:text-[11px] text-[#526071] leading-relaxed">
                          {stage.description}
                        </p>
                      </motion.div>
                    ) : null}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* ========================================================================= */}
        {/* TABLET RESPONSIVE TIMELINE (SM TO LG)                                     */}
        {/* Clean, horizontally scrollable straight timeline without cramped text    */}
        {/* ========================================================================= */}
        <div className="hidden sm:block lg:hidden relative my-10 overflow-x-auto pb-4 scrollbar-none select-none">
          <div className="min-w-[760px] relative">
            {/* Straight Copper Line */}
            <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-[2px] bg-[#C65D2E] z-0" />

            <div className="grid grid-cols-8 gap-3 relative z-10">
              {processStages.map((stage) => (
                <div key={stage.step} className="flex flex-col items-center">
                  {/* Top Block */}
                  <div className="h-[145px] w-full flex flex-col justify-end items-start px-1 pb-2">
                    {stage.isAbove && (
                      <div>
                        <span className="text-xl font-mono font-bold text-[#C65D2E] block mb-1">
                          {stage.step}
                        </span>
                        <h3 className="text-xs font-bold text-[#071525] mb-0.5 leading-tight">
                          {stage.title}
                        </h3>
                        <p className="text-[9.5px] text-[#526071] leading-tight">
                          {stage.description}
                        </p>
                      </div>
                    )}
                  </div>

                  {/* Node */}
                  <div className="w-6 h-6 rounded-full bg-[#C65D2E] text-white flex items-center justify-center text-[9px] font-mono font-bold my-1 shrink-0">
                    {stage.step}
                  </div>

                  {/* Bottom Block */}
                  <div className="h-[145px] w-full flex flex-col justify-start items-start px-1 pt-2">
                    {!stage.isAbove && (
                      <div>
                        <span className="text-xl font-mono font-bold text-[#C65D2E] block mb-1">
                          {stage.step}
                        </span>
                        <h3 className="text-xs font-bold text-[#071525] mb-0.5 leading-tight">
                          {stage.title}
                        </h3>
                        <p className="text-[9.5px] text-[#526071] leading-tight">
                          {stage.description}
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* MOBILE COMPACT VERTICAL TIMELINE (< 640px)                                */}
        {/* One straight vertical line, all eight steps beside it in order           */}
        {/* ========================================================================= */}
        <div className="sm:hidden relative my-10 pl-2">
          {/* Straight Vertical Line */}
          <div className="absolute left-[20px] top-4 bottom-4 w-[2px] bg-[#C65D2E]/60 z-0" />

          <div className="space-y-6 relative z-10">
            {processStages.map((stage, idx) => (
              <motion.div
                key={stage.step}
                initial={{ opacity: 0, x: -12 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className="flex items-start gap-4"
              >
                {/* Numbered Circular Copper Marker */}
                <div className="w-7 h-7 rounded-full bg-[#C65D2E] text-white flex items-center justify-center text-[10px] font-mono font-bold shrink-0 mt-0.5 shadow-xs">
                  {stage.step}
                </div>

                {/* Content */}
                <div className="flex-1">
                  <div className="flex items-baseline gap-1.5 mb-0.5">
                    <span className="text-xs font-mono font-bold text-[#C65D2E]">
                      {stage.step}
                    </span>
                    <h3 className="text-sm font-bold text-[#071525] tracking-tight">
                      {stage.title}
                    </h3>
                  </div>
                  <p className="text-xs text-[#526071] leading-relaxed">
                    {stage.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* ========================================================================= */}
        {/* CLOSING HORIZONTAL CTA STRIP                                              */}
        {/* ========================================================================= */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="p-5 sm:p-6 rounded-2xl bg-white border border-[#071525]/[0.08] shadow-sm flex flex-col md:flex-row items-center justify-between gap-5 mt-8 md:mt-12"
        >
          <div className="flex items-center gap-3.5">
            <div className="w-9 h-9 rounded-xl bg-[#F7E7DF] text-[#C65D2E] flex items-center justify-center shrink-0">
              <BarChart3 size={18} strokeWidth={2.5} />
            </div>
            <p className="text-sm sm:text-base font-bold text-[#071525]">
              Structured outbound execution with full transparency and zero guesswork.
            </p>
          </div>

          <a
            href="#contact"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-[#C65D2E] text-white text-sm font-bold shadow-[0_8px_20px_rgba(198,93,46,0.25)] hover:bg-[#B34F22] hover:shadow-[0_10px_25px_rgba(198,93,46,0.35)] transition-all shrink-0 cursor-pointer"
          >
            <span>Start your outbound campaign</span>
            <ArrowRight size={15} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
