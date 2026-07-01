import { useRef, useEffect, useMemo } from 'react'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { Download, FileText, BookOpen } from 'lucide-react'

const TEXT = 'REINFORCEMENT / FILTRATION / SEPARATION / STABILIZATION / '

function OrbitalText() {
  const containerRef = useRef<HTMLDivElement>(null)
  const chars = useMemo(() => TEXT.split(''), [])

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
      <div ref={containerRef} className="absolute inset-0 flex items-center justify-center" style={{ transformStyle: 'preserve-3d' }}>
        {chars.map((char, i) => {
          const angle = (360 / chars.length) * i
          return (
            <span key={i} className="absolute text-lg md:text-2xl font-medium tracking-[0.2em] uppercase"
              style={{ transform: `rotateX(${angle}deg) translateZ(120px)`, color: angle % 180 < 45 ? '#000000' : 'rgba(0,0,0,0.08)', transformStyle: 'preserve-3d' }}>
              {char}
            </span>
          )
        })}
      </div>
    </div>
  )
}

export default function ResourcesImpact() {
  const { t } = useTranslation()
  const resources = [
    { icon: FileText, title: t('resources.resource1.title'), desc: t('resources.resource1.desc') },
    { icon: BookOpen, title: t('resources.resource2.title'), desc: t('resources.resource2.desc') },
    { icon: Download, title: t('resources.resource3.title'), desc: t('resources.resource3.desc') },
  ]

  return (
    <section className="py-20 lg:py-32 bg-[#f1f0ee] border-t border-black/10">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          <div className="lg:col-span-7">
            <div className="scroll-reveal">
              <div className="caption-label text-[#ff6600] mb-4">{t('resources.label')}</div>
              <h2 className="section-title mb-6">{t('resources.title')}</h2>
              <p className="text-lg text-[#333] mb-10 leading-relaxed">{t('resources.description')}</p>
            </div>
            <div className="space-y-4 mb-10">
              {resources.map((r, i) => (
                <div key={i} className="scroll-reveal flex items-start gap-4 p-4 border border-black/10 hover:border-[#ff6600]/30 transition-all duration-300 cursor-pointer group"
                  style={{ transitionDelay: `${i * 0.1}s` }}>
                  <div className="w-10 h-10 flex-shrink-0 flex items-center justify-center border border-[#ff6600]/30 group-hover:bg-[#ff6600] transition-colors duration-300">
                    <r.icon size={18} className="text-[#ff6600] group-hover:text-white transition-colors duration-300" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-sm font-medium text-black mb-1">{r.title}</h4>
                    <p className="text-xs text-[#888]">{r.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="scroll-reveal">
              <Link to="/resources" className="inline-flex items-center gap-2 text-sm font-medium text-[#ff6600] hover:underline">
                {t('resources.cta')} <span className="text-lg">&rarr;</span>
              </Link>
            </div>
          </div>
          <div className="lg:col-span-5 scroll-reveal">
            <OrbitalText />
            <div className="text-center mt-8">
              <p className="text-xs text-[#888] uppercase tracking-wider">{t('resources.orbitalLabel')}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
