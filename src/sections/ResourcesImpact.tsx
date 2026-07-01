import { useRef, useEffect, useMemo } from 'react'
import { Link } from 'react-router-dom'
import { Download, FileText, BookOpen, HelpCircle } from 'lucide-react'

const TEXT = 'REINFORCEMENT / FILTRATION / SEPARATION / STABILIZATION / '

function OrbitalText() {
  const containerRef = useRef<HTMLDivElement>(null)

  const chars = useMemo(() => {
    return TEXT.split('')
  }, [])

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    let rotation = 0
    let animId: number

    const animate = () => {
      rotation = (rotation + 0.3) % 360
      container.style.transform = `rotateX(${rotation}deg)`
      animId = requestAnimationFrame(animate)
    }

    animId = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(animId)
  }, [])

  return (
    <div className="relative w-full h-[300px] md:h-[400px]" style={{ perspective: '100vh' }}>
      <div
        ref={containerRef}
        className="absolute inset-0 flex items-center justify-center"
        style={{ transformStyle: 'preserve-3d' }}
      >
        {chars.map((char, i) => {
          const angle = (360 / chars.length) * i
          return (
            <span
              key={i}
              className="absolute text-lg md:text-2xl font-medium tracking-[0.2em] uppercase"
              style={{
                transform: `rotateX(${angle}deg) translateZ(120px)`,
                color: angle % 180 < 45 ? '#000000' : 'rgba(0,0,0,0.08)',
                transformStyle: 'preserve-3d',
              }}
            >
              {char}
            </span>
          )
        })}
      </div>
    </div>
  )
}

const resources = [
  {
    icon: FileText,
    title: 'Geotextile Selection Guide',
    description: 'How to choose the right GSM for roads, riverbanks, and drainage',
  },
  {
    icon: BookOpen,
    title: 'RHD Standard Specifications',
    description: 'Complete guide to RHD tender compliance for geotextile materials',
  },
  {
    icon: Download,
    title: 'Cost Comparison Guide',
    description: 'When to buy local, when to import \u2014 a data-driven analysis',
  },
  {
    icon: HelpCircle,
    title: 'Installation Best Practices',
    description: 'Proper handling, storage, and installation of geotextile on site',
  },
]

export default function ResourcesImpact() {
  return (
    <section className="py-20 lg:py-32 bg-[#f1f0ee] border-t border-black/10">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          {/* Left Content */}
          <div className="lg:col-span-7">
            <div className="scroll-reveal">
              <div className="caption-label text-[#ff6600] mb-4">Knowledge Base</div>
              <h2 className="section-title mb-6">
                Technical Resources
              </h2>
              <p className="text-lg text-[#333] mb-10 leading-relaxed">
                Deep expertise in government project compliance including RHD, LGED,
                and BWDB tender specifications. We provide free technical consultation
                to ensure you source the exact geotextile grade required \u2014 no
                over-specification, no under-specification.
              </p>
            </div>

            {/* Resources List */}
            <div className="space-y-4 mb-10">
              {resources.map((resource, index) => {
                const Icon = resource.icon
                return (
                  <div
                    key={index}
                    className="scroll-reveal flex items-start gap-4 p-4 border border-black/10 hover:border-[#ff6600]/30 transition-all duration-300 cursor-pointer group"
                    style={{ transitionDelay: `${index * 0.1}s` }}
                  >
                    <div className="w-10 h-10 flex-shrink-0 flex items-center justify-center border border-[#ff6600]/30 group-hover:bg-[#ff6600] transition-colors duration-300">
                      <Icon size={18} className="text-[#ff6600] group-hover:text-white transition-colors duration-300" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-sm font-medium text-black mb-1">
                        {resource.title}
                      </h4>
                      <p className="text-xs text-[#888]">
                        {resource.description}
                      </p>
                    </div>
                  </div>
                )
              })}
            </div>

            <div className="scroll-reveal">
              <Link
                to="/resources"
                className="inline-flex items-center gap-2 text-sm font-medium text-[#ff6600] hover:underline"
              >
                View All Resources
                <span className="text-lg">&rarr;</span>
              </Link>
            </div>
          </div>

          {/* Right - Orbital Text */}
          <div className="lg:col-span-5 scroll-reveal">
            <OrbitalText />
            <div className="text-center mt-8">
              <p className="text-xs text-[#888] uppercase tracking-wider">
                Core Geotextile Functions
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
