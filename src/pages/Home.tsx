import { useEffect } from 'react'
import Hero from '../sections/Hero'
import Challenge from '../sections/Challenge'
import Solutions from '../sections/Solutions'
import WhyChooseUs from '../sections/WhyChooseUs'
import ResourcesImpact from '../sections/ResourcesImpact'
import CTABanner from '../sections/CTABanner'
import { useScrollReveal } from '../hooks/useScrollReveal'

export default function Home() {
  useScrollReveal()
  useEffect(() => { window.scrollTo(0, 0) }, [])
  return (
    <main>
      <Hero />
      <Challenge />
      <Solutions />
      <WhyChooseUs />
      <ResourcesImpact />
      <CTABanner />
    </main>
  )
}
