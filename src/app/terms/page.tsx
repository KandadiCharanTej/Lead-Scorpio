import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, FileText, CheckCircle2, Mail } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service | LeadScorpio",
  description:
    "Review the Terms of Service governing the use of the LeadScorpio website and service inquiries.",
};

const SECTIONS = [
  { id: "acceptance", label: "1. Acceptance of Terms" },
  { id: "inquiries", label: "2. Inquiries & Separate Contracts" },
  { id: "ip", label: "3. Intellectual Property" },
  { id: "acceptable-use", label: "4. Acceptable Website Use" },
  { id: "disclaimers", label: "5. Disclaimers & Liability" },
  { id: "governing-contact", label: "6. Questions & Contact" },
];

export default function TermsPage() {
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
            <FileText size={13} className="text-[#C65D2E]" />
            <span className="text-[11px] font-mono font-bold tracking-[0.2em] uppercase text-[#C65D2E]">
              LEGAL TERMS
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-[#071525] mb-4">
            Terms of Service
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
              <span className="block font-bold text-[#071525] mb-1">Contract Inquiries</span>
              <p className="mb-2 leading-relaxed">Reach our legal desk at:</p>
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
            <section id="acceptance" className="bg-white p-6 sm:p-8 rounded-2xl border border-[#071525]/[0.08] shadow-xs">
              <h2 className="text-lg sm:text-xl font-bold text-[#071525] mb-3">
                1. Acceptance of Terms
              </h2>
              <p>
                By accessing or navigating the website of LeadScorpio (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;), you acknowledge that you have read, understood, and agreed to be bound by these Terms of Service. If you do not agree with these provisions, please discontinue use of this website.
              </p>
            </section>

            {/* Section 2 */}
            <section id="inquiries" className="bg-white p-6 sm:p-8 rounded-2xl border border-[#071525]/[0.08] shadow-xs">
              <h2 className="text-lg sm:text-xl font-bold text-[#071525] mb-3">
                2. Inquiries & Separate Client Agreements
              </h2>
              <p className="mb-3">
                Content on this website describes our capabilities and methodology across LinkedIn outreach, cold email, cold calling, and appointment setting.
              </p>
              <p className="p-3.5 rounded-xl bg-[#FAF9F6] border border-[#071525]/[0.06] text-xs text-[#526071] leading-relaxed">
                <strong>Important Distinction:</strong> Submitting a contact inquiry or scheduling an initial strategy call does not establish a binding agency engagement. Active outbound campaigns are governed exclusively by mutually executed, separate written Master Services Agreements (MSA) and Statements of Work (SOW).
              </p>
            </section>

            {/* Section 3 */}
            <section id="ip" className="bg-white p-6 sm:p-8 rounded-2xl border border-[#071525]/[0.08] shadow-xs">
              <h2 className="text-lg sm:text-xl font-bold text-[#071525] mb-3">
                3. Intellectual Property Rights
              </h2>
              <p>
                All brand marks, logos, graphics, interface designs, interactive workflows, service demos, and source code are the intellectual property of LeadScorpio or its respective licensors. They may not be reproduced, scraped, or republished for commercial redistribution without prior written consent.
              </p>
            </section>

            {/* Section 4 */}
            <section id="acceptable-use" className="bg-white p-6 sm:p-8 rounded-2xl border border-[#071525]/[0.08] shadow-xs">
              <h2 className="text-lg sm:text-xl font-bold text-[#071525] mb-3">
                4. Acceptable Website Use
              </h2>
              <p className="mb-3">You agree to use this site for legitimate B2B business inquiries. You agree not to:</p>
              <ul className="space-y-1.5 text-sm text-[#526071]">
                <li className="flex items-start gap-2">
                  <CheckCircle2 size={16} className="text-[#C65D2E] shrink-0 mt-0.5" />
                  <span>Submit false, deceptive, or automated spam information through our forms.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 size={16} className="text-[#C65D2E] shrink-0 mt-0.5" />
                  <span>Attempt to probe, scan, or compromise our infrastructure or rate limits.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 size={16} className="text-[#C65D2E] shrink-0 mt-0.5" />
                  <span>Introduce malicious payloads or interfere with website availability.</span>
                </li>
              </ul>
            </section>

            {/* Section 5 */}
            <section id="disclaimers" className="bg-white p-6 sm:p-8 rounded-2xl border border-[#071525]/[0.08] shadow-xs">
              <h2 className="text-lg sm:text-xl font-bold text-[#071525] mb-3">
                5. Disclaimers & Limitation of Liability
              </h2>
              <p>
                This website and its demonstrative materials are provided on an &quot;as is&quot; basis without warranties of any kind. While we rigorously test our targeting methodologies, specific outbound results vary depending on product-market fit, target TAM, and industry conditions. To the fullest extent permitted by applicable law, LeadScorpio disclaims liability for any indirect damages resulting from site access.
              </p>
            </section>

            {/* Section 6 */}
            <section id="governing-contact" className="bg-white p-6 sm:p-8 rounded-2xl border border-[#071525]/[0.08] shadow-xs">
              <h2 className="text-lg sm:text-xl font-bold text-[#071525] mb-3">
                6. Questions & Contact
              </h2>
              <p className="mb-4">
                For questions regarding these Terms of Service or to request standard agency contract templates, contact us directly:
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
            <Link href="/privacy" className="hover:text-[#C65D2E] transition-colors">
              Privacy Policy
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
