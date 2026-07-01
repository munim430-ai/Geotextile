import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Shield, Lightbulb, Clock, Handshake, Mail, Phone, MapPin } from 'lucide-react'
import { useScrollReveal } from '../hooks/useScrollReveal'

const values = [
  {
    icon: Shield,
    title: 'Integrity',
    description: 'Transparent pricing, honest specifications. No hidden costs, no compromises.',
  },
  {
    icon: Lightbulb,
    title: 'Expertise',
    description: 'Technical knowledge that saves projects. We understand every GSM rating.',
  },
  {
    icon: Clock,
    title: 'Reliability',
    description: 'On-time delivery, every time. 15-30 days from order to Bangladesh port.',
  },
  {
    icon: Handshake,
    title: 'Partnership',
    description: 'Long-term relationships, not one-off transactions. Your success is our success.',
  },
]

export default function About() {
  useScrollReveal()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <main>
      {/* Hero */}
      <section
        className="relative min-h-[60vh] flex items-center"
        style={{
          backgroundImage: 'url(/images/warehouse.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-10 py-32">
          <div className="scroll-reveal">
            <div className="caption-label text-[#ff6600] mb-4">About Us</div>
            <h1 className="hero-display text-white mb-6">
              Building Bangladesh's<br />
              Infrastructure, One Layer<br />
              at a Time
            </h1>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 lg:py-32 bg-[#f1f0ee]">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="scroll-reveal">
              <div className="caption-label text-[#ff6600] mb-4">Our Story</div>
              <h2 className="section-title mb-6">From Observation to Action</h2>
              <div className="space-y-4 text-[#333] leading-relaxed">
                <p>
                  Founded by Hasibul Munim, HH Geotextile Solutions was born from a simple
                  observation: Bangladesh's booming infrastructure sector needed reliable,
                  cost-effective geotextile sourcing — but contractors were paying inflated
                  prices through multiple middlemen.
                </p>
                <p>
                  We bridge the gap between global manufacturers and local contractors,
                  delivering factory-direct pricing with technical expertise that ensures
                  the right product for every application.
                </p>
                <p>
                  From RHD highway projects to BWDB riverbank protection, our team
                  understands the technical specifications that ensure project success.
                  We don't just sell geotextile — we engineer solutions.
                </p>
              </div>

              <div className="mt-8 p-6 border-l-2 border-[#ff6600] bg-white">
                <h3 className="text-lg font-medium text-black mb-2">Our Mission</h3>
                <p className="text-sm text-[#333] leading-relaxed">
                  To become Bangladesh's most trusted geotextile solutions partner by
                  combining global sourcing capability with deep local market knowledge
                  and uncompromising technical integrity.
                </p>
              </div>
            </div>

            <div className="scroll-reveal">
              <img
                src="/images/founder.jpg"
                alt="Hasibul Munim - Founder"
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 lg:py-32 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <div className="text-center mb-16 scroll-reveal">
            <div className="caption-label text-[#ff6600] mb-4">What We Stand For</div>
            <h2 className="section-title">Our Values</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon
              return (
                <div
                  key={index}
                  className="scroll-reveal text-center p-8 border border-black/10 hover:border-[#ff6600]/30 transition-colors duration-300"
                  style={{ transitionDelay: `${index * 0.1}s` }}
                >
                  <div className="w-14 h-14 mx-auto flex items-center justify-center border border-[#ff6600] mb-6">
                    <Icon size={28} className="text-[#ff6600]" />
                  </div>
                  <h3 className="text-lg font-medium text-black mb-3">
                    {value.title}
                  </h3>
                  <p className="text-sm text-[#333] leading-relaxed">
                    {value.description}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Founder Profile */}
      <section className="py-20 lg:py-32 bg-[#0f2e4a] text-white">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            <div className="lg:col-span-4 scroll-reveal">
              <img
                src="/images/founder.jpg"
                alt="Hasibul Munim"
                className="w-full max-w-sm mx-auto"
              />
            </div>
            <div className="lg:col-span-8 scroll-reveal">
              <div className="caption-label text-[#ff6600] mb-4">Founder</div>
              <h2 className="section-title text-white mb-2">Hasibul Munim</h2>
              <p className="text-lg text-white/60 mb-6">
                Founder & Geotextile Solutions Specialist
              </p>
              <div className="space-y-4 text-white/70 leading-relaxed max-w-2xl">
                <p>
                  With deep expertise in geotechnical materials and extensive connections
                  across Chinese and Indian manufacturing hubs, I specialize in matching
                  Bangladesh's infrastructure needs with the right global suppliers.
                </p>
                <p>
                  From RHD highway projects to BWDB riverbank protection, I understand
                  the technical specifications that ensure project success. Every
                  recommendation I make is backed by engineering data and real-world
                  project experience.
                </p>
              </div>

              <div className="mt-8 flex flex-wrap gap-6">
                <div className="flex items-center gap-3">
                  <Mail size={18} className="text-[#ff6600]" />
                  <span className="text-sm text-white/70">munimm247@gmail.com</span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone size={18} className="text-[#ff6600]" />
                  <span className="text-sm text-white/70">+880 1941 646 278</span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin size={18} className="text-[#ff6600]" />
                  <span className="text-sm text-white/70">Dhaka, Bangladesh</span>
                </div>
              </div>

              <div className="mt-8">
                <a
                  href="https://wa.me/+8801941646278"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary"
                >
                  Connect on WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-20 lg:py-32 bg-[#f1f0ee]">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <div className="text-center mb-16 scroll-reveal">
            <div className="caption-label text-[#ff6600] mb-4">Trust & Compliance</div>
            <h2 className="section-title">Certifications & Partnerships</h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { code: 'ISO 9001', label: 'Supplier Certification' },
              { code: 'RHD', label: 'Approved Supplier' },
              { code: 'BSTI', label: 'Quality Standards' },
              { code: 'BUET', label: 'Lab Testing Partner' },
            ].map((cert, index) => (
              <div
                key={index}
                className="scroll-reveal text-center p-8 border border-black/10 hover:border-[#ff6600]/50 transition-all duration-300 group"
                style={{ transitionDelay: `${index * 0.1}s` }}
              >
                <div className="text-2xl md:text-3xl font-light text-black group-hover:text-[#ff6600] transition-colors duration-300 mb-2">
                  {cert.code}
                </div>
                <div className="text-xs uppercase tracking-wider text-[#888]">
                  {cert.label}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center scroll-reveal">
            <Link to="/contact" className="btn-outline">
              Become a Partner
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
