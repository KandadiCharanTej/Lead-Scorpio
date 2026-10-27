"use client";

import { useEffect } from "react";
import Link from "next/link";
import { AlertCircle, RotateCcw } from "lucide-react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log unexpected errors safely without leaking internal states
    console.error("Runtime exception caught by boundary:", error.message);
  }, [error]);

  return (
    <div className="min-h-screen bg-[#071525] text-[#FAF9F6] flex flex-col justify-center items-center px-6 relative overflow-hidden select-none">
      <div
        className="absolute inset-0 pointer-events-none opacity-20"
        style={{
          backgroundImage: `
            linear-gradient(rgba(198,93,46,0.08) 1px, transparent 1px),
            linear-gradient(90deg, rgba(198,93,46,0.08) 1px, transparent 1px)
          `,
          backgroundSize: "48px 48px",
        }}
      />

      <div className="relative z-10 max-w-lg w-full text-center flex flex-col items-center">
        <div className="w-12 h-12 rounded-full bg-[#C65D2E]/10 border border-[#C65D2E]/30 flex items-center justify-center text-[#C65D2E] mb-6">
          <AlertCircle size={22} />
        </div>

        <span className="text-xs font-mono font-bold tracking-widest text-[#C65D2E] uppercase mb-2">
          System Notice
        </span>

        <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-4">
          Something interrupted this request
        </h1>

        <p className="text-sm text-[#8B96A5] leading-relaxed mb-8 max-w-md">
          An unexpected issue prevented this view from loading completely. You can reload this section or return home safely.
        </p>

        <div className="flex flex-col sm:flex-row items-center gap-3">
          <button
            onClick={() => reset()}
            className="inline-flex items-center justify-center gap-2 h-10 px-6 rounded-full bg-[#C65D2E] text-white text-xs sm:text-sm font-semibold transition-all hover:bg-[#A64B24] cursor-pointer"
          >
            <RotateCcw size={14} />
            <span>Try Again</span>
          </button>
          <Link
            href="/"
            className="inline-flex items-center justify-center h-10 px-6 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-white text-xs sm:text-sm font-medium transition-colors"
          >
            Back to Homepage
          </Link>
        </div>
      </div>
    </div>
  );
}
