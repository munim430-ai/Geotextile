import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useScrollReveal } from '../hooks/useScrollReveal'

const caseStudies = [
  {
    title: 'Highway Subgrade Stabilization',
    client: 'RHD Contractor',
    location: 'Dhaka-Mawa Highway Approach',
    product: '250 GSM Non-Woven PP Geotextile',
    quantity: '12,000 SQM',
    challenge: 'Soft soil subgrade with high water table',
    solution: 'Separation layer with 250g non-woven geotextile',
    result: '30% reduction in base course thickness, $15,000 cost savings',
    image: '/images/highway.jpg',
  },
  {
    title: 'Riverbank Protection',
    client: 'BWDB Contractor',
    location: 'Jamuna River, Gaibandha',
    product: 'Geo-Bags (300 GSM PP)',
    quantity: '5,000 units',
    challenge: 'Severe riverbank erosion during monsoon',
    solution: 'Geo-bag revetment with proper anchoring',
    result: 'Successful erosion control over 2 monsoon seasons',
    image: '/images/riverbank.jpg',
  },
  {
    title: 'Landfill Lining',
    client: 'Private Developer',
    location: 'Dhaka outskirts',
    product: '1.5mm HDPE Geomembrane + 400g Non-Woven Geotextile',
    quantity: '8,000 SQM',
    challenge: 'Leachate containment for municipal waste',
    solution: 'Composite lining system',
    result: 'Full environmental compliance',
    image: '/images/warehouse.jpg',
  },
]

const galleryImages = [
  { src: '/images/highway.jpg', caption: 'Highway Stabilization', category: 'Roads' },
  { src: '/images/riverbank.jpg', caption: 'Riverbank Protection', category: 'Riverbank' },
  { src: '/images/soil.jpg', caption: 'Soil Reinforcement', category: 'Agriculture' },
  { src: '/images/warehouse.jpg', caption: 'Material Supply', category: 'Logistics' },
  { src: '/images/port.jpg', caption: 'Port Delivery', category: 'Maritime' },
  { src: '/images/highway.jpg', caption: 'Road Subgrade', category: 'Roads' },
]

export default function Projects() {
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
            <div className="caption-label text-[#ff6600] mb-4">Portfolio</div>
            <h1 className="hero-display text-white mb-6">
              Projects That Prove<br />Our Expertise
            </h1>
            <p className="text-lg text-white/60 max-w-xl">
              Real projects, real results. See how we've helped contractors and
              developers across Bangladesh succeed.
            </p>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20 lg:py-32 bg-[#f1f0ee]">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <div className="mb-16 scroll-reveal">
            <div className="caption-label text-[#ff6600] mb-4">Case Studies</div>
            <h2 className="section-title">Featured Projects</h2>
          </div>

          <div className="space-y-16">
            {caseStudies.map((study, index) => (
              <div
                key={index}
                className="scroll-reveal grid grid-cols-1 lg:grid-cols-2 gap-10 items-center"
                style={{ transitionDelay: `${index * 0.1}s` }}
              >
                <div className={`${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                  <div className="relative overflow-hidden group">
                    <img
                      src={study.image}
                      alt={study.title}
                      className="w-full h-80 object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute top-4 left-4 bg-[#ff6600] text-white text-xs font-medium px-3 py-1 uppercase tracking-wider">
                      {'Case Study'}
                    </div>
                  </div>
                </div>
                <div className={`${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <h3 className="text-2xl font-light text-black mb-4">
                    {study.title}
                  </h3>
                  <div className="space-y-3 text-sm">
                    <div className="flex gap-4">
                      <span className="text-[#888] w-24 flex-shrink-0">Client</span>
                      <span className="text-[#333]">{study.client}</span>
                    </div>
                    <div className="flex gap-4">
                      <span className="text-[#888] w-24 flex-shrink-0">Location</span>
                      <span className="text-[#333]">{study.location}</span>
                    </div>
                    <div className="flex gap-4">
                      <span className="text-[#888] w-24 flex-shrink-0">Product</span>
                      <span className="text-[#333]">{study.product}</span>
                    </div>
                    <div className="flex gap-4">
                      <span className="text-[#888] w-24 flex-shrink-0">Quantity</span>
                      <span className="text-[#333]">{study.quantity}</span>
                    </div>
                    <div className="flex gap-4">
                      <span className="text-[#888] w-24 flex-shrink-0">Challenge</span>
                      <span className="text-[#333]">{study.challenge}</span>
                    </div>
                    <div className="flex gap-4">
                      <span className="text-[#888] w-24 flex-shrink-0">Solution</span>
                      <span className="text-[#333]">{study.solution}</span>
                    </div>
                    <div className="flex gap-4">
                      <span className="text-[#888] w-24 flex-shrink-0">Result</span>
                      <span className="text-[#0f2e4a] font-medium">{study.result}</span>
                    </div>
                  </div>

                  <div className="mt-6">
                    <Link
                      to="/contact"
                      className="text-sm font-medium text-[#ff6600] hover:underline inline-flex items-center gap-2"
                    >
                      Discuss a similar project
                      <span>&rarr;</span>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-20 lg:py-32 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <div className="mb-16 scroll-reveal">
            <div className="caption-label text-[#ff6600] mb-4">Gallery</div>
            <h2 className="section-title">Project Photos</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {galleryImages.map((img, index) => (
              <div
                key={index}
                className="scroll-reveal relative overflow-hidden group cursor-pointer"
                style={{ transitionDelay: `${index * 0.1}s` }}
              >
                <img
                  src={img.src}
                  alt={img.caption}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4">
                    <div className="text-xs text-[#ff6600] uppercase tracking-wider mb-1">
                      {img.category}
                    </div>
                    <div className="text-white font-medium">{img.caption}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#f1f0ee] border-t border-black/10">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10 text-center scroll-reveal">
          <h2 className="text-3xl font-light mb-6">
            Have a project in mind?
          </h2>
          <p className="text-[#333] mb-8 max-w-lg mx-auto">
            Let's discuss how we can help. Free technical consultation and
            project assessment.
          </p>
          <Link to="/contact" className="btn-primary">
            Start Your Project
          </Link>
        </div>
      </section>
    </main>
  )
}
