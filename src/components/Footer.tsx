import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { Mail, Phone, MapPin } from 'lucide-react'

export default function Footer() {
  const { t } = useTranslation()

  return (
    <footer className="bg-black text-white">
      <div className="border-b border-white/10">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10 py-20 lg:py-32">
          <h2 className="text-5xl md:text-7xl lg:text-8xl font-light leading-none tracking-tight mb-8">
            {t('footer.ctaTitle')}
          </h2>
          <p className="text-lg md:text-xl text-white/60 max-w-xl mb-10">
            {t('footer.ctaDesc')}
          </p>
          <div className="flex flex-wrap gap-4">
            <a href="https://wa.me/+8201072091620" target="_blank" rel="noopener noreferrer" className="btn-primary">
              {t('footer.ctaWhatsApp')}
            </a>
            <Link to="/contact" className="btn-outline border-white text-white hover:bg-white hover:text-black">
              {t('footer.ctaInquiry')}
            </Link>
          </div>
        </div>
      </div>

      <div className="max-w-[1400px] mx-auto px-6 lg:px-10 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div>
            <h3 className="caption-label text-white/40 mb-6">{t('footer.solutions')}</h3>
            <ul className="space-y-3">
              <li><Link to="/products" className="text-white/70 hover:text-[#ff6600] transition-colors text-sm">{t('footer.nonWoven')}</Link></li>
              <li><Link to="/products" className="text-white/70 hover:text-[#ff6600] transition-colors text-sm">{t('footer.woven')}</Link></li>
              <li><Link to="/products" className="text-white/70 hover:text-[#ff6600] transition-colors text-sm">{t('footer.geobags')}</Link></li>
              <li><Link to="/products" className="text-white/70 hover:text-[#ff6600] transition-colors text-sm">{t('footer.geocells')}</Link></li>
              <li><Link to="/products" className="text-white/70 hover:text-[#ff6600] transition-colors text-sm">{t('footer.natural')}</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="caption-label text-white/40 mb-6">{t('footer.company')}</h3>
            <ul className="space-y-3">
              <li><Link to="/about" className="text-white/70 hover:text-[#ff6600] transition-colors text-sm">{t('footer.aboutUs')}</Link></li>
              <li><Link to="/projects" className="text-white/70 hover:text-[#ff6600] transition-colors text-sm">{t('footer.projectsLink')}</Link></li>
              <li><Link to="/resources" className="text-white/70 hover:text-[#ff6600] transition-colors text-sm">{t('footer.resourcesLink')}</Link></li>
              <li><Link to="/contact" className="text-white/70 hover:text-[#ff6600] transition-colors text-sm">{t('footer.contactLink')}</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="caption-label text-white/40 mb-6">{t('footer.resources')}</h3>
            <ul className="space-y-3">
              <li><span className="text-white/70 text-sm cursor-default">{t('footer.techSheets')}</span></li>
              <li><span className="text-white/70 text-sm cursor-default">{t('footer.installGuides')}</span></li>
              <li><span className="text-white/70 text-sm cursor-default">{t('footer.specs')}</span></li>
              <li><span className="text-white/70 text-sm cursor-default">{t('footer.faqs')}</span></li>
            </ul>
          </div>
          <div>
            <h3 className="caption-label text-white/40 mb-6">{t('footer.contact')}</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Mail size={16} className="text-[#ff6600] mt-0.5" />
                <div><p className="text-white/70 text-sm">{t('footer.email')}</p></div>
              </div>
              <div className="flex items-start gap-3">
                <Phone size={16} className="text-[#ff6600] mt-0.5" />
                <div>
                  <p className="text-white/70 text-sm">{t('footer.phone')}</p>
                  <p className="text-white/40 text-xs mt-1">{t('footer.phoneNote')}</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <MapPin size={16} className="text-[#ff6600] mt-0.5" />
                <div>
                  <p className="text-white/70 text-sm">{t('footer.address')}</p>
                  <p className="text-white/40 text-xs mt-1">{t('footer.hours')}</p>
                </div>
              </div>
            </div>
            <div className="mt-6 p-4 bg-white/5 rounded">
              <p className="text-white/40 text-xs mb-2">{t('footer.wechat')}</p>
              <div className="w-20 h-20 bg-white/10 flex items-center justify-center rounded overflow-hidden">
                <img src="/images/wechat-qr.png" alt="WeChat QR Code" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10 py-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/40 text-xs">
            {t('footer.copyright').replace('{year}', String(new Date().getFullYear()))}
          </p>
          <div className="flex gap-6">
            <span className="text-white/40 text-xs cursor-default">{t('footer.privacy')}</span>
            <span className="text-white/40 text-xs cursor-default">{t('footer.terms')}</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
