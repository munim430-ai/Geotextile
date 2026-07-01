import { useTranslation } from 'react-i18next'
import { DollarSign, Award, ShieldCheck, Clock, HeadphonesIcon } from 'lucide-react'

export default function WhyChooseUs() {
  const { t } = useTranslation()
  const reasons = [
    { icon: DollarSign, title: t('whyUs.reasons.0.title'), desc: t('whyUs.reasons.0.desc') },
    { icon: Award, title: t('whyUs.reasons.1.title'), desc: t('whyUs.reasons.1.desc') },
    { icon: ShieldCheck, title: t('whyUs.reasons.3.title'), desc: t('whyUs.reasons.3.desc') },
    { icon: Clock, title: t('whyUs.reasons.4.title'), desc: t('whyUs.reasons.4.desc') },
    { icon: HeadphonesIcon, title: t('whyUs.reasons.5.title'), desc: t('whyUs.reasons.5.desc') },
  ]

  return (
    <section className="py-20 lg:py-32 bg-white">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
        <div className="text-center mb-16 scroll-reveal">
          <div className="caption-label text-[#ff6600] mb-4">{t('whyUs.label')}</div>
          <h2 className="section-title mb-4">{t('whyUs.title')}</h2>
          <p className="text-lg text-[#333] max-w-2xl mx-auto">{t('whyUs.description')}</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-black/10">
          {reasons.map((r, i) => (
            <div key={i} className="scroll-reveal bg-white p-8 lg:p-10 group hover:bg-[#0f2e4a] transition-colors duration-500"
              style={{ transitionDelay: `${i * 0.1}s` }}>
              <div className="w-12 h-12 flex items-center justify-center border border-[#ff6600] mb-6 group-hover:bg-[#ff6600] transition-colors duration-500">
                <r.icon size={24} className="text-[#ff6600] group-hover:text-white transition-colors duration-500" />
              </div>
              <h3 className="text-lg font-medium text-black group-hover:text-white mb-3 transition-colors duration-500">{r.title}</h3>
              <p className="text-sm text-[#333] group-hover:text-white/70 leading-relaxed transition-colors duration-500">{r.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
