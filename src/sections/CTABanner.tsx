import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

export default function CTABanner() {
  const { t } = useTranslation()

  return (
    <section className="relative py-24 lg:py-32 overflow-hidden" style={{
      backgroundImage: 'url(/images/highway.jpg)', backgroundSize: 'cover', backgroundPosition: 'center'
    }}>
      <div className="absolute inset-0 bg-black/70" />
      <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-10 text-center">
        <div className="scroll-reveal">
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-light text-white mb-6"
            dangerouslySetInnerHTML={{ __html: t('ctaBanner.title').replace(/\n/g, '<br className="hidden md:block" />') }} />
          <p className="text-lg text-white/60 max-w-xl mx-auto mb-10">{t('ctaBanner.desc')}</p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="https://wa.me/+8201072091620" target="_blank" rel="noopener noreferrer" className="btn-primary">
              {t('ctaBanner.btn1')}
            </a>
            <Link to="/contact" className="btn-outline border-white text-white hover:bg-white hover:text-black">
              {t('ctaBanner.btn2')}
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
