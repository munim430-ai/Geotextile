import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { Shield, Lightbulb, Clock, Handshake, Mail, Phone, MapPin } from 'lucide-react'
import { useScrollReveal } from '../hooks/useScrollReveal'

export default function About() {
  const { t } = useTranslation()
  useScrollReveal()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const values = [
    { icon: Shield, title: t('about.value1Title'), description: t('about.value1Desc') },
    { icon: Lightbulb, title: t('about.value2Title'), description: t('about.value2Desc') },
    { icon: Clock, title: t('about.value3Title'), description: t('about.value3Desc') },
    { icon: Handshake, title: t('about.value4Title'), description: t('about.value4Desc') },
  ]

  return (
    <main>
      <section className="relative min-h-[60vh] flex items-center" style={{ backgroundImage: 'url(/images/warehouse.jpg)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-10 py-32">
          <div className="scroll-reveal">
            <div className="caption-label text-[#ff6600] mb-4">{t('about.heroCaption')}</div>
            <h1 className="hero-display text-white mb-6">{t('about.heroTitle1')}<br />{t('about.heroTitle2')}</h1>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-32 bg-[#f1f0ee]">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="scroll-reveal">
              <div className="caption-label text-[#ff6600] mb-4">{t('about.storyCaption')}</div>
              <h2 className="section-title mb-6">{t('about.storyTitle')}</h2>
              <div className="space-y-4 text-[#333] leading-relaxed">
                <p>{t('about.storyP1')}</p>
                <p>{t('about.storyP2')}</p>
                <p>{t('about.storyP3')}</p>
              </div>
              <div className="mt-8 p-6 border-l-2 border-[#ff6600] bg-white">
                <h3 className="text-lg font-medium text-black mb-2">{t('about.missionTitle')}</h3>
                <p className="text-sm text-[#333] leading-relaxed">{t('about.missionText')}</p>
              </div>
            </div>
            <div className="scroll-reveal">
              <img src="/images/founder.jpg" alt="Hasibul Munim - Co-Founder" className="w-full h-auto" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-32 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <div className="text-center mb-16 scroll-reveal">
            <div className="caption-label text-[#ff6600] mb-4">{t('about.valuesCaption')}</div>
            <h2 className="section-title">{t('about.valuesTitle')}</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon
              return (
                <div key={index} className="scroll-reveal text-center p-8 border border-black/10 hover:border-[#ff6600]/30 transition-colors duration-300" style={{ transitionDelay: `${index * 0.1}s` }}>
                  <div className="w-14 h-14 mx-auto flex items-center justify-center border border-[#ff6600] mb-6">
                    <Icon size={28} className="text-[#ff6600]" />
                  </div>
                  <h3 className="text-lg font-medium text-black mb-3">{value.title}</h3>
                  <p className="text-sm text-[#333] leading-relaxed">{value.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-32 bg-[#0f2e4a] text-white">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            <div className="lg:col-span-4 scroll-reveal">
              <img src="/images/momo-eun.jpg" alt="Momo Eun - Co-Founder" className="w-full max-w-sm mx-auto" />
            </div>
            <div className="lg:col-span-8 scroll-reveal">
              <div className="caption-label text-[#ff6600] mb-4">{t('about.momoCaption')}</div>
              <h2 className="section-title text-white mb-2">{t('about.momoTitle')}</h2>
              <p className="text-lg text-white/60 mb-6">{t('about.momoRole')}</p>
              <div className="space-y-4 text-white/70 leading-relaxed max-w-2xl">
                <p>{t('about.momoBio1')}</p>
                <p>{t('about.momoBio2')}</p>
              </div>
              <div className="mt-8 flex flex-wrap gap-6">
                <div className="flex items-center gap-3"><Phone size={18} className="text-[#ff6600]" /><span className="text-sm text-white/70">+82 010-7209-1620</span></div>
                <div className="flex items-center gap-3"><MapPin size={18} className="text-[#ff6600]" /><span className="text-sm text-white/70">Seoul, South Korea</span></div>
              </div>
              <div className="mt-8">
                <a href="https://wa.me/+8201072091620" target="_blank" rel="noopener noreferrer" className="btn-primary">{t('contact.formChatButton')}</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-32 bg-[#f1f0ee]">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            <div className="lg:col-span-8 scroll-reveal">
              <div className="caption-label text-[#ff6600] mb-4">{t('about.munimCaption')}</div>
              <h2 className="section-title mb-2">{t('about.munimTitle')}</h2>
              <p className="text-lg text-[#888] mb-6">{t('about.munimRole')}</p>
              <div className="space-y-4 text-[#333] leading-relaxed max-w-2xl">
                <p>{t('about.munimBio1')}</p>
                <p>{t('about.munimBio2')}</p>
              </div>
              <div className="mt-8 flex flex-wrap gap-6">
                <div className="flex items-center gap-3"><Mail size={18} className="text-[#ff6600]" /><span className="text-sm text-[#333]">munimm247@gmail.com</span></div>
                <div className="flex items-center gap-3"><Phone size={18} className="text-[#ff6600]" /><span className="text-sm text-[#333]">+82 010-7209-1620</span></div>
                <div className="flex items-center gap-3"><MapPin size={18} className="text-[#ff6600]" /><span className="text-sm text-[#333]">Seoul, South Korea</span></div>
              </div>
              <div className="mt-8">
                <a href="https://wa.me/+8201072091620" target="_blank" rel="noopener noreferrer" className="btn-primary">{t('contact.formChatButton')}</a>
              </div>
            </div>
            <div className="lg:col-span-4 scroll-reveal">
              <img src="/images/founder.jpg" alt="Hasibul Munim - Co-Founder" className="w-full max-w-sm mx-auto" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-32 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <div className="text-center mb-16 scroll-reveal">
            <div className="caption-label text-[#ff6600] mb-4">{t('about.certCaption')}</div>
            <h2 className="section-title">{t('about.certTitle')}</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { code: t('about.cert1'), label: t('about.cert1Label') },
              { code: t('about.cert2'), label: t('about.cert2Label') },
              { code: t('about.cert3'), label: t('about.cert3Label') },
              { code: t('about.cert4'), label: t('about.cert4Label') },
            ].map((cert, index) => (
              <div key={index} className="scroll-reveal text-center p-8 border border-black/10 hover:border-[#ff6600]/50 transition-all duration-300 group" style={{ transitionDelay: `${index * 0.1}s` }}>
                <div className="text-2xl md:text-3xl font-light text-black group-hover:text-[#ff6600] transition-colors duration-300 mb-2">{cert.code}</div>
                <div className="text-xs uppercase tracking-wider text-[#888]">{cert.label}</div>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center scroll-reveal">
            <Link to="/contact" className="btn-outline">{t('about.partnerButton')}</Link>
          </div>
        </div>
      </section>
    </main>
  )
}
