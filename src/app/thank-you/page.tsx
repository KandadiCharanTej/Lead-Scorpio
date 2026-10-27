import Link from "next/link";
import Image from "next/image";
import { CheckCircle2, ArrowLeft, ArrowUpRight, Calendar } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Inquiry Received | LeadScorpio",
  description: "Thank you for reaching out to LeadScorpio. We have received your inquiry and will review your outbound pipeline goals.",
};

export default function ThankYouPage() {
  return (
    <div className="min-h-screen bg-[#071525] text-[#FAF9F6] flex flex-col justify-between relative overflow-hidden select-none">
      {/* Background architectural grid */}
      <div
        className="absolute inset-0 pointer-events-none opacity-30"
        style={{
          backgroundImage: `
            linear-gradient(rgba(198,93,46,0.08) 1px, transparent 1px),
            linear-gradient(90deg, rgba(198,93,46,0.08) 1px, transparent 1px)
          `,
          backgroundSize: "48px 48px",
        }}
      />

      {/* Ambient radial copper glow */}
      <div
        className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(ellipse, rgba(198,93,46,0.14) 0%, transparent 70%)",
        }}
      />

      {/* Header bar */}
      <header className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-10 py-6 flex items-center justify-between">
        <Link href="/" className="inline-block transition-transform hover:scale-102">
          <Image
            src="/logo-white.png"
            alt="LeadScorpio"
            width={160}
            height={50}
            className="w-32 sm:w-36 h-auto object-contain"
            priority
          />
        </Link>
        <span className="text-xs font-mono tracking-widest text-[#C65D2E] uppercase">
          Inquiry Confirmed
        </span>
      </header>

      {/* Main Content */}
      <main className="relative z-10 max-w-2xl mx-auto px-6 py-12 text-center flex flex-col items-center">
        {/* Animated Check Ring */}
        <div className="w-16 h-16 rounded-full bg-[#C65D2E]/15 border border-[#C65D2E]/40 flex items-center justify-center text-[#C65D2E] mb-6 shadow-[0_0_30px_rgba(198,93,46,0.3)]">
          <CheckCircle2 size={32} />
        </div>

        <span className="text-xs font-mono font-bold tracking-[0.2em] uppercase text-[#C65D2E] mb-3">
          Message Received
        </span>

        <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-white mb-4">
          We&apos;re reviewing your outbound requirements.
        </h1>

        <p className="text-sm sm:text-base text-[#8B96A5] max-w-lg leading-relaxed mb-10">
          Thank you for providing your company details. Our team is analyzing your target market and will follow up with tailored campaign suggestions within 1 business day.
        </p>

        {/* Action card */}
        <div className="w-full bg-white/[0.03] border border-white/10 rounded-2xl p-6 sm:p-8 text-left mb-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <span className="text-xs font-mono font-semibold text-[#C65D2E] uppercase tracking-wider block mb-1">
              What happens next?
            </span>
            <h3 className="text-base sm:text-lg font-bold text-white mb-1">
              1. Prospect & ICP review
            </h3>
            <p className="text-xs sm:text-sm text-[#8B96A5] max-w-sm">
              We verify audience volume and outreach viability for your target buyer persona.
            </p>
          </div>
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 h-10 px-5 rounded-full bg-[#C65D2E] text-white text-xs sm:text-sm font-semibold transition-all hover:bg-[#A64B24] shrink-0"
          >
            <ArrowLeft size={14} />
            <span>Return to Homepage</span>
          </Link>
        </div>
      </main>

      {/* Footer minimal info */}
      <footer className="relative z-10 w-full max-w-7xl mx-auto px-6 py-6 text-center text-xs text-[#8B96A5]/60 border-t border-white/5">
        &copy; {new Date().getFullYear()} LeadScorpio. All rights reserved.
      </footer>
    </div>
  );
}
