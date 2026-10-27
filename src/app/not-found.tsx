import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, Compass } from "lucide-react";

export default function NotFound() {
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
          background: "radial-gradient(ellipse, rgba(198,93,46,0.12) 0%, transparent 70%)",
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
          Status 404
        </span>
      </header>

      {/* Main Content */}
      <main className="relative z-10 max-w-2xl mx-auto px-6 py-12 text-center flex flex-col items-center">
        {/* Subtle Eyebrow */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 mb-6">
          <Compass size={14} className="text-[#C65D2E]" />
          <span className="text-xs font-mono font-semibold tracking-wider uppercase text-[#C65D2E]">
            Wrong Turn?
          </span>
        </div>

        {/* 404 Large Display */}
        <h1 className="text-7xl sm:text-9xl font-black font-mono tracking-tighter text-white/90 mb-4">
          4<span className="text-[#C65D2E]">0</span>4
        </h1>

        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white mb-4">
          This page isn&apos;t in our pipeline.
        </h2>

        <p className="text-sm sm:text-base text-[#8B96A5] max-w-md leading-relaxed mb-10">
          The link you followed may have moved, expired, or the address was entered incorrectly.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto">
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 w-full sm:w-auto h-11 px-6 rounded-full bg-[#C65D2E] text-white text-xs sm:text-sm font-semibold transition-all hover:bg-[#A64B24] hover:shadow-[0_4px_20px_rgba(198,93,46,0.35)]"
          >
            <ArrowLeft size={14} />
            <span>Back to Homepage</span>
          </Link>
          <Link
            href="/#services"
            className="inline-flex items-center justify-center gap-2 w-full sm:w-auto h-11 px-6 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-white text-xs sm:text-sm font-medium transition-colors"
          >
            <span>Explore Our Services</span>
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
