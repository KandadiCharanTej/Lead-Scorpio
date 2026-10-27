import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, Compass, ArrowUpRight, ShieldCheck } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "404 — Page Not Found | LeadScorpio",
  description: "The page you are looking for is not in our outbound pipeline.",
};

export default function NotFound() {
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
        className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[550px] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(ellipse, rgba(198,93,46,0.07) 0%, transparent 65%)",
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
            <span className="w-1.5 h-1.5 rounded-full bg-[#C65D2E]" />
            <span className="text-[11px] font-mono font-bold tracking-[0.18em] text-[#C65D2E] uppercase">
              STATUS 404
            </span>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="relative z-10 max-w-2xl mx-auto px-6 py-14 sm:py-20 text-center flex flex-col items-center">
        {/* Eyebrow Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#071525]/[0.08] shadow-xs mb-6">
          <Compass size={14} className="text-[#C65D2E]" />
          <span className="text-xs font-mono font-bold tracking-[0.2em] uppercase text-[#C65D2E]">
            Wrong Turn
          </span>
        </div>

        {/* 404 Large Display */}
        <h1 className="text-7xl sm:text-9xl font-black font-mono tracking-tighter text-[#071525] mb-3 leading-none">
          4<span className="text-[#C65D2E]">0</span>4
        </h1>

        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-[#071525] mb-4">
          This page isn&apos;t in our pipeline.
        </h2>

        <p className="text-sm sm:text-base text-[#526071] max-w-md leading-relaxed mb-10">
          The link you followed may have moved, expired, or the address was entered incorrectly. Let&apos;s get you back on track.
        </p>

        {/* Action CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 w-full sm:w-auto">
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 w-full sm:w-auto h-11 px-7 rounded-full bg-[#C65D2E] text-white text-xs sm:text-sm font-semibold transition-all hover:bg-[#A64B24] hover:shadow-[0_6px_20px_rgba(198,93,46,0.32)] shadow-xs"
          >
            <ArrowLeft size={14} />
            <span>Back to Homepage</span>
          </Link>

          <Link
            href="/#services"
            className="inline-flex items-center justify-center gap-2 w-full sm:w-auto h-11 px-6 rounded-full bg-white hover:bg-[#FAF9F6] border border-[#071525]/10 text-[#071525] text-xs sm:text-sm font-semibold transition-all hover:border-[#C65D2E]/40"
          >
            <span>Explore Our Services</span>
            <ArrowUpRight size={14} className="text-[#C65D2E]" />
          </Link>
        </div>
      </main>

      {/* Footer minimal info */}
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
