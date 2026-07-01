import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { useScrollReveal } from '../hooks/useScrollReveal'

const productTabs = [
  {
    id: 'non-woven',
    label: 'Non-Woven Geotextiles',
    description: 'Needle-punched polypropylene/polyester fabrics for filtration, drainage, and separation.',
    pricing: 'Starting from Tk 15/sqm (FOB equivalent)',
    specs: [
      { gsm: '150', width: '2-6m', rollLength: '100m', tensile: '8 kN/m', application: 'Drainage, light separation' },
      { gsm: '200', width: '2-6m', rollLength: '100m', tensile: '12 kN/m', application: 'Road subgrade' },
      { gsm: '250', width: '2-6m', rollLength: '100m', tensile: '15 kN/m', application: 'Highway stabilization' },
      { gsm: '300', width: '2-6m', rollLength: '100m', tensile: '18 kN/m', application: 'Heavy-duty roads' },
      { gsm: '400', width: '2-6m', rollLength: '50m', tensile: '25 kN/m', application: 'Railway embankments' },
      { gsm: '500', width: '2-6m', rollLength: '50m', tensile: '30 kN/m', application: 'Landfill lining' },
      { gsm: '600', width: '2-6m', rollLength: '50m', tensile: '35 kN/m', application: 'Coastal protection' },
    ],
  },
  {
    id: 'woven',
    label: 'Woven Geotextiles',
    description: 'High-strength woven polypropylene/polyester for reinforcement and stabilization.',
    note: '100% imported. We source directly from China\'s top woven geotextile manufacturers.',
    specs: [
      { gsm: '200', tensileMD: '30 kN/m', tensileCD: '20 kN/m', application: 'Road reinforcement' },
      { gsm: '300', tensileMD: '50 kN/m', tensileCD: '35 kN/m', application: 'Soft soil stabilization' },
      { gsm: '400', tensileMD: '70 kN/m', tensileCD: '50 kN/m', application: 'Retaining walls' },
      { gsm: '500', tensileMD: '90 kN/m', tensileCD: '65 kN/m', application: 'Heavy load support' },
      { gsm: '600', tensileMD: '110 kN/m', tensileCD: '80 kN/m', application: 'Railway embankments' },
    ],
  },
  {
    id: 'geo-bags',
    label: 'Geo-Bags',
    description: 'Pre-formed geotextile bags for riverbank protection, coastal defense, and erosion control.',
    details: [
      'Sizes: 1m x 1m, 1.5m x 1.5m, 2m x 2m (custom sizes available)',
      'GSM: 150-400',
      'Fill material: Sand, soil, cement',
      'Applications: BWDB riverbank projects, coastal embankments',
    ],
  },
  {
    id: 'geocells',
    label: 'Geocells & Geomembranes',
    description: 'Advanced containment and load distribution systems.',
    details: [
      'Geocells: 3D honeycomb structure for slope protection, load support',
      'Geomembranes: HDPE/LLDPE liners for ponds, landfills, canals',
      'Applications: Landfill lining, pond sealing, canal lining',
    ],
  },
  {
    id: 'natural',
    label: 'Natural Fiber Geotextiles',
    description: 'Eco-friendly geotextile solutions for sustainable projects.',
    details: [
      'Jute Geotextile: 400-600 GSM, biodegradable, eco-friendly',
      'Coir Geotextile: 400-900 GSM, high durability, erosion control',
      'Applications: Slope stabilization, landscaping, eco-friendly projects',
      'Source: India (SAFTA advantage) or local Bangladesh jute',
    ],
  },
]

const services = [
  {
    title: 'GSM Selection Guide',
    description: 'Not sure which GSM you need? We provide free technical consultation based on your load requirements, soil type, and project duration.',
  },
  {
    title: 'Tender Document Review',
    description: 'We review your tender specifications to ensure you source the exact geotextile grade required \u2014 no over-specification, no under-specification.',
  },
  {
    title: 'Sample Provision',
    description: 'Free sample rolls available for testing before bulk order.',
  },
  {
    title: 'Lab Testing Coordination',
    description: 'We arrange third-party lab testing (BSTI, BUET) for quality verification.',
  },
]

export default function Products() {
  const [activeTab, setActiveTab] = useState('non-woven')
  const activeProduct = productTabs.find((t) => t.id === activeTab)

  useScrollReveal()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <main>
      {/* Hero */}
      <section className="pt-32 pb-20 bg-[#0f2e4a] text-white">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <div className="scroll-reveal">
            <div className="caption-label text-[#ff6600] mb-4">Products</div>
            <h1 className="hero-display text-white mb-6">
              Complete Geotextile<br />Product Range
            </h1>
            <p className="text-lg text-white/60 max-w-xl">
              From standard non-woven to specialized woven and natural fiber solutions.
              Every product sourced directly from certified manufacturers.
            </p>
          </div>
        </div>
      </section>

      {/* Product Tabs */}
      <section className="py-20 lg:py-32 bg-[#f1f0ee]">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          {/* Tab Navigation */}
          <div className="flex flex-wrap gap-2 mb-12 scroll-reveal border-b border-black/10 pb-4">
            {productTabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-5 py-3 text-sm font-medium uppercase tracking-wider transition-all duration-300 ${
                  activeTab === tab.id
                    ? 'bg-black text-white'
                    : 'bg-transparent text-black hover:bg-black/5'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          {activeProduct && (
            <div className="scroll-reveal">
              <div className="mb-8">
                <h2 className="text-2xl font-light text-black mb-3">
                  {activeProduct.label}
                </h2>
                <p className="text-[#333] mb-4">{activeProduct.description}</p>
                {activeProduct.pricing && (
                  <p className="text-sm text-[#ff6600] font-medium">
                    {activeProduct.pricing}
                  </p>
                )}
                {activeProduct.note && (
                  <p className="text-sm text-[#888] italic">{activeProduct.note}</p>
                )}
              </div>

              {/* Specs Table */}
              {activeProduct.specs && (
                <div className="overflow-x-auto mb-8">
                  <Table>
                    <TableHeader>
                      <TableRow className="border-black/10">
                        <TableHead className="text-xs uppercase tracking-wider font-medium text-[#888]">
                          GSM
                        </TableHead>
                        {activeTab === 'non-woven' ? (
                          <>
                            <TableHead className="text-xs uppercase tracking-wider font-medium text-[#888]">Width</TableHead>
                            <TableHead className="text-xs uppercase tracking-wider font-medium text-[#888]">Roll Length</TableHead>
                            <TableHead className="text-xs uppercase tracking-wider font-medium text-[#888]">Tensile Strength</TableHead>
                          </>
                        ) : (
                          <>
                            <TableHead className="text-xs uppercase tracking-wider font-medium text-[#888]">Tensile (MD)</TableHead>
                            <TableHead className="text-xs uppercase tracking-wider font-medium text-[#888]">Tensile (CD)</TableHead>
                          </>
                        )}
                        <TableHead className="text-xs uppercase tracking-wider font-medium text-[#888]">Application</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {activeProduct.specs.map((spec, i) => (
                        <TableRow key={i} className="border-black/5 hover:bg-white/50">
                          <TableCell className="font-medium">{spec.gsm}</TableCell>
                          {activeTab === 'non-woven' ? (
                            <>
                              <TableCell>{(spec as any).width}</TableCell>
                              <TableCell>{(spec as any).rollLength}</TableCell>
                              <TableCell>{(spec as any).tensile}</TableCell>
                            </>
                          ) : (
                            <>
                              <TableCell>{(spec as any).tensileMD}</TableCell>
                              <TableCell>{(spec as any).tensileCD}</TableCell>
                            </>
                          )}
                          <TableCell className="text-sm">{spec.application}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              )}

              {/* Details List */}
              {activeProduct.details && (
                <ul className="space-y-3 mb-8">
                  {activeProduct.details.map((detail, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 bg-[#ff6600] rounded-full mt-2 flex-shrink-0" />
                      <span className="text-[#333]">{detail}</span>
                    </li>
                  ))}
                </ul>
              )}

              <div className="flex gap-4">
                <Link to="/contact" className="btn-primary">
                  Request Custom Quote
                </Link>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Technical Services */}
      <section className="py-20 lg:py-32 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <div className="text-center mb-16 scroll-reveal">
            <div className="caption-label text-[#ff6600] mb-4">Support</div>
            <h2 className="section-title">Technical Services</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="scroll-reveal p-8 border border-black/10 hover:border-[#ff6600]/30 transition-all duration-300"
                style={{ transitionDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 flex-shrink-0 flex items-center justify-center border border-[#ff6600]">
                    <span className="text-[#ff6600] text-sm font-bold">0{index + 1}</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-black mb-2">
                      {service.title}
                    </h3>
                    <p className="text-sm text-[#333] leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#0f2e4a] text-white">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10 text-center scroll-reveal">
          <h2 className="text-3xl font-light mb-6">
            Not sure which product you need?
          </h2>
          <p className="text-white/60 mb-8 max-w-lg mx-auto">
            Our technical team can help you select the right geotextile for your project.
            Free consultation within 24 hours.
          </p>
          <Link to="/contact" className="btn-primary">
            Get Free Consultation
          </Link>
        </div>
      </section>
    </main>
  )
}
