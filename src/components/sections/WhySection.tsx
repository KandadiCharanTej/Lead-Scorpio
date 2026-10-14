"use client";
import React from "react";
import { motion } from "framer-motion";
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
  CheckCircle2,
  ArrowRight,
} from "lucide-react";

// UPDATE 3 — 10 Unique Industries (no duplicates)
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

// UPDATE 1 — 4 Core Points
const whyPoints = [
  {
    title: "ICP-first targeting",
    description: "We identify companies and decision-makers that match your ideal customer profile.",
  },
  {
    title: "Coordinated outbound",
    description: "LinkedIn outreach, cold email, and cold calling work together to reach relevant prospects.",
  },
  {
    title: "Personalized messaging",
    description: "We tailor messaging to the prospect's business, role, and potential needs.",
  },
  {
    title: "Transparent reporting",
    description: "Track campaign activity, replies, qualified prospects, and meetings booked.",
  },
];

export default function WhySection() {
  return (
    <>
      {/* ========================================================================= */}
      {/* UPDATE 1: NOT MORE LEADS. BETTER OPPORTUNITIES.                           */}
      {/* ========================================================================= */}
      <section className="py-24 md:py-32 bg-[var(--color-brand-white)] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="grid lg:grid-cols-[1.1fr_1fr] gap-12 lg:gap-20 items-center">
            {/* Left: Headline & Context */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="inline-flex items-center gap-2 mb-4">
                <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-brand-copper)]" />
                <span className="text-xs font-mono font-bold tracking-[0.2em] uppercase text-[var(--color-brand-copper)]">
                  PRECISION OUTBOUND
                </span>
              </div>

              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-black tracking-tight text-[var(--color-brand-navy)] leading-[1.08] mb-6">
                Not more leads.<br />
                <span className="gradient-copper">Better</span> opportunities.
              </h2>

              <p className="text-[var(--color-brand-navy)]/70 text-lg md:text-xl mb-8 leading-relaxed max-w-xl">
                Every tactic we use is designed to connect your business with relevant prospects and create meaningful sales conversations.
              </p>

              <div className="pt-2">
                <a
                  href="#contact"
                  className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-[var(--color-brand-navy)] text-[var(--color-brand-white)] font-semibold text-sm hover:bg-[var(--color-brand-copper)] transition-all duration-300 group shadow-lg hover:shadow-xl"
                >
                  <span>Start Building Your Pipeline</span>
                  <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
                </a>
              </div>
            </motion.div>

            {/* Right: 4 Value Cards */}
            <div className="flex flex-col gap-4 sm:gap-5">
              {whyPoints.map((point, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                  className="p-5 sm:p-6 rounded-2xl bg-white border border-[var(--color-brand-navy)]/8 hover:border-[var(--color-brand-copper)]/40 hover:shadow-md transition-all duration-300 group"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-lg bg-[var(--color-brand-copper)]/10 flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-[var(--color-brand-copper)] transition-colors duration-300">
                      <CheckCircle2
                        size={18}
                        className="text-[var(--color-brand-copper)] group-hover:text-white transition-colors duration-300"
                      />
                    </div>
                    <div>
                      <h3 className="font-bold text-base sm:text-lg text-[var(--color-brand-navy)] mb-1 group-hover:text-[var(--color-brand-copper)] transition-colors duration-300">
                        {point.title}
                      </h3>
                      <p className="text-[var(--color-brand-navy)]/65 text-sm leading-relaxed">
                        {point.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* UPDATE 3: WHO WE WORK WITH — 10 INDUSTRIES GRID                           */}
      {/* ========================================================================= */}
      <section className="py-24 md:py-32 bg-[#F3F1EC] border-y border-[var(--color-brand-navy)]/10">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-center max-w-3xl mx-auto mb-14 md:mb-16"
          >
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-brand-copper)]" />
              <span className="text-xs font-mono font-bold tracking-[0.2em] uppercase text-[var(--color-brand-copper)]">
                WHO WE WORK WITH
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-[var(--color-brand-navy)] mb-4 leading-tight">
              Built for B2B companies that sell to businesses
            </h2>
            <p className="text-base sm:text-lg text-[var(--color-brand-navy)]/65 leading-relaxed">
              We help B2B teams reach relevant decision-makers through targeted prospecting, personalized outreach, and consistent follow-up.
            </p>
          </motion.div>

          {/* 10 Industries Responsive Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 md:gap-5">
            {industries.map((industry, index) => {
              const Icon = industry.icon;
              return (
                <motion.div
                  key={industry.name}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  className="bg-white rounded-2xl p-5 border border-[var(--color-brand-navy)]/8 hover:border-[var(--color-brand-copper)]/50 hover:shadow-md transition-all duration-300 flex flex-col justify-between group h-full"
                >
                  <div>
                    {/* Icon container */}
                    <div className="w-11 h-11 rounded-xl bg-[#FAF9F6] border border-[var(--color-brand-navy)]/6 flex items-center justify-center mb-4 group-hover:bg-[var(--color-brand-copper)]/10 group-hover:border-[var(--color-brand-copper)]/30 transition-all duration-300">
                      <Icon
                        size={20}
                        className="text-[var(--color-brand-copper)] transition-transform duration-300 group-hover:scale-110"
                      />
                    </div>
                    {/* Industry Title */}
                    <h3 className="text-base font-bold text-[var(--color-brand-navy)] mb-2 group-hover:text-[var(--color-brand-copper)] transition-colors duration-300">
                      {industry.name}
                    </h3>
                    {/* Industry Description */}
                    <p className="text-xs text-[var(--color-brand-navy)]/60 leading-relaxed font-normal">
                      {industry.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
