"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Monitor,
  Cpu,
  Bot,
  Factory,
  GraduationCap,
  Sparkles,
  Users,
  Briefcase,
  Truck,
  Building2,
  ArrowRight,
  Target,
  Share2,
  MessageSquare,
  BarChart3,
  CheckCircle2,
  Mail,
  Phone,
  Calendar,
  Layers,
  Sparkle,
  ShieldCheck,
  Search,
} from "lucide-react";
import { cn } from "@/lib/utils";

// ——————————————————————————————————————————————————
// SECTION 05: PRECISION OUTBOUND — 4 ELASTIC PRINCIPLES
// ——————————————————————————————————————————————————
interface PrecisionPrinciple {
  id: string;
  title: string;
  shortTitle: string;
  category: string;
  description: string;
  icon: any;
  accent: string;
}

const precisionPrinciples: PrecisionPrinciple[] = [
  {
    id: "01",
    title: "ICP-first targeting",
    shortTitle: "ICP Targeting",
    category: "FOUNDATION",
    description:
      "We identify companies and decision-makers that match your ideal customer profile.",
    icon: Target,
    accent: "#C65D2E",
  },
  {
    id: "02",
    title: "Coordinated outbound",
    shortTitle: "Omnichannel",
    category: "CHANNELS",
    description:
      "LinkedIn outreach, cold email, and cold calling work together to reach relevant prospects.",
    icon: Share2,
    accent: "#C65D2E",
  },
  {
    id: "03",
    title: "Personalized messaging",
    shortTitle: "Tailored Notes",
    category: "RELEVANCE",
    description:
      "We tailor messaging to the prospect's business, role, and potential needs.",
    icon: MessageSquare,
    accent: "#C65D2E",
  },
  {
    id: "04",
    title: "Transparent reporting",
    shortTitle: "Analytics",
    category: "INSIGHTS",
    description:
      "Track campaign activity, replies, qualified prospects, and meetings booked.",
    icon: BarChart3,
    accent: "#C65D2E",
  },
];

// ——————————————————————————————————————————————————
// CUSTOM ILLUSTRATIONS FOR EACH PRINCIPLE
// Lightweight, responsive, zero external dependency breakage
// ——————————————————————————————————————————————————

function ICPIllustration({ isActive }: { isActive: boolean }) {
  return (
    <div className="w-full h-full flex flex-col justify-center items-center p-4 sm:p-6 select-none">
      <div
        className={cn(
          "w-full max-w-[320px] rounded-2xl bg-white/95 backdrop-blur-md p-4 sm:p-5 border border-[#071525]/[0.08] shadow-[0_16px_36px_rgba(7,21,37,0.08)] transition-all duration-700",
          isActive ? "scale-100 opacity-100" : "scale-95 opacity-60"
        )}
      >
        <div className="flex items-center justify-between pb-3 mb-3 border-b border-[#071525]/[0.06]">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-xl bg-[#F7E7DF] text-[#C65D2E] flex items-center justify-center font-bold text-xs">
              <Target size={16} />
            </div>
            <div>
              <span className="text-xs font-bold text-[#071525] block">Target ICP Profile</span>
              <span className="text-[9px] text-[#526071]">Verified Fit Criteria</span>
            </div>
          </div>
          <span className="text-[9px] font-mono font-bold px-2 py-0.5 rounded-full bg-[#EBF7EE] text-[#154622]">
            Active
          </span>
        </div>

        <div className="space-y-2 text-[10.5px]">
          <div className="flex items-center justify-between p-2 rounded-xl bg-[#FAF9F6]">
            <span className="text-[#526071]">Industry</span>
            <span className="font-bold text-[#071525]">B2B SaaS / FinTech</span>
          </div>
          <div className="flex items-center justify-between p-2 rounded-xl bg-[#FAF9F6]">
            <span className="text-[#526071]">Company Size</span>
            <span className="font-bold text-[#071525]">50 – 500 Employees</span>
          </div>
          <div className="flex items-center justify-between p-2 rounded-xl bg-[#FAF9F6]">
            <span className="text-[#526071]">Seniority</span>
            <span className="font-bold text-[#C65D2E]">VP & C-Level</span>
          </div>
        </div>

        <div className="mt-3 pt-2.5 border-t border-[#071525]/[0.06] flex items-center justify-between text-[9px] text-[#526071] font-mono">
          <span>Accuracy rate</span>
          <span className="font-bold text-[#154622]">99.2% on-spec</span>
        </div>
      </div>
    </div>
  );
}

function CoordinatedIllustration({ isActive }: { isActive: boolean }) {
  return (
    <div className="w-full h-full flex flex-col justify-center items-center p-4 sm:p-6 select-none">
      <div
        className={cn(
          "w-full max-w-[320px] rounded-2xl bg-white/95 backdrop-blur-md p-4 sm:p-5 border border-[#071525]/[0.08] shadow-[0_16px_36px_rgba(7,21,37,0.08)] transition-all duration-700",
          isActive ? "scale-100 opacity-100" : "scale-95 opacity-60"
        )}
      >
        <div className="flex items-center justify-between pb-3 mb-3 border-b border-[#071525]/[0.06]">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-xl bg-[#F7E7DF] text-[#C65D2E] flex items-center justify-center font-bold text-xs">
              <Share2 size={16} />
            </div>
            <div>
              <span className="text-xs font-bold text-[#071525] block">3-Channel Cadence</span>
              <span className="text-[9px] text-[#526071]">Synchronized Touchpoints</span>
            </div>
          </div>
          <span className="text-[9px] font-mono font-bold px-2 py-0.5 rounded-full bg-[#FFF4ED] text-[#C65D2E]">
            Omnichannel
          </span>
        </div>

        <div className="space-y-2 text-[10.5px]">
          <div className="flex items-center justify-between p-2 rounded-xl bg-[#FAF9F6] border border-[#071525]/[0.04]">
            <div className="flex items-center gap-2">
              <span className="w-5 h-5 rounded bg-[#0077B5] text-white flex items-center justify-center text-[9px] font-bold">
                in
              </span>
              <span className="font-semibold text-[#071525]">LinkedIn Outreach</span>
            </div>
            <span className="text-[9px] font-mono font-semibold text-[#154622]">Step 1</span>
          </div>

          <div className="flex items-center justify-between p-2 rounded-xl bg-[#FAF9F6] border border-[#071525]/[0.04]">
            <div className="flex items-center gap-2">
              <span className="w-5 h-5 rounded bg-[#C65D2E] text-white flex items-center justify-center text-[9px]">
                <Mail size={11} />
              </span>
              <span className="font-semibold text-[#071525]">Contextual Cold Email</span>
            </div>
            <span className="text-[9px] font-mono font-semibold text-[#C65D2E]">Step 2</span>
          </div>

          <div className="flex items-center justify-between p-2 rounded-xl bg-[#FAF9F6] border border-[#071525]/[0.04]">
            <div className="flex items-center gap-2">
              <span className="w-5 h-5 rounded bg-[#071525] text-white flex items-center justify-center text-[9px]">
                <Phone size={11} />
              </span>
              <span className="font-semibold text-[#071525]">Warm Cold Call Follow-up</span>
            </div>
            <span className="text-[9px] font-mono font-semibold text-[#526071]">Step 3</span>
          </div>
        </div>

        <div className="mt-3 pt-2.5 border-t border-[#071525]/[0.06] flex items-center justify-between text-[9px] text-[#526071] font-mono">
          <span>Cadence alignment</span>
          <span className="font-bold text-[#C65D2E]">Single thread continuity</span>
        </div>
      </div>
    </div>
  );
}

function MessagingIllustration({ isActive }: { isActive: boolean }) {
  return (
    <div className="w-full h-full flex flex-col justify-center items-center p-4 sm:p-6 select-none">
      <div
        className={cn(
          "w-full max-w-[320px] rounded-2xl bg-white/95 backdrop-blur-md p-4 sm:p-5 border border-[#071525]/[0.08] shadow-[0_16px_36px_rgba(7,21,37,0.08)] transition-all duration-700",
          isActive ? "scale-100 opacity-100" : "scale-95 opacity-60"
        )}
      >
        <div className="flex items-center justify-between pb-3 mb-2.5 border-b border-[#071525]/[0.06]">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-xl bg-[#F7E7DF] text-[#C65D2E] flex items-center justify-center font-bold text-xs">
              <MessageSquare size={16} />
            </div>
            <div>
              <span className="text-xs font-bold text-[#071525] block">Tailored Message</span>
              <span className="text-[9px] text-[#526071]">Zero Templates</span>
            </div>
          </div>
          <span className="text-[9px] font-mono font-bold px-2 py-0.5 rounded-full bg-[#EBF7EE] text-[#154622]">
            Contextual
          </span>
        </div>

        <div className="p-3 rounded-xl bg-[#FAF9F6] border border-[#071525]/[0.05] text-[10.5px] leading-relaxed mb-2.5">
          <p className="text-[#071525] mb-1">
            "Hi <span className="font-bold text-[#C65D2E]">Sarah</span>, noticed{" "}
            <span className="font-bold text-[#071525]">Acme Tech's</span> recent expansion in EMEA..."
          </p>
          <div className="space-y-1 mt-2">
            <div className="h-1.5 w-full bg-[#071525]/[0.07] rounded-full" />
            <div className="h-1.5 w-4/5 bg-[#071525]/[0.07] rounded-full" />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-1.5 text-[9px] font-mono">
          <div className="p-1.5 rounded-lg bg-white border border-[#071525]/[0.06] flex items-center gap-1.5 text-[#154622] font-semibold">
            <CheckCircle2 size={11} /> Trigger Hook
          </div>
          <div className="p-1.5 rounded-lg bg-white border border-[#071525]/[0.06] flex items-center gap-1.5 text-[#C65D2E] font-semibold">
            <CheckCircle2 size={11} /> 1-on-1 Context
          </div>
        </div>
      </div>
    </div>
  );
}

function ReportingIllustration({ isActive }: { isActive: boolean }) {
  return (
    <div className="w-full h-full flex flex-col justify-center items-center p-4 sm:p-6 select-none">
      <div
        className={cn(
          "w-full max-w-[320px] rounded-2xl bg-white/95 backdrop-blur-md p-4 sm:p-5 border border-[#071525]/[0.08] shadow-[0_16px_36px_rgba(7,21,37,0.08)] transition-all duration-700",
          isActive ? "scale-100 opacity-100" : "scale-95 opacity-60"
        )}
      >
        <div className="flex items-center justify-between pb-3 mb-3 border-b border-[#071525]/[0.06]">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-xl bg-[#F7E7DF] text-[#C65D2E] flex items-center justify-center font-bold text-xs">
              <BarChart3 size={16} />
            </div>
            <div>
              <span className="text-xs font-bold text-[#071525] block">Activity Dashboard</span>
              <span className="text-[9px] text-[#526071]">Full Client Visibility</span>
            </div>
          </div>
          <span className="text-[9px] font-mono font-bold px-2 py-0.5 rounded-full bg-[#EBF7EE] text-[#154622]">
            Live Sync
          </span>
        </div>

        <div className="grid grid-cols-2 gap-2 text-[10px] mb-2.5">
          <div className="p-2.5 rounded-xl bg-[#FAF9F6] border border-[#071525]/[0.04]">
            <span className="text-[8.5px] font-mono text-[#526071] block">TOUCHPOINTS</span>
            <span className="text-sm font-black font-mono text-[#071525]">Active Logs</span>
          </div>
          <div className="p-2.5 rounded-xl bg-[#FAF9F6] border border-[#071525]/[0.04]">
            <span className="text-[8.5px] font-mono text-[#526071] block">MEETINGS</span>
            <span className="text-sm font-black font-mono text-[#C65D2E]">Qualified</span>
          </div>
        </div>

        <div className="space-y-1 text-[9.5px]">
          <div className="flex items-center justify-between p-1.5 rounded-lg bg-white border border-[#071525]/[0.05]">
            <span className="text-[#071525] font-medium">Verified Prospect Dispatches</span>
            <span className="font-mono text-[#154622] font-bold">100% Tracked</span>
          </div>
          <div className="flex items-center justify-between p-1.5 rounded-lg bg-white border border-[#071525]/[0.05]">
            <span className="text-[#071525] font-medium">BANT Qualification Notes</span>
            <span className="font-mono text-[#C65D2E] font-bold">Logged to CRM</span>
          </div>
        </div>
      </div>
    </div>
  );
}

function renderPrincipleVisual(id: string, isActive: boolean) {
  switch (id) {
    case "01":
      return <ICPIllustration isActive={isActive} />;
    case "02":
      return <CoordinatedIllustration isActive={isActive} />;
    case "03":
      return <MessagingIllustration isActive={isActive} />;
    case "04":
      return <ReportingIllustration isActive={isActive} />;
    default:
      return null;
  }
}

// 10 Unique Industries (Preserved exactly)
const industries = [
  {
    name: "B2B SaaS",
    description: "Software companies selling subscriptions or business software to other businesses.",
    icon: Monitor,
  },
  {
    name: "IT & Software Services",
    description: "IT services, software development, and technology consulting companies.",
    icon: Cpu,
  },
  {
    name: "AI & Automation",
    description: "AI agencies, automation consultancies, and business workflow solution providers.",
    icon: Bot,
  },
  {
    name: "Manufacturing & Industrial",
    description: "Manufacturers, industrial suppliers, machinery, and equipment businesses.",
    icon: Factory,
  },
  {
    name: "Coaching & Consulting",
    description: "B2B coaches, business consultants, and specialist advisory firms.",
    icon: GraduationCap,
  },
  {
    name: "Marketing & Creative Agencies",
    description: "B2B marketing, lead generation, design, and digital agencies.",
    icon: Sparkles,
  },
  {
    name: "Recruitment & Staffing",
    description: "Recruitment firms, staffing providers, and talent solutions companies.",
    icon: Users,
  },
  {
    name: "Professional Services",
    description: "B2B accounting, legal, financial, and other specialist service firms.",
    icon: Briefcase,
  },
  {
    name: "Logistics & Supply Chain",
    description: "B2B logistics, freight, distribution, and supply chain service providers.",
    icon: Truck,
  },
  {
    name: "Business Services",
    description: "Other service businesses with a defined B2B offer and identifiable decision-makers.",
    icon: Building2,
  },
];

export default function WhySection() {
  const [activeId, setActiveId] = useState<string>("01");

  return (
    <>
      {/* ========================================================================= */}
      {/* SECTION 05: PRECISION OUTBOUND — ELASTIC GALLERY                          */}
      {/* ========================================================================= */}
      <section
        id="precision-outbound"
        className="py-24 md:py-32 bg-[var(--color-brand-white)] relative overflow-hidden border-t border-[#071525]/[0.08] scroll-mt-20"
      >
        {/* Background Grid */}
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

        {/* Ambient warm radial glow */}
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[600px] rounded-full pointer-events-none opacity-40"
          style={{
            background: "radial-gradient(ellipse, rgba(198,93,46,0.06) 0%, transparent 68%)",
          }}
        />

        <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-12 relative z-10">
          {/* Section Header */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-14 md:mb-16">
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
                  05 / PRECISION OUTBOUND
                </span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-[var(--color-brand-navy)] leading-[1.12]">
                Not more leads. <br className="hidden sm:inline" />
                <span className="text-[var(--color-brand-copper)]">Better opportunities.</span>
              </h2>

              <p className="text-base sm:text-lg text-[#526071] leading-relaxed max-w-2xl pt-1">
                Every tactic we use is designed to connect your business with relevant prospects and create meaningful sales conversations.
              </p>
            </motion.div>

            {/* Direct CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-4 flex items-start lg:justify-end"
            >
              <a
                href="#contact"
                className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-[#071525] text-white text-sm font-bold shadow-md hover:bg-[#C65D2E] hover:shadow-lg transition-all duration-300 group"
              >
                <span>Start Building Your Pipeline</span>
                <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
              </a>
            </motion.div>
          </div>

          {/* ========================================================================= */}
          {/* ELASTIC GALLERY CONTAINER (4 CONNECTED PANELS)                            */}
          {/* Desktop & Tablet: Horizontal Elastic Accordion                            */}
          {/* Mobile: Clean Stacked Accordion with Touch Support                        */}
          {/* ========================================================================= */}
          <div className="hidden md:flex h-[490px] lg:h-[530px] w-full gap-3 select-none">
            {precisionPrinciples.map((item) => {
              const isActive = activeId === item.id;
              const Icon = item.icon;

              return (
                <div
                  key={item.id}
                  onMouseEnter={() => setActiveId(item.id)}
                  onClick={() => setActiveId(item.id)}
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      setActiveId(item.id);
                    }
                  }}
                  role="button"
                  aria-expanded={isActive}
                  className={cn(
                    "relative cursor-pointer overflow-hidden rounded-3xl border transition-[flex,background-color,border-color,box-shadow] duration-500 ease-[cubic-bezier(0.25,1,0.5,1)]",
                    isActive
                      ? "flex-[3.5] border-[#C65D2E]/40 shadow-[0_20px_45px_rgba(7,21,37,0.08)] bg-white ring-1 ring-[#C65D2E]/20"
                      : "flex-[0.8] border-[#071525]/[0.06] bg-[#FAF9F6] hover:bg-white/80 hover:border-[#071525]/15"
                  )}
                >
                  {/* Top Warm Accent Bar */}
                  <div
                    className={cn(
                      "absolute top-0 inset-x-0 h-1 transition-opacity duration-300",
                      isActive ? "bg-[#C65D2E] opacity-100" : "opacity-0"
                    )}
                  />

                  {isActive ? (
                    /* ——————————————————————————————————————————
                       ACTIVE EXPANDED STATE (Clean, Rich & Fluid)
                       —————————————————————————————————————————— */
                    <div className="h-full flex flex-col justify-between p-6 sm:p-7 animate-in fade-in duration-300">
                      {/* Top Header */}
                      <div className="flex items-center justify-between pb-2 border-b border-[#071525]/[0.06]">
                        <div className="flex items-center gap-3">
                          <span className="text-2xl font-mono font-black text-[#C65D2E]">
                            {item.id}
                          </span>
                          <span className="text-[10px] font-mono font-bold tracking-widest uppercase px-2.5 py-0.5 rounded-full bg-[#F7E7DF] text-[#C65D2E]">
                            {item.category}
                          </span>
                        </div>
                        <div className="w-10 h-10 rounded-xl bg-[#C65D2E] text-white flex items-center justify-center shadow-xs">
                          <Icon size={18} />
                        </div>
                      </div>

                      {/* Central Interactive UI Illustration */}
                      <div className="flex-1 my-3 flex items-center justify-center overflow-hidden">
                        {renderPrincipleVisual(item.id, true)}
                      </div>

                      {/* Bottom Copy: Title & Description */}
                      <div className="pt-2 border-t border-[#071525]/[0.06]">
                        <h3 className="text-xl sm:text-2xl font-bold text-[#071525] tracking-tight mb-1.5">
                          {item.title}
                        </h3>
                        <p className="text-xs sm:text-sm text-[#526071] leading-relaxed max-w-lg">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  ) : (
                    /* ——————————————————————————————————————————
                       INACTIVE CLOSED STATE (Minimal, Clean & Best)
                       Zero text lag/ghosting, vertical number + icon + title
                       —————————————————————————————————————————— */
                    <div className="h-full flex flex-col items-center justify-between py-7 px-2 group/inactive animate-in fade-in duration-200">
                      {/* Step Number */}
                      <span className="text-xl lg:text-2xl font-mono font-black text-[#526071]/80 group-hover/inactive:text-[#C65D2E] transition-colors">
                        {item.id}
                      </span>

                      {/* Prominent Vertical Title */}
                      <div className="flex-1 flex items-center justify-center my-6">
                        <span className="text-base lg:text-lg font-black text-[#071525] group-hover/inactive:text-[#C65D2E] tracking-tight whitespace-nowrap [writing-mode:vertical-rl] rotate-180 transition-colors">
                          {item.title}
                        </span>
                      </div>

                      {/* Minimal Circular Icon Badge */}
                      <div className="w-10 h-10 rounded-full bg-white border border-[#071525]/[0.1] shadow-2xs flex items-center justify-center text-[#526071] group-hover/inactive:text-[#C65D2E] group-hover/inactive:border-[#C65D2E]/40 group-hover/inactive:shadow-xs transition-all">
                        <Icon size={17} />
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* ========================================================================= */}
          {/* MOBILE RESPONSIVE STACKED ACCORDION (< 768px)                             */}
          {/* ========================================================================= */}
          <div className="md:hidden space-y-3">
            {precisionPrinciples.map((item) => {
              const isActive = activeId === item.id;
              const Icon = item.icon;

              return (
                <div
                  key={item.id}
                  onClick={() => setActiveId(item.id)}
                  className={cn(
                    "rounded-2xl border transition-all duration-300 overflow-hidden",
                    isActive
                      ? "bg-white border-[#C65D2E] shadow-sm"
                      : "bg-[#FAF9F6] border-[#071525]/[0.08]"
                  )}
                >
                  <div className="p-4 flex items-center justify-between cursor-pointer">
                    <div className="flex items-center gap-3">
                      <span
                        className={cn(
                          "text-lg font-mono font-black",
                          isActive ? "text-[#C65D2E]" : "text-[#526071]"
                        )}
                      >
                        {item.id}
                      </span>
                      <h3 className="text-sm font-bold text-[#071525]">{item.title}</h3>
                    </div>
                    <div
                      className={cn(
                        "w-8 h-8 rounded-lg flex items-center justify-center text-xs",
                        isActive ? "bg-[#C65D2E] text-white" : "bg-white text-[#526071] border border-[#071525]/[0.06]"
                      )}
                    >
                      <Icon size={14} />
                    </div>
                  </div>

                  <AnimatePresence>
                    {isActive && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="px-4 pb-4 pt-1"
                      >
                        <p className="text-xs text-[#526071] leading-relaxed mb-3">
                          {item.description}
                        </p>
                        <div className="pt-2 border-t border-[#071525]/[0.06]">
                          {renderPrincipleVisual(item.id, true)}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 06: WHO WE WORK WITH — CONTINUOUS HORIZONTAL INDUSTRY TICKER       */}
      {/* ========================================================================= */}
      <section className="py-20 md:py-28 bg-[var(--color-brand-white)] relative overflow-hidden border-t border-[#071525]/[0.08]">
        {/* Subtle grid background for continuity */}
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

        <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-12 relative z-10 mb-10 md:mb-14">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col items-start gap-3 max-w-4xl"
          >
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-brand-copper)]" />
              <span className="text-xs font-mono font-bold tracking-[0.2em] uppercase text-[var(--color-brand-copper)]">
                WHO WE WORK WITH
              </span>
            </div>

            {/* Balanced Headline (42-48px on desktop, max 2 lines, clean bold modern type) */}
            <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-black tracking-tight leading-[1.12] text-[#071525]">
              Built for B2B companies{" "}
              <span className="text-[#C65D2E]">that sell to businesses.</span>
            </h2>

            {/* Description (16-18px, muted secondary text #526071) */}
            <p className="text-base sm:text-lg text-[#526071] leading-relaxed max-w-2xl pt-1">
              We help B2B teams reach relevant decision-makers through targeted prospecting, personalized outreach, and consistent follow-up.
            </p>
          </motion.div>
        </div>

        {/* ========================================================================= */}
        {/* CONTINUOUS HORIZONTAL INDUSTRY TICKER (SEAMLESS INFINITE LOOP)            */}
        {/* Compact white/warm-white pills with copper icons, pause on hover/focus    */}
        {/* ========================================================================= */}
        <div className="relative w-full overflow-hidden py-4 select-none group">
          {/* Edge Blur Gradients */}
          <div className="absolute left-0 inset-y-0 w-16 md:w-28 bg-gradient-to-r from-[var(--color-brand-white)] to-transparent z-20 pointer-events-none" />
          <div className="absolute right-0 inset-y-0 w-16 md:w-28 bg-gradient-to-l from-[var(--color-brand-white)] to-transparent z-20 pointer-events-none" />

          {/* Marquee Track Container */}
          <div className="flex w-max space-x-3.5 md:space-x-4 animate-ticker group-hover:[animation-play-state:paused] focus-within:[animation-play-state:paused]">
            {/* Duplicate array 3 times for completely seamless, gap-free infinite loop */}
            {[...industries, ...industries, ...industries].map((industry, index) => {
              const Icon = industry.icon;
              return (
                <div
                  key={`${industry.name}-${index}`}
                  tabIndex={0}
                  className="inline-flex items-center gap-2.5 px-4 py-2.5 rounded-full bg-white/95 border border-[#071525]/[0.08] shadow-[0_2px_8px_rgba(7,21,37,0.03)] hover:border-[#C65D2E]/40 hover:shadow-md transition-all duration-300 shrink-0 cursor-default focus:outline-none focus:ring-2 focus:ring-[#C65D2E]/30"
                >
                  {/* Small Copper Outline Icon */}
                  <div className="w-6 h-6 rounded-full bg-[#F7E7DF]/70 text-[#C65D2E] flex items-center justify-center shrink-0">
                    <Icon size={13} strokeWidth={2.2} />
                  </div>
                  {/* Industry Name */}
                  <span className="text-xs sm:text-sm font-bold text-[#071525] whitespace-nowrap">
                    {industry.name}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Marquee Keyframes Inline Definition */}
        <style jsx>{`
          @keyframes ticker {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-33.333333%);
            }
          }
          .animate-ticker {
            animation: ticker 32s linear infinite;
          }
          @media (prefers-reduced-motion: reduce) {
            .animate-ticker {
              animation-play-state: paused !important;
            }
          }
        `}</style>
      </section>
    </>
  );
}
