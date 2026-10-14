"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Mail,
  Phone,
  CalendarCheck,
  ArrowRight,
  ArrowUpRight,
  Play,
  Pause,
  RotateCcw,
  Target,
  MessageSquare,
  Users,
  CheckCircle2,
  Calendar,
  Send,
  FileText,
  Clock,
  Sparkles,
} from "lucide-react";

interface ServiceData {
  id: number;
  number: string;
  tabTitle: string;
  title: string;
  headline: string;
  description: string;
  benefits: {
    icon: any;
    text: string;
  }[];
  ctaText: string;
  workflowSteps: {
    num: string;
    icon: any;
    title: string;
    desc: string;
  }[];
}

const services: ServiceData[] = [
  {
    id: 1,
    number: "01",
    tabTitle: "LinkedIn Outreach",
    title: "LinkedIn Outreach",
    headline: "Reach the right people. Start relevant conversations.",
    description:
      "From business understanding and offer positioning to finding buyer triggers, testing ICP targets, personalized messaging, reply handling, and scheduling qualified appointments.",
    benefits: [
      { icon: Target, text: "Business Understanding & Offer Positioning" },
      { icon: Sparkles, text: "Trigger Event & ICP Testing" },
      { icon: MessageSquare, text: "Personalized Outreach & Reply Handling" },
      { icon: CalendarCheck, text: "Lead Qualification & Scheduling Appointments" },
    ],
    ctaText: "Explore this interaction",
    workflowSteps: [
      {
        num: "01",
        icon: Target,
        title: "Business Understanding & Offer",
        desc: "Analyze your value proposition and find high-intent buyer triggers.",
      },
      {
        num: "02",
        icon: Users,
        title: "ICP Targeting & Testing",
        desc: "Pinpoint verified decision-makers and test targeted messaging angles.",
      },
      {
        num: "03",
        icon: MessageSquare,
        title: "Personalized Outreach & Reply Handling",
        desc: "Deliver personalized touchpoints and manage incoming replies with context.",
      },
      {
        num: "04",
        icon: CalendarCheck,
        title: "Qualification & Scheduling",
        desc: "Assess fit and schedule confirmed appointments directly on your calendar.",
      },
    ],
  },
  {
    id: 2,
    number: "02",
    tabTitle: "Cold Email",
    title: "Cold Email",
    headline: "Turn relevant emails into meaningful conversations.",
    description:
      "Reach carefully selected decision-makers through targeted campaigns. We personalize messaging around your offer, then manage replies and follow-ups.",
    benefits: [
      { icon: Target, text: "Verified prospect lists" },
      { icon: MessageSquare, text: "Contextual personalized copy" },
      { icon: Users, text: "Multi-step follow-ups" },
    ],
    ctaText: "Explore this interaction",
    workflowSteps: [
      {
        num: "01",
        icon: Users,
        title: "Targeted research",
        desc: "Research buyer context and exact business pain points.",
      },
      {
        num: "02",
        icon: Mail,
        title: "Personalized sequence",
        desc: "Dispatch relevant pitches and structured follow-ups.",
      },
      {
        num: "03",
        icon: Target,
        title: "Positive reply",
        desc: "Engage interested buyers and route to qualification.",
      },
    ],
  },
  {
    id: 3,
    number: "03",
    tabTitle: "Cold Calling",
    title: "Cold Calling",
    headline: "Start direct conversations with the right people.",
    description:
      "Reach relevant decision-makers through structured outbound calling. We use prospect research and clear conversation frameworks to identify opportunities.",
    benefits: [
      { icon: Target, text: "Decision-maker identification" },
      { icon: MessageSquare, text: "Structured conversation scripts" },
      { icon: Users, text: "Qualification and follow-up" },
    ],
    ctaText: "Explore this interaction",
    workflowSteps: [
      {
        num: "01",
        icon: Target,
        title: "Call preparation",
        desc: "Review prospect profile and tailored talking points.",
      },
      {
        num: "02",
        icon: Phone,
        title: "Direct conversation",
        desc: "Engage decision-makers with a structured script.",
      },
      {
        num: "03",
        icon: Users,
        title: "Outcome & handoff",
        desc: "Log qualified interest and hand off next steps to sales.",
      },
    ],
  },
  {
    id: 4,
    number: "04",
    tabTitle: "Appointment Setting",
    title: "Appointment Setting",
    headline: "Turn qualified interest into booked meetings.",
    description:
      "We manage interested prospects through qualification, scheduling, and handoff so your sales team can focus on closing deals.",
    benefits: [
      { icon: Target, text: "Lead qualification" },
      { icon: Calendar, text: "Calendar scheduling" },
      { icon: Users, text: "Sales-team handoff" },
    ],
    ctaText: "Explore this interaction",
    workflowSteps: [
      {
        num: "01",
        icon: Target,
        title: "Qualify prospect",
        desc: "Verify ICP alignment, budget, and purchasing authority.",
      },
      {
        num: "02",
        icon: Calendar,
        title: "Select time slot",
        desc: "Coordinate direct availability on your sales calendar.",
      },
      {
        num: "03",
        icon: Users,
        title: "Confirmed meeting",
        desc: "Dispatch calendar invite with complete context briefing.",
      },
    ],
  },
];

// ——————————————————————————————————————————————————
// DEMO 01: LINKEDIN OUTREACH SMARTPHONE DEMO
// ——————————————————————————————————————————————————
function LinkedInDemo({ isPaused, replayKey }: { isPaused: boolean; replayKey: number }) {
  const [animStage, setAnimStage] = useState(0);

  useEffect(() => {
    setAnimStage(0);
    if (isPaused) return;

    const t1 = setTimeout(() => setAnimStage(1), 400);
    const t2 = setTimeout(() => setAnimStage(2), 1200);
    const t3 = setTimeout(() => setAnimStage(3), 2200);
    const t4 = setTimeout(() => setAnimStage(4), 3200);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      clearTimeout(t4);
    };
  }, [replayKey, isPaused]);

  return (
    <div className="relative w-[280px] sm:w-[305px] bg-[#0c1622] rounded-[42px] p-2 shadow-[0_24px_50px_rgba(7,21,37,0.16)] border border-[#223347] ring-1 ring-[#071525]/80 select-none">
      {/* Top Dynamic Island Notch */}
      <div className="absolute top-3 left-1/2 -translate-x-1/2 w-20 h-3.5 bg-black rounded-full z-30 flex items-center justify-end pr-2.5">
        <span className="w-1.5 h-1.5 rounded-full bg-[#1e293b]/90 border border-white/10" />
      </div>

      {/* Screen Frame */}
      <div className="relative bg-[#FAF9F6] rounded-[34px] overflow-hidden pt-6 pb-3 px-3 flex flex-col h-[445px]">
        {/* Contact Header with Trigger Event Badge */}
        <div className="flex items-center justify-between pb-2 mb-2 border-b border-[#071525]/[0.08]">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-full bg-[#071525] text-white flex items-center justify-center text-[10px] font-bold">
              SM
            </div>
            <div className="flex flex-col">
              <span className="text-[11px] font-bold text-[#071525] leading-none">Sarah Mitchell</span>
              <span className="text-[8px] text-[#526071] mt-0.5">VP of Marketing • Acme Tech</span>
            </div>
          </div>
          <span className="text-[8px] px-1.5 py-0.5 rounded-full bg-[#F7E7DF] text-[#C65D2E] font-semibold">
            Trigger: Scaling ICP
          </span>
        </div>

        {/* Message Thread */}
        <div className="flex-1 flex flex-col gap-2 overflow-hidden text-[10px]">
          {/* Bubble 1: Prospect inquiry */}
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: animStage >= 0 ? 1 : 0, y: animStage >= 0 ? 0 : 8 }}
            className="bg-white p-2.5 rounded-2xl rounded-tl-xs border border-[#071525]/[0.06] shadow-2xs max-w-[85%] self-start"
          >
            <p className="text-[#071525] font-medium leading-relaxed">
              Hi! Do you have pricing for bulk orders?
            </p>
            <span className="text-[7.5px] text-[#526071]/70 block text-right mt-1">10:24 AM</span>
          </motion.div>

          {/* Bubble 2: Outbound agent tailored response */}
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: animStage >= 1 ? 1 : 0, y: animStage >= 1 ? 0 : 8 }}
            className="bg-[#EBF7EE] p-2.5 rounded-2xl rounded-tr-xs border border-[#7BC68E]/30 shadow-2xs max-w-[88%] self-end"
          >
            <p className="text-[#154622] font-medium leading-relaxed">
              Hey Sarah 👋 Yes, here's our detailed catalog tailored for SaaS companies like yours.
            </p>
            <span className="text-[7.5px] text-[#154622]/60 block text-right mt-1">10:25 AM ✓✓</span>
          </motion.div>

          {/* Bubble 3: Catalog Attachment */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: animStage >= 2 ? 1 : 0, scale: animStage >= 2 ? 1 : 0.96 }}
            className="bg-white p-2 rounded-xl border border-[#071525]/[0.08] shadow-2xs self-end flex items-center gap-2 max-w-[85%]"
          >
            <div className="w-5 h-5 rounded-md bg-[#F7E7DF] text-[#C65D2E] flex items-center justify-center font-bold text-[8.5px]">
              PDF
            </div>
            <div className="flex-1 min-w-0">
              <span className="text-[9px] font-semibold text-[#071525] block truncate">Service_Catalog_2026.pdf</span>
              <span className="text-[7.5px] text-[#526071]">2 pages • 1.2 MB</span>
            </div>
            <span className="text-[9px] text-[#C65D2E]">↓</span>
          </motion.div>

          {/* Bubble 4: Positive Prospect Scheduling intent */}
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: animStage >= 3 ? 1 : 0, y: animStage >= 3 ? 0 : 8 }}
            className="bg-white p-2.5 rounded-2xl rounded-tl-xs border border-[#071525]/[0.06] shadow-2xs max-w-[85%] self-start"
          >
            <p className="text-[#071525] font-medium leading-relaxed">
              This looks great. Can we schedule a quick call this week?
            </p>
            <span className="text-[7.5px] text-[#526071]/70 block text-right mt-1">10:27 AM</span>
          </motion.div>

          {/* Bubble 5: Lead Qualified & Appointment Scheduled Alert */}
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: animStage >= 4 ? 1 : 0, y: animStage >= 4 ? 0 : 8 }}
            className="bg-[#FFF4ED] border border-[#C65D2E]/30 rounded-xl p-2 text-center mt-1"
          >
            <span className="text-[8.5px] font-bold text-[#C65D2E] flex items-center justify-center gap-1">
              ⚡ Qualified & Appointment Scheduled • Added to CRM
            </span>
          </motion.div>
        </div>

        {/* Input Bar */}
        <div className="pt-2 border-t border-[#071525]/[0.07] flex items-center gap-1.5 mt-auto">
          <div className="flex-1 bg-white border border-[#071525]/[0.08] rounded-full px-2.5 py-1 text-[8.5px] text-[#526071]">
            Type a message...
          </div>
          <div className="w-5 h-5 rounded-full bg-[#C65D2E] text-white flex items-center justify-center text-[8.5px]">
            ➤
          </div>
        </div>
      </div>
    </div>
  );
}

// ——————————————————————————————————————————————————
// DEMO 02: COLD EMAIL SMARTPHONE WORKFLOW
// ——————————————————————————————————————————————————
function ColdEmailDemo({ isPaused, replayKey }: { isPaused: boolean; replayKey: number }) {
  const [animStage, setAnimStage] = useState(0);

  useEffect(() => {
    setAnimStage(0);
    if (isPaused) return;

    const t1 = setTimeout(() => setAnimStage(1), 500);
    const t2 = setTimeout(() => setAnimStage(2), 1500);
    const t3 = setTimeout(() => setAnimStage(3), 2600);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
    };
  }, [replayKey, isPaused]);

  return (
    <div className="relative w-[280px] sm:w-[305px] bg-[#0c1622] rounded-[42px] p-2 shadow-[0_24px_50px_rgba(7,21,37,0.16)] border border-[#223347] ring-1 ring-[#071525]/80 select-none">
      <div className="absolute top-3 left-1/2 -translate-x-1/2 w-20 h-3.5 bg-black rounded-full z-30 flex items-center justify-end pr-2.5">
        <span className="w-1.5 h-1.5 rounded-full bg-[#1e293b]/90 border border-white/10" />
      </div>

      <div className="relative bg-[#FAF9F6] rounded-[34px] overflow-hidden pt-6 pb-3 px-3 flex flex-col h-[445px]">
        {/* Header */}
        <div className="flex items-center justify-between pb-2 mb-2 border-b border-[#071525]/[0.08]">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-lg bg-[#F7E7DF] text-[#C65D2E] flex items-center justify-center font-bold text-xs">
              ✉
            </div>
            <div>
              <span className="text-[11px] font-bold text-[#071525] leading-none">David Vance</span>
              <span className="text-[8px] text-[#526071] mt-0.5">VP Marketing • CloudCore</span>
            </div>
          </div>
          <span className="px-1.5 py-0.5 rounded-full bg-[#EBF7EE] text-[#154622] text-[8px] font-bold">
            Active
          </span>
        </div>

        {/* Sequences */}
        <div className="flex-1 flex flex-col gap-2 overflow-hidden text-[10px]">
          {/* Step 1 */}
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: animStage >= 0 ? 1 : 0, y: animStage >= 0 ? 0 : 8 }}
            className="p-2.5 rounded-2xl bg-white border border-[#071525]/[0.06] shadow-2xs"
          >
            <div className="flex items-center justify-between mb-1">
              <span className="font-bold text-[#071525] text-[10px]">Scaling EMEA Outbound Pipeline</span>
              <span className="text-[8px] font-mono text-[#526071]">Day 1</span>
            </div>
            <p className="text-[9px] text-[#526071] leading-relaxed">
              "Noticed your recent expansion. Tailored an outbound framework to reach VP-level buyers directly..."
            </p>
          </motion.div>

          {/* Step 2 */}
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: animStage >= 1 ? 1 : 0, y: animStage >= 1 ? 0 : 8 }}
            className="p-2.5 rounded-2xl bg-white border border-[#C65D2E]/40 shadow-xs"
          >
            <div className="flex items-center justify-between mb-1">
              <span className="font-bold text-[#C65D2E] text-[10px]">Follow-Up: Quick Context</span>
              <span className="text-[8px] font-mono text-[#C65D2E] font-semibold">Day 4 • Sent</span>
            </div>
            <p className="text-[9px] text-[#071525] leading-relaxed">
              "Sharing how our verified cadences keep relevant conversations moving without generic template spam..."
            </p>
          </motion.div>

          {/* Step 3 */}
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: animStage >= 2 ? 1 : 0, y: animStage >= 2 ? 0 : 8 }}
            className="p-2.5 rounded-2xl bg-[#EBF7EE] border border-[#7BC68E]/40"
          >
            <div className="flex items-center justify-between mb-1">
              <span className="font-bold text-[#154622] text-[10px]">Reply: Let's Connect</span>
              <span className="text-[8px] text-[#154622]">11:15 AM</span>
            </div>
            <p className="text-[9px] text-[#154622]/90 leading-relaxed">
              "Thanks for reaching out with context. Do you have 15 mins this Thursday to review alignment?"
            </p>
          </motion.div>

          {/* Qualification Badge */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: animStage >= 3 ? 1 : 0 }}
            className="p-2 rounded-xl bg-[#FFF4ED] border border-[#C65D2E]/30 text-center text-[8.5px] font-bold text-[#C65D2E]"
          >
            ⚡ Qualified interest — Lead transferred to calendar scheduling
          </motion.div>
        </div>
      </div>
    </div>
  );
}

// ——————————————————————————————————————————————————
// DEMO 03: COLD CALLING SMARTPHONE DEMO
// ——————————————————————————————————————————————————
function ColdCallingDemo({ isPaused, replayKey }: { isPaused: boolean; replayKey: number }) {
  const [animStage, setAnimStage] = useState(0);

  useEffect(() => {
    setAnimStage(0);
    if (isPaused) return;

    const t1 = setTimeout(() => setAnimStage(1), 600);
    const t2 = setTimeout(() => setAnimStage(2), 1600);
    const t3 = setTimeout(() => setAnimStage(3), 2700);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
    };
  }, [replayKey, isPaused]);

  return (
    <div className="relative w-[280px] sm:w-[305px] bg-[#0c1622] rounded-[42px] p-2 shadow-[0_24px_50px_rgba(7,21,37,0.16)] border border-[#223347] ring-1 ring-[#071525]/80 select-none">
      <div className="absolute top-3 left-1/2 -translate-x-1/2 w-20 h-3.5 bg-black rounded-full z-30 flex items-center justify-end pr-2.5">
        <span className="w-1.5 h-1.5 rounded-full bg-[#1e293b]/90 border border-white/10" />
      </div>

      <div className="relative bg-[#FAF9F6] rounded-[34px] overflow-hidden pt-6 pb-3 px-3 flex flex-col h-[445px]">
        {/* Header */}
        <div className="flex items-center justify-between pb-2 mb-2 border-b border-[#071525]/[0.08]">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-full bg-[#071525] text-white flex items-center justify-center text-xs font-bold">
              📞
            </div>
            <div>
              <span className="text-[11px] font-bold text-[#071525] leading-none">Alex Morgan</span>
              <span className="text-[8px] text-[#526071] mt-0.5">Chief Revenue Officer • FinScale</span>
            </div>
          </div>
          <div className="flex items-center gap-1 px-1.5 py-0.5 rounded-full bg-[#EBF7EE] text-[#154622] text-[8.5px] font-bold">
            <span className="w-1.5 h-1.5 rounded-full bg-[#154622] animate-pulse" />
            <span>Connected</span>
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 flex flex-col gap-2 overflow-hidden text-[10px]">
          {/* Preparation Card */}
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: animStage >= 0 ? 1 : 0, y: animStage >= 0 ? 0 : 8 }}
            className="p-2.5 rounded-2xl bg-white border border-[#071525]/[0.06] shadow-2xs"
          >
            <span className="text-[8.5px] font-bold font-mono uppercase text-[#C65D2E] block mb-1">
              PREPARATION // TALKING POINTS
            </span>
            <p className="text-[9px] text-[#071525] leading-relaxed">
              • Context: High-growth B2B fintech expanding mid-market accounts.<br />
              • Offer: Structured outbound SDR cadence targeting VP-level buyers.
            </p>
          </motion.div>

          {/* Conversation Outcome */}
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: animStage >= 1 ? 1 : 0, y: animStage >= 1 ? 0 : 8 }}
            className="p-2.5 rounded-2xl bg-white border border-[#C65D2E]/40 shadow-xs"
          >
            <div className="flex items-center justify-between mb-1">
              <span className="font-bold text-[#071525] text-[10px]">Outcome: Genuine Interest</span>
              <span className="text-[8px] text-[#C65D2E] font-semibold">Duration: 3m 28s</span>
            </div>
            <p className="text-[9px] text-[#526071] leading-relaxed">
              Decision-maker validated pipeline fit and agreed to receive outbound briefing document.
            </p>
          </motion.div>

          {/* Next Steps */}
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: animStage >= 2 ? 1 : 0, y: animStage >= 2 ? 0 : 8 }}
            className="p-2 rounded-xl bg-[#FFF4ED] border border-[#C65D2E]/30 text-center text-[8.5px] font-bold text-[#C65D2E]"
          >
            ✓ Qualification Note Logged → Direct Calendar Link Sent
          </motion.div>
        </div>
      </div>
    </div>
  );
}

// ——————————————————————————————————————————————————
// DEMO 04: APPOINTMENT SETTING SMARTPHONE DEMO
// ——————————————————————————————————————————————————
function AppointmentSettingDemo({ isPaused, replayKey }: { isPaused: boolean; replayKey: number }) {
  const [selectedSlot, setSelectedSlot] = useState("Thu 2:30 PM");

  return (
    <div className="relative w-[280px] sm:w-[305px] bg-[#0c1622] rounded-[42px] p-2 shadow-[0_24px_50px_rgba(7,21,37,0.16)] border border-[#223347] ring-1 ring-[#071525]/80 select-none">
      <div className="absolute top-3 left-1/2 -translate-x-1/2 w-20 h-3.5 bg-black rounded-full z-30 flex items-center justify-end pr-2.5">
        <span className="w-1.5 h-1.5 rounded-full bg-[#1e293b]/90 border border-white/10" />
      </div>

      <div className="relative bg-[#FAF9F6] rounded-[34px] overflow-hidden pt-6 pb-3 px-3 flex flex-col h-[445px]">
        {/* Header */}
        <div className="flex items-center justify-between pb-2 mb-2 border-b border-[#071525]/[0.08]">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-xl bg-[#F7E7DF] text-[#C65D2E] flex items-center justify-center font-bold text-xs">
              📅
            </div>
            <div>
              <span className="text-[11px] font-bold text-[#071525] leading-none">30-min Strategy Call</span>
              <span className="text-[8px] text-[#526071] mt-0.5">Qualified Lead • VP Decision-Maker</span>
            </div>
          </div>
          <span className="px-1.5 py-0.5 rounded-full bg-[#C65D2E] text-white text-[8px] font-bold">
            Confirmed
          </span>
        </div>

        {/* Slot Selector */}
        <div className="p-2.5 rounded-2xl bg-white border border-[#071525]/[0.06] mb-2 shadow-2xs">
          <span className="text-[8.5px] font-bold text-[#526071] uppercase tracking-wider block mb-1.5 font-mono">
            SELECT AVAILABLE SLOT
          </span>
          <div className="grid grid-cols-2 gap-1.5">
            {["Wed 11:00 AM", "Wed 3:00 PM", "Thu 2:30 PM", "Fri 10:30 AM"].map((slot) => (
              <button
                type="button"
                key={slot}
                onClick={() => setSelectedSlot(slot)}
                className={`py-1 px-1.5 rounded-lg text-[9px] font-semibold border transition-all ${
                  selectedSlot === slot
                    ? "bg-[#C65D2E] text-white border-[#C65D2E] shadow-2xs"
                    : "bg-[#FAF9F6] text-[#071525] border-[#071525]/[0.08]"
                }`}
              >
                {slot}
              </button>
            ))}
          </div>
        </div>

        {/* Confirmation Card */}
        <div className="p-2.5 rounded-2xl bg-[#EBF7EE] border border-[#7BC68E]/40 text-xs">
          <div className="flex items-center gap-1.5 mb-1">
            <CheckCircle2 size={13} className="text-[#154622]" />
            <span className="font-bold text-[#154622] text-[10px]">Calendar Invite Dispatched</span>
          </div>
          <p className="text-[9px] text-[#154622]/90 leading-relaxed">
            Slot: <span className="font-semibold">{selectedSlot}</span> • Google Meet link & briefing notes sent directly to your sales team.
          </p>
        </div>

        <div className="p-2 rounded-xl bg-[#FFF4ED] border border-[#C65D2E]/30 text-center text-[8.5px] font-bold text-[#C65D2E] mt-2">
          ⚡ Sales handoff complete — Invite logged in CRM
        </div>
      </div>
    </div>
  );
}

// ——————————————————————————————————————————————————
// MAIN CORE SERVICES SECTION
// ——————————————————————————————————————————————————
export default function ServicesSection() {
  const [activeTab, setActiveTab] = useState(1);
  const [isPaused, setIsPaused] = useState(false);
  const [replayKey, setReplayKey] = useState(0);

  const current = services.find((s) => s.id === activeTab) || services[0];

  const handleDiscussService = (serviceName: string) => {
    const contactInput = document.querySelector(
      'input[placeholder*="B2B Software"]'
    ) as HTMLInputElement;
    if (contactInput) {
      contactInput.value = `Inquiry regarding ${serviceName}`;
      contactInput.focus();
    }
  };

  return (
    <section
      id="services"
      className="py-24 md:py-32 bg-[var(--color-brand-white)] relative overflow-hidden border-t border-[var(--color-brand-navy)]/8 scroll-mt-20"
    >
      {/* Background grid */}
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
        {/* Section Header matching Reference */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-12 md:mb-14">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-8 flex flex-col items-start gap-3"
          >
            <div className="inline-flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-brand-copper)]" />
              <span className="text-xs font-mono font-bold tracking-[0.2em] uppercase text-[var(--color-brand-copper)]">
                03 / SERVICES
              </span>
            </div>

            <h2 className="text-4xl sm:text-5xl lg:text-[3.5rem] font-black tracking-[-0.035em] leading-[1.06] text-[var(--color-brand-navy)]">
              Core Services
            </h2>

            <p className="text-lg sm:text-xl font-bold text-[var(--color-brand-navy)] tracking-tight">
              One <span className="text-[var(--color-brand-copper)]">precise</span> outbound system. Four ways to start conversations.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-4 lg:text-right pb-1"
          >
            <p className="text-sm text-[#526071] leading-relaxed max-w-sm ml-auto">
              We help B2B companies reach the right decision-makers through targeted prospecting,
              personalized outreach, and consistent follow-up across multiple channels.
            </p>
          </motion.div>
        </div>

        {/* Four Horizontal Service Selectors matching Reference */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-8">
          {services.map((service) => {
            const isActive = activeTab === service.id;
            return (
              <button
                type="button"
                key={service.id}
                onClick={() => {
                  setActiveTab(service.id);
                  setReplayKey((prev) => prev + 1);
                }}
                className={`flex items-center justify-between p-3.5 sm:p-4 rounded-2xl border transition-all duration-300 text-left group ${
                  isActive
                    ? "bg-[#FAF9F6] border-[#C65D2E]/40 shadow-sm ring-1 ring-[#C65D2E]/20"
                    : "bg-white/80 border-[#071525]/[0.08] hover:border-[#C65D2E]/30 hover:bg-white"
                }`}
              >
                <div className="flex items-center gap-2.5 sm:gap-3 min-w-0">
                  <span
                    className={`text-sm font-mono font-bold transition-colors ${
                      isActive ? "text-[#C65D2E]" : "text-[#526071]/60 group-hover:text-[#C65D2E]"
                    }`}
                  >
                    {service.number}
                  </span>

                  <div
                    className={`w-7 h-7 sm:w-8 sm:h-8 rounded-xl flex items-center justify-center shrink-0 transition-colors ${
                      isActive ? "bg-[#C65D2E] text-white" : "bg-[#F7E7DF] text-[#C65D2E]"
                    }`}
                  >
                    {service.id === 1 && <span className="font-bold text-xs">in</span>}
                    {service.id === 2 && <Mail size={14} />}
                    {service.id === 3 && <Phone size={14} />}
                    {service.id === 4 && <CalendarCheck size={14} />}
                  </div>

                  <span
                    className={`text-xs sm:text-sm font-bold truncate transition-colors ${
                      isActive ? "text-[#071525]" : "text-[#526071] group-hover:text-[#071525]"
                    }`}
                  >
                    {service.tabTitle}
                  </span>
                </div>

                <div
                  className={`w-6 h-6 rounded-full flex items-center justify-center shrink-0 transition-all ${
                    isActive
                      ? "bg-[#C65D2E] text-white"
                      : "bg-[#071525]/[0.04] text-[#526071] group-hover:bg-[#C65D2E]/10 group-hover:text-[#C65D2E]"
                  }`}
                >
                  <ArrowRight size={12} />
                </div>
              </button>
            );
          })}
        </div>

        {/* Large Interactive Demonstration Panel — Deep Midnight Navy Theme */}
        <div className="relative bg-[#071525] rounded-3xl border border-[#1C2C3E] p-6 sm:p-8 lg:p-12 shadow-[0_24px_60px_rgba(7,21,37,0.35)] text-white overflow-hidden">
          {/* Subtle ambient copper glow */}
          <div
            className="absolute -top-32 -right-32 w-96 h-96 rounded-full pointer-events-none opacity-20 blur-3xl"
            style={{ background: "radial-gradient(circle, #C65D2E 0%, transparent 70%)" }}
          />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center relative z-10">
            {/* Left Column: Short Headline, Description, 3 Benefits & CTA */}
            <div className="lg:col-span-4 flex flex-col items-start">
              {/* Progress Index Badge */}
              <div className="flex items-center gap-2 mb-3">
                <span className="text-xs font-mono font-bold text-[#E27D4C]">
                  {current.number} / 04
                </span>
                <div className="w-16 h-1 bg-white/10 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-[#C65D2E] transition-all duration-300"
                    style={{ width: `${(current.id / 4) * 100}%` }}
                  />
                </div>
              </div>

              {/* Title & Short Headline */}
              <h3 className="text-3xl sm:text-4xl font-black text-[#FAF9F6] tracking-tight mb-2">
                {current.title}
              </h3>
              <p className="text-sm sm:text-base font-bold text-[#E27D4C] mb-3">
                {current.headline}
              </p>

              {/* Concise Description */}
              <p className="text-xs sm:text-sm text-[#A0AEC0] leading-relaxed mb-6">
                {current.description}
              </p>

              {/* 3 Key Benefits */}
              <div className="flex flex-col gap-3.5 mb-8 w-full">
                {current.benefits.map((benefit, idx) => {
                  const Icon = benefit.icon;
                  return (
                    <div key={idx} className="flex items-center gap-3 text-xs font-bold text-[#FAF9F6]">
                      <div className="w-5 h-5 rounded-md bg-[#C65D2E]/20 text-[#E27D4C] border border-[#C65D2E]/30 flex items-center justify-center shrink-0">
                        <Icon size={12} />
                      </div>
                      <span>{benefit.text}</span>
                    </div>
                  );
                })}
              </div>

              {/* Clear CTA Button */}
              <a
                href="#contact"
                onClick={() => handleDiscussService(current.title)}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-[#C65D2E] text-white font-semibold text-xs uppercase tracking-wider hover:bg-[#B34F22] hover:shadow-[0_8px_20px_rgba(198,93,46,0.4)] transition-all duration-200 shadow-sm group"
              >
                <Play size={13} className="fill-white" />
                <span>{current.ctaText}</span>
                <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform ml-1" />
              </a>
            </div>

            {/* Center Column: Interactive Smartphone Demonstration */}
            <div className="lg:col-span-4 flex items-center justify-center">
              <AnimatePresence mode="wait">
                <motion.div
                  key={`${current.id}-${replayKey}`}
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.35 }}
                >
                  {current.id === 1 && <LinkedInDemo isPaused={isPaused} replayKey={replayKey} />}
                  {current.id === 2 && <ColdEmailDemo isPaused={isPaused} replayKey={replayKey} />}
                  {current.id === 3 && <ColdCallingDemo isPaused={isPaused} replayKey={replayKey} />}
                  {current.id === 4 && (
                    <AppointmentSettingDemo isPaused={isPaused} replayKey={replayKey} />
                  )}
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Right Column: Connected Workflow Steps & Pause/Replay Controls */}
            <div className="lg:col-span-4 flex flex-col justify-between h-full gap-6">
              {/* Connected Workflow Steps */}
              <div className="flex flex-col gap-3">
                {current.workflowSteps.map((step) => {
                  return (
                    <div
                      key={step.num}
                      className="p-3.5 rounded-2xl border bg-[#0D1D30]/90 border-[#1E2E42] shadow-xs flex items-start gap-3 hover:border-[#C65D2E]/50 transition-all group"
                    >
                      <div className="w-7 h-7 rounded-full bg-[#C65D2E]/20 text-[#E27D4C] border border-[#C65D2E]/30 flex items-center justify-center text-xs font-mono font-bold shrink-0 mt-0.5">
                        {step.num}
                      </div>
                      <div className="flex-1">
                        <span className="text-xs font-bold text-[#FAF9F6] block mb-0.5 group-hover:text-[#E27D4C] transition-colors">
                          {step.title}
                        </span>
                        <span className="text-[10px] text-[#A0AEC0] leading-relaxed block">
                          {step.desc}
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Pause & Replay Controls */}
              <div className="flex items-center gap-3 pt-4 border-t border-[#1C2C3E]">
                <button
                  type="button"
                  onClick={() => setIsPaused(!isPaused)}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-[#1C2C3E] hover:border-[#C65D2E]/50 text-[#A0AEC0] hover:text-[#FAF9F6] text-[11px] font-semibold transition-all bg-[#0B1828]"
                >
                  {isPaused ? <Play size={12} className="text-[#E27D4C]" /> : <Pause size={12} />}
                  <span>{isPaused ? "Resume demo" : "Pause demo"}</span>
                </button>

                <button
                  type="button"
                  onClick={() => setReplayKey((prev) => prev + 1)}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-[#1C2C3E] hover:border-[#C65D2E]/50 text-[#A0AEC0] hover:text-[#FAF9F6] text-[11px] font-semibold transition-all bg-[#0B1828]"
                >
                  <RotateCcw size={12} className="text-[#E27D4C]" />
                  <span>Replay demo</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
