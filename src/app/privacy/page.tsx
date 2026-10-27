import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, Shield, CheckCircle2, Mail, ExternalLink } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | LeadScorpio",
  description:
    "Read the LeadScorpio Privacy Policy to understand how we collect, process, and protect your information.",
};

const SECTIONS = [
  { id: "overview", label: "1. Overview & Scope" },
  { id: "collection", label: "2. Information We Collect" },
  { id: "use", label: "3. How We Use Information" },
  { id: "sharing", label: "4. Data Sharing & Infrastructure" },
  { id: "retention", label: "5. Retention & User Rights" },
  { id: "contact", label: "6. Privacy Contact" },
];

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-[var(--color-brand-white)] text-[var(--color-brand-navy)] flex flex-col justify-between selection:bg-[#C65D2E]/20">
      {/* Background architectural fine 48px grid */}
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

      {/* Top Header matching main site */}
      <header className="relative z-30 w-full border-b border-[#071525]/[0.06] bg-[#FAF9F6]/85 backdrop-blur-md sticky top-0">
        <div className="max-w-6xl mx-auto px-6 sm:px-8 py-4 sm:py-5 flex items-center justify-between">
          <Link
            href="/"
            className="inline-block transition-transform hover:scale-[1.02] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C65D2E]/40 rounded-full"
            aria-label="LeadScorpio - Home"
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
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-[#526071] hover:text-[#C65D2E] transition-colors"
          >
            <ArrowLeft size={14} />
            <span>Back to Home</span>
          </Link>
        </div>
      </header>

      {/* Main Content with Sidebar Table of Contents */}
      <main className="relative z-10 max-w-6xl mx-auto px-6 sm:px-8 py-12 sm:py-16 md:py-20 w-full">
        {/* Eyebrow & Hero Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-[#071525]/[0.08] shadow-2xs mb-4">
            <Shield size={13} className="text-[#C65D2E]" />
            <span className="text-[11px] font-mono font-bold tracking-[0.2em] uppercase text-[#C65D2E]">
              LEGAL & TRUST
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-[#071525] mb-4">
            Privacy Policy
          </h1>

          <p className="text-xs sm:text-sm text-[#526071] font-mono">
            Last Updated: October 2026 • Effective Date: Immediate
          </p>
        </div>

        {/* 2-Column Layout on Desktop: Sticky Navigation + Clean Content Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Sticky Table of Contents (Desktop Only) */}
          <aside className="hidden lg:block lg:col-span-4 sticky top-28 bg-white rounded-2xl border border-[#071525]/[0.08] p-5 shadow-xs">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#C65D2E] block mb-3">
              Table of Contents
            </span>
            <nav className="flex flex-col gap-1.5 text-xs font-medium text-[#526071]">
              {SECTIONS.map((sec) => (
                <a
                  key={sec.id}
                  href={`#${sec.id}`}
                  className="py-1.5 px-2.5 rounded-lg hover:text-[#071525] hover:bg-[#FAF9F6] transition-colors"
                >
                  {sec.label}
                </a>
              ))}
            </nav>

            <div className="mt-6 pt-5 border-t border-[#071525]/[0.06] text-xs text-[#526071]">
              <span className="block font-bold text-[#071525] mb-1">Questions?</span>
              <p className="mb-2 leading-relaxed">Direct privacy inquiries to:</p>
              <a
                href="mailto:leadscorpioofficial@gmail.com"
                className="text-[#C65D2E] font-semibold hover:underline block truncate"
              >
                leadscorpioofficial@gmail.com
              </a>
            </div>
          </aside>

          {/* Right Column: Detailed Structured Legal Content */}
          <div className="lg:col-span-8 flex flex-col gap-8 text-sm sm:text-base text-[#384351] leading-relaxed">
            
            {/* Section 1 */}
            <section id="overview" className="bg-white p-6 sm:p-8 rounded-2xl border border-[#071525]/[0.08] shadow-xs">
              <h2 className="text-lg sm:text-xl font-bold text-[#071525] mb-3">
                1. Overview & Scope
              </h2>
              <p>
                LeadScorpio (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) provides specialized B2B outbound lead generation, prospect identification, and sales qualification services. We are dedicated to handling your business information with integrity, transparency, and care. This Privacy Policy details how we handle information submitted directly through our website.
              </p>
            </section>

            {/* Section 2 */}
            <section id="collection" className="bg-white p-6 sm:p-8 rounded-2xl border border-[#071525]/[0.08] shadow-xs">
              <h2 className="text-lg sm:text-xl font-bold text-[#071525] mb-3">
                2. Information We Collect
              </h2>
              <p className="mb-3">
                We collect personal and professional information provided voluntarily through our online contact and strategy consultation forms:
              </p>
              <ul className="space-y-2 text-sm text-[#526071]">
                <li className="flex items-start gap-2">
                  <CheckCircle2 size={16} className="text-[#C65D2E] shrink-0 mt-0.5" />
                  <span><strong>Full Name & Contact Details:</strong> Your name and professional work email address.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 size={16} className="text-[#C65D2E] shrink-0 mt-0.5" />
                  <span><strong>Company Information:</strong> Company name, corporate website URL, and sector.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 size={16} className="text-[#C65D2E] shrink-0 mt-0.5" />
                  <span><strong>Project Scope:</strong> Details you provide regarding your offering, target market, and pipeline objectives.</span>
                </li>
              </ul>
            </section>

            {/* Section 3 */}
            <section id="use" className="bg-white p-6 sm:p-8 rounded-2xl border border-[#071525]/[0.08] shadow-xs">
              <h2 className="text-lg sm:text-xl font-bold text-[#071525] mb-3">
                3. How We Use Information
              </h2>
              <p className="mb-3">We process collected inquiry information exclusively to:</p>
              <ul className="list-disc pl-5 space-y-1.5 text-sm text-[#526071]">
                <li>Evaluate your outbound marketing requirements and assess target audience volume.</li>
                <li>Communicate directly with you regarding strategy consultations and proposals.</li>
                <li>Maintain system security, prevent bot abuse, and enforce rate limits.</li>
              </ul>
              <p className="mt-4 pt-3 border-t border-[#071525]/[0.06] text-xs text-[#526071] font-medium">
                We do not sell, rent, or trade your inquiry information to external brokers or advertising networks.
              </p>
            </section>

            {/* Section 4 */}
            <section id="sharing" className="bg-white p-6 sm:p-8 rounded-2xl border border-[#071525]/[0.08] shadow-xs">
              <h2 className="text-lg sm:text-xl font-bold text-[#071525] mb-3">
                4. Data Sharing & Infrastructure
              </h2>
              <p>
                Inquiry data is accessed only by authorized team members and reputable cloud service providers (e.g. cloud hosting providers and transactional email systems) strictly necessary to process and reply to inquiries. All providers are contractually obligated to protect data confidentiality.
              </p>
            </section>

            {/* Section 5 */}
            <section id="retention" className="bg-white p-6 sm:p-8 rounded-2xl border border-[#071525]/[0.08] shadow-xs">
              <h2 className="text-lg sm:text-xl font-bold text-[#071525] mb-3">
                5. Retention & User Rights
              </h2>
              <p className="mb-3">
                We retain inquiry records only as long as necessary to facilitate ongoing communication or comply with standard record-keeping obligations. You have the right to request access to, correction of, or permanent deletion of your inquiry data.
              </p>
              <p className="text-sm">
                To submit an access or removal request, email us at{" "}
                <a
                  href="mailto:leadscorpioofficial@gmail.com"
                  className="text-[#C65D2E] font-semibold hover:underline"
                >
                  leadscorpioofficial@gmail.com
                </a>.
              </p>
            </section>

            {/* Section 6 */}
            <section id="contact" className="bg-white p-6 sm:p-8 rounded-2xl border border-[#071525]/[0.08] shadow-xs">
              <h2 className="text-lg sm:text-xl font-bold text-[#071525] mb-3">
                6. Privacy Contact
              </h2>
              <p className="mb-4">
                If you have questions or concerns regarding our privacy practices or wish to review stored records, please reach out directly:
              </p>
              <div className="flex items-center gap-3 p-4 rounded-xl bg-[#FAF9F6] border border-[#071525]/[0.06]">
                <Mail size={18} className="text-[#C65D2E] shrink-0" />
                <span className="text-sm font-semibold text-[#071525]">
                  leadscorpioofficial@gmail.com
                </span>
              </div>
            </section>

          </div>
        </div>
      </main>

      {/* Brand Footer */}
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
          </div>

          <div className="flex items-center gap-5 text-xs text-[#526071]">
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
