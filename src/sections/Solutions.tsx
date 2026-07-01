import { useRef, useCallback } from 'react'
import { useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import gsap from 'gsap'
import { Container, HardHat, FileText } from 'lucide-react'

const slides = [
  { image: '/images/riverbank.jpg', key: 'slide1' },
  { image: '/images/highway.jpg', key: 'slide2' },
  { image: '/images/warehouse.jpg', key: 'slide3' },
  { image: '/images/soil.jpg', key: 'slide4' },
  { image: '/images/port.jpg', key: 'slide5' },
]

export default function Solutions() {
  const { t } = useTranslation()
  const itemsRef = useRef<(HTMLDivElement | null)[]>([])
  const imagesRef = useRef<(HTMLImageElement | null)[]>([])
  const titlesRef = useRef<(HTMLDivElement | null)[]>([])
  const navigate = useNavigate()

  const handleMouseEnter = useCallback((index: number) => {
    itemsRef.current.forEach((el, i) => { if (el) gsap.to(el, { flex: i === index ? 3 : 0.6, duration: 0.6, ease: 'power2.out' }) })
    imagesRef.current.forEach((img, i) => { if (img) gsap.to(img, { scale: i === index ? 1 : 1.5, duration: 0.6, ease: 'power2.out' }) })
    titlesRef.current.forEach((title, i) => { if (title) gsap.to(title, { yPercent: i === index ? 0 : 100, opacity: i === index ? 1 : 0, duration: 0.5, ease: 'power2.out', delay: i === index ? 0.1 : 0 }) })
  }, [])

  const handleMouseLeave = useCallback(() => {
    itemsRef.current.forEach((el) => { if (el) gsap.to(el, { flex: 1, duration: 0.6, ease: 'power2.out' }) })
    imagesRef.current.forEach((img) => { if (img) gsap.to(img, { scale: 1.5, duration: 0.6, ease: 'power2.out' }) })
    titlesRef.current.forEach((title) => { if (title) gsap.to(title, { yPercent: 100, opacity: 0, duration: 0.4, ease: 'power2.out' }) })
  }, [])

  const services = [
    { icon: Container, title: t('solutions.service1.title'), desc: t('solutions.service1.desc') },
    { icon: HardHat, title: t('solutions.service2.title'), desc: t('solutions.service2.desc') },
    { icon: FileText, title: t('solutions.service3.title'), desc: t('solutions.service3.desc') },
  ]

  return (
    <section className="py-20 lg:py-32 bg-[#f1f0ee]">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10 mb-16">
        <div className="scroll-reveal">
          <div className="caption-label text-[#ff6600] mb-4">{t('solutions.label')}</div>
          <h2 className="section-title mb-4">{t('solutions.title')}</h2>
          <p className="text-lg text-[#333] max-w-2xl">{t('solutions.description')}</p>
        </div>
      </div>

      <div className="px-4 lg:px-10 mb-24" style={{ height: '70vh', minHeight: '450px' }}>
        <div className="flex h-full gap-[5px]" onMouseLeave={handleMouseLeave}>
          {slides.map((slide, index) => {
            const slideT = t(`solutions.${slide.key}`, { returnObjects: true }) as any
            return (
              <div key={index} ref={(el) => { itemsRef.current[index] = el }} className="relative flex-1 overflow-hidden cursor-pointer"
                onMouseEnter={() => handleMouseEnter(index)} onClick={() => navigate('/products')}>
                <img ref={(el) => { imagesRef.current[index] = el }} src={slide.image} alt={slideT?.title || ''}
                  className="absolute inset-0 w-full h-full object-cover" style={{ transform: 'scale(1.5)' }} />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                <div ref={(el) => { titlesRef.current[index] = el }} className="absolute bottom-0 left-0 right-0 p-6 lg:p-8"
                  style={{ transform: 'translateY(100%)', opacity: 0 }}>
                  <div className="caption-label text-[#ff6600] mb-2">{slideT?.subtitle}</div>
                  <h3 className="text-2xl lg:text-4xl font-light text-white mb-3">{slideT?.title}</h3>
                  <p className="text-sm text-white/70 max-w-sm">{slideT?.desc}</p>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-4 lg:p-6 pointer-events-none">
                  <span className="text-white/80 text-sm font-medium tracking-wider uppercase whitespace-nowrap hidden lg:block"
                    style={{ writingMode: 'vertical-rl', textOrientation: 'mixed' }}>{slideT?.title}</span>
                </div>
              </div>
            )
          })}
        </div>
      </div>

      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((s, i) => (
            <div key={i} className="scroll-reveal border border-black/10 p-8 lg:p-10 hover:border-[#ff6600]/30 transition-colors duration-300"
              style={{ transitionDelay: `${i * 0.15}s` }}>
              <div className="w-12 h-12 flex items-center justify-center border border-[#ff6600] mb-6">
                <s.icon size={24} className="text-[#ff6600]" />
              </div>
              <h3 className="text-xl font-medium text-black mb-3">{s.title}</h3>
              <p className="text-sm text-[#333] leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
