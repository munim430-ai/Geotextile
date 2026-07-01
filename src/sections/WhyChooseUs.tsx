import { useTranslation } from 'react-i18next'
import { DollarSign, Award, Building2, ShieldCheck } from 'lucide-react'

export default function WhyChooseUs() {
  const { t } = useTranslation()

  const reasons = [
    { icon: DollarSign, title: t('whyUs.feature1.title'), desc: t('whyUs.feature1.desc') },
    { icon: Award, title: t('whyUs.feature2.title'), desc: t('whyUs.feature2.desc') },
    { icon: ShieldCheck, title: t('whyUs.feature3.title'), desc: t('whyUs.feature3.desc') },
    { icon: Building2, title: t('whyUs.feature4.title'), desc: t('whyUs.feature4.desc') },
  ]

  return (
    <section className="py-20 lg:py-32 bg-white">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
        <div className="text-center mb-16 scroll-reveal">
          <div className="caption-label text-[#ff6600] mb-4">{t('whyUs.label')}</div>
          <h2 className="section-title mb-4">{t('whyUs.title')}</h2>
          <p className="text-lg text-[#333] max-w-2xl mx-auto">{t('whyUs.description')}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {reasons.map((r, i) => (
            <div key={i} className="scroll-reveal flex items-start gap-6 p-8 border border-black/10 hover:border-[#ff6600]/30 transition-colors duration-300"
              style={{ transitionDelay: `${i * 0.1}s` }}>
              <div className="w-14 h-14 flex-shrink-0 flex items-center justify-center border border-[#ff6600]">
                <r.icon size={28} className="text-[#ff6600]" />
              </div>
              <div>
                <h3 className="text-xl font-medium text-black mb-2">{r.title}</h3>
                <p className="text-sm text-[#333] leading-relaxed">{r.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
