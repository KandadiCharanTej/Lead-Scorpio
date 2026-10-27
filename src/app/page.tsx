"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { ArrowRight, CheckCircle2, Link, Mail, Phone } from "lucide-react";
import dynamic from "next/dynamic";

// HeroGlobe loaded via dynamic()
const HeroGlobe = dynamic(
  () => import("@/components/ui/HeroGlobe").then(m => m.default),
  {
    ssr: false,
    loading: () => (
      <div className="w-full h-full flex items-center justify-center">
        <div className="w-48 h-48 rounded-full border border-[var(--color-brand-copper)]/20 animate-pulse" />
      </div>
    ),
  }
);

const Navbar         = dynamic(() => import("@/components/ui/Navbar").then(m => m.default),              { ssr: false });
const ServicesSection    = dynamic(() => import("@/components/sections/ServicesSection").then(m => m.default),    { ssr: false });
const HowItWorksSection  = dynamic(() => import("@/components/sections/HowItWorksSection").then(m => m.default),  { ssr: false });
const WhySection         = dynamic(() => import("@/components/sections/WhySection").then(m => m.default),         { ssr: false });
const AboutSection       = dynamic(() => import("@/components/sections/AboutSection").then(m => m.default),       { ssr: false });
const ContactSection     = dynamic(() => import("@/components/sections/ContactSection").then(m => m.default),     { ssr: false });
const ClientLogosSection = dynamic(() => import("@/components/sections/ClientLogosSection").then(m => m.default), { ssr: false });

// ——————————————————————————————————————————
// HERO SECTION — EDITORIAL B2B DESIGN
// ——————————————————————————————————————————
function HeroSection() {
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  // Exact word-by-word headline reveal
  const line1 = "Turn Your Ideal Customers Into".split(" ");
  const line2 = "Qualified Sales Conversations.".split(" ");

  const wordVariants: any = {
    hidden: { opacity: 0, y: 35, rotateX: -12 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: {
        duration: 0.7,
        delay: 0.25 + i * 0.05,
        ease: [0.16, 1, 0.3, 1],
      },
    }),
  };

  return (
    <section
      ref={heroRef}
      className="relative min-h-[92vh] lg:min-h-screen flex flex-col justify-center overflow-hidden bg-[var(--color-brand-white)] pt-28 pb-16 md:pt-36 md:pb-24"
    >
      {/* Fine grid background */}
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

      {/* Radial copper glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(198,93,46,0.06) 0%, transparent 65%)",
        }}
      />

      <motion.div
        style={{ y, opacity }}
        className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-10 lg:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center"
      >
        {/* Left Column: Editorial Content (7 cols on desktop) */}
        <div className="lg:col-span-7 flex flex-col items-start gap-6 lg:gap-7">
          {/* Service Eyebrow Badge */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white border border-[#071525]/[0.08] shadow-xs"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-brand-copper)] animate-pulse" />
            <span className="text-[11.5px] font-semibold text-[var(--color-brand-navy)] tracking-wide">
              LinkedIn Outreach • Cold Email • Cold Calling
            </span>
          </motion.div>

          {/* Main Headline */}
          <h1
            className="text-[2rem] xs:text-4xl sm:text-5xl lg:text-[3.25rem] xl:text-[3.65rem] font-black tracking-[-0.035em] leading-[1.08] text-[var(--color-brand-navy)] max-w-2xl"
            style={{ perspective: "1000px" }}
          >
            <span className="block mb-1 sm:mb-2">
              <span className="flex flex-wrap gap-x-2.5 sm:gap-x-3">
                {line1.map((word, i) => (
                  <motion.span
                    key={i}
                    custom={i}
                    variants={wordVariants}
                    initial="hidden"
                    animate="visible"
                    className="inline-block"
                    style={{ transformOrigin: "bottom center" }}
                  >
                    {word}
                  </motion.span>
                ))}
              </span>
            </span>
            <span className="block">
              <span className="flex flex-wrap gap-x-2.5 sm:gap-x-3">
                {line2.map((word, i) => (
                  <motion.span
                    key={i}
                    custom={line1.length + i}
                    variants={wordVariants}
                    initial="hidden"
                    animate="visible"
                    className={`inline-block ${
                      i === 0 || i === 1 ? "gradient-copper" : "text-[var(--color-brand-copper)]"
                    }`}
                    style={{ transformOrigin: "bottom center" }}
                  >
                    {word}
                  </motion.span>
                ))}
              </span>
            </span>
          </h1>

          {/* Supporting Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-base sm:text-lg text-[var(--color-brand-navy)]/70 max-w-xl leading-relaxed"
          >
            LeadScorpio helps B2B companies reach the right decision-makers, start meaningful conversations, and turn targeted outbound outreach into qualified sales opportunities.
          </motion.p>

          {/* Action CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.95, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 w-full sm:w-auto pt-1"
          >
            <a
              href="#contact"
              className="relative inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-full bg-[var(--color-brand-copper)] text-white font-semibold text-sm overflow-hidden group hover:bg-[var(--color-brand-copper-dark)] transition-all duration-300 hover:shadow-[0_8px_25px_rgba(198,93,46,0.35)] shadow-xs"
            >
              <span className="relative z-10 flex items-center gap-2">
                Book a Strategy Call
                <ArrowRight size={15} className="group-hover:translate-x-0.5 transition-transform" />
              </span>
              <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
            </a>

            <a
              href="#"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-white border border-[#071525]/10 text-sm font-semibold text-[var(--color-brand-navy)] hover:border-[var(--color-brand-copper)]/40 hover:text-[var(--color-brand-copper)] hover:shadow-xs group transition-all duration-200"
            >
              <span>Chat on WhatsApp</span>
              <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform opacity-60 group-hover:opacity-100" />
            </a>
          </motion.div>

          {/* Trust Micro-Indicators */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.15 }}
            className="flex flex-wrap items-center gap-x-6 gap-y-2 pt-2"
          >
            {["ICP-first targeting", "Multi-channel", "No contracts"].map((t, i) => (
              <div key={i} className="flex items-center gap-1.5 text-xs text-[var(--color-brand-navy)]/65 font-medium">
                <CheckCircle2 size={13} className="text-[var(--color-brand-copper)] shrink-0" />
                <span>{t}</span>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Right Column: 3D Dotted Globe (5 cols on desktop) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-5 relative w-full flex items-center justify-center"
        >
          <HeroGlobe />
        </motion.div>
      </motion.div>

      {/* Minimalist Editorial Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.3 }}
        className="hidden md:flex absolute bottom-6 left-1/2 -translate-x-1/2 flex-col items-center gap-1.5 select-none pointer-events-none"
      >
        <span className="text-[9.5px] font-mono tracking-[0.25em] uppercase text-[var(--color-brand-navy)]/35 font-bold">
          SCROLL
        </span>
        <div className="w-px h-8 bg-gradient-to-b from-[var(--color-brand-navy)]/20 to-transparent" />
      </motion.div>
    </section>
  );
}

// ——————————————————————————————————————————
// SECTION 02: THE OUTBOUND REALITY — EDITORIAL CONNECTED PIPELINE
// ——————————————————————————————————————————

// Stage 01 UI Mockup: Precision Prospect Targeting Interface
function ProspectTargetingMockup() {
  return (
    <div className="relative w-full h-[210px] sm:h-[220px] flex items-center justify-center select-none p-2">
      {/* Background Layer: Decision-Makers Panel */}
      <div className="absolute right-1 sm:right-2 top-2 w-[145px] sm:w-[155px] bg-white rounded-2xl p-3 border border-[#071525]/[0.08] shadow-[0_8px_24px_rgba(7,21,37,0.06)] z-10 transition-transform duration-300 group-hover:translate-x-1">
        <div className="flex items-center gap-1.5 pb-2 mb-2 border-b border-[#071525]/[0.06]">
          <div className="w-4 h-4 rounded-full bg-[#F7E7DF] flex items-center justify-center">
            <div className="w-1.5 h-1.5 rounded-full bg-[#C65D2E]" />
          </div>
          <span className="text-[10px] font-bold text-[#071525] tracking-tight">Decision-Makers</span>
        </div>
        <div className="flex flex-col gap-1.5">
          {["CEO", "CTO", "VP of Sales", "Head of Growth"].map((role, i) => (
            <div
              key={role}
              className={`px-2 py-1 rounded-lg text-[9.5px] font-medium border flex items-center justify-between ${
                i === 2
                  ? "bg-[#C65D2E]/10 border-[#C65D2E]/40 text-[#C65D2E] font-semibold"
                  : "bg-[#FAF9F6] border-[#071525]/[0.06] text-[#526071]"
              }`}
            >
              <span>{role}</span>
              {i === 2 && <div className="w-1.5 h-1.5 rounded-full bg-[#C65D2E]" />}
            </div>
          ))}
        </div>
      </div>

      {/* Foreground Layer: Ideal Companies Panel */}
      <div className="absolute left-1 sm:left-2 bottom-1 w-[185px] sm:w-[195px] bg-white rounded-2xl p-3.5 border border-[#071525]/[0.08] shadow-[0_12px_32px_rgba(7,21,37,0.08)] z-20 transition-transform duration-300 group-hover:-translate-y-1">
        <div className="flex items-center justify-between pb-2 mb-2.5 border-b border-[#071525]/[0.06]">
          <div className="flex items-center gap-1.5">
            <div className="w-4 h-4 rounded-md bg-[#FAF9F6] border border-[#071525]/[0.08] flex items-center justify-center">
              <span className="text-[9px] text-[#C65D2E]">⚲</span>
            </div>
            <span className="text-[10.5px] font-bold text-[#071525] tracking-tight">Ideal Companies</span>
          </div>
          <span className="text-[9px] font-mono text-[#526071] bg-[#FAF9F6] px-1.5 py-0.5 rounded border border-[#071525]/[0.06]">
            ICP
          </span>
        </div>
        <div className="flex flex-col gap-1.5">
          {[
            { label: "B2B SaaS", checked: true },
            { label: "IT & Software Services", checked: true },
            { label: "AI & Automation", checked: true },
            { label: "Manufacturing & Industrial", checked: false },
          ].map((item, i) => (
            <div key={i} className="flex items-center justify-between py-0.5 text-[9.5px]">
              <span className={`font-medium ${item.checked ? "text-[#071525]" : "text-[#526071]/60"}`}>
                {item.label}
              </span>
              <div
                className={`w-3.5 h-3.5 rounded flex items-center justify-center transition-colors ${
                  item.checked
                    ? "bg-[#C65D2E] text-white shadow-xs"
                    : "border border-[#071525]/20 bg-white"
                }`}
              >
                {item.checked && <span className="text-[9px] leading-none">✓</span>}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// Stage 02 UI Mockup: Contextual Message Composer
function ContextualDialogueMockup() {
  return (
    <div className="relative w-full h-[210px] sm:h-[220px] flex items-center justify-center select-none p-2">
      {/* Background Email Notification Tab */}
      <div className="absolute left-3 top-4 w-9 h-9 rounded-xl bg-white border border-[#071525]/[0.08] shadow-sm flex items-center justify-center z-10">
        <Mail size={15} className="text-[#C65D2E]" />
      </div>

      {/* Main Contextual Message Card */}
      <div className="w-[210px] sm:w-[225px] bg-white rounded-2xl p-4 border border-[#071525]/[0.08] shadow-[0_12px_32px_rgba(7,21,37,0.08)] z-20 transition-transform duration-300 group-hover:-translate-y-1">
        <div className="flex items-center justify-between pb-2.5 mb-2.5 border-b border-[#071525]/[0.06]">
          <div className="flex items-center gap-1.5">
            <span className="text-[11px] font-bold text-[#071525]">Hi <span className="text-[#C65D2E] font-semibold">{`{{First Name}}`}</span>,</span>
          </div>
          <div className="w-5 h-5 rounded-full bg-[#F7E7DF] flex items-center justify-center">
            <span className="text-[9px] text-[#C65D2E]">✦</span>
          </div>
        </div>
        {/* Visualized tailored message text lines */}
        <div className="flex flex-col gap-1.5 mb-3">
          <div className="h-2 w-full bg-[#071525]/[0.07] rounded-full" />
          <div className="h-2 w-[85%] bg-[#071525]/[0.07] rounded-full" />
          <div className="h-2 w-[92%] bg-[#071525]/[0.07] rounded-full" />
          <div className="h-2 w-[60%] bg-[#C65D2E]/25 rounded-full" />
        </div>
        <div className="pt-2 border-t border-[#071525]/[0.06] flex items-center justify-between">
          <span className="text-[9px] font-mono text-[#526071]">Never a template</span>
          <span className="text-[9px] font-semibold text-[#C65D2E] bg-[#F7E7DF] px-2 py-0.5 rounded-full">
            100% Tailored
          </span>
        </div>
      </div>

      {/* Floating Outbound Send Icon */}
      <div className="absolute right-2 sm:right-4 bottom-5 w-8 h-8 rounded-full bg-[#F7E7DF] border border-[#C65D2E]/30 flex items-center justify-center text-[#C65D2E] shadow-sm z-30 transition-transform duration-300 group-hover:scale-110">
        <span className="text-xs">↗</span>
      </div>
    </div>
  );
}

// Stage 03 UI Mockup: Structured Multi-Touch Cadence Timeline
function StructuredCadenceMockup() {
  return (
    <div className="relative w-full h-[210px] sm:h-[220px] flex items-center justify-center select-none p-2">
      {/* Cadence Steps Container */}
      <div className="w-[220px] sm:w-[235px] bg-white rounded-2xl p-3.5 border border-[#071525]/[0.08] shadow-[0_12px_32px_rgba(7,21,37,0.08)] z-20 transition-transform duration-300 group-hover:-translate-y-1">
        <div className="flex flex-col gap-2">
          {[
            {
              channel: "in",
              action: "Connect on LinkedIn",
              day: "Day 1",
              bg: "bg-[#0A66C2]",
              text: "text-white",
            },
            {
              channel: "✉",
              action: "Send Follow-up Email",
              day: "Day 3",
              bg: "bg-[#F7E7DF]",
              text: "text-[#C65D2E]",
            },
            {
              channel: "☎",
              action: "Make a Call",
              day: "Day 7",
              bg: "bg-[#071525]/5",
              text: "text-[#071525]",
            },
            {
              channel: "↻",
              action: "Follow Up Again",
              day: "Day 10",
              bg: "bg-[#FAF9F6]",
              text: "text-[#526071]",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="flex items-center justify-between p-1.5 rounded-xl hover:bg-[#FAF9F6] transition-colors"
            >
              <div className="flex items-center gap-2">
                <div
                  className={`w-5 h-5 rounded-md ${item.bg} ${item.text} flex items-center justify-center text-[9px] font-bold shrink-0`}
                >
                  {item.channel}
                </div>
                <span className="text-[10px] font-semibold text-[#071525]">{item.action}</span>
              </div>
              <span className="text-[9px] font-mono text-[#526071]/80 font-medium">{item.day}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Floating Booked Calendar Badge */}
      <div className="absolute right-1 sm:right-2 bottom-3 w-8 h-8 rounded-xl bg-white border border-[#071525]/[0.08] shadow-md flex items-center justify-center text-[#C65D2E] z-30 transition-transform duration-300 group-hover:scale-110">
        <span className="text-xs">📅</span>
      </div>
    </div>
  );
}

function ProblemSection() {
  const stages = [
    {
      number: "01",
      eyebrow: "PRECISION TARGETING",
      title: "Right Prospects",
      description:
        "Target the exact companies and decision-makers that match your ICP—not a generic list of 10,000 contacts.",
      details: ["Define ICP", "Find relevant companies", "Identify decision-makers"],
      mockup: <ProspectTargetingMockup />,
    },
    {
      number: "02",
      eyebrow: "CONTEXTUAL DIALOGUE",
      title: "Relevant Outreach",
      description:
        "Personalized messaging built around your specific market, offer, and buyer persona. Never a template.",
      details: ["Personalized messaging", "Market relevance", "Buyer-centric approach"],
      mockup: <ContextualDialogueMockup />,
    },
    {
      number: "03",
      eyebrow: "STRUCTURED CADENCE",
      title: "Consistent Follow-Up",
      description:
        "Systematic multi-touch cadences that keep qualified conversations moving toward booked meetings.",
      details: ["Multi-touch cadences", "Consistent follow-up", "Move to qualified meetings"],
      mockup: <StructuredCadenceMockup />,
    },
  ];

  return (
    <section className="relative bg-[var(--color-brand-white)] overflow-hidden border-t border-[var(--color-brand-navy)]/8 py-24 md:py-32">
      {/* Identical background grid treatment matching the hero */}
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

      {/* Warm ambient radial glow */}
      <div
        className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[900px] h-[600px] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(ellipse, rgba(198,93,46,0.04) 0%, transparent 65%)",
        }}
      />

      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-12 relative z-10">
        {/* Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-end mb-16 md:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-8 flex flex-col items-start gap-4"
          >
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2">
              <span className="text-xs font-mono font-bold tracking-[0.2em] uppercase text-[var(--color-brand-copper)]">
                THE OUTBOUND REALITY
              </span>
            </div>

            {/* Headline */}
            <h2 className="text-3xl sm:text-5xl lg:text-[3.5rem] xl:text-[3.85rem] font-black tracking-[-0.035em] leading-[1.06] text-[var(--color-brand-navy)]">
              Your next customer <br className="hidden sm:inline" />
              is <span className="text-[var(--color-brand-copper)]">already out there.</span>
            </h2>

            {/* Supporting Paragraph */}
            <p className="text-base sm:text-lg text-[#526071] max-w-2xl leading-relaxed pt-1">
              The challenge isn't finding thousands of contacts. It's identifying the right ones,
              reaching the right decision-makers, and starting conversations that actually matter.
            </p>
          </motion.div>

          {/* Reference Script Note on Top Right */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="hidden lg:flex lg:col-span-4 flex-col items-end text-right pb-2"
          >
            <div className="relative pr-6">
              <p className="text-sm font-medium italic text-[#526071]/80 max-w-[210px] leading-snug">
                From the right prospects to meaningful conversations.
              </p>
              <div className="absolute right-0 bottom-0 text-[var(--color-brand-copper)] text-lg">
                ⤷
              </div>
            </div>
          </motion.div>
        </div>

        {/* 3 Connected Editorial Stages Container */}
        <div className="relative">
          {/* Continuous Copper Connector Line (Desktop SVG Path linking all 3 stages) */}
          <div className="hidden lg:block absolute inset-0 pointer-events-none z-0">
            <svg
              className="w-full h-full"
              viewBox="0 0 1200 480"
              fill="none"
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              {/* Gentle winding connector ribbon */}
              <motion.path
                d="M -40 240 C 140 270, 260 210, 400 240 C 540 270, 660 210, 800 240 C 940 270, 1080 200, 1240 70"
                stroke="#C65D2E"
                strokeWidth="1.5"
                strokeDasharray="4 4"
                strokeOpacity="0.4"
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.8, ease: [0.16, 1, 0.3, 1] }}
              />
              {/* Landmark Waypoint Rings */}
              <circle cx="200" cy="235" r="4" fill="#FAF9F6" stroke="#C65D2E" strokeWidth="2" />
              <circle cx="600" cy="245" r="4" fill="#FAF9F6" stroke="#C65D2E" strokeWidth="2" />
              <circle cx="1000" cy="230" r="4" fill="#FAF9F6" stroke="#C65D2E" strokeWidth="2" />
              <circle cx="1180" cy="115" r="3" fill="#C65D2E" />
            </svg>
          </div>

          {/* 3 Columns Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-8 relative z-10">
            {stages.map((stage, idx) => (
              <motion.div
                key={stage.number}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.15, ease: [0.16, 1, 0.3, 1] }}
                className="flex flex-col group"
              >
                {/* 1. Interface Mockup Area */}
                <div className="mb-6 rounded-2xl bg-[#FAF9F6] border border-[#071525]/[0.05] p-2 transition-all duration-300 group-hover:border-[#C65D2E]/25">
                  {stage.mockup}
                </div>

                {/* 2. Number & Headline Header */}
                <div className="flex items-baseline gap-3 mb-2">
                  <span className="text-4xl sm:text-5xl font-mono font-black text-[#C65D2E]/40 group-hover:text-[#C65D2E] transition-colors duration-300">
                    {stage.number}
                  </span>
                  <div>
                    <span className="text-[10.5px] font-mono font-bold tracking-[0.18em] uppercase text-[#C65D2E] block mb-0.5">
                      {stage.eyebrow}
                    </span>
                    <h3 className="text-2xl font-bold text-[var(--color-brand-navy)] tracking-tight">
                      {stage.title}
                    </h3>
                  </div>
                </div>

                {/* 3. Description */}
                <p className="text-sm text-[#526071] leading-relaxed mb-6 pt-1">
                  {stage.description}
                </p>

                {/* 4. Supporting Checklist Details */}
                <div className="flex flex-col gap-2 pt-4 border-t border-[#071525]/[0.08] mt-auto">
                  {stage.details.map((detail, dIdx) => (
                    <div key={dIdx} className="flex items-center gap-2.5 text-xs text-[#071525]/80 font-medium">
                      <div className="w-4 h-4 rounded-full border border-[#C65D2E]/40 flex items-center justify-center shrink-0">
                        <CheckCircle2 size={11} className="text-[#C65D2E]" />
                      </div>
                      <span>{detail}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ——————————————————————————————————————————
// MAIN PAGE
// ——————————————————————————————————————————
export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex flex-col overflow-hidden">
        <HeroSection />
        <ClientLogosSection />
        <ProblemSection />
        <ServicesSection />
        <HowItWorksSection />
        <WhySection />
        <AboutSection />
        <ContactSection />
      </main>
    </>
  );
}
