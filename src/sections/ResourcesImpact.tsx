import { useRef, useEffect, useMemo } from 'react'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { Download, FileText, BookOpen, HelpCircle } from 'lucide-react'
import gsap from 'gsap'

const ICONS = [
  'M4 20h16v2H4z M6 20V10l6-4 6 4v10 M8 20v-6h3v6 M13 20v-6h3v6',
  'M12 15a3 3 0 100-6 3 3 0 000 6z M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-4 0v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83-2.83l.06-.06A1.65 1.65 0 004.68 15a1.65 1.65 0 00-1.51-1H3a2 2 0 010-4h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 012.83-2.83l.06.06A1.65 1.65 0 009 4.68a1.65 1.65 0 001-1.51V3a2 2 0 014 0v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 2.83l-.06.06A1.65 1.65 0 0019.42 9a1.65 1.65 0 001.51 1H21a2 2 0 010 4h-.09a1.65 1.65 0 00-1.51 1z',
  'M3 3h7v7H3z M14 3h7v7h-7z M14 14h7v7h-7z M3 14h7v7H3z',
  'M12 4c-4 0-8 1.5-8 4v8c0 2.5 4 4 8 4s8-1.5 8-4V8c0-2.5-4-4-8-4z M4 8c0 2.5 4 4 8 4s8-1.5 8-4 M4 12c0 2.5 4 4 8 4s8-1.5 8-4',
]

function FloatingIcon({ index }: { index: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const style = useMemo(() => {
    const row = Math.floor(index / 8)
    const col = index % 8
    return {
      left: `${col * 12.5 + Math.random() * 6}%`,
      top: `${row * 12.5 + Math.random() * 6}%`,
      animDuration: `${4 + Math.random() * 4}s`,
      animDelay: `${Math.random() * -8}s`,
      iconPath: ICONS[index % ICONS.length],
    }
  }, [index])

  useEffect(() => {
    if (!ref.current) return
    gsap.fromTo(ref.current, { opacity: 0, scale: 0.5 },
      { opacity: 0.3 + Math.random() * 0.4, scale: 1, duration: 1, delay: Math.random() * 2, ease: 'power2.out' })
  }, [])

  return (
    <div ref={ref} className="absolute" style={{ left: style.left, top: style.top, animation: `floatUp ${style.animDuration} ease-in-out ${style.animDelay} infinite alternate` }}>
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className="w-8 h-8 md:w-12 md:h-12 text-white/30">
        <path d={style.iconPath} />
      </svg>
    </div>
  )
}

export default function ResourcesImpact() {
  const { t } = useTranslation()
  const icons = useMemo(() => Array.from({ length: 48 }, (_, i) => i), [])

  return (
    <section className="relative min-h-screen bg-[#0f2e4a] overflow-hidden">
      <div className="absolute inset-0" style={{ perspective: '3000px', transform: 'rotateX(60deg) rotateZ(-45deg)', transformStyle: 'preserve-3d' }}>
        <div className="relative w-full h-full">
          {icons.map((i) => <FloatingIcon key={i} index={i} />)}
        </div>
      </div>
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-6 py-32">
        <div className="text-center max-w-4xl mx-auto">
          <div className="caption-label text-[#ff6600] mb-6">{t('resources.label')}</div>
          <h2 className="section-title text-white mb-8">{t('resources.title')}</h2>
          <p className="text-lg md:text-xl text-white/60 max-w-2xl mx-auto mb-16">{t('resources.description')}</p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
            {[
              { gsm: '150', use: t('resources.gsm150.use'), price: t('resources.gsm150.price') },
              { gsm: '200', use: t('resources.gsm200.use'), price: t('resources.gsm200.price') },
              { gsm: '250', use: t('resources.gsm250.use'), price: t('resources.gsm250.price') },
              { gsm: '300', use: t('resources.gsm300.use'), price: t('resources.gsm300.price') },
            ].map((g, i) => (
              <div key={i} className="bg-white/5 backdrop-blur-sm border border-white/10 p-4 hover:border-[#ff6600]/50 transition-colors duration-300">
                <div className="text-2xl font-light text-[#ff6600] mb-1">{g.gsm} <span className="text-sm">GSM</span></div>
                <div className="text-xs text-white/60 mb-1">{g.use}</div>
                <div className="text-xs text-white/40">{g.price}</div>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap justify-center gap-4 mb-16">
            {[
              { icon: FileText, label: t('resourcesPage.guideTitle') },
              { icon: BookOpen, label: t('resourcesPage.specTitle') },
              { icon: Download, label: t('resourcesPage.costTitle') },
              { icon: HelpCircle, label: t('resourcesPage.installTitle') },
            ].map((d, i) => (
              <button key={i} className="flex items-center gap-2 px-4 py-3 border border-white/20 text-white/70 hover:border-[#ff6600] hover:text-[#ff6600] transition-colors duration-300">
                <d.icon size={16} />
                <span className="text-xs uppercase tracking-wider">{d.label}</span>
              </button>
            ))}
          </div>

          <Link to="/contact" className="btn-primary">{t('resources.ctaButton')}</Link>
        </div>
      </div>
      <style>{`@keyframes floatUp { 0% { transform: translateZ(0) translateY(0); } 100% { transform: translateZ(100px) translateY(-30px); } }`}</style>
    </section>
  )
}
