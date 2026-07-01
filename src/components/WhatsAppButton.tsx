import { MessageCircle } from 'lucide-react'

export default function WhatsAppButton() {
  const whatsappNumber = '+8801941646278'
  const message = encodeURIComponent(
    "Hi Hasibul, I'm interested in geotextile for my project. Can we discuss?"
  )

  return (
    <a
      href={`https://wa.me/${whatsappNumber}?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-[#25D366] rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-300"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle size={28} color="white" fill="white" />
    </a>
  )
}
