import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

export default function CTABanner() {
  const { t } = useTranslation()

  return (
    <section className="py-20 lg:py-32 bg-[#f1f0ee]">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
        <div className="scroll-reveal text-center">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-light leading-tight mb-6 whitespace-pre-line">
            {t('ctaBanner.title')}
          </h2>
          <p className="text-lg text-[#333] max-w-2xl mx-auto mb-10">
            {t('ctaBanner.description')}
          </p>
          <Link to="/contact" className="btn-primary">
            {t('ctaBanner.button')}
          </Link>
        </div>
      </div>
    </section>
  )
}
