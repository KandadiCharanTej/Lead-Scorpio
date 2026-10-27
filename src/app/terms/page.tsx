import Link from "next/link";
import Image from "next/image";
import { ArrowLeft } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms and Conditions | LeadScorpio",
  description: "Terms and conditions governing the use of the LeadScorpio website and service inquiries.",
};

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-[#FAF9F6] text-[#071525] selection:bg-[#C65D2E]/20">
      {/* Top Header */}
      <header className="border-b border-[#071525]/8 bg-white/80 backdrop-blur-md sticky top-0 z-40">
        <div className="max-w-5xl mx-auto px-6 h-16 sm:h-20 flex items-center justify-between">
          <Link href="/" className="inline-block transition-transform hover:scale-102">
            <Image
              src="/logo-dark.png"
              alt="LeadScorpio"
              width={150}
              height={45}
              className="w-32 sm:w-36 h-auto object-contain"
              priority
            />
          </Link>
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-medium text-[#526071] hover:text-[#C65D2E] transition-colors"
          >
            <ArrowLeft size={14} />
            <span>Back to Home</span>
          </Link>
        </div>
      </header>

      {/* Content Container */}
      <main className="max-w-4xl mx-auto px-6 py-12 sm:py-16 md:py-20">
        <div className="mb-10 sm:mb-14">
          <span className="text-xs font-mono font-bold tracking-[0.2em] uppercase text-[#C65D2E] block mb-2">
            Legal & Trust
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-[#071525] mb-4">
            Terms of Service
          </h1>
          <p className="text-xs sm:text-sm text-[#526071] font-mono">
            Last Updated: October 2026
          </p>
        </div>

        <article className="prose prose-slate max-w-none space-y-8 text-sm sm:text-base text-[#384351] leading-relaxed">
          <section className="bg-white p-6 sm:p-8 rounded-2xl border border-[#071525]/8 shadow-xs">
            <h2 className="text-lg sm:text-xl font-bold text-[#071525] mb-3">1. Agreement to Terms</h2>
            <p>
              By accessing or using the website of LeadScorpio (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;), you agree to comply with and be bound by these Terms of Service. If you disagree with any part of these terms, please do not use our website.
            </p>
          </section>

          <section className="bg-white p-6 sm:p-8 rounded-2xl border border-[#071525]/8 shadow-xs">
            <h2 className="text-lg sm:text-xl font-bold text-[#071525] mb-3">2. Service Inquiries & Separate Client Agreements</h2>
            <p>
              Information on this website is provided for informational and demonstration purposes regarding our B2B outbound lead generation services. Submitting an inquiry or booking a discovery call does not create a binding service contract. Official agency engagements are governed exclusively by mutually executed, separate written Master Services Agreements (MSA) or Statements of Work (SOW).
            </p>
          </section>

          <section className="bg-white p-6 sm:p-8 rounded-2xl border border-[#071525]/8 shadow-xs">
            <h2 className="text-lg sm:text-xl font-bold text-[#071525] mb-3">3. Intellectual Property Rights</h2>
            <p>
              All text, graphic interfaces, visual demonstrations, interactive components, logos, and software code on this website are the proprietary property of LeadScorpio or licensed to us, and are protected by applicable copyright and trademark laws.
            </p>
          </section>

          <section className="bg-white p-6 sm:p-8 rounded-2xl border border-[#071525]/8 shadow-xs">
            <h2 className="text-lg sm:text-xl font-bold text-[#071525] mb-3">4. Acceptable Website Use</h2>
            <p>
              You agree to use this website only for lawful business purposes. You agree not to submit fraudulent or deceptive form details, introduce malicious scripts, or attempt to compromise site performance and security.
            </p>
          </section>

          <section className="bg-white p-6 sm:p-8 rounded-2xl border border-[#071525]/8 shadow-xs">
            <h2 className="text-lg sm:text-xl font-bold text-[#071525] mb-3">5. Disclaimer & Limitation of Liability</h2>
            <p>
              This website is provided on an &quot;as-is&quot; basis without warranties of any kind. While we strive to ensure accurate descriptions of our outreach capabilities, outbound sales results vary based on offer market fit, customer profile, and industry factors. To the extent permitted by law, LeadScorpio shall not be liable for any indirect or consequential damages arising from the use of this website.
            </p>
          </section>

          <section className="bg-white p-6 sm:p-8 rounded-2xl border border-[#071525]/8 shadow-xs">
            <h2 className="text-lg sm:text-xl font-bold text-[#071525] mb-3">6. Contact Inquiries</h2>
            <p>
              For legal inquiries regarding these terms, reach us at:{" "}
              <a href="mailto:leadscorpioofficial@gmail.com" className="text-[#C65D2E] font-semibold hover:underline">
                leadscorpioofficial@gmail.com
              </a>.
            </p>
          </section>
        </article>
      </main>

      {/* Footer minimal info */}
      <footer className="border-t border-[#071525]/8 bg-white py-8 text-center text-xs text-[#526071]">
        <div className="max-w-5xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <span>&copy; {new Date().getFullYear()} LeadScorpio. All rights reserved.</span>
          <div className="flex gap-4">
            <Link href="/privacy" className="hover:text-[#071525] transition-colors">Privacy Policy</Link>
            <Link href="/" className="hover:text-[#071525] transition-colors">Home</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
