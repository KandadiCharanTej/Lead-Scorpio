"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Camera, Link, ArrowRight, CheckCircle2, AlertCircle, Loader2 } from "lucide-react";
import Image from "next/image";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    website: "",
    sell: "",
    customer: "",
    achieve: "",
  });

  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    if (status !== "idle") setStatus("idle");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Required fields check
    if (!formData.name.trim()) {
      setStatus("error");
      setErrorMessage("Please provide your name.");
      return;
    }
    if (!formData.email.trim()) {
      setStatus("error");
      setErrorMessage("Please provide your work email address.");
      return;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email.trim())) {
      setStatus("error");
      setErrorMessage("Please enter a valid work email address.");
      return;
    }

    setStatus("submitting");

    // Standard client mailto fallback since no backend API endpoint is configured
    setTimeout(() => {
      const subject = encodeURIComponent(`LeadScorpio Inquiry: ${formData.company || formData.name}`);
      const body = encodeURIComponent(
        `Name: ${formData.name}\n` +
        `Work Email: ${formData.email}\n` +
        `Company: ${formData.company || "N/A"}\n` +
        `Website: ${formData.website || "N/A"}\n\n` +
        `What do you sell:\n${formData.sell || "N/A"}\n\n` +
        `Ideal customer:\n${formData.customer || "N/A"}\n\n` +
        `Looking to achieve:\n${formData.achieve || "N/A"}`
      );
      window.location.href = `mailto:hello@leadscorpio.com?subject=${subject}&body=${body}`;
      setStatus("success");
    }, 600);
  };

  return (
    <section id="contact" className="bg-[#FAF9F6] relative overflow-hidden">
      {/* Background Architectural Grid (Identical to previous light sections) */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(rgba(7,21,37,0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(7,21,37,0.03) 1px, transparent 1px)
          `,
          backgroundSize: "48px 48px",
        }}
      />

      {/* Decorative copper horizon curve & bottom-left gradient glow matching reference image */}
      <div className="absolute -bottom-20 -left-20 w-[600px] h-[600px] rounded-full bg-[#C65D2E]/[0.04] blur-3xl pointer-events-none" />
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] rounded-full bg-[#C65D2E]/[0.02] blur-3xl pointer-events-none" />

      {/* Subtle curved line accent at the bottom left */}
      <svg
        className="absolute bottom-0 left-0 w-full max-w-xl h-64 pointer-events-none opacity-40"
        viewBox="0 0 600 300"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M -100 280 C 150 280 200 180 500 240"
          stroke="#C65D2E"
          strokeWidth="1.5"
          strokeOpacity="0.35"
        />
        <circle cx="200" cy="215" r="3.5" fill="#C65D2E" />
      </svg>

      {/* Main Container */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-10 lg:px-12 py-20 sm:py-24 md:py-32 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 xl:gap-20 items-start">
          
          {/* ========================================================================= */}
          {/* LEFT COLUMN                                                               */}
          {/* ========================================================================= */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 flex flex-col justify-between pt-2"
          >
            <div>
              {/* Eyebrow */}
              <div className="flex items-center gap-3 mb-6">
                <span className="text-xs font-bold tracking-[0.2em] uppercase text-[#C65D2E]">
                  LET'S TALK
                </span>
                <span className="h-[1px] w-12 bg-[#C65D2E]/40" />
              </div>

              {/* Large Headline */}
              <h2 className="text-4xl sm:text-5xl md:text-6xl xl:text-[4.25rem] font-black tracking-tighter text-[#071525] leading-[1.05] sm:leading-[1.03] mb-6">
                Let&apos;s build your next{" "}
                <span className="text-[#C65D2E]">pipeline.</span>
              </h2>

              {/* Description */}
              <p className="text-base sm:text-lg text-[#526071] leading-relaxed max-w-lg mb-10 sm:mb-14">
                Tell us about your business and your ideal customer. We&apos;ll put together an outbound strategy designed for your market.
              </p>
            </div>

            {/* Subtle Contact Detail Panel */}
            <motion.a
              href="mailto:hello@leadscorpio.com"
              whileHover={{ y: -2 }}
              transition={{ duration: 0.2 }}
              className="group inline-flex items-center gap-4 p-4 sm:p-5 rounded-2xl bg-[#F7E7DF]/40 hover:bg-[#F7E7DF]/70 border border-[#C65D2E]/15 transition-all duration-300 w-fit max-w-sm"
            >
              <div className="w-12 h-12 rounded-xl bg-white border border-[#C65D2E]/25 flex items-center justify-center text-[#C65D2E] shadow-sm group-hover:scale-105 transition-transform duration-300">
                <Mail size={20} strokeWidth={2} />
              </div>
              <div className="text-left">
                <span className="block text-xs font-semibold text-[#526071] tracking-wider uppercase mb-0.5">
                  Email
                </span>
                <span className="block text-sm sm:text-base font-bold text-[#071525] group-hover:text-[#C65D2E] transition-colors">
                  hello@leadscorpio.com
                </span>
              </div>
            </motion.a>
          </motion.div>

          {/* ========================================================================= */}
          {/* RIGHT COLUMN — Clean White Form Panel                                     */}
          {/* ========================================================================= */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.85, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-8 md:p-10 lg:p-12 border border-[#071525]/10 shadow-[0_20px_50px_-15px_rgba(7,21,37,0.06)]"
          >
            <div className="mb-8">
              <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-[#071525] mb-2.5">
                Get in touch
              </h3>
              <p className="text-sm sm:text-base text-[#526071] leading-relaxed">
                Share some details about your business and we&apos;ll be in touch to discuss how LeadScorpio can build your outbound pipeline.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="flex flex-col gap-5 sm:gap-6">
              {/* Row 1: Name & Work Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                <div className="flex flex-col gap-2 text-left">
                  <label htmlFor="contact-name" className="text-xs font-bold text-[#071525] tracking-wide">
                    Name <span className="text-[#C65D2E]">*</span>
                  </label>
                  <input
                    id="contact-name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    className="w-full bg-[#FAF9F6] border border-[#071525]/15 focus:border-[#C65D2E] focus:bg-white rounded-xl px-4 py-3 text-sm text-[#071525] placeholder:text-[#526071]/50 focus:outline-none focus:ring-2 focus:ring-[#C65D2E]/10 transition-all duration-200"
                  />
                </div>

                <div className="flex flex-col gap-2 text-left">
                  <label htmlFor="contact-email" className="text-xs font-bold text-[#071525] tracking-wide">
                    Work Email <span className="text-[#C65D2E]">*</span>
                  </label>
                  <input
                    id="contact-email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="you@company.com"
                    className="w-full bg-[#FAF9F6] border border-[#071525]/15 focus:border-[#C65D2E] focus:bg-white rounded-xl px-4 py-3 text-sm text-[#071525] placeholder:text-[#526071]/50 focus:outline-none focus:ring-2 focus:ring-[#C65D2E]/10 transition-all duration-200"
                  />
                </div>
              </div>

              {/* Row 2: Company & Website */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                <div className="flex flex-col gap-2 text-left">
                  <label htmlFor="contact-company" className="text-xs font-bold text-[#071525] tracking-wide">
                    Company
                  </label>
                  <input
                    id="contact-company"
                    name="company"
                    type="text"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="Your company name"
                    className="w-full bg-[#FAF9F6] border border-[#071525]/15 focus:border-[#C65D2E] focus:bg-white rounded-xl px-4 py-3 text-sm text-[#071525] placeholder:text-[#526071]/50 focus:outline-none focus:ring-2 focus:ring-[#C65D2E]/10 transition-all duration-200"
                  />
                </div>

                <div className="flex flex-col gap-2 text-left">
                  <label htmlFor="contact-website" className="text-xs font-bold text-[#071525] tracking-wide">
                    Website
                  </label>
                  <input
                    id="contact-website"
                    name="website"
                    type="url"
                    value={formData.website}
                    onChange={handleChange}
                    placeholder="https://yourcompany.com"
                    className="w-full bg-[#FAF9F6] border border-[#071525]/15 focus:border-[#C65D2E] focus:bg-white rounded-xl px-4 py-3 text-sm text-[#071525] placeholder:text-[#526071]/50 focus:outline-none focus:ring-2 focus:ring-[#C65D2E]/10 transition-all duration-200"
                  />
                </div>
              </div>

              {/* Row 3: What do you sell? */}
              <div className="flex flex-col gap-2 text-left">
                <label htmlFor="contact-sell" className="text-xs font-bold text-[#071525] tracking-wide">
                  What do you sell?
                </label>
                <textarea
                  id="contact-sell"
                  name="sell"
                  rows={2}
                  value={formData.sell}
                  onChange={handleChange}
                  placeholder="Describe your product or service"
                  className="w-full bg-[#FAF9F6] border border-[#071525]/15 focus:border-[#C65D2E] focus:bg-white rounded-xl px-4 py-3 text-sm text-[#071525] placeholder:text-[#526071]/50 focus:outline-none focus:ring-2 focus:ring-[#C65D2E]/10 transition-all duration-200 resize-none"
                />
              </div>

              {/* Row 4: Who is your ideal customer? */}
              <div className="flex flex-col gap-2 text-left">
                <label htmlFor="contact-customer" className="text-xs font-bold text-[#071525] tracking-wide">
                  Who is your ideal customer?
                </label>
                <textarea
                  id="contact-customer"
                  name="customer"
                  rows={2}
                  value={formData.customer}
                  onChange={handleChange}
                  placeholder="e.g. industry, company size, role, location"
                  className="w-full bg-[#FAF9F6] border border-[#071525]/15 focus:border-[#C65D2E] focus:bg-white rounded-xl px-4 py-3 text-sm text-[#071525] placeholder:text-[#526071]/50 focus:outline-none focus:ring-2 focus:ring-[#C65D2E]/10 transition-all duration-200 resize-none"
                />
              </div>

              {/* Row 5: What are you looking to achieve? */}
              <div className="flex flex-col gap-2 text-left">
                <label htmlFor="contact-achieve" className="text-xs font-bold text-[#071525] tracking-wide">
                  What are you looking to achieve?
                </label>
                <textarea
                  id="contact-achieve"
                  name="achieve"
                  rows={3}
                  value={formData.achieve}
                  onChange={handleChange}
                  placeholder="e.g. more qualified meetings, sales pipeline, specific targets"
                  className="w-full bg-[#FAF9F6] border border-[#071525]/15 focus:border-[#C65D2E] focus:bg-white rounded-xl px-4 py-3 text-sm text-[#071525] placeholder:text-[#526071]/50 focus:outline-none focus:ring-2 focus:ring-[#C65D2E]/10 transition-all duration-200 resize-none"
                />
              </div>

              {/* Feedback messages */}
              {status === "error" && (
                <div className="flex items-center gap-2 p-3.5 rounded-xl bg-red-50 border border-red-200 text-red-700 text-sm">
                  <AlertCircle size={18} className="shrink-0" />
                  <span>{errorMessage}</span>
                </div>
              )}

              {status === "success" && (
                <div className="flex items-center gap-2 p-3.5 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-sm">
                  <CheckCircle2 size={18} className="shrink-0" />
                  <span>Your email client is opening with your details prefilled. We look forward to speaking!</span>
                </div>
              )}

              {/* Submit Button */}
              <button
                type="submit"
                disabled={status === "submitting"}
                className="w-full py-4 px-6 rounded-xl bg-[#C65D2E] hover:bg-[#b04f24] active:bg-[#9d441e] text-white font-bold text-sm sm:text-base flex items-center justify-center gap-2 transition-all duration-300 shadow-md hover:shadow-lg hover:shadow-[#C65D2E]/25 disabled:opacity-70 disabled:cursor-not-allowed group cursor-pointer"
              >
                {status === "submitting" ? (
                  <>
                    <Loader2 size={18} className="animate-spin" />
                    <span>Preparing inquiry...</span>
                  </>
                ) : (
                  <>
                    <span>Start the Conversation</span>
                    <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform duration-200" />
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* PREMIUM FOOTER — REFERENCE DESIGN IMPLEMENTATION                          */}
      {/* ========================================================================= */}
      <footer className="w-full bg-[#071525] text-[#FAF9F6] relative overflow-hidden select-none border-t border-white/[0.06]">
        {/* Subtle dot pattern texture */}
        <div
          className="absolute inset-0 pointer-events-none opacity-20"
          style={{
            backgroundImage: `radial-gradient(rgba(255, 255, 255, 0.12) 1px, transparent 1px)`,
            backgroundSize: "24px 24px",
          }}
        />

        {/* Ambient subtle glow */}
        <div className="absolute top-0 right-1/4 w-[600px] h-[300px] rounded-full bg-[#C65D2E]/[0.03] blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-10 lg:px-12 pt-16 sm:pt-20 pb-6 sm:pb-8 relative z-10">
          {/* Top area — Brand and navigation columns */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-14 items-start mb-0"
          >
            {/* Left Brand Column */}
            <div className="md:col-span-5 lg:col-span-4 flex flex-col justify-start">
              <a
                href="#"
                className="inline-block mb-6 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C65D2E]/50 rounded-lg w-fit"
                aria-label="LeadScorpio - Back to top"
              >
                <Image
                  src="/logo-white.png"
                  alt="LeadScorpio"
                  width={260}
                  height={84}
                  className="w-[170px] sm:w-[195px] h-auto object-contain"
                />
              </a>

              <div className="flex flex-col gap-1.5 text-sm text-[#8B96A5]">
                <p>© 2026. All rights reserved.</p>
                <p>B2B Lead Generation.</p>
              </div>
            </div>

            {/* Right Side — 4 Navigation Columns */}
            <div className="md:col-span-7 lg:col-span-8 grid grid-cols-2 sm:grid-cols-4 gap-8 sm:gap-6 lg:gap-8">
              {/* SERVICES */}
              <div className="flex flex-col gap-3.5">
                <span className="text-[11px] sm:text-xs font-bold tracking-[0.18em] uppercase text-[#C65D2E]">
                  SERVICES
                </span>
                <ul className="flex flex-col gap-2.5 text-xs sm:text-[13px] text-[#8B96A5]">
                  <li>
                    <a href="#services" className="hover:text-white transition-colors duration-200">
                      LinkedIn Outreach
                    </a>
                  </li>
                  <li>
                    <a href="#services" className="hover:text-white transition-colors duration-200">
                      Cold Email
                    </a>
                  </li>
                  <li>
                    <a href="#services" className="hover:text-white transition-colors duration-200">
                      Cold Calling
                    </a>
                  </li>
                  <li>
                    <a href="#services" className="hover:text-white transition-colors duration-200">
                      Appointment Setting
                    </a>
                  </li>
                  <li>
                    <a href="#services" className="hover:text-white transition-colors duration-200">
                      Lead Qualification
                    </a>
                  </li>
                </ul>
              </div>

              {/* COMPANY */}
              <div className="flex flex-col gap-3.5">
                <span className="text-[11px] sm:text-xs font-bold tracking-[0.18em] uppercase text-[#C65D2E]">
                  COMPANY
                </span>
                <ul className="flex flex-col gap-2.5 text-xs sm:text-[13px] text-[#8B96A5]">
                  <li>
                    <a href="#about" className="hover:text-white transition-colors duration-200">
                      About Us
                    </a>
                  </li>
                  <li>
                    <a href="#how-it-works" className="hover:text-white transition-colors duration-200">
                      How It Works
                    </a>
                  </li>
                  <li>
                    <a href="#services" className="hover:text-white transition-colors duration-200">
                      Case Studies
                    </a>
                  </li>
                  <li>
                    <a href="#about" className="hover:text-white transition-colors duration-200">
                      Blog
                    </a>
                  </li>
                  <li>
                    <a href="#contact" className="hover:text-white transition-colors duration-200">
                      Careers
                    </a>
                  </li>
                </ul>
              </div>

              {/* RESOURCES */}
              <div className="flex flex-col gap-3.5">
                <span className="text-[11px] sm:text-xs font-bold tracking-[0.18em] uppercase text-[#C65D2E]">
                  RESOURCES
                </span>
                <ul className="flex flex-col gap-2.5 text-xs sm:text-[13px] text-[#8B96A5]">
                  <li>
                    <a href="#how-it-works" className="hover:text-white transition-colors duration-200">
                      Guides
                    </a>
                  </li>
                  <li>
                    <a href="#how-it-works" className="hover:text-white transition-colors duration-200">
                      Templates
                    </a>
                  </li>
                  <li>
                    <a href="#contact" className="hover:text-white transition-colors duration-200">
                      Help Center
                    </a>
                  </li>
                  <li>
                    <a href="#about" className="hover:text-white transition-colors duration-200">
                      Community
                    </a>
                  </li>
                  <li>
                    <a href="#contact" className="hover:text-white transition-colors duration-200">
                      Partner Program
                    </a>
                  </li>
                </ul>
              </div>

              {/* LEGAL */}
              <div className="flex flex-col gap-3.5">
                <span className="text-[11px] sm:text-xs font-bold tracking-[0.18em] uppercase text-[#C65D2E]">
                  LEGAL
                </span>
                <ul className="flex flex-col gap-2.5 text-xs sm:text-[13px] text-[#8B96A5]">
                  <li>
                    <a href="#contact" className="hover:text-white transition-colors duration-200">
                      Privacy Policy
                    </a>
                  </li>
                  <li>
                    <a href="#contact" className="hover:text-white transition-colors duration-200">
                      Terms
                    </a>
                  </li>
                  <li>
                    <a href="#contact" className="hover:text-white transition-colors duration-200">
                      Security
                    </a>
                  </li>
                  <li>
                    <a href="#contact" className="hover:text-white transition-colors duration-200">
                      Cookies
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>

        {/* ========================================================================= */}
        {/* REAL LEADSCOPIO LOGO — TRUE FULL-BLEED SCREEN WIDTH (NO EXCESS PADDING)  */}
        {/* ========================================================================= */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="w-full border-t border-white/[0.06] overflow-hidden leading-none m-0 p-0"
        >
          <div className="w-full overflow-hidden leading-none m-0 p-0">
            <Image
              src="/logo-white.png"
              alt="LeadScorpio"
              width={2400}
              height={700}
              className="w-full h-auto block select-none pointer-events-none opacity-90 hover:opacity-100 transition-opacity duration-300 -my-4 sm:-my-8 md:-my-12 lg:-my-16"
              priority
            />
          </div>
        </motion.div>
      </footer>
    </section>
  );
}
