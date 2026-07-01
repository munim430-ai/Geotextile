import { Link } from 'react-router-dom'

export default function CTABanner() {
  return (
    <section
      className="relative py-24 lg:py-32 overflow-hidden"
      style={{
        backgroundImage: 'url(/images/highway.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/70" />

      <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-10 text-center">
        <div className="scroll-reveal">
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-light text-white mb-6">
            Ready to source geotextile<br className="hidden md:block" /> for your next project?
          </h2>
          <p className="text-lg text-white/60 max-w-xl mx-auto mb-10">
            Get a free technical consultation and pricing within 24 hours.
            Direct factory pricing from China and India.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="https://wa.me/+8801941646278?text=Hi%20Hasibul,%20I'm%20interested%20in%20geotextile%20for%20my%20project.%20Can%20we%20discuss?"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              Contact Hasibul Now
            </a>
            <Link to="/contact" className="btn-outline border-white text-white hover:bg-white hover:text-black">
              Send an Inquiry
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
