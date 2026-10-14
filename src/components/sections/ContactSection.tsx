"use client";

import { motion } from "framer-motion";
import { Mail, Camera, Link } from "lucide-react";
import Image from "next/image";

export default function ContactSection() {
  return (
    <section id="contact" className="bg-[var(--color-brand-navy)] relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-[var(--color-brand-copper)]/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-[var(--color-brand-copper)]/3 blur-[100px] pointer-events-none" />

      {/* CTA Banner */}
      <div className="border-b border-white/8">
        <div className="max-w-7xl mx-auto px-6 md:px-10 py-24 md:py-32 relative z-10">
          <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            >
              <p className="text-xs font-bold tracking-[0.2em] uppercase text-[var(--color-brand-copper)] mb-6">
                Let's talk
              </p>
              <h2 className="text-5xl md:text-6xl lg:text-7xl font-black tracking-tighter text-[var(--color-brand-white)] leading-[1.0] mb-6">
                Let's build your<br />
                <span className="text-[var(--color-brand-copper)]">next pipeline.</span>
              </h2>
              <p className="text-[var(--color-brand-white)]/60 text-xl max-w-xl leading-relaxed">
                Tell us about your business and your ideal customer. We'll put together an outbound strategy designed for your market.
              </p>
            </motion.div>
        </div>
      </div>

      {/* Contact Form */}
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-24 relative z-10">
        <div className="grid lg:grid-cols-[1fr_1.2fr] gap-16 items-start">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          >
            <h3 className="text-3xl font-bold tracking-tight text-white mb-4">Get in touch</h3>
            <p className="text-white/60 leading-relaxed mb-12">
              Share some details about your business and we'll be in touch to discuss how LeadScorpio can build your outbound pipeline.
            </p>

            <div className="flex flex-col gap-6">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-[var(--color-brand-copper)]/10 border border-[var(--color-brand-copper)]/20 flex items-center justify-center text-[var(--color-brand-copper)]">
                  <Mail size={16} />
                </div>
                <div>
                  <p className="text-xs text-white/40 uppercase tracking-wider font-medium">Email</p>
                  <p className="text-white/80 font-medium text-sm">hello@leadscorpio.com</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="bg-white/5 border border-white/8 rounded-2xl p-8 backdrop-blur-sm"
          >
            <form className="flex flex-col gap-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {["Name", "Work Email"].map(label => (
                  <div key={label} className="flex flex-col gap-2">
                    <label className="text-xs font-semibold text-white/50 uppercase tracking-wider">{label}</label>
                    <input
                      type={label.includes("Email") ? "email" : "text"}
                      placeholder={label === "Name" ? "John Doe" : "john@company.com"}
                      className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm placeholder:text-white/30 focus:outline-none focus:border-[var(--color-brand-copper)] focus:bg-white/8 transition-all duration-300"
                    />
                  </div>
                ))}
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {[
                  { label: "Company", placeholder: "Acme Corp" },
                  { label: "Website", placeholder: "https://acme.com" },
                ].map(f => (
                  <div key={f.label} className="flex flex-col gap-2">
                    <label className="text-xs font-semibold text-white/50 uppercase tracking-wider">{f.label}</label>
                    <input
                      type="text"
                      placeholder={f.placeholder}
                      className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm placeholder:text-white/30 focus:outline-none focus:border-[var(--color-brand-copper)] focus:bg-white/8 transition-all duration-300"
                    />
                  </div>
                ))}
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-xs font-semibold text-white/50 uppercase tracking-wider">What do you sell?</label>
                <input
                  type="text"
                  placeholder="B2B Software, Consulting services..."
                  className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm placeholder:text-white/30 focus:outline-none focus:border-[var(--color-brand-copper)] focus:bg-white/8 transition-all duration-300"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-xs font-semibold text-white/50 uppercase tracking-wider">Who is your ideal customer?</label>
                <input
                  type="text"
                  placeholder="VP of Sales in Series B SaaS companies..."
                  className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm placeholder:text-white/30 focus:outline-none focus:border-[var(--color-brand-copper)] focus:bg-white/8 transition-all duration-300"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-xs font-semibold text-white/50 uppercase tracking-wider">What are you looking to achieve?</label>
                <textarea
                  rows={4}
                  placeholder="Increase monthly qualified meetings, build a scalable outbound pipeline..."
                  className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm placeholder:text-white/30 focus:outline-none focus:border-[var(--color-brand-copper)] focus:bg-white/8 transition-all duration-300 resize-none"
                />
              </div>

              <button
                type="button"
                className="relative w-full py-4 rounded-xl bg-[var(--color-brand-copper)] text-white font-semibold text-sm overflow-hidden group hover:bg-[var(--color-brand-copper-dark)] transition-all duration-500 hover:shadow-[0_8px_30px_rgba(198,93,46,0.35)] mt-2"
              >
                <span className="relative z-10">Start the Conversation</span>
                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
              </button>
            </form>
          </motion.div>
        </div>
      </div>

      {/* Footer */}
      <div className="border-t border-white/8">
        <div className="max-w-7xl mx-auto px-6 md:px-10 py-12 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex items-center gap-3">
            <Image
              src="/logo-white.png"
              alt="LeadScorpio"
              width={400}
              height={148}
              className="w-[500px] h-auto object-contain"
            />
            <span className="text-white/30 text-sm">© 2026. All rights reserved.</span>
          </div>

          <div className="flex items-center gap-8 text-sm text-white/40">
            <a href="#" className="hover:text-[var(--color-brand-copper)] transition-colors flex items-center gap-2">
              <Link size={14} /> LinkedIn
            </a>
            <a href="#" className="hover:text-[var(--color-brand-copper)] transition-colors flex items-center gap-2">
              <Camera size={14} /> Instagram
            </a>
            <a href="#" className="hover:text-[var(--color-brand-copper)] transition-colors flex items-center gap-2">
              <Mail size={14} /> Email
            </a>
          </div>

          <div className="flex gap-6 text-xs text-white/30">
            <a href="#" className="hover:text-white/60 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white/60 transition-colors">Terms</a>
          </div>
        </div>
      </div>
    </section>
  );
}
