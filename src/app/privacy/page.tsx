import Link from "next/link";
import Image from "next/image";
import { ArrowLeft } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | LeadScorpio",
  description: "Read the LeadScorpio Privacy Policy to understand how we collect, use, and protect your information.",
};

export default function PrivacyPolicy() {
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
        {/* Eyebrow & Title */}
        <div className="mb-10 sm:mb-14">
          <span className="text-xs font-mono font-bold tracking-[0.2em] uppercase text-[#C65D2E] block mb-2">
            Legal & Trust
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-[#071525] mb-4">
            Privacy Policy
          </h1>
          <p className="text-xs sm:text-sm text-[#526071] font-mono">
            Last Updated: October 2026
          </p>
        </div>

        <article className="prose prose-slate max-w-none space-y-8 text-sm sm:text-base text-[#384351] leading-relaxed">
          <section className="bg-white p-6 sm:p-8 rounded-2xl border border-[#071525]/8 shadow-xs">
            <h2 className="text-lg sm:text-xl font-bold text-[#071525] mb-3">1. Overview</h2>
            <p>
              LeadScorpio (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) provides specialized B2B outbound lead generation, appointment setting, and sales prospecting services. We respect your privacy and are committed to handling personal data responsibly and transparently in accordance with applicable global data privacy regulations.
            </p>
          </section>

          <section className="bg-white p-6 sm:p-8 rounded-2xl border border-[#071525]/8 shadow-xs">
            <h2 className="text-lg sm:text-xl font-bold text-[#071525] mb-3">2. Information We Collect</h2>
            <p className="mb-3">
              We collect information directly from you when you submit our contact or strategy call forms, including:
            </p>
            <ul className="list-disc pl-5 space-y-1.5">
              <li>Full Name</li>
              <li>Work Email Address</li>
              <li>Company Name and Corporate Website</li>
              <li>Business details provided voluntarily regarding what you sell and your pipeline goals</li>
            </ul>
          </section>

          <section className="bg-white p-6 sm:p-8 rounded-2xl border border-[#071525]/8 shadow-xs">
            <h2 className="text-lg sm:text-xl font-bold text-[#071525] mb-3">3. How We Use Information</h2>
            <p className="mb-3">We process collected data exclusively to:</p>
            <ul className="list-disc pl-5 space-y-1.5">
              <li>Evaluate your business requirements and propose relevant outbound solutions.</li>
              <li>Communicate directly with you regarding strategy discussions and inquiries.</li>
              <li>Maintain operational security and prevent unauthorized access or spam submissions.</li>
            </ul>
            <p className="mt-3">
              We do <strong>not</strong> sell, rent, or trade your personal data to third parties for independent marketing purposes.
            </p>
          </section>

          <section className="bg-white p-6 sm:p-8 rounded-2xl border border-[#071525]/8 shadow-xs">
            <h2 className="text-lg sm:text-xl font-bold text-[#071525] mb-3">4. Data Sharing & Third-Party Processors</h2>
            <p>
              Your data is accessed only by authorized personnel and verified infrastructure providers (e.g., transactional email systems and cloud hosting providers) strictly necessary to process your inquiries and fulfill service requirements.
            </p>
          </section>

          <section className="bg-white p-6 sm:p-8 rounded-2xl border border-[#071525]/8 shadow-xs">
            <h2 className="text-lg sm:text-xl font-bold text-[#071525] mb-3">5. Data Retention & Your Rights</h2>
            <p className="mb-3">
              We retain inquiry information only as long as necessary to facilitate ongoing business communication. You have the right to request access to, correction of, or deletion of your personal data at any time.
            </p>
            <p>
              To exercise any of these rights, please contact our team directly at{" "}
              <a href="mailto:leadscorpioofficial@gmail.com" className="text-[#C65D2E] font-semibold hover:underline">
                leadscorpioofficial@gmail.com
              </a>.
            </p>
          </section>

          <section className="bg-white p-6 sm:p-8 rounded-2xl border border-[#071525]/8 shadow-xs">
            <h2 className="text-lg sm:text-xl font-bold text-[#071525] mb-3">6. Contact Information</h2>
            <p>
              If you have questions regarding this Privacy Policy or data processing practices, please email:{" "}
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
            <Link href="/terms" className="hover:text-[#071525] transition-colors">Terms of Service</Link>
            <Link href="/" className="hover:text-[#071525] transition-colors">Home</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
