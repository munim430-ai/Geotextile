import { DollarSign, Award, Building2, ShieldCheck, Clock, HeadphonesIcon } from 'lucide-react'

const reasons = [
  {
    icon: DollarSign,
    title: 'Factory-Direct Pricing',
    description: 'No distributor markup. We source directly from manufacturers in China and India.',
  },
  {
    icon: Award,
    title: 'Technical Expertise',
    description: 'We understand GSM, tensile strength, UV resistance, and permeability requirements.',
  },
  {
    icon: Building2,
    title: 'Government Experience',
    description: 'RHD, LGED, BWDB tender compliance knowledge and project execution.',
  },
  {
    icon: ShieldCheck,
    title: 'Quality Assurance',
    description: 'ISO-certified products with lab test reports from BSTI and BUET.',
  },
  {
    icon: Clock,
    title: 'Fast Delivery',
    description: '15-30 days from order to Bangladesh port. Reliable logistics coordination.',
  },
  {
    icon: HeadphonesIcon,
    title: 'After-Sales Support',
    description: 'Installation guidance and technical backup throughout your project.',
  },
]

export default function WhyChooseUs() {
  return (
    <section className="py-20 lg:py-32 bg-white">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
        <div className="text-center mb-16 scroll-reveal">
          <div className="caption-label text-[#ff6600] mb-4">Why HH Geotextile</div>
          <h2 className="section-title mb-4">The Partner You Can Trust</h2>
          <p className="text-lg text-[#333] max-w-2xl mx-auto">
            We combine global sourcing capability with deep local market knowledge
            and uncompromising technical integrity.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-black/10">
          {reasons.map((reason, index) => {
            const Icon = reason.icon
            return (
              <div
                key={index}
                className="scroll-reveal bg-white p-8 lg:p-10 group hover:bg-[#0f2e4a] transition-colors duration-500"
                style={{ transitionDelay: `${index * 0.1}s` }}
              >
                <div className="w-12 h-12 flex items-center justify-center border border-[#ff6600] mb-6 group-hover:bg-[#ff6600] transition-colors duration-500">
                  <Icon size={24} className="text-[#ff6600] group-hover:text-white transition-colors duration-500" />
                </div>
                <h3 className="text-lg font-medium text-black group-hover:text-white mb-3 transition-colors duration-500">
                  {reason.title}
                </h3>
                <p className="text-sm text-[#333] group-hover:text-white/70 leading-relaxed transition-colors duration-500">
                  {reason.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
