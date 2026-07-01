import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ChevronDown, FileText, BookOpen, Download } from 'lucide-react'
import { useScrollReveal } from '../hooks/useScrollReveal'

const resourceCards = [
  {
    icon: FileText,
    title: 'Geotextile Selection Guide',
    description: 'How to choose the right GSM for roads, riverbanks, and drainage',
    tag: 'PDF Guide',
  },
  {
    icon: BookOpen,
    title: 'RHD Standard Specifications',
    description: 'Complete guide to RHD tender compliance for geotextile materials',
    tag: 'Reference',
  },
  {
    icon: Download,
    title: 'Cost Comparison Guide',
    description: 'When to buy local, when to import \u2014 a data-driven analysis',
    tag: 'Report',
  },
  {
    icon: FileText,
    title: 'Installation Best Practices',
    description: 'Proper handling, storage, and installation of geotextile on site',
    tag: 'Manual',
  },
]

const articles = [
  {
    title: 'Why 250 GSM is the Sweet Spot for Bangladesh Highway Projects',
    excerpt: 'An in-depth analysis of why 250 GSM non-woven geotextile offers the optimal balance of cost and performance for Bangladesh road conditions.',
    readTime: '5 min read',
  },
  {
    title: 'China vs India: Where to Source Your Geotextile in 2026',
    excerpt: 'Comparing pricing, quality, logistics, and trade advantages between Chinese and Indian geotextile manufacturers.',
    readTime: '7 min read',
  },
  {
    title: 'Understanding Tensile Strength, Elongation, and Permeability',
    excerpt: 'A technical primer on the three key properties that determine geotextile performance in the field.',
    readTime: '4 min read',
  },
  {
    title: 'How to Read a Geotextile Technical Data Sheet',
    excerpt: 'Decode the numbers and specifications that manufacturers provide to make informed purchasing decisions.',
    readTime: '6 min read',
  },
]

const faqs = [
  {
    question: 'What is the difference between woven and non-woven geotextile?',
    answer: 'Non-woven geotextiles are needle-punched fabrics used for filtration, drainage, and separation. They have high permeability. Woven geotextiles are made by weaving fibers together, providing high tensile strength for reinforcement and stabilization applications.',
  },
  {
    question: 'Which GSM do I need for my road project?',
    answer: 'For light-duty roads and drainage, 150-200 GSM is typical. Highway stabilization typically requires 250 GSM. Heavy-duty roads and railway embankments need 300-400 GSM. We provide free consultation to help you choose.',
  },
  {
    question: 'How long does delivery take from China?',
    answer: 'Standard delivery from China to Bangladesh port takes 15-30 days depending on the port of origin (Qingdao, Shanghai, Ningbo) and shipping schedule. We coordinate logistics door-to-door.',
  },
  {
    question: 'Do you provide samples for testing?',
    answer: 'Yes, we provide free sample rolls for testing before bulk order. Samples typically include a small roll (1-2m) with the product data sheet.',
  },
  {
    question: 'What is your minimum order quantity?',
    answer: 'Our MOQ is typically one 20ft container (approximately 5,000-8,000 SQM depending on GSM). For large projects, we can arrange partial shipments.',
  },
  {
    question: 'Can you help with RHD/LGED tender specifications?',
    answer: 'Absolutely. We have extensive experience with government tender compliance. We review tender documents, match specifications, and provide all required certification and test reports.',
  },
  {
    question: 'What is the import duty on geotextile from China?',
    answer: 'Import duties vary by product classification. Green initiative products may qualify for reduced or zero import tax under certain conditions. We provide current duty rates as part of our quotation.',
  },
  {
    question: 'Do you offer credit terms for large contractors?',
    answer: 'Credit terms are available for established contractors and government projects on a case-by-case basis. Contact us to discuss your requirements.',
  },
]

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false)

  return (
    <div className="border border-black/10 overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between p-6 text-left hover:bg-white/50 transition-colors"
      >
        <span className="text-sm font-medium text-black pr-4">{question}</span>
        <ChevronDown
          size={20}
          className={`text-[#ff6600] flex-shrink-0 transition-transform duration-300 ${
            open ? 'rotate-180' : ''
          }`}
        />
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${
          open ? 'max-h-60' : 'max-h-0'
        }`}
      >
        <div className="px-6 pb-6 text-sm text-[#333] leading-relaxed">
          {answer}
        </div>
      </div>
    </div>
  )
}

export default function Resources() {
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
            <div className="caption-label text-[#ff6600] mb-4">Resources</div>
            <h1 className="hero-display text-white mb-6">
              Knowledge That<br />Saves Projects
            </h1>
            <p className="text-lg text-white/60 max-w-xl">
              Free technical guides, specification sheets, and application notes
              for engineers and contractors.
            </p>
          </div>
        </div>
      </section>

      {/* Download Resources */}
      <section className="py-20 lg:py-32 bg-[#f1f0ee]">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <div className="mb-16 scroll-reveal">
            <div className="caption-label text-[#ff6600] mb-4">Downloads</div>
            <h2 className="section-title">Technical Resources</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {resourceCards.map((resource, index) => {
              const Icon = resource.icon
              return (
                <div
                  key={index}
                  className="scroll-reveal flex items-start gap-5 p-6 bg-white border border-black/10 hover:border-[#ff6600]/30 transition-all duration-300 group cursor-pointer"
                  style={{ transitionDelay: `${index * 0.1}s` }}
                >
                  <div className="w-12 h-12 flex-shrink-0 flex items-center justify-center border border-[#ff6600] group-hover:bg-[#ff6600] transition-colors duration-300">
                    <Icon size={20} className="text-[#ff6600] group-hover:text-white transition-colors duration-300" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-base font-medium text-black">
                        {resource.title}
                      </h3>
                      <span className="text-xs text-[#888] border border-black/10 px-2 py-0.5">
                        {resource.tag}
                      </span>
                    </div>
                    <p className="text-sm text-[#333] mb-3">{resource.description}</p>
                    <button className="text-xs font-medium text-[#ff6600] uppercase tracking-wider hover:underline">
                      Download PDF
                    </button>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Technical Articles */}
      <section className="py-20 lg:py-32 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <div className="mb-16 scroll-reveal">
            <div className="caption-label text-[#ff6600] mb-4">Blog</div>
            <h2 className="section-title">Technical Articles</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {articles.map((article, index) => (
              <article
                key={index}
                className="scroll-reveal border border-black/10 p-8 hover:border-[#ff6600]/30 transition-all duration-300 group cursor-pointer"
                style={{ transitionDelay: `${index * 0.1}s` }}
              >
                <div className="caption-label text-[#888] mb-4">{article.readTime}</div>
                <h3 className="text-lg font-medium text-black mb-3 group-hover:text-[#ff6600] transition-colors duration-300">
                  {article.title}
                </h3>
                <p className="text-sm text-[#333] leading-relaxed">
                  {article.excerpt}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 lg:py-32 bg-[#f1f0ee]">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <div className="mb-16 scroll-reveal">
            <div className="caption-label text-[#ff6600] mb-4">FAQ</div>
            <h2 className="section-title">Frequently Asked Questions</h2>
          </div>

          <div className="max-w-3xl space-y-3">
            {faqs.map((faq, index) => (
              <div key={index} className="scroll-reveal" style={{ transitionDelay: `${index * 0.05}s` }}>
                <FAQItem question={faq.question} answer={faq.answer} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#0f2e4a] text-white">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10 text-center scroll-reveal">
          <h2 className="text-3xl font-light mb-6">
            Still have questions?
          </h2>
          <p className="text-white/60 mb-8 max-w-lg mx-auto">
            Our technical team is ready to help. Reach out for personalized guidance.
          </p>
          <Link to="/contact" className="btn-primary">
            Contact Us
          </Link>
        </div>
      </section>
    </main>
  )
}
