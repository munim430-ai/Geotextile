import { useTranslation } from 'react-i18next'

export default function LanguageSwitcher() {
  const { i18n } = useTranslation()

  const toggleLang = () => {
    i18n.changeLanguage(i18n.language === 'ko' ? 'en' : 'ko')
  }

  return (
    <button onClick={toggleLang}
      className="flex items-center gap-1 text-xs font-medium uppercase tracking-wider px-3 py-1.5 border border-current rounded-full hover:bg-[#ff6600] hover:border-[#ff6600] hover:text-white transition-all duration-300">
      <span className={i18n.language === 'ko' ? 'opacity-100' : 'opacity-50'}>KO</span>
      <span className="text-[10px]">/</span>
      <span className={i18n.language === 'en' ? 'opacity-100' : 'opacity-50'}>EN</span>
    </button>
  )
}
