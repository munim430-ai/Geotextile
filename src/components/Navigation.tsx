import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { Menu, X } from 'lucide-react'
import LanguageSwitcher from './LanguageSwitcher'

const getNavLinks = (t: any) => [
  { label: t('nav.home'), path: '/' },
  { label: t('nav.solutions'), path: '/products' },
  { label: t('nav.about'), path: '/about' },
  { label: t('nav.contact'), path: '/contact' },
]

export default function Navigation() {
  const { t } = useTranslation()
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 80)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => { setMenuOpen(false) }, [location.pathname])
  const navLinks = getNavLinks(t)

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'bg-[#f1f0ee]/95 backdrop-blur-md border-b border-black/5' : 'bg-transparent'
      }`} style={{ mixBlendMode: scrolled ? 'normal' : 'difference' }}>
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <div className="flex items-center justify-between h-20">
            <Link to="/" className="flex items-center gap-3">
              <div className="w-8 h-8">
                <svg viewBox="0 0 64 64" fill="none" className="w-full h-full">
                  <path d="M8 20L32 8L56 20V44L32 56L8 44V20Z" stroke={scrolled ? '#000' : '#fff'} strokeWidth="2.5" fill="none" />
                  <path d="M8 20L32 32L56 20" stroke={scrolled ? '#000' : '#fff'} strokeWidth="2" fill="none" />
                  <path d="M32 32V56" stroke="#ff6600" strokeWidth="2.5" />
                  <path d="M20 26L32 32L44 26" stroke="#ff6600" strokeWidth="1.5" opacity="0.6" />
                </svg>
              </div>
              <span className={`text-sm font-medium tracking-[0.15em] uppercase ${scrolled ? 'text-black' : 'text-white'}`}>HH Geotextile</span>
            </Link>
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link key={link.path} to={link.path}
                  className={`text-sm font-medium tracking-wide uppercase transition-colors ${
                    scrolled ? (location.pathname === link.path ? 'text-[#ff6600]' : 'text-black hover:text-[#ff6600]')
                             : (location.pathname === link.path ? 'text-[#ff6600]' : 'text-white hover:text-[#ff6600]')
                  }`}>{link.label}</Link>
              ))}
              <Link to="/contact" className="btn-primary text-xs py-3 px-6">{t('hero.quote')}</Link>
              <LanguageSwitcher />
            </div>
            <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
              {menuOpen ? <X className={scrolled ? 'text-black' : 'text-white'} size={24} />
                        : <Menu className={scrolled ? 'text-black' : 'text-white'} size={24} />}
            </button>
          </div>
        </div>
      </nav>
      <div className={`fixed inset-0 z-40 bg-[#0f2e4a] transition-transform duration-500 md:hidden ${menuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="flex flex-col items-center justify-center h-full gap-8">
          {navLinks.map((link) => (
            <Link key={link.path} to={link.path} className="text-2xl font-light text-white hover:text-[#ff6600] transition-colors"
              onClick={() => setMenuOpen(false)}>{link.label}</Link>
          ))}
          <Link to="/contact" className="btn-primary mt-4" onClick={() => setMenuOpen(false)}>{t('hero.quote')}</Link>
          <div className="mt-4"><LanguageSwitcher /></div>
        </div>
      </div>
    </>
  )
}
