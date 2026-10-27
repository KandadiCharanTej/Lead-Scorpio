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
      {/* Dynamic Island */}
      <div className="absolute top-3 left-1/2 -translate-x-1/2 w-20 h-3.5 bg-black rounded-full z-30 flex items-center justify-end pr-2.5">
        <span className="w-1.5 h-1.5 rounded-full bg-[#1e293b]/90 border border-white/10" />
      </div>

      {/* Screen Frame — Native LinkedIn App UI */}
      <div className="relative bg-[#F3F2EF] rounded-[34px] overflow-hidden pt-6 pb-2.5 px-3 flex flex-col h-[445px]">
        {/* LinkedIn App Header */}
        <div className="flex items-center justify-between pb-2 mb-2 border-b border-[#000000]/10 bg-white -mx-3 -mt-1 px-3 pt-2">
          <div className="flex items-center gap-2">
            <div className="relative">
              <div className="w-8 h-8 rounded-full bg-[#0A66C2] text-white flex items-center justify-center text-[11px] font-bold shadow-xs">
                SM
              </div>
              <span className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 rounded-full bg-[#057642] border-2 border-white" />
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-1">
                <span className="text-[11px] font-bold text-[#000000] leading-none">Sarah Mitchell</span>
                <span className="text-[9px] text-[#000000]/60">· 1st</span>
              </div>
              <span className="text-[8px] text-[#000000]/60 mt-0.5 truncate max-w-[130px]">
                VP of Marketing • Acme Tech
              </span>
            </div>
          </div>

          <div className="flex items-center gap-1 bg-[#0A66C2]/10 px-2 py-0.5 rounded-full text-[#0A66C2] text-[8px] font-bold">
            <span className="font-sans font-black">in</span>
            <span>InMail</span>
          </div>
        </div>

        {/* Message Thread */}
        <div className="flex-1 flex flex-col gap-2 overflow-hidden text-[10px] pt-1">
          {/* LinkedIn Profile Info Chip */}
          <div className="bg-white p-2 rounded-xl border border-[#000000]/[0.08] text-center mb-1 shadow-2xs">
            <p className="text-[8px] text-[#000000]/70">
              Joined conversation via <strong>LeadScorpio ICP Outreach</strong>
            </p>
          </div>

          {/* Bubble 1: Prospect message */}
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: animStage >= 0 ? 1 : 0, y: animStage >= 0 ? 0 : 8 }}
            className="bg-white p-2.5 rounded-2xl rounded-tl-xs border border-[#000000]/[0.08] shadow-2xs max-w-[85%] self-start"
          >
            <p className="text-[#191919] font-medium leading-relaxed">
              Hi! Do you have pricing for custom outbound pipelines?
            </p>
            <span className="text-[7.5px] text-[#000000]/50 block text-right mt-1">10:24 AM</span>
          </motion.div>

          {/* Bubble 2: Outbound Specialist Reply */}
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: animStage >= 1 ? 1 : 0, y: animStage >= 1 ? 0 : 8 }}
            className="bg-[#DCE6F1] p-2.5 rounded-2xl rounded-tr-xs border border-[#0A66C2]/20 shadow-2xs max-w-[88%] self-end"
          >
            <p className="text-[#0A66C2] font-semibold text-[8px] mb-0.5">LeadScorpio SDR</p>
            <p className="text-[#191919] font-medium leading-relaxed">
              Hey Sarah 👋 Yes, sharing our tailored catalog designed for high-growth B2B companies like Acme.
            </p>
            <span className="text-[7.5px] text-[#0A66C2] block text-right mt-1 font-semibold">10:25 AM ✓✓</span>
          </motion.div>

          {/* Bubble 3: Document Attachment */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: animStage >= 2 ? 1 : 0, scale: animStage >= 2 ? 1 : 0.96 }}
            className="bg-white p-2 rounded-xl border border-[#000000]/[0.08] shadow-2xs self-end flex items-center gap-2 max-w-[85%]"
          >
            <div className="w-6 h-6 rounded-md bg-[#FEE2E2] text-[#DC2626] flex items-center justify-center font-bold text-[8.5px]">
              PDF
            </div>
            <div className="flex-1 min-w-0">
              <span className="text-[9px] font-semibold text-[#191919] block truncate">
                Outbound_Playbook_2026.pdf
              </span>
              <span className="text-[7.5px] text-[#000000]/60">2 pages • 1.2 MB</span>
            </div>
            <span className="text-[10px] text-[#0A66C2] font-bold">↓</span>
          </motion.div>

          {/* Bubble 4: Positive Prospect Scheduling intent */}
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: animStage >= 3 ? 1 : 0, y: animStage >= 3 ? 0 : 8 }}
            className="bg-white p-2.5 rounded-2xl rounded-tl-xs border border-[#000000]/[0.08] shadow-2xs max-w-[85%] self-start"
          >
            <p className="text-[#191919] font-medium leading-relaxed">
              This looks great. Can we schedule a quick call this week?
            </p>
            <span className="text-[7.5px] text-[#000000]/50 block text-right mt-1">10:27 AM</span>
          </motion.div>

          {/* Bubble 5: Lead Qualified Alert */}
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: animStage >= 4 ? 1 : 0, y: animStage >= 4 ? 0 : 8 }}
            className="bg-[#EBF7EE] border border-[#057642]/30 rounded-xl p-1.5 text-center mt-auto"
          >
            <span className="text-[8.5px] font-bold text-[#057642] flex items-center justify-center gap-1">
              ✓ Qualified Decision-Maker • Synced with CRM
            </span>
          </motion.div>
        </div>

        {/* LinkedIn Chat Input Bar */}
        <div className="pt-2 border-t border-[#000000]/10 flex items-center gap-1.5 mt-auto bg-white -mx-3 -mb-1 px-3 py-1.5">
          <div className="flex-1 bg-[#F3F2EF] border border-[#000000]/10 rounded-full px-2.5 py-1 text-[8.5px] text-[#000000]/60">
            Write a message...
          </div>
          <div className="w-6 h-6 rounded-full bg-[#0A66C2] text-white flex items-center justify-center text-[9px] font-bold">
            ➤
          </div>
        </div>
      </div>
    </div>
  );
}

// ——————————————————————————————————————————————————
// DEMO 02: COLD EMAIL SMARTPHONE WORKFLOW (NATIVE INBOX)
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

      {/* Screen Frame — Native Email Client UI */}
      <div className="relative bg-[#FAFAFA] rounded-[34px] overflow-hidden pt-6 pb-2.5 px-3 flex flex-col h-[445px]">
        {/* Email App Header */}
        <div className="flex items-center justify-between pb-2 mb-2 border-b border-[#071525]/[0.08] bg-white -mx-3 -mt-1 px-3 pt-2">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-full bg-[#EA4335] text-white flex items-center justify-center font-bold text-xs shadow-xs">
              ✉
            </div>
            <div>
              <span className="text-[11px] font-bold text-[#202124] leading-none block">
                Inbox Thread (3)
              </span>
              <span className="text-[8px] text-[#5F6368] mt-0.5">David Vance • VP Marketing</span>
            </div>
          </div>
          <span className="px-2 py-0.5 rounded-full bg-[#E6F4EA] text-[#137333] text-[8px] font-bold">
            Sequence Active
          </span>
        </div>

        {/* Email Cards Container */}
        <div className="flex-1 flex flex-col gap-2 overflow-hidden text-[10px]">
          {/* Email 1: Initial Pitch */}
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: animStage >= 0 ? 1 : 0, y: animStage >= 0 ? 0 : 8 }}
            className="p-2.5 rounded-xl bg-white border border-[#E0E0E0] shadow-xs"
          >
            <div className="flex items-center justify-between mb-1">
              <span className="font-bold text-[#202124] text-[9.5px]">1. Tailored Outbound Strategy</span>
              <span className="text-[7.5px] font-mono text-[#5F6368] bg-[#F1F3F4] px-1.5 py-0.5 rounded">Day 1</span>
            </div>
            <p className="text-[8.5px] text-[#5F6368] leading-relaxed line-clamp-2">
              "Hi David, noticed CloudCore expanding mid-market reps. We build custom outbound pipelines targeting verified VP buyers..."
            </p>
          </motion.div>

          {/* Email 2: Follow-Up Step */}
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: animStage >= 1 ? 1 : 0, y: animStage >= 1 ? 0 : 8 }}
            className="p-2.5 rounded-xl bg-white border-l-3 border-l-[#C65D2E] border-t border-r border-b border-[#E0E0E0] shadow-xs"
          >
            <div className="flex items-center justify-between mb-1">
              <span className="font-bold text-[#C65D2E] text-[9.5px]">2. Follow-Up: Relevant Data</span>
              <span className="text-[7.5px] font-mono text-[#C65D2E] font-semibold bg-[#F7E7DF] px-1.5 py-0.5 rounded">Day 4</span>
            </div>
            <p className="text-[8.5px] text-[#202124] leading-relaxed line-clamp-2">
              "Quick bump with our benchmark response rates across Series B SaaS teams..."
            </p>
          </motion.div>

          {/* Email 3: Positive Reply from Prospect */}
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: animStage >= 2 ? 1 : 0, y: animStage >= 2 ? 0 : 8 }}
            className="p-2.5 rounded-xl bg-[#E6F4EA] border border-[#34A853]/40 shadow-xs"
          >
            <div className="flex items-center justify-between mb-1">
              <div className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#137333]" />
                <span className="font-bold text-[#137333] text-[9.5px]">David Vance (Reply)</span>
              </div>
              <span className="text-[8px] text-[#137333] font-semibold">11:15 AM</span>
            </div>
            <p className="text-[9px] text-[#137333] font-medium leading-relaxed">
              "Thanks for reaching out with exact context. Do you have 15 mins this Thursday to discuss?"
            </p>
          </motion.div>

          {/* Qualified Notification */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: animStage >= 3 ? 1 : 0 }}
            className="p-2 rounded-xl bg-[#F7E7DF] border border-[#C65D2E]/40 text-center text-[8.5px] font-bold text-[#C65D2E] mt-auto"
          >
            ⚡ Positive Reply Received → Meeting Routing Initiated
          </motion.div>
        </div>

        {/* Quick Reply Bar */}
        <div className="pt-2 border-t border-[#E0E0E0] flex items-center justify-between text-[9px] text-[#5F6368] bg-white -mx-3 -mb-1 px-3 py-1.5">
          <span className="flex items-center gap-1 font-semibold text-[#1A73E8]">
            ↩ Reply to David
          </span>
          <span className="text-[8px] bg-[#F1F3F4] px-2 py-0.5 rounded-full">Archive</span>
        </div>
      </div>
    </div>
  );
}

// ——————————————————————————————————————————————————
// DEMO 03: COLD CALLING SMARTPHONE DEMO (NATIVE PHONE CALL SCREEN)
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

      {/* Screen Frame — Native iOS Phone Call Screen */}
      <div className="relative bg-[#071525] rounded-[34px] overflow-hidden pt-7 pb-3 px-3 flex flex-col h-[445px] text-white">
        {/* Caller Avatar & Status */}
        <div className="flex flex-col items-center text-center pt-2 pb-3">
          <div className="w-14 h-14 rounded-full bg-[#1E2E42] border-2 border-[#C65D2E] flex items-center justify-center text-xl font-bold mb-2 shadow-md">
            AM
          </div>
          <h4 className="text-sm font-bold text-white tracking-tight">Alex Morgan</h4>
          <p className="text-[9px] text-[#A0AEC0]">Chief Revenue Officer • FinScale</p>
          <div className="flex items-center gap-1.5 mt-1.5 px-2 py-0.5 rounded-full bg-[#154622]/40 border border-[#7BC68E]/30 text-[#7BC68E] text-[8.5px] font-mono">
            <span className="w-1.5 h-1.5 rounded-full bg-[#7BC68E] animate-pulse" />
            <span>02:45 Connected</span>
          </div>
        </div>

        {/* Live Call Notes & Qualification */}
        <div className="flex-1 flex flex-col gap-2 overflow-hidden text-[9px]">
          {/* Preparation / Script Card */}
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: animStage >= 0 ? 1 : 0, y: animStage >= 0 ? 0 : 8 }}
            className="p-2.5 rounded-xl bg-white/5 border border-white/10"
          >
            <span className="text-[8px] font-mono font-bold text-[#E27D4C] block mb-0.5">
              TARGET ICP VERIFIED
            </span>
            <p className="text-[8.5px] text-[#FAF9F6]/80 leading-relaxed">
              • Pain: Sales reps spending 40% time on manual lead research.<br />
              • Offer: Dedicated outbound pipeline targeting B2B finance leaders.
            </p>
          </motion.div>

          {/* Live Outcome Notes */}
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: animStage >= 1 ? 1 : 0, y: animStage >= 1 ? 0 : 8 }}
            className="p-2.5 rounded-xl bg-white/5 border border-[#C65D2E]/40"
          >
            <div className="flex items-center justify-between mb-0.5">
              <span className="font-bold text-[#FAF9F6]">Prospect Sentiment</span>
              <span className="text-[8px] text-[#E27D4C] font-semibold">High Intent</span>
            </div>
            <p className="text-[8.5px] text-[#A0AEC0] leading-relaxed">
              Alex agreed to 30-min strategy presentation with CRO and sales team.
            </p>
          </motion.div>

          {/* Action Logged */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: animStage >= 2 ? 1 : 0 }}
            className="p-2 rounded-xl bg-[#C65D2E]/20 border border-[#C65D2E]/50 text-center text-[8.5px] font-bold text-[#E27D4C] mt-auto"
          >
            ✓ Meeting Booked on Calendar • Call Recorded & Transcribed
          </motion.div>
        </div>

        {/* In-Call Keypad Controls */}
        <div className="grid grid-cols-3 gap-2 pt-3 border-t border-white/10 mt-auto">
          <div className="flex flex-col items-center gap-1">
            <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-xs">
              🎙️
            </div>
            <span className="text-[7.5px] text-white/60">Mute</span>
          </div>
          <div className="flex flex-col items-center gap-1">
            <div className="w-8 h-8 rounded-full bg-[#C65D2E] flex items-center justify-center text-xs text-white">
              📝
            </div>
            <span className="text-[7.5px] text-[#E27D4C]">Notes</span>
          </div>
          <div className="flex flex-col items-center gap-1">
            <div className="w-8 h-8 rounded-full bg-red-600 flex items-center justify-center text-xs text-white">
              ✕
            </div>
            <span className="text-[7.5px] text-white/60">End</span>
          </div>
        </div>
      </div>
    </div>
  );
}

// ——————————————————————————————————————————————————
// DEMO 04: APPOINTMENT SETTING SMARTPHONE DEMO (CALENDAR BOOKING APP)
// ——————————————————————————————————————————————————
function AppointmentSettingDemo({ isPaused, replayKey }: { isPaused: boolean; replayKey: number }) {
  const [selectedSlot, setSelectedSlot] = useState("Thu 2:30 PM");

  return (
    <div className="relative w-[280px] sm:w-[305px] bg-[#0c1622] rounded-[42px] p-2 shadow-[0_24px_50px_rgba(7,21,37,0.16)] border border-[#223347] ring-1 ring-[#071525]/80 select-none">
      <div className="absolute top-3 left-1/2 -translate-x-1/2 w-20 h-3.5 bg-black rounded-full z-30 flex items-center justify-end pr-2.5">
        <span className="w-1.5 h-1.5 rounded-full bg-[#1e293b]/90 border border-white/10" />
      </div>

      {/* Screen Frame — Native Calendar Scheduling App */}
      <div className="relative bg-[#FAFAFA] rounded-[34px] overflow-hidden pt-6 pb-2.5 px-3 flex flex-col h-[445px]">
        {/* Header */}
        <div className="flex items-center justify-between pb-2 mb-2 border-b border-[#071525]/[0.08] bg-white -mx-3 -mt-1 px-3 pt-2">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-xl bg-[#F7E7DF] text-[#C65D2E] flex items-center justify-center font-bold text-xs shadow-xs">
              📅
            </div>
            <div>
              <span className="text-[11px] font-bold text-[#071525] leading-none block">
                Book a Strategy Call
              </span>
              <span className="text-[8px] text-[#526071] mt-0.5">30 mins • Google Meet</span>
            </div>
          </div>
          <span className="px-2 py-0.5 rounded-full bg-[#C65D2E] text-white text-[8px] font-bold">
            Live Booking
          </span>
        </div>

        {/* Content */}
        <div className="flex-1 flex flex-col gap-2 overflow-hidden text-[10px]">
          {/* Host info */}
          <div className="bg-white p-2.5 rounded-xl border border-[#071525]/[0.06] shadow-2xs">
            <span className="text-[8px] font-mono text-[#526071] uppercase block mb-1">
              MEETING DETAILS
            </span>
            <p className="text-[9px] text-[#071525] font-semibold">
              B2B Outbound Blueprint & ICP Discovery
            </p>
            <p className="text-[8px] text-[#526071] mt-0.5">
              Host: LeadScorpio Growth Specialist
            </p>
          </div>

          {/* Slot Selector */}
          <div className="p-2.5 rounded-xl bg-white border border-[#071525]/[0.06] shadow-2xs">
            <span className="text-[8px] font-bold text-[#526071] uppercase tracking-wider block mb-1.5 font-mono">
              SELECT TIME (YOUR TIMEZONE)
            </span>
            <div className="grid grid-cols-2 gap-1.5">
              {["Wed 11:00 AM", "Wed 3:00 PM", "Thu 2:30 PM", "Fri 10:30 AM"].map((slot) => (
                <button
                  type="button"
                  key={slot}
                  onClick={() => setSelectedSlot(slot)}
                  className={`py-1.5 px-2 rounded-lg text-[9px] font-semibold border transition-all cursor-pointer ${
                    selectedSlot === slot
                      ? "bg-[#C65D2E] text-white border-[#C65D2E] shadow-xs"
                      : "bg-[#FAF9F6] text-[#071525] border-[#071525]/[0.08] hover:border-[#C65D2E]/40"
                  }`}
                >
                  {slot}
                </button>
              ))}
            </div>
          </div>

          {/* Confirmation Card */}
          <div className="p-2.5 rounded-xl bg-[#EBF7EE] border border-[#7BC68E]/40 text-xs mt-auto">
            <div className="flex items-center gap-1.5 mb-1">
              <CheckCircle2 size={13} className="text-[#154622]" />
              <span className="font-bold text-[#154622] text-[9.5px]">Selected: {selectedSlot}</span>
            </div>
            <p className="text-[8.5px] text-[#154622]/90 leading-relaxed">
              Direct calendar invitation and video link will be sent to the prospect automatically.
            </p>
          </div>

          <div className="p-2 rounded-xl bg-[#FFF4ED] border border-[#C65D2E]/30 text-center text-[8.5px] font-bold text-[#C65D2E]">
            ⚡ Real-time Calendar Sync • Instant Confirmation
          </div>
        </div>

        {/* Footer Confirm Action */}
        <div className="pt-2 border-t border-[#071525]/[0.07] bg-white -mx-3 -mb-1 px-3 py-1.5">
          <button
            type="button"
            className="w-full py-1.5 rounded-full bg-[#C65D2E] text-white text-[9px] font-bold text-center block shadow-2xs"
          >
            Confirm {selectedSlot}
          </button>
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
              <span className="text-xs font-mono font-bold tracking-[0.2em] uppercase text-[var(--color-brand-copper)]">
                SERVICES
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
