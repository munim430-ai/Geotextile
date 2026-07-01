import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { useScrollReveal } from '../hooks/useScrollReveal'

const productTabsData = [
  { id: 'non-woven', labelKey: 'tabNonWoven' },
  { id: 'woven', labelKey: 'tabWoven' },
  { id: 'geo-bags', labelKey: 'tabGeobags' },
  { id: 'geocells', labelKey: 'tabGeocells' },
  { id: 'natural', labelKey: 'tabNatural' },
]

const nonWovenSpecs = [
  { gsm: '150', width: '2-6m', rollLength: '100m', tensile: '8 kN/m', application: 'Drainage, light separation' },
  { gsm: '200', width: '2-6m', rollLength: '100m', tensile: '12 kN/m', application: 'Road subgrade' },
  { gsm: '250', width: '2-6m', rollLength: '100m', tensile: '15 kN/m', application: 'Highway stabilization' },
  { gsm: '300', width: '2-6m', rollLength: '100m', tensile: '18 kN/m', application: 'Heavy-duty roads' },
  { gsm: '400', width: '2-6m', rollLength: '50m', tensile: '25 kN/m', application: 'Railway embankments' },
  { gsm: '500', width: '2-6m', rollLength: '50m', tensile: '30 kN/m', application: 'Landfill lining' },
  { gsm: '600', width: '2-6m', rollLength: '50m', tensile: '35 kN/m', application: 'Coastal protection' },
]

const wovenSpecs = [
  { gsm: '200', tensileMD: '30 kN/m', tensileCD: '20 kN/m', application: 'Road reinforcement' },
  { gsm: '300', tensileMD: '50 kN/m', tensileCD: '35 kN/m', application: 'Soft soil stabilization' },
  { gsm: '400', tensileMD: '70 kN/m', tensileCD: '50 kN/m', application: 'Retaining walls' },
  { gsm: '500', tensileMD: '90 kN/m', tensileCD: '65 kN/m', application: 'Heavy load support' },
  { gsm: '600', tensileMD: '110 kN/m', tensileCD: '80 kN/m', application: 'Railway embankments' },
]

const geoBagsDetails = [
  'Sizes: 1m x 1m, 1.5m x 1.5m, 2m x 2m (custom sizes available)',
  'GSM: 150-400',
  'Fill material: Sand, soil, cement',
  'Applications: Riverbank projects, coastal embankments',
]

const geocellsDetails = [
  'Geocells: 3D honeycomb structure for slope protection, load support',
  'Geomembranes: HDPE/LLDPE liners for ponds, landfills, canals',
  'Applications: Landfill lining, pond sealing, canal lining',
]

const naturalDetails = [
  'Jute Geotextile: 400-600 GSM, biodegradable, eco-friendly',
  'Coir Geotextile: 400-900 GSM, high durability, erosion control',
  'Applications: Slope stabilization, landscaping, eco-friendly projects',
  'Source: India (direct import) or certified suppliers',
]

export default function Products() {
  const { t } = useTranslation()
  const [activeTab, setActiveTab] = useState('non-woven')
  useScrollReveal()

  useEffect(() => { window.scrollTo(0, 0) }, [])

  const productTabs = productTabsData.map((tab) => ({ ...tab, label: t(`products.${tab.labelKey}`) }))
  const activeProduct = productTabs.find((t) => t.id === activeTab)

  const services = [
    { title: t('products.service1Title'), description: t('products.service1Desc') },
    { title: t('products.service2Title'), description: t('products.service2Desc') },
    { title: t('products.service3Title'), description: t('products.service3Desc') },
    { title: 'Lab Testing Coordination', description: 'We arrange ISO-certified lab testing for quality verification.' },
  ]

  const renderDetails = () => {
    switch (activeTab) { case 'geo-bags': return geoBagsDetails; case 'geocells': return geocellsDetails; case 'natural': return naturalDetails; default: return null }
  }
  const renderSpecs = () => {
    if (activeTab === 'non-woven') return nonWovenSpecs
    if (activeTab === 'woven') return wovenSpecs
    return null
  }

  const details = renderDetails()
  const specs = renderSpecs()

  const getDescKey = () => {
    switch (activeTab) { case 'geo-bags': return 'geobagsDesc'; case 'geocells': return 'geocellsDesc'; case 'natural': return 'naturalDesc'; case 'woven': return 'wovenDesc'; default: return 'nonWovenDesc' }
  }

  return (
    <main>
      <section className="pt-32 pb-20 bg-[#0f2e4a] text-white">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <div className="scroll-reveal">
            <div className="caption-label text-[#ff6600] mb-4">{t('products.heroCaption')}</div>
            <h1 className="hero-display text-white mb-6">{t('products.heroTitle1')}<br />{t('products.heroTitle2')}</h1>
            <p className="text-lg text-white/60 max-w-xl">{t('products.heroDesc')}</p>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-32 bg-[#f1f0ee]">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <div className="flex flex-wrap gap-2 mb-12 scroll-reveal border-b border-black/10 pb-4">
            {productTabs.map((tab) => (
              <button key={tab.id} onClick={() => setActiveTab(tab.id)} className={`px-5 py-3 text-sm font-medium uppercase tracking-wider transition-all duration-300 ${activeTab === tab.id ? 'bg-black text-white' : 'bg-transparent text-black hover:bg-black/5'}`}>{tab.label}</button>
            ))}
          </div>

          {activeProduct && (
            <div className="scroll-reveal">
              <div className="mb-8">
                <h2 className="text-2xl font-light text-black mb-3">{activeProduct.label}</h2>
                <p className="text-[#333] mb-4">{t(`products.${getDescKey()}`)}</p>
                {activeTab === 'non-woven' && <p className="text-sm text-[#ff6600] font-medium">{t('products.nonWovenPricing')}</p>}
                {activeTab === 'woven' && <p className="text-sm text-[#888] italic">{t('products.wovenNote')}</p>}
              </div>

              {specs && (
                <div className="overflow-x-auto mb-8">
                  <Table>
                    <TableHeader>
                      <TableRow className="border-black/10">
                        <TableHead className="text-xs uppercase tracking-wider font-medium text-[#888]">{t('products.specGsm')}</TableHead>
                        {activeTab === 'non-woven' ? (<><TableHead className="text-xs uppercase tracking-wider font-medium text-[#888]">{t('products.specWidth')}</TableHead><TableHead className="text-xs uppercase tracking-wider font-medium text-[#888]">{t('products.specLength')}</TableHead><TableHead className="text-xs uppercase tracking-wider font-medium text-[#888]">{t('products.specTensile')}</TableHead></>) : (<><TableHead className="text-xs uppercase tracking-wider font-medium text-[#888]">{t('products.specTensileMD')}</TableHead><TableHead className="text-xs uppercase tracking-wider font-medium text-[#888]">{t('products.specTensileCD')}</TableHead></>)}
                        <TableHead className="text-xs uppercase tracking-wider font-medium text-[#888]">{t('products.specApplication')}</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {specs.map((spec, i) => (
                        <TableRow key={i} className="border-black/5 hover:bg-white/50">
                          <TableCell className="font-medium">{spec.gsm}</TableCell>
                          {activeTab === 'non-woven' ? (<><TableCell>{(spec as any).width}</TableCell><TableCell>{(spec as any).rollLength}</TableCell><TableCell>{(spec as any).tensile}</TableCell></>) : (<><TableCell>{(spec as any).tensileMD}</TableCell><TableCell>{(spec as any).tensileCD}</TableCell></>)}
                          <TableCell className="text-sm">{spec.application}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              )}

              {details && (
                <ul className="space-y-3 mb-8">
                  {details.map((detail, i) => (<li key={i} className="flex items-start gap-3"><span className="w-1.5 h-1.5 bg-[#ff6600] rounded-full mt-2 flex-shrink-0" /><span className="text-[#333]">{detail}</span></li>))}
                </ul>
              )}

              <div className="flex gap-4">
                <Link to="/contact" className="btn-primary">{t('products.quoteButton')}</Link>
              </div>
            </div>
          )}
        </div>
      </section>

      <section className="py-20 lg:py-32 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <div className="text-center mb-16 scroll-reveal">
            <div className="caption-label text-[#ff6600] mb-4">{t('products.servicesCaption')}</div>
            <h2 className="section-title">{t('products.servicesTitle')}</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div key={index} className="scroll-reveal p-8 border border-black/10 hover:border-[#ff6600]/30 transition-all duration-300" style={{ transitionDelay: `${index * 0.1}s` }}>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 flex-shrink-0 flex items-center justify-center border border-[#ff6600]"><span className="text-[#ff6600] text-sm font-bold">0{index + 1}</span></div>
                  <div><h3 className="text-lg font-medium text-black mb-2">{service.title}</h3><p className="text-sm text-[#333] leading-relaxed">{service.description}</p></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#0f2e4a] text-white">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10 text-center scroll-reveal">
          <h2 className="text-3xl font-light mb-6">{t('products.ctaTitle')}</h2>
          <p className="text-white/60 mb-8 max-w-lg mx-auto">{t('products.ctaDesc')}</p>
          <Link to="/contact" className="btn-primary">{t('contact.formChatButton')}</Link>
        </div>
      </section>
    </main>
  )
}
