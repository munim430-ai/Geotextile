import { useState, useEffect } from 'react'
import { Mail, Phone, MapPin, Clock, MessageCircle, Send } from 'lucide-react'
import { useScrollReveal } from '../hooks/useScrollReveal'

const projectTypes = [
  'Road/Highway',
  'Riverbank',
  'Landfill',
  'Agriculture',
  'Other',
]

const productInterests = [
  'Non-Woven',
  'Woven',
  'Geo-Bags',
  'Geocells',
  'Geomembrane',
  'Natural Fiber',
  'Not Sure',
]

const timelines = [
  'Immediate',
  '1-3 months',
  '3-6 months',
  '6+ months',
]

export default function Contact() {
  const [formData, setFormData] = useState({
    fullName: '',
    companyName: '',
    email: '',
    phone: '',
    projectType: '',
    productInterest: '',
    estimatedQuantity: '',
    requiredGsm: '',
    timeline: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  useScrollReveal()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    // In production, this would send the form data to a server
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  return (
    <main>
      {/* Hero */}
      <section className="pt-32 pb-20 bg-[#0f2e4a] text-white">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <div className="scroll-reveal">
            <div className="caption-label text-[#ff6600] mb-4">Contact</div>
            <h1 className="hero-display text-white mb-6">
              Let's Discuss<br />Your Project
            </h1>
            <p className="text-lg text-white/60 max-w-xl">
              Free technical consultation and pricing within 24 hours.
              Reach us via WhatsApp, email, or the form below.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 lg:py-32 bg-[#f1f0ee]">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            {/* Left - Contact Info */}
            <div className="lg:col-span-4">
              <div className="scroll-reveal space-y-8">
                <div>
                  <h2 className="text-2xl font-light text-black mb-2">
                    Hasibul Munim
                  </h2>
                  <p className="text-sm text-[#888]">
                    Founder & Geotextile Solutions Specialist
                  </p>
                </div>

                <div className="space-y-5">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 flex items-center justify-center border border-[#ff6600]">
                      <Mail size={18} className="text-[#ff6600]" />
                    </div>
                    <div>
                      <div className="text-xs uppercase tracking-wider text-[#888] mb-1">Email</div>
                      <a href="mailto:munimm247@gmail.com" className="text-sm text-black hover:text-[#ff6600] transition-colors">
                        munimm247@gmail.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 flex items-center justify-center border border-[#ff6600]">
                      <Phone size={18} className="text-[#ff6600]" />
                    </div>
                    <div>
                      <div className="text-xs uppercase tracking-wider text-[#888] mb-1">Phone / WhatsApp</div>
                      <a href="https://wa.me/+8801941646278" target="_blank" rel="noopener noreferrer" className="text-sm text-black hover:text-[#ff6600] transition-colors">
                        +880 1941 646 278
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 flex items-center justify-center border border-[#ff6600]">
                      <MessageCircle size={18} className="text-[#ff6600]" />
                    </div>
                    <div>
                      <div className="text-xs uppercase tracking-wider text-[#888] mb-1">WeChat</div>
                      <span className="text-sm text-black">hasibul_munim</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 flex items-center justify-center border border-[#ff6600]">
                      <MapPin size={18} className="text-[#ff6600]" />
                    </div>
                    <div>
                      <div className="text-xs uppercase tracking-wider text-[#888] mb-1">Office</div>
                      <span className="text-sm text-black">Dhaka, Bangladesh</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 flex items-center justify-center border border-[#ff6600]">
                      <Clock size={18} className="text-[#ff6600]" />
                    </div>
                    <div>
                      <div className="text-xs uppercase tracking-wider text-[#888] mb-1">Business Hours</div>
                      <span className="text-sm text-black">Sat - Thu, 9:00 AM - 6:00 PM (BST)</span>
                    </div>
                  </div>
                </div>

                {/* WeChat QR */}
                <div className="p-4 border border-black/10 bg-white">
                  <div className="text-xs uppercase tracking-wider text-[#888] mb-3">WeChat QR Code</div>
                  <div className="w-32 h-32 bg-[#f1f0ee] flex items-center justify-center">
                    <svg viewBox="0 0 100 100" className="w-24 h-24">
                      <rect x="10" y="10" width="80" height="80" fill="none" stroke="#000" strokeWidth="2" />
                      <rect x="20" y="20" width="25" height="25" fill="#0f2e4a" />
                      <rect x="55" y="20" width="25" height="25" fill="#0f2e4a" />
                      <rect x="20" y="55" width="25" height="25" fill="#0f2e4a" />
                      <rect x="55" y="55" width="10" height="10" fill="#ff6600" />
                      <rect x="70" y="55" width="10" height="10" fill="#ff6600" />
                      <rect x="55" y="70" width="10" height="10" fill="#ff6600" />
                      <text x="50" y="95" textAnchor="middle" fill="#888" fontSize="8">WeChat</text>
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            {/* Right - Contact Form */}
            <div className="lg:col-span-8">
              <div className="scroll-reveal bg-white border border-black/10 p-8 lg:p-12">
                {submitted ? (
                  <div className="text-center py-16">
                    <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center border-2 border-[#ff6600]">
                      <Send size={28} className="text-[#ff6600]" />
                    </div>
                    <h3 className="text-2xl font-light text-black mb-4">
                      Thank You!
                    </h3>
                    <p className="text-[#333] mb-6">
                      Your inquiry has been received. We'll get back to you within 24 hours.
                    </p>
                    <a
                      href="https://wa.me/+8801941646278"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-primary"
                    >
                      Chat on WhatsApp
                    </a>
                  </div>
                ) : (
                  <>
                    <h3 className="text-xl font-medium text-black mb-2">
                      Request a Free Quote
                    </h3>
                    <p className="text-sm text-[#888] mb-8">
                      Fill in the details below and we'll respond within 24 hours.
                    </p>

                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-xs uppercase tracking-wider text-[#888] mb-2">
                            Full Name <span className="text-[#ff6600]">*</span>
                          </label>
                          <input
                            type="text"
                            name="fullName"
                            required
                            value={formData.fullName}
                            onChange={handleChange}
                            className="w-full px-4 py-3 border border-black/10 focus:border-[#ff6600] outline-none text-sm transition-colors"
                          />
                        </div>
                        <div>
                          <label className="block text-xs uppercase tracking-wider text-[#888] mb-2">
                            Company Name <span className="text-[#ff6600]">*</span>
                          </label>
                          <input
                            type="text"
                            name="companyName"
                            required
                            value={formData.companyName}
                            onChange={handleChange}
                            className="w-full px-4 py-3 border border-black/10 focus:border-[#ff6600] outline-none text-sm transition-colors"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-xs uppercase tracking-wider text-[#888] mb-2">
                            Email Address <span className="text-[#ff6600]">*</span>
                          </label>
                          <input
                            type="email"
                            name="email"
                            required
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full px-4 py-3 border border-black/10 focus:border-[#ff6600] outline-none text-sm transition-colors"
                          />
                        </div>
                        <div>
                          <label className="block text-xs uppercase tracking-wider text-[#888] mb-2">
                            Phone / WhatsApp <span className="text-[#ff6600]">*</span>
                          </label>
                          <input
                            type="tel"
                            name="phone"
                            required
                            value={formData.phone}
                            onChange={handleChange}
                            className="w-full px-4 py-3 border border-black/10 focus:border-[#ff6600] outline-none text-sm transition-colors"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-xs uppercase tracking-wider text-[#888] mb-2">
                            Project Type
                          </label>
                          <select
                            name="projectType"
                            value={formData.projectType}
                            onChange={handleChange}
                            className="w-full px-4 py-3 border border-black/10 focus:border-[#ff6600] outline-none text-sm transition-colors bg-white"
                          >
                            <option value="">Select project type</option>
                            {projectTypes.map((type) => (
                              <option key={type} value={type}>
                                {type}
                              </option>
                            ))}
                          </select>
                        </div>
                        <div>
                          <label className="block text-xs uppercase tracking-wider text-[#888] mb-2">
                            Product Interest
                          </label>
                          <select
                            name="productInterest"
                            value={formData.productInterest}
                            onChange={handleChange}
                            className="w-full px-4 py-3 border border-black/10 focus:border-[#ff6600] outline-none text-sm transition-colors bg-white"
                          >
                            <option value="">Select product</option>
                            {productInterests.map((product) => (
                              <option key={product} value={product}>
                                {product}
                              </option>
                            ))}
                          </select>
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div>
                          <label className="block text-xs uppercase tracking-wider text-[#888] mb-2">
                            Estimated Quantity
                          </label>
                          <input
                            type="text"
                            name="estimatedQuantity"
                            placeholder="e.g., 5000 SQM"
                            value={formData.estimatedQuantity}
                            onChange={handleChange}
                            className="w-full px-4 py-3 border border-black/10 focus:border-[#ff6600] outline-none text-sm transition-colors"
                          />
                        </div>
                        <div>
                          <label className="block text-xs uppercase tracking-wider text-[#888] mb-2">
                            Required GSM
                          </label>
                          <input
                            type="text"
                            name="requiredGsm"
                            placeholder="e.g., 250 or Need guidance"
                            value={formData.requiredGsm}
                            onChange={handleChange}
                            className="w-full px-4 py-3 border border-black/10 focus:border-[#ff6600] outline-none text-sm transition-colors"
                          />
                        </div>
                        <div>
                          <label className="block text-xs uppercase tracking-wider text-[#888] mb-2">
                            Project Timeline
                          </label>
                          <select
                            name="timeline"
                            value={formData.timeline}
                            onChange={handleChange}
                            className="w-full px-4 py-3 border border-black/10 focus:border-[#ff6600] outline-none text-sm transition-colors bg-white"
                          >
                            <option value="">Select timeline</option>
                            {timelines.map((t) => (
                              <option key={t} value={t}>
                                {t}
                              </option>
                            ))}
                          </select>
                        </div>
                      </div>

                      <div>
                        <label className="block text-xs uppercase tracking-wider text-[#888] mb-2">
                          Message / Requirements
                        </label>
                        <textarea
                          name="message"
                          rows={5}
                          placeholder="Tell us about your project..."
                          value={formData.message}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-black/10 focus:border-[#ff6600] outline-none text-sm transition-colors resize-none"
                        />
                      </div>

                      <button type="submit" className="btn-primary w-full md:w-auto">
                        Get My Free Quote
                      </button>
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
