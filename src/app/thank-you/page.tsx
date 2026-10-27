import Link from "next/link";
import Image from "next/image";
import {
  CheckCircle2,
  ArrowRight,
  ArrowLeft,
  Search,
  Users,
  MessageSquare,
  ShieldCheck,
  FileCheck2,
  Lock,
} from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Inquiry Received | LeadScorpio",
  description:
    "Thank you for contacting LeadScorpio. Your outbound inquiry has been received and is being reviewed.",
};

const STEPS = [
  {
    number: "01",
    title: "Inquiry Review",
    subtitle: "Understanding your positioning",
    description:
      "We review the business model, offering, and goals submitted in your inquiry to understand your core proposition.",
    icon: Search,
  },
  {
    number: "02",
    title: "Audience & Strategy",
    subtitle: "Evaluating ICP & market fit",
    description:
      "We assess your target buyer persona, decision-makers, and prospective outbound channels (LinkedIn, email, cold calling).",
    icon: Users,
  },
  {
    number: "03",
    title: "Next Steps",
    subtitle: "Discussing outreach viability",
    description:
      "If there is a clear strategic fit, our team will get in touch to discuss potential outbound campaign approaches.",
    icon: MessageSquare,
  },
];

const TRUST_POINTS = [
  {
    icon: Lock,
    title: "Handled Responsibly",
    description:
      "Your company details are kept confidential and used solely to prepare our discussion.",
    linkText: "Privacy Policy",
    linkHref: "/privacy",
  },
  {
    icon: FileCheck2,
    title: "Zero Obligation",
    description:
      "Submitting an inquiry creates no contractual commitment or commercial obligation.",
    linkText: "Terms of Service",
    linkHref: "/terms",
  },
  {
    icon: ShieldCheck,
    title: "Individual Review",
    description:
      "Every inquiry is reviewed manually by our strategy team — never automated replies.",
    linkText: "Our Philosophy",
    linkHref: "/#about",
  },
];

export default function ThankYouPage() {
  return (
    <div className="min-h-screen bg-[var(--color-brand-white)] text-[var(--color-brand-navy)] flex flex-col justify-between relative overflow-hidden select-none">
      {/* Background architectural fine 48px grid — identical to homepage */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(rgba(7,21,37,0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(7,21,37,0.03) 1px, transparent 1px)
          `,
          backgroundSize: "48px 48px",
        }}
        aria-hidden="true"
      />

      {/* Warm ambient radial copper glow */}
      <div
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[600px] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(ellipse, rgba(198,93,46,0.08) 0%, transparent 65%)",
        }}
        aria-hidden="true"
      />

      {/* Header bar matching main site */}
      <header className="relative z-20 w-full border-b border-[#071525]/[0.06] bg-[#FAF9F6]/80 backdrop-blur-md sticky top-0">
        <div className="max-w-6xl mx-auto px-6 sm:px-8 py-4 sm:py-5 flex items-center justify-between">
          <Link
            href="/"
            className="inline-block transition-transform hover:scale-[1.02] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C65D2E]/40 rounded-full"
            aria-label="LeadScorpio - Back to top"
          >
            <Image
              src="/logo-dark.png"
              alt="LeadScorpio"
              width={160}
              height={50}
              className="w-32 sm:w-36 h-auto object-contain"
              priority
            />
          </Link>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-[#071525]/[0.08] shadow-2xs">
            <span className="w-1.5 h-1.5 rounded-full bg-[#C65D2E] animate-pulse" />
            <span className="text-[11px] font-mono font-bold tracking-[0.18em] text-[#C65D2E] uppercase">
              CONFIRMED
            </span>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="relative z-10 max-w-5xl mx-auto px-6 sm:px-8 py-12 sm:py-16 md:py-20 flex flex-col items-center">
        
        {/* ========================================================================= */}
        {/* 1. HERO CONFIRMATION AREA                                                 */}
        {/* ========================================================================= */}
        <div className="text-center max-w-2xl mx-auto mb-14 sm:mb-16">
          {/* Refined Success Icon */}
          <div className="inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 rounded-3xl bg-[#F7E7DF] border border-[#C65D2E]/30 text-[#C65D2E] mb-6 shadow-sm transform hover:scale-105 transition-transform duration-300">
            <CheckCircle2 size={36} className="text-[#C65D2E]" strokeWidth={2.2} />
          </div>

          <div className="flex items-center justify-center gap-2 mb-3">
            <span className="text-xs font-mono font-bold tracking-[0.22em] uppercase text-[#C65D2E]">
              INQUIRY SUCCESSFULLY RECEIVED
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-[#071525] mb-4 leading-[1.12]">
            Your next growth opportunity <br className="hidden sm:inline" />
            <span className="text-[#C65D2E]">starts here.</span>
          </h1>

          <p className="text-sm sm:text-base md:text-lg text-[#526071] leading-relaxed max-w-xl mx-auto">
            Thank you for reaching out to LeadScorpio. Your inquiry has been received, and we&apos;re ready to learn more about your business and outbound pipeline goals.
          </p>

          {/* Action CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 mt-8 w-full sm:w-auto">
            <Link
              href="/#services"
              className="inline-flex items-center justify-center gap-2 w-full sm:w-auto h-11 px-7 rounded-full bg-[#C65D2E] text-white text-xs sm:text-sm font-semibold transition-all hover:bg-[#A64B24] hover:shadow-[0_6px_20px_rgba(198,93,46,0.32)] shadow-xs group"
            >
              <span>Explore Our Services</span>
              <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
            </Link>

            <Link
              href="/"
              className="inline-flex items-center justify-center gap-2 w-full sm:w-auto h-11 px-6 rounded-full bg-white hover:bg-[#FAF9F6] border border-[#071525]/10 text-[#071525] text-xs sm:text-sm font-semibold transition-all hover:border-[#C65D2E]/40"
            >
              <ArrowLeft size={14} />
              <span>Return to Homepage</span>
            </Link>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* 2. BEAUTIFULLY STRUCTURED "WHAT HAPPENS NEXT?" TIMELINE                   */}
        {/* ========================================================================= */}
        <section aria-label="What happens next process" className="w-full mb-16 sm:mb-20">
          <div className="flex items-center justify-center gap-3 mb-8">
            <div className="h-px w-8 bg-[#C65D2E]/40" />
            <span className="text-xs font-mono font-bold tracking-[0.2em] uppercase text-[#C65D2E]">
              WHAT HAPPENS NEXT
            </span>
            <div className="h-px w-8 bg-[#C65D2E]/40" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative">
            {STEPS.map((step, idx) => {
              const Icon = step.icon;
              return (
                <div
                  key={step.number}
                  className="relative flex flex-col bg-white rounded-2xl p-6 sm:p-7 border border-[#071525]/[0.08] shadow-[0_8px_24px_rgba(7,21,37,0.03)] hover:border-[#C65D2E]/35 hover:shadow-md transition-all duration-300 group"
                >
                  {/* Top Header: Step number & Icon badge */}
                  <div className="flex items-center justify-between mb-5">
                    <span className="text-3xl font-mono font-black text-[#C65D2E]/40 group-hover:text-[#C65D2E] transition-colors duration-300">
                      {step.number}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-[#FAF9F6] border border-[#071525]/[0.06] flex items-center justify-center text-[#C65D2E] group-hover:bg-[#F7E7DF] group-hover:border-[#C65D2E]/30 transition-all duration-300">
                      <Icon size={18} strokeWidth={2.2} />
                    </div>
                  </div>

                  {/* Title & Subtitle */}
                  <h3 className="text-base sm:text-lg font-bold text-[#071525] tracking-tight mb-1">
                    {step.title}
                  </h3>
                  <span className="text-xs font-medium text-[#C65D2E] mb-3 block">
                    {step.subtitle}
                  </span>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-[#526071] leading-relaxed mt-auto">
                    {step.description}
                  </p>
                </div>
              );
            })}
          </div>
        </section>

        {/* ========================================================================= */}
        {/* 3. SUBTLE TRUST & REASSURANCE SECTION                                     */}
        {/* ========================================================================= */}
        <section aria-label="Trust and reassurance" className="w-full">
          <div className="w-full rounded-2xl bg-white/70 border border-[#071525]/[0.06] p-6 sm:p-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 divide-y md:divide-y-0 md:divide-x divide-[#071525]/[0.06]">
              {TRUST_POINTS.map((pt, i) => {
                const PtIcon = pt.icon;
                return (
                  <div key={i} className={`flex flex-col items-start ${i !== 0 ? "pt-5 md:pt-0 md:pl-6" : ""}`}>
                    <div className="flex items-center gap-2 mb-2 text-[#C65D2E]">
                      <PtIcon size={16} strokeWidth={2.2} />
                      <h4 className="text-xs sm:text-sm font-bold text-[#071525] tracking-tight">
                        {pt.title}
                      </h4>
                    </div>
                    <p className="text-xs text-[#526071] leading-relaxed mb-3">
                      {pt.description}
                    </p>
                    <Link
                      href={pt.linkHref}
                      className="text-[11px] font-semibold text-[#C65D2E] hover:text-[#A64B24] inline-flex items-center gap-1 group mt-auto"
                    >
                      <span>{pt.linkText}</span>
                      <ArrowRight size={11} className="group-hover:translate-x-0.5 transition-transform" />
                    </Link>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

      </main>

      {/* ========================================================================= */}
      {/* 4. CLEAN, CONSISTENT BRAND FOOTER                                         */}
      {/* ========================================================================= */}
      <footer className="relative z-10 w-full border-t border-[#071525]/[0.06] bg-white py-8">
        <div className="max-w-6xl mx-auto px-6 sm:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <Link href="/" className="inline-block transition-transform hover:scale-[1.02]">
              <Image
                src="/logo-dark.png"
                alt="LeadScorpio"
                width={130}
                height={40}
                className="w-28 h-auto object-contain"
              />
            </Link>
            <span className="text-xs text-[#526071]/80 hidden md:inline">
              | B2B Outbound Lead Generation
            </span>
          </div>

          <div className="flex items-center gap-5 text-xs text-[#526071]">
            <Link href="/privacy" className="hover:text-[#C65D2E] transition-colors">
              Privacy Policy
            </Link>
            <span className="text-[#071525]/20">•</span>
            <Link href="/terms" className="hover:text-[#C65D2E] transition-colors">
              Terms of Service
            </Link>
            <span className="text-[#071525]/20">•</span>
            <Link href="/" className="hover:text-[#C65D2E] transition-colors">
              Home
            </Link>
          </div>

          <span className="text-xs text-[#526071]/70">
            &copy; {new Date().getFullYear()} LeadScorpio. All rights reserved.
          </span>
        </div>
      </footer>
    </div>
  );
}
