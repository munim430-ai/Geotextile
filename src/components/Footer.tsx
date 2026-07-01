import { Link } from 'react-router-dom'
import { Mail, Phone, MapPin } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-black text-white">
      {/* CTA Banner */}
      <div className="border-b border-white/10">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10 py-20 lg:py-32">
          <h2 className="text-5xl md:text-7xl lg:text-8xl font-light leading-none tracking-tight mb-8">
            Let's Talk
          </h2>
          <p className="text-lg md:text-xl text-white/60 max-w-xl mb-10">
            Ready to source geotextile for your next project? Get a free technical consultation
            and pricing within 24 hours.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="https://wa.me/+8801941646278"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              Contact on WhatsApp
            </a>
            <Link to="/contact" className="btn-outline border-white text-white hover:bg-white hover:text-black">
              Send an Inquiry
            </Link>
          </div>
        </div>
      </div>

      {/* Links Grid */}
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Solutions */}
          <div>
            <h3 className="caption-label text-white/40 mb-6">Solutions</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/products" className="text-white/70 hover:text-[#ff6600] transition-colors text-sm">
                  Non-Woven Geotextiles
                </Link>
              </li>
              <li>
                <Link to="/products" className="text-white/70 hover:text-[#ff6600] transition-colors text-sm">
                  Woven Geotextiles
                </Link>
              </li>
              <li>
                <Link to="/products" className="text-white/70 hover:text-[#ff6600] transition-colors text-sm">
                  Geo-Bags
                </Link>
              </li>
              <li>
                <Link to="/products" className="text-white/70 hover:text-[#ff6600] transition-colors text-sm">
                  Geocells & Geomembranes
                </Link>
              </li>
              <li>
                <Link to="/products" className="text-white/70 hover:text-[#ff6600] transition-colors text-sm">
                  Natural Fiber Geotextiles
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="caption-label text-white/40 mb-6">Company</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/about" className="text-white/70 hover:text-[#ff6600] transition-colors text-sm">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/projects" className="text-white/70 hover:text-[#ff6600] transition-colors text-sm">
                  Projects
                </Link>
              </li>
              <li>
                <Link to="/resources" className="text-white/70 hover:text-[#ff6600] transition-colors text-sm">
                  Resources
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-white/70 hover:text-[#ff6600] transition-colors text-sm">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="caption-label text-white/40 mb-6">Resources</h3>
            <ul className="space-y-3">
              <li>
                <span className="text-white/70 text-sm cursor-default">Technical Data Sheets</span>
              </li>
              <li>
                <span className="text-white/70 text-sm cursor-default">Installation Guides</span>
              </li>
              <li>
                <span className="text-white/70 text-sm cursor-default">RHD Specifications</span>
              </li>
              <li>
                <span className="text-white/70 text-sm cursor-default">FAQs</span>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="caption-label text-white/40 mb-6">Contact</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Mail size={16} className="text-[#ff6600] mt-0.5" />
                <div>
                  <p className="text-white/70 text-sm">munimm247@gmail.com</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Phone size={16} className="text-[#ff6600] mt-0.5" />
                <div>
                  <p className="text-white/70 text-sm">+880 1941 646 278</p>
                  <p className="text-white/40 text-xs mt-1">WhatsApp Available</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <MapPin size={16} className="text-[#ff6600] mt-0.5" />
                <div>
                  <p className="text-white/70 text-sm">Dhaka, Bangladesh</p>
                  <p className="text-white/40 text-xs mt-1">Sat – Thu, 9AM – 6PM</p>
                </div>
              </div>
            </div>

            {/* WeChat QR */}
            <div className="mt-6 p-4 bg-white/5 rounded">
              <p className="text-white/40 text-xs mb-2">WeChat: hasibul_munim</p>
              <div className="w-20 h-20 bg-white/10 flex items-center justify-center rounded overflow-hidden">
                <img src="/images/wechat-qr.png" alt="WeChat QR Code" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-white/10">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10 py-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/40 text-xs">
            &copy; {new Date().getFullYear()} HH Geotextile Solutions. All rights reserved.
          </p>
          <div className="flex gap-6">
            <span className="text-white/40 text-xs cursor-default">Privacy Policy</span>
            <span className="text-white/40 text-xs cursor-default">Terms of Service</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
