"use client";

import { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { AlertCircle, RotateCcw, ArrowLeft } from "lucide-react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("Runtime exception caught by boundary:", error.message);
  }, [error]);

  return (
    <div className="min-h-screen bg-[var(--color-brand-white)] text-[var(--color-brand-navy)] flex flex-col justify-between relative overflow-hidden select-none">
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

      {/* Warm ambient radial copper glow */}
      <div
        className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(ellipse, rgba(198,93,46,0.06) 0%, transparent 65%)",
        }}
        aria-hidden="true"
      />

      {/* Header bar matching main site */}
      <header className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-10 py-6 sm:py-8 flex items-center justify-between border-b border-[#071525]/[0.06]">
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
            className="w-32 sm:w-38 h-auto object-contain"
            priority
          />
        </Link>
        <span className="text-xs font-mono font-bold tracking-[0.2em] text-[#C65D2E] uppercase">
          SYSTEM NOTICE
        </span>
      </header>

      {/* Main Content */}
      <main className="relative z-10 max-w-lg w-full mx-auto px-6 py-16 sm:py-20 text-center flex flex-col items-center">
        <div className="w-14 h-14 rounded-2xl bg-[#F7E7DF] border border-[#C65D2E]/25 flex items-center justify-center text-[#C65D2E] mb-6 shadow-xs">
          <AlertCircle size={26} />
        </div>

        <span className="text-xs font-mono font-bold tracking-[0.2em] text-[#C65D2E] uppercase mb-2">
          Notice
        </span>

        <h1 className="text-3xl sm:text-4xl font-black text-[#071525] tracking-tight mb-3">
          Something interrupted this request
        </h1>

        <p className="text-sm text-[#526071] leading-relaxed mb-8 max-w-md">
          An unexpected issue prevented this view from loading completely. You can reload this view or return to the homepage.
        </p>

        <div className="flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto">
          <button
            onClick={() => reset()}
            className="inline-flex items-center justify-center gap-2 w-full sm:w-auto h-11 px-7 rounded-full bg-[#C65D2E] text-white text-xs sm:text-sm font-semibold transition-all hover:bg-[#A64B24] hover:shadow-[0_6px_20px_rgba(198,93,46,0.32)] shadow-xs cursor-pointer"
          >
            <RotateCcw size={14} />
            <span>Try Again</span>
          </button>
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 w-full sm:w-auto h-11 px-6 rounded-full bg-white hover:bg-[#FAF9F6] border border-[#071525]/10 text-[#071525] text-xs sm:text-sm font-semibold transition-all hover:border-[#C65D2E]/40"
          >
            <ArrowLeft size={14} />
            <span>Back to Homepage</span>
          </Link>
        </div>
      </main>

      {/* Footer minimal info */}
      <footer className="relative z-10 w-full max-w-7xl mx-auto px-6 py-6 text-center text-xs text-[#526071] border-t border-[#071525]/[0.06]">
        &copy; {new Date().getFullYear()} LeadScorpio. All rights reserved.
      </footer>
    </div>
  );
}
