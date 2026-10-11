"use client"

import { Globe, Marker, Arc } from "@/components/ui/cobe-globe"
import { motion } from "framer-motion"
import { MessageSquare, Mail, Phone, CalendarCheck } from "lucide-react"

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
    <div className="relative w-full aspect-square max-w-[480px] sm:max-w-[520px] lg:max-w-[560px] mx-auto flex items-center justify-center">
      {/* Subtle fine concentric orbital lines around the globe matching the reference */}
      <div
        className="absolute inset-[-10%] rounded-full border border-[#C65D2E]/[0.08] pointer-events-none"
        style={{ transform: "rotate(-18deg) scaleY(0.72)" }}
      />
      <div
        className="absolute inset-[-4%] rounded-full border border-[#071525]/[0.05] pointer-events-none"
        style={{ transform: "rotate(24deg) scaleY(0.68)" }}
      />
      <div
        className="absolute inset-[6%] rounded-full border border-[#C65D2E]/[0.06] pointer-events-none"
        style={{ transform: "rotate(45deg) scaleY(0.6)" }}
      />

      {/* Warm ambient depth glow behind globe */}
      <div
        className="absolute inset-[15%] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(198,93,46,0.06) 0%, rgba(250,249,246,0) 70%)",
        }}
      />

      {/* 3D Cobe Globe */}
      <div className="relative w-full h-full z-10">
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
          className="w-full h-full drop-shadow-[0_20px_40px_rgba(7,21,37,0.08)]"
        />
      </div>

      {/* Floating stationary service labels matching the reference */}
      {[
        {
          label: "LinkedIn",
          icon: (
            <div className="w-4 h-4 rounded-md bg-[#0A66C2] flex items-center justify-center text-white text-[10px] font-bold">
              in
            </div>
          ),
          position: "top-10 left-3 sm:left-4",
          delay: 1.0,
        },
        {
          label: "Cold Email",
          icon: <Mail size={14} className="text-[#C65D2E]" />,
          position: "top-12 right-3 sm:right-4",
          delay: 1.1,
        },
        {
          label: "Cold Calling",
          icon: <Phone size={13} className="text-[#071525]" />,
          position: "bottom-14 left-4 sm:left-6",
          delay: 1.2,
        },
        {
          label: "Appointment Setting",
          icon: <CalendarCheck size={13} className="text-[#C65D2E]" />,
          position: "bottom-10 right-4 sm:right-6",
          delay: 1.3,
        },
      ].map((item, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 12, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.6, delay: item.delay, ease: [0.16, 1, 0.3, 1] }}
          className={`absolute ${item.position} z-20 hidden sm:flex items-center gap-2.5 px-3.5 py-2 rounded-xl bg-white/95 backdrop-blur-md border border-[#071525]/[0.08] shadow-[0_4px_20px_rgba(7,21,37,0.07)] text-xs font-semibold text-[#071525] select-none hover:border-[#C65D2E]/40 transition-colors pointer-events-auto`}
        >
          {item.icon}
          <span>{item.label}</span>
        </motion.div>
      ))}
    </div>
  )
}
