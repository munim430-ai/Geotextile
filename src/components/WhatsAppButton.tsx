import { useTranslation } from 'react-i18next'
import { MessageCircle } from 'lucide-react'

export default function WhatsAppButton() {
  const { i18n } = useTranslation()
  const message = i18n.language === 'ko'
    ? encodeURIComponent("안녕하세요, 지오텍스타일 관련 문의드립니다.")
    : encodeURIComponent("Hi, I'm interested in geotextile for my project. Can we discuss?")

  return (
    <a href={`https://wa.me/+8201072091620?text=${message}`} target="_blank" rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-[#25D366] rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-300"
      aria-label="Chat on WhatsApp">
      <MessageCircle size={28} color="white" fill="white" />
    </a>
  )
}
