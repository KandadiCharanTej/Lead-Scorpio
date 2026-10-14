"use client"

import { Globe, Marker, Arc } from "@/components/ui/cobe-globe"
import { motion } from "framer-motion"
import { Mail, Phone, CalendarCheck } from "lucide-react"

// Key international B2B hubs
const markers: Marker[] = [
  { id: "sf", location: [37.7749, -122.4194], label: "San Francisco" },
  { id: "nyc", location: [40.7128, -74.006], label: "New York" },
  { id: "london", location: [51.5074, -0.1278], label: "London" },
  { id: "frankfurt", location: [50.1109, 8.6821], label: "Frankfurt" },
  { id: "dubai", location: [25.2048, 55.2708], label: "Dubai" },
  { id: "singapore", location: [1.3521, 103.8198], label: "Singapore" },
  { id: "sydney", location: [-33.8688, 151.2093], label: "Sydney" },
  { id: "saopaulo", location: [-23.5505, -46.6333], label: "São Paulo" },
]

// Worldwide prospecting outbound routes in copper #C65D2E
const arcs: Arc[] = [
  { id: "sf-london", from: [37.7749, -122.4194], to: [51.5074, -0.1278] },
  { id: "nyc-frankfurt", from: [40.7128, -74.006], to: [50.1109, 8.6821] },
  { id: "london-dubai", from: [51.5074, -0.1278], to: [25.2048, 55.2708] },
  { id: "dubai-singapore", from: [25.2048, 55.2708], to: [1.3521, 103.8198] },
  { id: "singapore-sydney", from: [1.3521, 103.8198], to: [-33.8688, 151.2093] },
  { id: "nyc-saopaulo", from: [40.7128, -74.006], to: [-23.5505, -46.6333] },
]

export default function HeroGlobe() {
  return (
    <div className="relative w-full aspect-square max-w-[460px] sm:max-w-[500px] lg:max-w-[540px] mx-auto flex items-center justify-center">
      {/* Subtle orbital atmosphere rings */}
      <div
        className="absolute inset-[-6%] rounded-full border border-[#C65D2E]/[0.1] pointer-events-none"
        style={{ transform: "rotate(-15deg) scaleY(0.75)" }}
      />
      <div
        className="absolute inset-[-1%] rounded-full border border-[#071525]/[0.06] pointer-events-none"
        style={{ transform: "rotate(20deg) scaleY(0.7)" }}
      />
      <div
        className="absolute inset-[8%] rounded-full border border-[#C65D2E]/[0.08] pointer-events-none"
        style={{ transform: "rotate(40deg) scaleY(0.65)" }}
      />

      {/* Warm ambient depth glow behind globe */}
      <div
        className="absolute inset-[12%] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(198,93,46,0.08) 0%, rgba(250,249,246,0) 72%)",
        }}
      />

      {/* 3D Cobe Globe */}
      <div className="relative w-full h-full z-10 flex items-center justify-center">
        <Globe
          markers={markers}
          arcs={arcs}
          markerColor={[0.776, 0.365, 0.18]} // Copper #C65D2E
          baseColor={[0.98, 0.976, 0.965]}   // Warm White #FAF9F6
          arcColor={[0.776, 0.365, 0.18]}    // Copper #C65D2E
          glowColor={[0.98, 0.976, 0.965]}   // Warm White Glow
          dark={0}
          mapBrightness={8}
          markerSize={0.035}
          markerElevation={0.015}
          arcWidth={0.5}
          arcHeight={0.25}
          speed={0.003}
          theta={0.25}
          diffuse={1.7}
          mapSamples={16000}
          className="w-full h-full drop-shadow-[0_20px_45px_rgba(7,21,37,0.09)]"
        />
      </div>

      {/* Floating service telemetry pills with refined placement */}
      {[
        {
          label: "LinkedIn Outreach",
          icon: (
            <div className="w-4 h-4 rounded-[4px] bg-[#0A66C2] flex items-center justify-center text-white text-[9.5px] font-bold">
              in
            </div>
          ),
          position: "top-6 left-2 md:left-4",
          delay: 0.8,
        },
        {
          label: "Cold Email",
          icon: <Mail size={13} className="text-[#C65D2E]" />,
          position: "top-8 right-2 md:right-4",
          delay: 0.9,
        },
        {
          label: "Cold Calling",
          icon: <Phone size={12} className="text-[#071525]" />,
          position: "bottom-10 left-2 md:left-5",
          delay: 1.0,
        },
        {
          label: "Appointment Setting",
          icon: <CalendarCheck size={13} className="text-[#C65D2E]" />,
          position: "bottom-6 right-2 md:right-5",
          delay: 1.1,
        },
      ].map((item, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 10, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.5, delay: item.delay, ease: [0.16, 1, 0.3, 1] }}
          className={`absolute ${item.position} z-20 hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/95 backdrop-blur-md border border-[#071525]/[0.08] shadow-[0_4px_16px_rgba(7,21,37,0.06)] text-[11px] font-semibold text-[#071525] select-none hover:border-[#C65D2E]/40 hover:shadow-md transition-all duration-200 pointer-events-auto`}
        >
          {item.icon}
          <span>{item.label}</span>
        </motion.div>
      ))}
    </div>
  )
}

