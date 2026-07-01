import { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { Mail, Phone, MapPin, Clock, MessageCircle, Send } from 'lucide-react'
import { useScrollReveal } from '../hooks/useScrollReveal'

export default function Contact() {
  const { t } = useTranslation()
  const [formData, setFormData] = useState({
    fullName: '', companyName: '', email: '', phone: '',
    projectType: '', productInterest: '', estimatedQuantity: '',
    requiredGsm: '', timeline: '', message: '',
  })
  const [submitted, setSubmitted] = useState(false)
  useScrollReveal()

  useEffect(() => { window.scrollTo(0, 0) }, [])

  const handleSubmit = (e: React.FormEvent) => { e.preventDefault(); setSubmitted(true) }
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const projectTypes = [
    { value: 'road', label: t('contact.projectRoad') },
    { value: 'riverbank', label: t('contact.projectRiver') },
    { value: 'landfill', label: t('contact.projectLandfill') },
    { value: 'agriculture', label: t('contact.projectAgriculture') },
    { value: 'other', label: t('contact.projectOther') },
  ]
  const timelines = [
    { value: 'immediate', label: t('contact.timelineImmediate') },
    { value: '1-3', label: t('contact.timeline1to3') },
    { value: '3-6', label: t('contact.timeline3to6') },
    { value: '6+', label: t('contact.timeline6plus') },
  ]

  return (
    <main>
      <section className="pt-32 pb-20 bg-[#0f2e4a] text-white">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <div className="scroll-reveal">
            <div className="caption-label text-[#ff6600] mb-4">{t('contact.heroCaption')}</div>
            <h1 className="hero-display text-white mb-6">{t('contact.heroTitle1')}<br />{t('contact.heroTitle2')}</h1>
            <p className="text-lg text-white/60 max-w-xl">{t('contact.heroDesc')}</p>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-32 bg-[#f1f0ee]">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            <div className="lg:col-span-4">
              <div className="scroll-reveal space-y-8">
                <div>
                  <h2 className="text-2xl font-light text-black mb-2">{t('contact.infoName')}</h2>
                  <p className="text-sm text-[#888]">{t('contact.infoRole')}</p>
                </div>
                <div className="space-y-5">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 flex items-center justify-center border border-[#ff6600]"><Mail size={18} className="text-[#ff6600]" /></div>
                    <div><div className="text-xs uppercase tracking-wider text-[#888] mb-1">{t('contact.emailLabel')}</div><a href="mailto:munimm247@gmail.com" className="text-sm text-black hover:text-[#ff6600] transition-colors">munimm247@gmail.com</a></div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 flex items-center justify-center border border-[#ff6600]"><Phone size={18} className="text-[#ff6600]" /></div>
                    <div><div className="text-xs uppercase tracking-wider text-[#888] mb-1">{t('contact.phoneLabel')}</div><a href="https://wa.me/+8201072091620" target="_blank" rel="noopener noreferrer" className="text-sm text-black hover:text-[#ff6600] transition-colors">{t('contact.phoneValue')}</a></div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 flex items-center justify-center border border-[#ff6600]"><MessageCircle size={18} className="text-[#ff6600]" /></div>
                    <div><div className="text-xs uppercase tracking-wider text-[#888] mb-1">{t('contact.wechatLabel')}</div><span className="text-sm text-black">{t('contact.wechatValue')}</span></div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 flex items-center justify-center border border-[#ff6600]"><MapPin size={18} className="text-[#ff6600]" /></div>
                    <div><div className="text-xs uppercase tracking-wider text-[#888] mb-1">{t('contact.officeLabel')}</div><span className="text-sm text-black">{t('contact.officeValue')}</span></div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 flex items-center justify-center border border-[#ff6600]"><Clock size={18} className="text-[#ff6600]" /></div>
                    <div><div className="text-xs uppercase tracking-wider text-[#888] mb-1">{t('contact.hoursLabel')}</div><span className="text-sm text-black">{t('contact.hoursValue')}</span></div>
                  </div>
                </div>
                <div className="p-4 border border-black/10 bg-white">
                  <div className="text-xs uppercase tracking-wider text-[#888] mb-3">{t('contact.qrCaption')}</div>
                  <div className="w-32 h-32 bg-[#f1f0ee] flex items-center justify-center overflow-hidden">
                    <img src="/images/wechat-qr.png" alt="WeChat QR Code" className="w-full h-full object-cover" />
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-8">
              <div className="scroll-reveal bg-white border border-black/10 p-8 lg:p-12">
                {submitted ? (
                  <div className="text-center py-16">
                    <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center border-2 border-[#ff6600]"><Send size={28} className="text-[#ff6600]" /></div>
                    <h3 className="text-2xl font-light text-black mb-4">{t('contact.formSubmittedTitle')}</h3>
                    <p className="text-[#333] mb-6">{t('contact.formSubmittedDesc')}</p>
                    <a href="https://wa.me/+8201072091620" target="_blank" rel="noopener noreferrer" className="btn-primary">{t('contact.formChatButton')}</a>
                  </div>
                ) : (
                  <>
                    <h3 className="text-xl font-medium text-black mb-2">{t('contact.formTitle')}</h3>
                    <p className="text-sm text-[#888] mb-8">{t('contact.formDesc')}</p>
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div><label className="block text-xs uppercase tracking-wider text-[#888] mb-2">{t('contact.fullName')} <span className="text-[#ff6600]">*</span></label><input type="text" name="fullName" required value={formData.fullName} onChange={handleChange} className="w-full px-4 py-3 border border-black/10 focus:border-[#ff6600] outline-none text-sm transition-colors" /></div>
                        <div><label className="block text-xs uppercase tracking-wider text-[#888] mb-2">{t('contact.companyName')} <span className="text-[#ff6600]">*</span></label><input type="text" name="companyName" required value={formData.companyName} onChange={handleChange} className="w-full px-4 py-3 border border-black/10 focus:border-[#ff6600] outline-none text-sm transition-colors" /></div>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div><label className="block text-xs uppercase tracking-wider text-[#888] mb-2">{t('contact.email')} <span className="text-[#ff6600]">*</span></label><input type="email" name="email" required value={formData.email} onChange={handleChange} className="w-full px-4 py-3 border border-black/10 focus:border-[#ff6600] outline-none text-sm transition-colors" /></div>
                        <div><label className="block text-xs uppercase tracking-wider text-[#888] mb-2">{t('contact.phone')} <span className="text-[#ff6600]">*</span></label><input type="tel" name="phone" required value={formData.phone} onChange={handleChange} className="w-full px-4 py-3 border border-black/10 focus:border-[#ff6600] outline-none text-sm transition-colors" /></div>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div><label className="block text-xs uppercase tracking-wider text-[#888] mb-2">{t('contact.projectType')}</label><select name="projectType" value={formData.projectType} onChange={handleChange} className="w-full px-4 py-3 border border-black/10 focus:border-[#ff6600] outline-none text-sm transition-colors bg-white"><option value="">{t('contact.projectType')}</option>{projectTypes.map((type) => (<option key={type.value} value={type.value}>{type.label}</option>))}</select></div>
                        <div><label className="block text-xs uppercase tracking-wider text-[#888] mb-2">{t('contact.productInterest')}</label><select name="productInterest" value={formData.productInterest} onChange={handleChange} className="w-full px-4 py-3 border border-black/10 focus:border-[#ff6600] outline-none text-sm transition-colors bg-white"><option value="">{t('contact.productInterest')}</option><option value="non-woven">Non-Woven</option><option value="woven">Woven</option><option value="geo-bags">Geo-Bags</option><option value="geocells">Geocells</option><option value="geomembrane">Geomembrane</option><option value="natural">Natural Fiber</option></select></div>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div><label className="block text-xs uppercase tracking-wider text-[#888] mb-2">{t('contact.quantity')}</label><input type="text" name="estimatedQuantity" placeholder="e.g., 5000 SQM" value={formData.estimatedQuantity} onChange={handleChange} className="w-full px-4 py-3 border border-black/10 focus:border-[#ff6600] outline-none text-sm transition-colors" /></div>
                        <div><label className="block text-xs uppercase tracking-wider text-[#888] mb-2">{t('contact.gsm')}</label><input type="text" name="requiredGsm" placeholder="e.g., 250" value={formData.requiredGsm} onChange={handleChange} className="w-full px-4 py-3 border border-black/10 focus:border-[#ff6600] outline-none text-sm transition-colors" /></div>
                        <div><label className="block text-xs uppercase tracking-wider text-[#888] mb-2">{t('contact.timeline')}</label><select name="timeline" value={formData.timeline} onChange={handleChange} className="w-full px-4 py-3 border border-black/10 focus:border-[#ff6600] outline-none text-sm transition-colors bg-white"><option value="">{t('contact.timeline')}</option>{timelines.map((t) => (<option key={t.value} value={t.value}>{t.label}</option>))}</select></div>
                      </div>
                      <div><label className="block text-xs uppercase tracking-wider text-[#888] mb-2">{t('contact.message')}</label><textarea name="message" rows={5} placeholder="Tell us about your project..." value={formData.message} onChange={handleChange} className="w-full px-4 py-3 border border-black/10 focus:border-[#ff6600] outline-none text-sm transition-colors resize-none" /></div>
                      <button type="submit" className="btn-primary w-full md:w-auto">{t('contact.submitButton')}</button>
                    </form>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
