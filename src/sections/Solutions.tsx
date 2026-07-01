import { useRef, useCallback } from 'react'
import { useNavigate } from 'react-router-dom'
import gsap from 'gsap'
import { Container, HardHat, FileText } from 'lucide-react'

const slides = [
  {
    image: '/images/riverbank.jpg',
    title: 'Riverbank Protection',
    subtitle: 'Geo-Bag Revetment',
    description: 'BWDB-compliant riverbank protection systems using high-strength geotextile bags.',
  },
  {
    image: '/images/highway.jpg',
    title: 'Highway Stabilization',
    subtitle: 'Subgrade Reinforcement',
    description: 'Non-woven and woven geotextile solutions for RHD highway projects.',
  },
  {
    image: '/images/warehouse.jpg',
    title: 'Import & Supply',
    subtitle: 'Factory-Direct Sourcing',
    description: 'Direct sourcing from China and India with no middlemen markup.',
  },
  {
    image: '/images/soil.jpg',
    title: 'Slope Protection',
    subtitle: 'Bio-Engineering',
    description: 'Natural fiber and synthetic geotextile for erosion control.',
  },
  {
    image: '/images/port.jpg',
    title: 'Port & Marine',
    subtitle: 'Coastal Defense',
    description: 'Geotextile solutions for port infrastructure and coastal protection.',
  },
]

const services = [
  {
    icon: Container,
    title: 'Import & Supply',
    description: 'Direct factory sourcing from China, India, and global manufacturers. No middlemen. No markup.',
  },
  {
    icon: FileText,
    title: 'Technical Consultation',
    description: 'GSM selection, tensile strength analysis, permeability testing \u2014 we guide you to the right specification.',
  },
  {
    icon: HardHat,
    title: 'Project Support',
    description: 'From tender document review to site delivery coordination. We support your project end-to-end.',
  },
]

export default function Solutions() {
  const itemsRef = useRef<(HTMLDivElement | null)[]>([])
  const imagesRef = useRef<(HTMLImageElement | null)[]>([])
  const titlesRef = useRef<(HTMLDivElement | null)[]>([])
  const navigate = useNavigate()

  const handleMouseEnter = useCallback((index: number) => {
    itemsRef.current.forEach((el, i) => {
      if (!el) return
      if (i === index) {
        gsap.to(el, { flex: 3, duration: 0.6, ease: 'power2.out' })
      } else {
        gsap.to(el, { flex: 0.6, duration: 0.6, ease: 'power2.out' })
      }
    })

    imagesRef.current.forEach((img, i) => {
      if (!img) return
      gsap.to(img, {
        scale: i === index ? 1 : 1.5,
        duration: 0.6,
        ease: 'power2.out',
      })
    })

    titlesRef.current.forEach((title, i) => {
      if (!title) return
      gsap.to(title, {
        yPercent: i === index ? 0 : 100,
        opacity: i === index ? 1 : 0,
        duration: 0.5,
        ease: 'power2.out',
        delay: i === index ? 0.1 : 0,
      })
    })
  }, [])

  const handleMouseLeave = useCallback(() => {
    itemsRef.current.forEach((el) => {
      if (!el) return
      gsap.to(el, { flex: 1, duration: 0.6, ease: 'power2.out' })
    })

    imagesRef.current.forEach((img) => {
      if (!img) return
      gsap.to(img, { scale: 1.5, duration: 0.6, ease: 'power2.out' })
    })

    titlesRef.current.forEach((title) => {
      if (!title) return
      gsap.to(title, { yPercent: 100, opacity: 0, duration: 0.4, ease: 'power2.out' })
    })
  }, [])

  return (
    <section className="py-20 lg:py-32 bg-[#f1f0ee]">
      {/* Section Header */}
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10 mb-16">
        <div className="scroll-reveal">
          <div className="caption-label text-[#ff6600] mb-4">What We Do</div>
          <h2 className="section-title mb-4">Solutions</h2>
          <p className="text-lg text-[#333] max-w-2xl">
            From highway stabilization to riverbank protection, we deliver the right
            geotextile material for every infrastructure challenge in Bangladesh.
          </p>
        </div>
      </div>

      {/* Horizontal Accordion */}
      <div
        className="px-4 lg:px-10 mb-24"
        style={{ height: '70vh', minHeight: '450px' }}
      >
        <div
          className="flex h-full gap-[5px]"
          onMouseLeave={handleMouseLeave}
        >
          {slides.map((slide, index) => (
            <div
              key={index}
              ref={(el) => { itemsRef.current[index] = el }}
              className="relative flex-1 overflow-hidden cursor-pointer"
              onMouseEnter={() => handleMouseEnter(index)}
              onClick={() => navigate('/products')}
            >
              <img
                ref={(el) => { imagesRef.current[index] = el }}
                src={slide.image}
                alt={slide.title}
                className="absolute inset-0 w-full h-full object-cover"
                style={{ transform: 'scale(1.5)' }}
              />
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

              {/* Title */}
              <div
                ref={(el) => { titlesRef.current[index] = el }}
                className="absolute bottom-0 left-0 right-0 p-6 lg:p-8"
                style={{ transform: 'translateY(100%)', opacity: 0 }}
              >
                <div className="caption-label text-[#ff6600] mb-2">{slide.subtitle}</div>
                <h3 className="text-2xl lg:text-4xl font-light text-white mb-3">
                  {slide.title}
                </h3>
                <p className="text-sm text-white/70 max-w-sm">{slide.description}</p>
              </div>

              {/* Collapsed label */}
              <div className="absolute bottom-0 left-0 right-0 p-4 lg:p-6 pointer-events-none">
                <div className="writing-vertical">
                  <span className="text-white/80 text-sm font-medium tracking-wider uppercase whitespace-nowrap hidden lg:block"
                    style={{ writingMode: 'vertical-rl', textOrientation: 'mixed' }}>
                    {slide.title}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Services Grid */}
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <div
                key={index}
                className="scroll-reveal border border-black/10 p-8 lg:p-10 hover:border-[#ff6600]/30 transition-colors duration-300"
                style={{ transitionDelay: `${index * 0.15}s` }}
              >
                <div className="w-12 h-12 flex items-center justify-center border border-[#ff6600] mb-6">
                  <Icon size={24} className="text-[#ff6600]" />
                </div>
                <h3 className="text-xl font-medium text-black mb-3">
                  {service.title}
                </h3>
                <p className="text-sm text-[#333] leading-relaxed">
                  {service.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
