import { useRef, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { ArrowRight, ChevronRight } from 'lucide-react'
import FabricWeaveBackground from '../components/FabricWeaveBackground'

function AnimatedCounter({ end, suffix = '', duration = 2000 }: { end: number; suffix?: string; duration?: number }) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLSpanElement>(null)
  const hasAnimated = useRef(false)

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
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
    }, { threshold: 0.5 })
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [end, duration])

  return <span ref={ref}>{count.toLocaleString()}{suffix}</span>
}

export default function Hero() {
  const { t } = useTranslation()

  return (
    <section className="relative min-h-screen overflow-hidden">
      <FabricWeaveBackground />
      <div className="relative z-10 min-h-screen flex items-center">
        <div className="w-full max-w-[1400px] mx-auto px-6 lg:px-10 py-32">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-5">
              <div className="glass-panel p-8 lg:p-12">
                <div className="caption-label mb-6 flex items-center gap-2">
                  <span className="w-8 h-[1px] bg-[#ff6600]" />
                  {t('hero.subtitle')}
                </div>
                <h1 className="hero-display text-black mb-6">
                  {t('hero.title1')}
                  <span className="text-[#ff6600]">{t('hero.title2')}</span>
                </h1>
                <p className="text-lg text-[#333] mb-8 leading-relaxed">{t('hero.description')}</p>
                <div className="flex flex-wrap gap-4 mb-10">
                  <Link to="/products" className="btn-primary">
                    {t('hero.explore')} <ArrowRight size={16} className="ml-2" />
                  </Link>
                  <Link to="/contact" className="btn-outline">{t('hero.quote')}</Link>
                </div>
                <div className="grid grid-cols-2 gap-4 pt-6 border-t border-black/10">
                  {[t('hero.badge1'), t('hero.badge2'), t('hero.badge3'), t('hero.badge4')].map((b, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <ChevronRight size={14} className="text-[#ff6600]" />
                      <span className="text-xs font-medium text-black">{b}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="lg:col-span-7 hidden lg:block" />
          </div>
        </div>
      </div>

      <div className="relative z-10 bg-black text-white">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10 py-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { end: 50, suffix: '+', label: t('hero.stat1') },
              { end: 12000, suffix: '+', label: t('hero.stat2') },
              { end: 3, suffix: '', label: t('hero.stat3') },
              { end: 100, suffix: '%', label: t('hero.stat4') },
            ].map((s, i) => (
              <div key={i} className="text-center">
                <div className="text-3xl md:text-4xl font-light text-[#ff6600] mb-2">
                  <AnimatedCounter end={s.end} suffix={s.suffix} />
                </div>
                <div className="caption-label text-white/50">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
