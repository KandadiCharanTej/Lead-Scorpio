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
          initialPhi={4.71}
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
          position: "top-5 left-1 sm:left-2 md:left-4",
          delay: 0.8,
        },
        {
          label: "Cold Email",
          icon: <Mail size={13} className="text-[#C65D2E]" />,
          position: "top-5 right-1 sm:right-2 md:right-4",
          delay: 0.9,
        },
        {
          label: "Cold Calling",
          icon: <Phone size={12} className="text-[#071525]" />,
          position: "top-1/2 -translate-y-1/2 -left-3 sm:-left-2 md:left-0",
          delay: 1.0,
        },
        {
          label: "WhatsApp Marketing",
          icon: (
            <div className="w-4 h-4 rounded-full bg-[#25D366] flex items-center justify-center text-white shadow-xs">
              <svg
                viewBox="0 0 24 24"
                width="10"
                height="10"
                fill="currentColor"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
            </div>
          ),
          position: "top-1/2 -translate-y-1/2 -right-3 sm:-right-2 md:right-0",
          delay: 1.1,
        },
        {
          label: "Appointment Setting",
          icon: <CalendarCheck size={13} className="text-[#C65D2E]" />,
          position: "bottom-5 left-1/2 -translate-x-1/2",
          delay: 1.2,
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

