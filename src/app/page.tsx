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

// ——————————————————————————————————————————
// HERO SECTION
// ——————————————————————————————————————————
function HeroSection() {
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const y          = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity    = useTransform(scrollYProgress, [0, 0.6], [1, 0]);
  const orbScale   = useTransform(scrollYProgress, [0, 1], [1, 0.85]);

  // Word-by-word headline reveal
  const line1 = "Turn Your Ideal Customers Into".split(" ");
  const line2 = "Qualified Sales Conversations.".split(" ");

  const wordVariants: any = {
    hidden: { opacity: 0, y: 40, rotateX: -15 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: {
        duration: 0.8,
        delay: 0.6 + i * 0.08,
        ease: [0.16, 1, 0.3, 1],
      },
    }),
  };

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-[var(--color-brand-white)]"
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
        className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-10 pt-36 pb-20 grid lg:grid-cols-[1fr_1fr] gap-8 lg:gap-16 items-center"
      >
        {/* Left — text content */}
        <div className="flex flex-col items-start gap-6">

          {/* Service Eyebrow */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[var(--color-brand-copper)]/10 border border-[var(--color-brand-copper)]/20"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-brand-copper)] animate-pulse" />
            <span className="text-xs font-semibold text-[var(--color-brand-copper)] tracking-wide">
              LinkedIn Outreach • Cold Email • Cold Calling
            </span>
          </motion.div>

          {/* Headline */}
          <h1 className="text-4xl md:text-5xl lg:text-[3rem] xl:text-[3.5rem] font-black tracking-tighter leading-[1.06] text-[var(--color-brand-navy)]" style={{ perspective: "800px" }}>
            <div className="flex flex-wrap gap-x-3 mb-2">
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
            </div>
            <div className="flex flex-wrap gap-x-3">
              {line2.map((word, i) => (
                <motion.span
                  key={i}
                  custom={line1.length + i}
                  variants={wordVariants}
                  initial="hidden"
                  animate="visible"
                  className={`inline-block ${i === 0 ? "gradient-copper" : i === 1 ? "gradient-copper" : "text-[var(--color-brand-copper)]"}`}
                  style={{ transformOrigin: "bottom center" }}
                >
                  {word}
                </motion.span>
              ))}
            </div>
          </h1>

          {/* Sub */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.4, ease: [0.16, 1, 0.3, 1] }}
            className="text-lg text-[var(--color-brand-navy)]/65 max-w-lg leading-relaxed"
          >
            LeadScorpio helps B2B companies reach the right decision-makers, start meaningful conversations, and turn targeted outbound outreach into qualified sales opportunities.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.6, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col sm:flex-row items-start sm:items-center gap-4"
          >
            <a
              href="#contact"
              className="relative inline-flex items-center gap-2.5 px-8 py-4 rounded-full bg-[var(--color-brand-copper)] text-white font-semibold text-sm overflow-hidden group hover:bg-[var(--color-brand-copper-dark)] transition-all duration-500 hover:shadow-[0_8px_30px_rgba(198,93,46,0.4)]"
            >
              <span className="relative z-10 flex items-center gap-2.5">
                Book a Strategy Call
                <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
              </span>
              <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
            </a>

            <a
              href="#"
              className="inline-flex items-center gap-2.5 px-6 py-4 rounded-full border border-[var(--color-brand-navy)]/15 text-sm font-semibold text-[var(--color-brand-navy)] hover:border-[var(--color-brand-copper)]/50 hover:text-[var(--color-brand-copper)] group transition-all duration-300"
            >
              <span>Chat on WhatsApp</span>
              <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform opacity-60 group-hover:opacity-100" />
            </a>
          </motion.div>

          {/* Trust micro signals */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.9 }}
            className="flex items-center gap-6 pt-2"
          >
            {["ICP-first targeting", "Multi-channel", "No contracts"].map((t, i) => (
              <div key={i} className="flex items-center gap-1.5 text-xs text-[var(--color-brand-navy)]/50 font-medium">
                <CheckCircle2 size={12} className="text-[var(--color-brand-copper)]" />
                {t}
              </div>
            ))}
          </motion.div>
        </div>

        {/* Right — Interactive Global Globe */}
        <motion.div
          style={{ scale: orbScale }}
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full mx-auto"
        >
          <HeroGlobe />
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 2.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-[var(--color-brand-navy)]/40">Scroll</span>
        <div className="w-px h-12 bg-gradient-to-b from-[var(--color-brand-navy)]/20 to-transparent" />
      </motion.div>
    </section>
  );
}

// ——————————————————————————————————————————
// SECTION 02: THE OUTBOUND REALITY — PREMIUM
// ——————————————————————————————————————————
function ProblemSection() {
  const [activeCard, setActiveCard] = useState(0);
  const card0Ref = useRef<HTMLDivElement>(null);
  const card1Ref = useRef<HTMLDivElement>(null);
  const card2Ref = useRef<HTMLDivElement>(null);

  const cardRefs = [card0Ref, card1Ref, card2Ref];

  const cards = [
    {
      number: "01",
      label: "PRECISION TARGETING",
      title: "Right Prospects",
      description: "Target the exact companies and decision-makers that match your ICP—not a generic list of 10,000 contacts.",
      stat: "3×",
      statLabel: "higher reply rate",
    },
    {
      number: "02",
      label: "CONTEXTUAL DIALOGUE",
      title: "Relevant Outreach",
      description: "Personalized messaging built around your specific market, offer, and buyer persona. Never a template.",
      stat: "68%",
      statLabel: "open rate",
    },
    {
      number: "03",
      label: "STRUCTURED CADENCE",
      title: "Consistent Follow-Up",
      description: "Systematic multi-touch cadences that keep qualified conversations moving toward booked meetings.",
      stat: "5×",
      statLabel: "more meetings",
    },
  ];

  // Track active card for the scroll progress indicator
  useEffect(() => {
    const observers: IntersectionObserver[] = [];
    cardRefs.forEach((ref, idx) => {
      if (!ref.current) return;
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setActiveCard(idx);
            }
          });
        },
        {
          threshold: 0.4,
          rootMargin: "-10% 0px -20% 0px",
        }
      );
      observer.observe(ref.current);
      observers.push(observer);
    });

    return () => {
      observers.forEach((o) => o.disconnect());
    };
  }, []);

  return (
    <section className="relative bg-[#F7F5F0] overflow-hidden border-t border-[var(--color-brand-navy)]/10">
      {/* Ambient radial glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[500px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(ellipse, rgba(198,93,46,0.06) 0%, transparent 65%)" }} />
      <div className="absolute bottom-0 right-0 w-[600px] h-[400px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(ellipse, rgba(198,93,46,0.04) 0%, transparent 65%)" }} />
      {/* Fine subtle grid */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.035]"
        style={{
          backgroundImage: `linear-gradient(rgba(7,21,37,1) 1px, transparent 1px), linear-gradient(90deg, rgba(7,21,37,1) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }} />

      <div className="max-w-[1280px] mx-auto px-6 md:px-10 py-24 md:py-32 relative z-10">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="mb-16 md:mb-24"
        >
          <div className="inline-flex items-center gap-2.5 mb-6 px-3.5 py-1.5 rounded-full border border-[var(--color-brand-copper)]/20 bg-[var(--color-brand-copper)]/8">
            <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-brand-copper)] animate-pulse" />
            <span className="text-[11px] font-mono tracking-[0.22em] uppercase text-[var(--color-brand-copper)] font-bold">
              02 / The Outbound Reality
            </span>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-end">
            <h2 className="text-4xl sm:text-5xl lg:text-[54px] xl:text-[60px] font-black tracking-[-0.035em] leading-[1.06] text-[var(--color-brand-navy)]">
              Your next customer<br />
              is{" "}
              <span className="relative inline-block text-[var(--color-brand-copper)]">
                already out there.
              </span>
            </h2>
            <div className="lg:border-l lg:border-[var(--color-brand-navy)]/12 lg:pl-10 flex flex-col gap-6 pb-1">
              <p className="text-[var(--color-brand-navy)]/70 text-lg leading-relaxed">
                The challenge isn't finding thousands of contacts. It's identifying the right ones,
                reaching the right decision-makers, and starting conversations that actually matter.
              </p>
              <div className="flex gap-8 pt-4 border-t border-[var(--color-brand-navy)]/10">
                {[["80%", "of deals go to the first mover"], ["5–8", "touches to book a meeting"]].map(([val, lbl]) => (
                  <div key={val}>
                    <p className="text-2xl font-black text-[var(--color-brand-copper)] tracking-tight leading-none">{val}</p>
                    <p className="text-xs text-[var(--color-brand-navy)]/60 font-medium leading-snug mt-1 max-w-[110px]">{lbl}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Cards + Progress */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_72px] gap-10 items-start">
          <div className="space-y-5">
            {cards.map((card, i) => (
              <motion.div
                key={card.number}
                ref={cardRefs[i]}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false, amount: 0.3 }}
                transition={{ duration: 0.75, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className={`group relative rounded-2xl border transition-all duration-500 overflow-hidden cursor-default
                  ${
                    activeCard === i
                      ? "bg-white border-[var(--color-brand-copper)] shadow-[0_16px_40px_rgba(7,21,37,0.08),0_0_20px_rgba(198,93,46,0.12)]"
                      : "bg-white/80 border-[var(--color-brand-navy)]/8 hover:border-[var(--color-brand-copper)]/40 hover:bg-white hover:shadow-md"
                  }`}
              >
                {/* Top glow line */}
                <div className={`absolute top-0 left-0 right-0 h-1 transition-all duration-500 ${
                  activeCard === i ? "opacity-100 bg-gradient-to-r from-transparent via-[var(--color-brand-copper)] to-transparent" : "opacity-0"
                }`} />

                <div className="flex flex-col sm:flex-row sm:items-center gap-6 p-7 sm:p-8 lg:p-9">
                  {/* Number */}
                  <div className="shrink-0">
                    <span
                      className="text-[80px] sm:text-[96px] lg:text-[112px] font-black font-mono leading-none tracking-tight select-none"
                      style={{
                        background: activeCard === i ? "linear-gradient(135deg,#C65D2E,#9E431B)" : "linear-gradient(135deg,#071525 20%,#8A9AA8 100%)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                        transition: "background 0.5s ease",
                      }}
                    >
                      {card.number}
                    </span>
                  </div>

                  {/* Stat badge */}
                  <div className={`hidden sm:flex flex-col items-center justify-center w-[72px] h-[72px] rounded-2xl border gap-0.5 shrink-0 transition-all duration-500 ${
                    activeCard === i ? "bg-[var(--color-brand-copper)]/10 border-[var(--color-brand-copper)]/30" : "bg-[var(--color-brand-navy)]/3 border-[var(--color-brand-navy)]/8"
                  }`}>
                    <span className={`text-lg font-black leading-none transition-colors duration-500 ${activeCard === i ? "text-[var(--color-brand-copper)]" : "text-[var(--color-brand-navy)]"}`}>
                      {card.stat}
                    </span>
                    <span className={`text-[9px] font-semibold text-center leading-tight px-1 transition-colors duration-500 ${activeCard === i ? "text-[var(--color-brand-copper)]/80" : "text-[var(--color-brand-navy)]/50"}`}>
                      {card.statLabel}
                    </span>
                  </div>

                  {/* Divider */}
                  <div className="hidden sm:block w-px self-stretch bg-gradient-to-b from-transparent via-[var(--color-brand-navy)]/10 to-transparent shrink-0 mx-1" />

                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <span className="text-[10px] font-mono tracking-[0.25em] uppercase text-[var(--color-brand-copper)] font-bold mb-2 block">
                      {card.label}
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-black text-[var(--color-brand-navy)] tracking-tight mb-2.5 leading-tight">
                      {card.title}
                    </h3>
                    <p className="text-[var(--color-brand-navy)]/65 text-sm sm:text-base leading-relaxed">
                      {card.description}
                    </p>
                  </div>

                  {/* Arrow */}
                  <div className="shrink-0 self-center hidden md:flex ml-4">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center border transition-all duration-500 ${
                      activeCard === i
                        ? "border-[var(--color-brand-copper)] bg-[var(--color-brand-copper)] text-white shadow-[0_4px_14px_rgba(198,93,46,0.35)]"
                        : "border-[var(--color-brand-navy)]/12 text-[var(--color-brand-navy)]/40 group-hover:border-[var(--color-brand-copper)]/40 group-hover:text-[var(--color-brand-copper)]"
                    }`}>
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Vertical Progress Indicator */}
          <div className="hidden lg:flex sticky top-40 flex-col items-center gap-3 py-4 select-none">
            <span className="text-[9px] font-mono tracking-[0.3em] text-[var(--color-brand-navy)]/40 uppercase font-bold">STEP</span>
            <span className="text-sm font-black text-[var(--color-brand-copper)] font-mono">{`0${activeCard + 1}`}</span>
            <div className="relative w-px h-32 bg-[var(--color-brand-navy)]/10 my-1">
              <motion.div
                className="absolute top-0 left-0 w-full bg-gradient-to-b from-[var(--color-brand-copper)] to-[#8B3D1A] rounded-full"
                animate={{ height: `${((activeCard + 1) / 3) * 100}%` }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              />
              {[0, 1, 2].map((idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => cardRefs[idx].current?.scrollIntoView({ behavior: "smooth", block: "center" })}
                  style={{ top: `${(idx / 2) * 100}%`, transform: "translate(-50%, -50%)" }}
                  className={`absolute left-1/2 w-3 h-3 rounded-full border-2 transition-all duration-300 cursor-pointer z-10 ${
                    activeCard === idx
                      ? "border-[var(--color-brand-copper)] bg-[var(--color-brand-copper)] shadow-[0_0_12px_rgba(198,93,46,0.6)]"
                      : "border-[var(--color-brand-navy)]/25 bg-white hover:border-[var(--color-brand-copper)]/50"
                  }`}
                  aria-label={`Go to step ${idx + 1}`}
                />
              ))}
            </div>
            <span className="text-[9px] font-mono tracking-[0.3em] text-[var(--color-brand-navy)]/40 uppercase font-bold">03</span>
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
