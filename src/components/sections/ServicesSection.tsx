"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ArrowUpRight, Check, CheckCircle2 } from "lucide-react";

interface ServiceData {
  id: number;
  number: string;
  title: string;
  subtitle: string;
  description: string;
  capabilities: string[];
}

const services: ServiceData[] = [
  {
    id: 1,
    number: "01",
    title: "LinkedIn Outreach",
    subtitle: "Reach decision-makers where they already are.",
    description:
      "We identify and connect with your exact ICP on LinkedIn. Every connection request, message, and follow-up is personalized—not templated. We manage the conversation until there's genuine interest.",
    capabilities: [
      "ICP targeting",
      "Personalized sequences",
      "Reply management",
      "Network building",
    ],
  },
  {
    id: 2,
    number: "02",
    title: "Cold Email",
    subtitle: "Start relevant conversations directly in the inbox.",
    description:
      "We build targeted prospect lists and personalized email campaigns around your offer, market, and ideal buyer. Structured follow-ups help keep relevant conversations moving.",
    capabilities: [
      "Prospect list building",
      "Personalized campaigns",
      "Follow-up sequences",
      "Response management",
    ],
  },
  {
    id: 3,
    number: "03",
    title: "Cold Calling",
    subtitle: "Speak directly with the people who matter.",
    description:
      "We use targeted calling strategies and relevant scripts to reach decision-makers, understand their interest, and identify potential opportunities for your sales team.",
    capabilities: [
      "Targeted prospecting",
      "Call scripts",
      "Follow-up coordination",
      "Opportunity identification",
    ],
  },
  {
    id: 4,
    number: "04",
    title: "Appointment Setting",
    subtitle: "Turn genuine interest into qualified sales meetings.",
    description:
      "We follow up with interested prospects, assess their fit against your criteria, and coordinate relevant meetings with your sales team.",
    capabilities: [
      "Lead qualification",
      "Interest assessment",
      "Meeting coordination",
      "Sales handoff",
    ],
  },
];

// ——————————————————————————————————————————————————
// CUSTOM ILLUSTRATIONS FOR EACH SERVICE
// Strictly using Deep Navy #071525, Copper #C65D2E,
// Warm White #FAF9F6, White #FFFFFF, Secondary #526071,
// Border #E4E1DD, Soft Copper #F7E7DF
// ——————————————————————————————————————————————————

function LinkedInIllustration() {
  return (
    <div className="relative w-full h-full min-h-[260px] sm:min-h-[280px] flex items-center justify-center select-none overflow-hidden p-4">
      {/* Background connection grid lines */}
      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 320 280" fill="none" aria-hidden="true">
        {/* Subtle coordinate grid lines */}
        <line x1="20" y1="140" x2="300" y2="140" stroke="#E4E1DD" strokeWidth="1" strokeDasharray="4 4" />
        <line x1="160" y1="20" x2="160" y2="260" stroke="#E4E1DD" strokeWidth="1" strokeDasharray="4 4" />

        {/* Concentric subtle network rings */}
        <circle cx="160" cy="140" r="85" stroke="#E4E1DD" strokeWidth="1" />
        <circle cx="160" cy="140" r="50" stroke="#C65D2E" strokeWidth="1" strokeOpacity="0.25" strokeDasharray="3 3" />

        {/* Network connection paths */}
        <path d="M 160 140 L 75 75" stroke="#C65D2E" strokeWidth="1.2" strokeOpacity="0.7" />
        <path d="M 160 140 L 245 75" stroke="#071525" strokeWidth="1.2" strokeOpacity="0.3" strokeDasharray="3 3" />
        <path d="M 160 140 L 235 205" stroke="#C65D2E" strokeWidth="1.2" strokeOpacity="0.8" />
        <path d="M 160 140 L 80 215" stroke="#071525" strokeWidth="1.2" strokeOpacity="0.3" strokeDasharray="3 3" />
      </svg>

      {/* Central Verified Connection Node */}
      <div className="relative z-10 flex flex-col items-center">
        <div className="w-14 h-14 rounded-2xl bg-[#071525] border-2 border-[#C65D2E] flex items-center justify-center shadow-lg transition-transform duration-300 hover:scale-105">
          {/* Stylized Connection Knot */}
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#FAF9F6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
            <circle cx="9" cy="7" r="4" />
            <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
            <path d="M16 3.13a4 4 0 0 1 0 7.75" />
          </svg>
        </div>
        <div className="mt-2 px-2.5 py-0.5 rounded-full bg-[#FAF9F6] border border-[#E4E1DD] shadow-xs">
          <span className="text-[10px] font-mono tracking-wider font-semibold text-[#071525]">ICP // 1st DEGREE</span>
        </div>
      </div>

      {/* Floating Card 1: Top Right Connection Card */}
      <motion.div
        initial={{ opacity: 0, y: -8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.15 }}
        className="absolute top-4 right-4 bg-white border border-[#E4E1DD] rounded-xl p-3 shadow-md w-38 sm:w-44 z-20"
      >
        <div className="flex items-center gap-2 mb-2">
          <div className="w-6 h-6 rounded-full bg-[#F7E7DF] border border-[#C65D2E]/30 flex items-center justify-center">
            <span className="text-[10px] font-bold text-[#C65D2E]">VP</span>
          </div>
          <div className="flex-1 min-w-0">
            <div className="h-2 w-16 bg-[#071525] rounded-xs" />
            <div className="h-1.5 w-10 bg-[#526071]/40 rounded-xs mt-1" />
          </div>
        </div>
        <div className="flex items-center justify-between pt-1.5 border-t border-[#E4E1DD]">
          <span className="text-[9px] font-mono text-[#526071]">CONNECT</span>
          <span className="px-1.5 py-0.5 rounded-xs bg-[#F7E7DF] text-[8.5px] font-semibold text-[#C65D2E]">
            ACCEPTED
          </span>
        </div>
      </motion.div>

      {/* Floating Card 2: Bottom Left Message Dialog Snippet */}
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.25 }}
        className="absolute bottom-4 left-4 bg-white border border-[#E4E1DD] rounded-xl p-3 shadow-md w-42 sm:w-48 z-20"
      >
        <div className="flex items-center gap-1.5 mb-1.5">
          <div className="w-1.5 h-1.5 rounded-full bg-[#C65D2E]" />
          <span className="text-[9px] font-mono uppercase tracking-wider text-[#C65D2E] font-semibold">
            InMail Dialogue
          </span>
        </div>
        <p className="text-[10px] text-[#071525] font-medium leading-tight mb-2">
          "Would love to connect regarding your outbound scale..."
        </p>
        <div className="flex items-center gap-1.5 text-[8.5px] font-mono text-[#526071]">
          <Check size={10} className="text-[#C65D2E]" />
          <span>Replied: Interested</span>
        </div>
      </motion.div>
    </div>
  );
}

function ColdEmailIllustration() {
  return (
    <div className="relative w-full h-full min-h-[260px] sm:min-h-[280px] flex items-center justify-center select-none overflow-hidden p-4">
      {/* Sequence Transmission Lines */}
      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 320 280" fill="none" aria-hidden="true">
        <path d="M 40 80 L 160 80 L 160 200 L 280 200" stroke="#E4E1DD" strokeWidth="1" strokeDasharray="4 4" />
        <path d="M 60 140 C 120 140, 140 100, 200 100 S 260 130, 290 130" stroke="#C65D2E" strokeWidth="1.2" strokeOpacity="0.4" />
      </svg>

      {/* Layered Email Sequence Stack */}
      <div className="relative z-10 w-full max-w-[240px]">
        {/* Background Card 3 (Follow-up 2) */}
        <div className="absolute -top-6 left-4 right-4 h-24 bg-white/70 border border-[#E4E1DD] rounded-xl shadow-xs -rotate-2" />

        {/* Mid Card 2 (Follow-up 1) */}
        <div className="absolute -top-3 left-2 right-2 h-24 bg-white/90 border border-[#E4E1DD] rounded-xl shadow-xs rotate-1" />

        {/* Front Featured Email Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4 }}
          className="relative bg-white border border-[#E4E1DD] rounded-2xl p-5 shadow-lg"
        >
          {/* Header row */}
          <div className="flex items-center justify-between pb-3 border-b border-[#E4E1DD]">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-lg bg-[#071525] flex items-center justify-center text-[#C65D2E]">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect width="20" height="16" x="2" y="4" rx="2" />
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                </svg>
              </div>
              <div>
                <div className="text-[10px] font-mono uppercase text-[#071525] font-bold">Touch 01 // Value Pitch</div>
                <div className="text-[9px] text-[#526071]">Personalized by buyer pain-point</div>
              </div>
            </div>
            <span className="px-2 py-0.5 rounded-full bg-[#F7E7DF] text-[#C65D2E] text-[9px] font-mono font-semibold">
              SENT
            </span>
          </div>

          {/* Email Body Outline Lines */}
          <div className="py-3.5 space-y-2">
            <div className="h-2 bg-[#071525]/85 rounded-xs w-4/5" />
            <div className="h-1.5 bg-[#526071]/35 rounded-xs w-full" />
            <div className="h-1.5 bg-[#526071]/35 rounded-xs w-5/6" />
            <div className="h-1.5 bg-[#526071]/35 rounded-xs w-3/4" />
          </div>

          {/* Status Metric Strip */}
          <div className="pt-2.5 border-t border-[#E4E1DD] flex items-center justify-between text-[9px] font-mono text-[#526071]">
            <span className="flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-[#C65D2E]" />
              Open: 68.4%
            </span>
            <span className="font-semibold text-[#071525]">Reply: Positive</span>
          </div>
        </motion.div>
      </div>

      {/* Floating Deliverability Tag */}
      <motion.div
        initial={{ opacity: 0, x: 10 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="absolute bottom-3 right-4 bg-[#071525] text-white px-3 py-1.5 rounded-lg shadow-md z-20 flex items-center gap-2"
      >
        <span className="w-1.5 h-1.5 rounded-full bg-[#C65D2E] animate-pulse" />
        <span className="text-[9.5px] font-mono font-medium tracking-wide">100% PRIMARY INBOX</span>
      </motion.div>
    </div>
  );
}

function ColdCallingIllustration() {
  return (
    <div className="relative w-full h-full min-h-[260px] sm:min-h-[280px] flex items-center justify-center select-none overflow-hidden p-4">
      {/* Acoustic waves background */}
      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 320 280" fill="none" aria-hidden="true">
        {/* Subtle circular acoustic waves radiating from handset */}
        <circle cx="160" cy="125" r="95" stroke="#E4E1DD" strokeWidth="1" strokeDasharray="3 3" />
        <circle cx="160" cy="125" r="70" stroke="#C65D2E" strokeWidth="1" strokeOpacity="0.25" />
        <circle cx="160" cy="125" r="45" stroke="#C65D2E" strokeWidth="1.2" strokeOpacity="0.6" />

        {/* Audio frequency wave line */}
        <path
          d="M 30 220 L 70 220 L 85 205 L 100 235 L 115 195 L 130 245 L 145 210 L 160 230 L 175 200 L 190 240 L 205 215 L 220 225 L 290 225"
          stroke="#C65D2E"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>

      {/* Central Technical Handset Core */}
      <div className="relative z-10 flex flex-col items-center">
        <div className="w-16 h-16 rounded-2xl bg-[#071525] border-2 border-[#C65D2E] flex items-center justify-center shadow-lg transition-transform duration-300 hover:scale-105">
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#FAF9F6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
          </svg>
        </div>

        {/* Live Call Status Pill */}
        <div className="mt-3 bg-white border border-[#E4E1DD] rounded-full px-3 py-1 shadow-xs flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#C65D2E] animate-ping" />
          <span className="text-[10px] font-mono font-bold text-[#071525]">CONNECTED // 03:42</span>
        </div>
      </div>

      {/* Floating Milestone Card: Decision-Maker Engaged */}
      <motion.div
        initial={{ opacity: 0, y: -8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.15 }}
        className="absolute top-4 left-4 bg-white border border-[#E4E1DD] rounded-xl p-3 shadow-md z-20 w-44"
      >
        <div className="flex items-center gap-1.5 mb-1">
          <CheckCircle2 size={12} className="text-[#C65D2E]" />
          <span className="text-[9px] font-mono uppercase font-bold text-[#071525]">Gatekeeper Passed</span>
        </div>
        <p className="text-[9.5px] text-[#526071] leading-tight">
          Transferred directly to VP Sales desk
        </p>
      </motion.div>

      {/* Floating Target Card: Script Qualified */}
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.25 }}
        className="absolute bottom-4 right-4 bg-white border border-[#E4E1DD] rounded-xl p-2.5 shadow-md z-20 flex items-center gap-2"
      >
        <div className="w-5 h-5 rounded-md bg-[#F7E7DF] flex items-center justify-center text-[#C65D2E] font-bold text-[10px]">
          ✓
        </div>
        <div>
          <div className="text-[9px] font-mono font-bold text-[#071525]">INTEREST VERIFIED</div>
          <div className="text-[8.5px] text-[#526071]">Meeting handoff ready</div>
        </div>
      </motion.div>
    </div>
  );
}

function AppointmentSettingIllustration() {
  return (
    <div className="relative w-full h-full min-h-[260px] sm:min-h-[280px] flex items-center justify-center select-none overflow-hidden p-4">
      {/* Background Calendar Alignment Grid */}
      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 320 280" fill="none" aria-hidden="true">
        <line x1="30" y1="50" x2="290" y2="50" stroke="#E4E1DD" strokeWidth="1" strokeDasharray="3 3" />
        <line x1="30" y1="230" x2="290" y2="230" stroke="#E4E1DD" strokeWidth="1" strokeDasharray="3 3" />
      </svg>

      {/* Main Refined Calendar Card */}
      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4 }}
        className="relative z-10 w-full max-w-[240px] bg-white border border-[#E4E1DD] rounded-2xl shadow-lg overflow-hidden"
      >
        {/* Calendar Dark Navy Top Header */}
        <div className="bg-[#071525] px-4 py-3 flex items-center justify-between text-white">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-[#C65D2E]" />
            <span className="text-[10px] font-mono tracking-widest uppercase font-bold text-[#FAF9F6]">
              SCHEDULE // Q4
            </span>
          </div>
          <span className="text-[9px] font-mono text-[#FAF9F6]/60">OCTOBER</span>
        </div>

        {/* Calendar Day Grid */}
        <div className="p-4">
          <div className="grid grid-cols-5 gap-2 text-center text-[9px] font-mono text-[#526071] mb-2 font-semibold">
            <span>M</span>
            <span>T</span>
            <span>W</span>
            <span>T</span>
            <span>F</span>
          </div>

          <div className="grid grid-cols-5 gap-2 text-center text-[10px] font-mono">
            <span className="p-1.5 text-[#526071]/40">12</span>
            <span className="p-1.5 text-[#526071]/40">13</span>
            {/* Highlighted Appointment Date */}
            <span className="p-1.5 rounded-lg bg-[#C65D2E] text-white font-bold shadow-xs">
              14
            </span>
            <span className="p-1.5 text-[#071525]">15</span>
            <span className="p-1.5 text-[#071525]">16</span>
          </div>
        </div>

        {/* Confirmation Status Footer */}
        <div className="bg-[#FAF9F6] border-t border-[#E4E1DD] px-4 py-2.5 flex items-center justify-between">
          <span className="text-[9px] font-mono text-[#526071]">2:00 PM EST</span>
          <span className="px-2 py-0.5 rounded-full bg-[#F7E7DF] text-[#C65D2E] text-[8.5px] font-mono font-bold">
            CONFIRMED
          </span>
        </div>
      </motion.div>

      {/* Floating Executive Meeting Tag */}
      <motion.div
        initial={{ opacity: 0, x: -10 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="absolute top-4 left-3 bg-[#071525] text-white rounded-xl p-3 shadow-md z-20 w-44"
      >
        <div className="flex items-center gap-1.5 mb-1">
          <span className="w-1.5 h-1.5 rounded-full bg-[#C65D2E]" />
          <span className="text-[9px] font-mono uppercase text-[#C65D2E] font-bold">Sales Qualified</span>
        </div>
        <p className="text-[9.5px] text-[#FAF9F6] font-medium leading-tight">
          30-Min Executive Intro
        </p>
        <div className="text-[8.5px] text-[#FAF9F6]/60 font-mono mt-0.5">
          Authority & Budget Verified
        </div>
      </motion.div>

      {/* Floating Calendar Synced Tag */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="absolute bottom-3 right-4 bg-white border border-[#E4E1DD] rounded-lg px-2.5 py-1.5 shadow-md z-20 flex items-center gap-1.5"
      >
        <div className="w-2 h-2 rounded-full bg-[#C65D2E]" />
        <span className="text-[9px] font-mono text-[#071525] font-semibold">CALENDAR SYNCED</span>
      </motion.div>
    </div>
  );
}

// Map service id to illustration component
function ServiceIllustration({ id }: { id: number }) {
  switch (id) {
    case 1:
      return <LinkedInIllustration />;
    case 2:
      return <ColdEmailIllustration />;
    case 3:
      return <ColdCallingIllustration />;
    case 4:
      return <AppointmentSettingIllustration />;
    default:
      return <LinkedInIllustration />;
  }
}

// ——————————————————————————————————————————————————
// MAIN CORE SERVICES SECTION
// ——————————————————————————————————————————————————

export default function ServicesSection() {
  const [active, setActive] = useState(0);
  const current = services[active];

  const handleDiscussService = (serviceTitle: string) => {
    // Prefill contact form message if present
    const textarea = document.querySelector<HTMLTextAreaElement>("textarea");
    if (textarea) {
      textarea.value = `Hi LeadScorpio team, I am interested in discussing your ${serviceTitle} service for my business.`;
      textarea.dispatchEvent(new Event("input", { bubbles: true }));
    }
  };

  return (
    <section id="services" className="py-24 md:py-32 lg:py-36 bg-[#FAF9F6] relative overflow-hidden border-t border-[#E4E1DD]">
      <div className="max-w-[1240px] mx-auto px-6 md:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-14 md:mb-16 lg:mb-20"
        >
          {/* Small label */}
          <div className="inline-flex items-center gap-2.5 mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#C65D2E]" />
            <span className="text-xs font-mono tracking-[0.2em] uppercase text-[#C65D2E] font-semibold">
              SERVICES
            </span>
          </div>

          {/* Heading */}
          <h2 className="text-4xl sm:text-5xl lg:text-[52px] font-black tracking-[-0.03em] leading-[1.08] text-[#071525] mb-4">
            Core Services
          </h2>

          {/* Short copper accent line */}
          <div className="h-0.5 w-12 bg-[#C65D2E] mb-5" />

          {/* Subtitle */}
          <p className="text-[#526071] text-lg sm:text-xl max-w-2xl leading-relaxed">
            Multi-channel outbound strategies executed with precision.
          </p>
        </motion.div>

        {/* Main Content: Split-Card Experience */}
        <div className="grid md:grid-cols-[270px_1fr] lg:grid-cols-[320px_1fr] xl:grid-cols-[350px_1fr] gap-6 lg:gap-8 xl:gap-10 items-stretch">
          {/* LEFT: Custom Editorial Vertical Service Selector */}
          <div className="flex flex-col gap-3">
            {services.map((s, i) => {
              const isActive = active === i;
              return (
                <button
                  key={s.id}
                  type="button"
                  onClick={() => setActive(i)}
                  className={`group relative text-left p-4.5 sm:p-5 lg:p-6 rounded-2xl transition-all duration-300 overflow-hidden cursor-pointer ${
                    isActive
                      ? "bg-[#071525] text-white shadow-lg shadow-[#071525]/10"
                      : "bg-white/70 hover:bg-white text-[#071525] border border-[#E4E1DD] hover:border-[#C65D2E]/40"
                  }`}
                >
                  {/* Active copper accent strip on the left edge */}
                  {isActive && (
                    <motion.div
                      layoutId="activeAccentStrip"
                      className="absolute left-0 inset-y-0 w-1.5 bg-[#C65D2E]"
                      transition={{ duration: 0.25 }}
                    />
                  )}

                  <div className="flex items-center justify-between gap-3">
                    <div className="flex items-baseline gap-3 sm:gap-3.5">
                      {/* Service Number */}
                      <span
                        className={`text-lg sm:text-xl lg:text-2xl font-black font-mono tracking-tight transition-colors duration-200 ${
                          isActive ? "text-[#C65D2E]" : "text-[#526071]/60 group-hover:text-[#C65D2E]"
                        }`}
                      >
                        {s.number}
                      </span>

                      {/* Service Title */}
                      <span
                        className={`text-sm sm:text-base lg:text-lg font-bold tracking-tight transition-colors duration-200 ${
                          isActive ? "text-white" : "text-[#071525]"
                        }`}
                      >
                        {s.title}
                      </span>
                    </div>

                    {/* Right-side Directional Arrow */}
                    <div
                      className={`w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center transition-all duration-300 shrink-0 ${
                        isActive
                          ? "bg-[#C65D2E]/20 text-[#C65D2E]"
                          : "text-[#526071]/40 group-hover:text-[#C65D2E] group-hover:translate-x-1"
                      }`}
                    >
                      <ArrowRight size={14} />
                    </div>
                  </div>
                </button>
              );
            })}
          </div>

          {/* RIGHT: Large Service Presentation Panel */}
          <div className="relative min-h-[460px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={current.id}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                className="bg-white border border-[#E4E1DD] rounded-2xl p-6 sm:p-8 lg:p-10 xl:p-11 shadow-sm h-full flex flex-col justify-between"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
                  {/* Left Side: Service Information (~60-65% width) */}
                  <div className="lg:col-span-7 flex flex-col justify-center">
                    {/* Small service counter */}
                    <div className="inline-flex items-center gap-2 mb-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#C65D2E]" />
                      <span className="text-xs font-mono tracking-[0.2em] uppercase text-[#C65D2E] font-bold">
                        {current.number} / 04
                      </span>
                    </div>

                    {/* Large service title */}
                    <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#071525] tracking-tight mb-2">
                      {current.title}
                    </h3>

                    {/* Copper-highlighted subtitle */}
                    <p className="text-base sm:text-lg font-semibold text-[#C65D2E] mb-4">
                      {current.subtitle}
                    </p>

                    {/* Short descriptive paragraph */}
                    <p className="text-[#526071] text-sm sm:text-base leading-relaxed mb-7 max-w-xl">
                      {current.description}
                    </p>

                    {/* Four service capabilities arranged in a clean two-column list */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 mb-8">
                      {current.capabilities.map((cap, i) => (
                        <div key={i} className="flex items-center gap-2.5">
                          <div className="w-1.5 h-1.5 rounded-full bg-[#C65D2E] shrink-0" />
                          <span className="text-sm font-medium text-[#071525]">{cap}</span>
                        </div>
                      ))}
                    </div>

                    {/* Copper CTA: Discuss this service */}
                    <div className="pt-6 border-t border-[#E4E1DD]">
                      <a
                        href="#contact"
                        onClick={() => handleDiscussService(current.title)}
                        className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full bg-[#C65D2E] text-white font-semibold text-sm hover:bg-[#A64B24] transition-all duration-200 group shadow-xs hover:shadow-md"
                      >
                        <span>Discuss this service</span>
                        <ArrowUpRight size={15} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                      </a>
                    </div>
                  </div>

                  {/* Right Side: Custom Illustration (~35-40% width) */}
                  <div className="lg:col-span-5 flex items-center justify-center">
                    <div className="w-full bg-[#FAF9F6] border border-[#E4E1DD] rounded-xl overflow-hidden shadow-xs">
                      <ServiceIllustration id={current.id} />
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
