import { useRef, useEffect, useMemo } from 'react'
import gsap from 'gsap'

const ICONS = [
  // Building / Foundation
  'M4 20h16v2H4z M6 20V10l6-4 6 4v10 M8 20v-6h3v6 M13 20v-6h3v6',
  // Gear
  'M12 15a3 3 0 100-6 3 3 0 000 6z M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-4 0v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83-2.83l.06-.06A1.65 1.65 0 004.68 15a1.65 1.65 0 00-1.51-1H3a2 2 0 010-4h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 012.83-2.83l.06.06A1.65 1.65 0 009 4.68a1.65 1.65 0 001-1.51V3a2 2 0 014 0v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 2.83l-.06.06A1.65 1.65 0 0019.42 9a1.65 1.65 0 001.51 1H21a2 2 0 010 4h-.09a1.65 1.65 0 00-1.51 1z',
  // Grid / Mesh
  'M3 3h7v7H3z M14 3h7v7h-7z M14 14h7v7h-7z M3 14h7v7H3z',
  // Roll of fabric
  'M12 4c-4 0-8 1.5-8 4v8c0 2.5 4 4 8 4s8-1.5 8-4V8c0-2.5-4-4-8-4z M4 8c0 2.5 4 4 8 4s8-1.5 8-4 M4 12c0 2.5 4 4 8 4s8-1.5 8-4',
  // Mountain / slope
  'M3 20h18L14 8l-4 6-3-4-4 10z',
  // Bridge
  'M2 20h20 M4 20v-8a8 8 0 0116 0v8 M8 20v-4 M16 20v-4 M2 16h20',
  // Road
  'M4 20h16 M5 20l3-16 M19 20l-3-16 M10 20h4',
  // Water / waves
  'M2 12c2-2 4-2 6 0s4 2 6 0 4-2 6 0 4 2 6 0 M2 16c2-2 4-2 6 0s4 2 6 0 4-2 6 0 4 2 6 0',
]

function FloatingIcon({ index }: { index: number }) {
  const ref = useRef<HTMLDivElement>(null)

  const style = useMemo(() => {
    const row = Math.floor(index / 8)
    const col = index % 8
    const x = col * 12.5 + Math.random() * 6
    const y = row * 12.5 + Math.random() * 6
    const duration = 4 + Math.random() * 4
    const delay = Math.random() * -8
    const iconPath = ICONS[index % ICONS.length]

    return {
      left: `${x}%`,
      top: `${y}%`,
      animationDuration: `${duration}s`,
      animationDelay: `${delay}s`,
      iconPath,
    }
  }, [index])

  useEffect(() => {
    if (!ref.current) return
    gsap.fromTo(
      ref.current,
      { opacity: 0, scale: 0.5 },
      {
        opacity: 0.3 + Math.random() * 0.4,
        scale: 1,
        duration: 1,
        delay: Math.random() * 2,
        ease: 'power2.out',
      }
    )
  }, [])

  return (
    <div
      ref={ref}
      className="absolute floating-icon"
      style={{
        left: style.left,
        top: style.top,
        animation: `floatUp ${style.animationDuration} ease-in-out ${style.animationDelay} infinite alternate`,
      }}
    >
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1"
        className="w-8 h-8 md:w-12 md:h-12 text-white/30"
      >
        <path d={style.iconPath} />
      </svg>
    </div>
  )
}

export default function Challenge() {
  const icons = useMemo(() => Array.from({ length: 48 }, (_, i) => i), [])

  return (
    <section className="relative min-h-screen bg-[#0f2e4a] overflow-hidden">
      {/* Floating Icons Scene */}
      <div
        className="absolute inset-0"
        style={{
          perspective: '3000px',
          transform: 'rotateX(60deg) rotateZ(-45deg)',
          transformStyle: 'preserve-3d',
        }}
      >
        <div className="relative w-full h-full">
          {icons.map((i) => (
            <FloatingIcon key={i} index={i} />
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-6 py-32">
        <div className="text-center max-w-4xl mx-auto">
          <div className="caption-label text-[#ff6600] mb-6">The Challenge</div>
          <h2 className="section-title text-white mb-8">
            Infrastructure at Scale
          </h2>
          <p className="text-lg md:text-xl text-white/60 max-w-2xl mx-auto mb-16">
            Bangladesh's booming infrastructure sector demands reliable, cost-effective
            geotextile solutions. We bridge the gap between global manufacturers and
            local contractors, ensuring every project receives the right material
            at the right price.
          </p>

          {/* Counter Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-10">
            <div className="border border-white/10 p-6">
              <div className="text-3xl md:text-5xl font-light text-[#ff6600] mb-2">50+</div>
              <div className="text-xs uppercase tracking-wider text-white/40">Projects</div>
            </div>
            <div className="border border-white/10 p-6">
              <div className="text-3xl md:text-5xl font-light text-[#ff6600] mb-2">12K+</div>
              <div className="text-xs uppercase tracking-wider text-white/40">SQM Supplied</div>
            </div>
            <div className="border border-white/10 p-6">
              <div className="text-3xl md:text-5xl font-light text-[#ff6600] mb-2">15-30</div>
              <div className="text-xs uppercase tracking-wider text-white/40">Days Delivery</div>
            </div>
            <div className="border border-white/10 p-6">
              <div className="text-3xl md:text-5xl font-light text-[#ff6600] mb-2">3</div>
              <div className="text-xs uppercase tracking-wider text-white/40">Source Countries</div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes floatUp {
          0% { transform: translateZ(0) translateY(0); }
          100% { transform: translateZ(100px) translateY(-30px); }
        }
      `}</style>
    </section>
  )
}
