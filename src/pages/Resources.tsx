import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { ChevronDown, FileText, BookOpen, Download } from 'lucide-react'
import { useScrollReveal } from '../hooks/useScrollReveal'

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="border border-black/10 overflow-hidden">
      <button onClick={() => setOpen(!open)} className="w-full flex items-center justify-between p-6 text-left hover:bg-white/50 transition-colors">
        <span className="text-sm font-medium text-black pr-4">{question}</span>
        <ChevronDown size={20} className={`text-[#ff6600] flex-shrink-0 transition-transform duration-300 ${open ? 'rotate-180' : ''}`} />
      </button>
      <div className={`overflow-hidden transition-all duration-300 ${open ? 'max-h-60' : 'max-h-0'}`}>
        <div className="px-6 pb-6 text-sm text-[#333] leading-relaxed">{answer}</div>
      </div>
    </div>
  )
}

export default function Resources() {
  const { t } = useTranslation()
  useScrollReveal()

  useEffect(() => { window.scrollTo(0, 0) }, [])

  const resourceCards = [
    { icon: FileText, title: t('resourcesPage.guideTitle'), description: t('resourcesPage.guideDesc'), tag: 'PDF Guide' },
    { icon: BookOpen, title: t('resourcesPage.specTitle'), description: t('resourcesPage.specDesc'), tag: 'Reference' },
    { icon: Download, title: t('resourcesPage.costTitle'), description: t('resourcesPage.costDesc'), tag: 'Report' },
    { icon: FileText, title: t('resourcesPage.installTitle'), description: t('resourcesPage.installDesc'), tag: 'Manual' },
  ]

  const articles = [
    { title: t('resourcesPage.article1Title'), excerpt: t('resourcesPage.article1Desc'), readTime: '5 min read' },
    { title: t('resourcesPage.article2Title'), excerpt: t('resourcesPage.article2Desc'), readTime: '7 min read' },
    { title: t('resourcesPage.article3Title'), excerpt: t('resourcesPage.article3Desc'), readTime: '4 min read' },
    { title: t('resourcesPage.article4Title'), excerpt: t('resourcesPage.article4Desc'), readTime: '6 min read' },
  ]

  const faqs = [
    { question: t('resourcesPage.faq1Q'), answer: t('resourcesPage.faq1A') },
    { question: t('resourcesPage.faq2Q'), answer: t('resourcesPage.faq2A') },
    { question: t('resourcesPage.faq3Q'), answer: t('resourcesPage.faq3A') },
    { question: t('resourcesPage.faq4Q'), answer: t('resourcesPage.faq4A') },
    { question: t('resourcesPage.faq5Q'), answer: t('resourcesPage.faq5A') },
    { question: t('resourcesPage.faq6Q'), answer: t('resourcesPage.faq6A') },
    { question: t('resourcesPage.faq7Q'), answer: t('resourcesPage.faq7A') },
    { question: t('resourcesPage.faq8Q'), answer: t('resourcesPage.faq8A') },
  ]

  return (
    <main>
      <section className="pt-32 pb-20 bg-[#0f2e4a] text-white">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <div className="scroll-reveal">
            <div className="caption-label text-[#ff6600] mb-4">{t('resourcesPage.heroCaption')}</div>
            <h1 className="hero-display text-white mb-6">{t('resourcesPage.heroTitle1')}<br />{t('resourcesPage.heroTitle2')}</h1>
            <p className="text-lg text-white/60 max-w-xl">{t('resourcesPage.heroDesc')}</p>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-32 bg-[#f1f0ee]">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <div className="mb-16 scroll-reveal">
            <div className="caption-label text-[#ff6600] mb-4">{t('resourcesPage.downloadsCaption')}</div>
            <h2 className="section-title">{t('resourcesPage.downloadsTitle')}</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {resourceCards.map((resource, index) => {
              const Icon = resource.icon
              return (
                <div key={index} className="scroll-reveal flex items-start gap-5 p-6 bg-white border border-black/10 hover:border-[#ff6600]/30 transition-all duration-300 group cursor-pointer" style={{ transitionDelay: `${index * 0.1}s` }}>
                  <div className="w-12 h-12 flex-shrink-0 flex items-center justify-center border border-[#ff6600] group-hover:bg-[#ff6600] transition-colors duration-300">
                    <Icon size={20} className="text-[#ff6600] group-hover:text-white transition-colors duration-300" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-base font-medium text-black">{resource.title}</h3>
                      <span className="text-xs text-[#888] border border-black/10 px-2 py-0.5">{resource.tag}</span>
                    </div>
                    <p className="text-sm text-[#333] mb-3">{resource.description}</p>
                    <button className="text-xs font-medium text-[#ff6600] uppercase tracking-wider hover:underline">Download PDF</button>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-32 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <div className="mb-16 scroll-reveal">
            <div className="caption-label text-[#ff6600] mb-4">{t('resourcesPage.blogCaption')}</div>
            <h2 className="section-title">{t('resourcesPage.blogTitle')}</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {articles.map((article, index) => (
              <article key={index} className="scroll-reveal border border-black/10 p-8 hover:border-[#ff6600]/30 transition-all duration-300 group cursor-pointer" style={{ transitionDelay: `${index * 0.1}s` }}>
                <div className="caption-label text-[#888] mb-4">{article.readTime}</div>
                <h3 className="text-lg font-medium text-black mb-3 group-hover:text-[#ff6600] transition-colors duration-300">{article.title}</h3>
                <p className="text-sm text-[#333] leading-relaxed">{article.excerpt}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-32 bg-[#f1f0ee]">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <div className="mb-16 scroll-reveal">
            <div className="caption-label text-[#ff6600] mb-4">{t('resourcesPage.faqCaption')}</div>
            <h2 className="section-title">{t('resourcesPage.faqTitle')}</h2>
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

      <section className="py-20 bg-[#0f2e4a] text-white">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10 text-center scroll-reveal">
          <h2 className="text-3xl font-light mb-6">{t('resourcesPage.faqCtaTitle')}</h2>
          <p className="text-white/60 mb-8 max-w-lg mx-auto">{t('resourcesPage.faqCtaDesc')}</p>
          <Link to="/contact" className="btn-primary">{t('resourcesPage.faqCtaButton')}</Link>
        </div>
      </section>
    </main>
  )
}
