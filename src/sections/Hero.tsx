import { useRef, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, ChevronRight } from 'lucide-react'
import FabricWeaveBackground from '../components/FabricWeaveBackground'

function AnimatedCounter({ end, suffix = '', duration = 2000 }: { end: number; suffix?: string; duration?: number }) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLSpanElement>(null)
  const hasAnimated = useRef(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true
          const startTime = Date.now()
          const animate = () => {
            const elapsed = Date.now() - startTime
            const progress = Math.min(elapsed / duration, 1)
            const eased = 1 - Math.pow(1 - progress, 3)
            setCount(Math.floor(eased * end))
            if (progress < 1) requestAnimationFrame(animate)
          }
          requestAnimationFrame(animate)
        }
      },
      { threshold: 0.5 }
    )

    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [end, duration])

  return (
    <span ref={ref}>
      {count.toLocaleString()}{suffix}
    </span>
  )
}

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* WebGL Background */}
      <FabricWeaveBackground />

      {/* Content Overlay */}
      <div className="relative z-10 min-h-screen flex items-center">
        <div className="w-full max-w-[1400px] mx-auto px-6 lg:px-10 py-32">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Panel */}
            <div className="lg:col-span-5">
              <div className="glass-panel p-8 lg:p-12">
                <div className="caption-label mb-6 flex items-center gap-2">
                  <span className="w-8 h-[1px] bg-[#ff6600]" />
                  Geotextile Solutions Bangladesh
                </div>
                <h1 className="hero-display text-black mb-6">
                  Designing the
                  <span className="text-[#ff6600]"> Subsurface.</span>
                </h1>
                <p className="text-lg text-[#333] mb-8 leading-relaxed">
                  World-class geotextile sourcing and soil reinforcement strategies
                  for Bangladesh's infrastructure future.
                </p>
                <div className="flex flex-wrap gap-4 mb-10">
                  <Link to="/products" className="btn-primary">
                    Explore Capabilities
                    <ArrowRight size={16} className="ml-2" />
                  </Link>
                  <Link to="/contact" className="btn-outline">
                    Get a Free Quote
                  </Link>
                </div>

                {/* Trust Badges */}
                <div className="grid grid-cols-2 gap-4 pt-6 border-t border-black/10">
                  <div className="flex items-center gap-2">
                    <ChevronRight size={14} className="text-[#ff6600]" />
                    <span className="text-xs font-medium text-black">12,000+ SQM Delivered</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <ChevronRight size={14} className="text-[#ff6600]" />
                    <span className="text-xs font-medium text-black">Direct Factory Pricing</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <ChevronRight size={14} className="text-[#ff6600]" />
                    <span className="text-xs font-medium text-black">RHD/LGED/BWDB Projects</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <ChevronRight size={14} className="text-[#ff6600]" />
                    <span className="text-xs font-medium text-black">Same-Day Consultation</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right side - empty for WebGL interaction */}
            <div className="lg:col-span-7 hidden lg:block" />
          </div>
        </div>
      </div>

      {/* Stats Bar */}
      <div className="relative z-10 bg-black text-white">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10 py-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-light text-[#ff6600] mb-2">
                <AnimatedCounter end={50} suffix="+" />
              </div>
              <div className="caption-label text-white/50">Projects Completed</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-light text-[#ff6600] mb-2">
                <AnimatedCounter end={12000} suffix="+" />
              </div>
              <div className="caption-label text-white/50">SQM Supplied</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-light text-[#ff6600] mb-2">
                <AnimatedCounter end={3} />
              </div>
              <div className="caption-label text-white/50">Countries Sourced</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-light text-[#ff6600] mb-2">
                <AnimatedCounter end={100} suffix="%" />
              </div>
              <div className="caption-label text-white/50">On-Time Delivery</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
